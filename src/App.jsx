import {useState, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./NavBar";
import sharebnbApi from "./sharebnbApi";
import userContext from "./userContext";

import {jwtDecode} from "jwt-decode";

import SearchForm from "./SearchForm";
import PropertiesList from "./PropertiesList";

import "./App.css";

import FormTest from "./formTest";
import RoutesList from "./RouteList";
import HomePage from "./HomePage";

const AWS_BASE_URL = "https://sharebnb-rithm.s3.us-east-2.amazonaws.com";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App() {
  const [properties, setProperties] = useState({
    data: [],
    isLoading: true,
  });
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [currentUser, setCurrentUser] = useState({
    user: null,
    isLoading: true,
  });
  const [error, setError] = useState(null);
  const [booking, setBooking] = useState({
    destination: null,
    checkin_date: "2024-04-20",
    checkout_date: "2024-04-27",
  });

  console.log("properties: ", properties);

  useEffect(function fetchAllProperties() {
    async function fetchProperties() {
      const response = await sharebnbApi.getProperties();

      setProperties((prevProps) => ({
        ...prevProps,
        data: response,
        isLoading: false,
      }));
    }
    fetchProperties();
  }, []);

  useEffect(
    function getUserOnTokenChange() {
      console.log("token from useEffect: ", token);
      async function getUser() {
        try {
          sharebnbApi.token = token;

          const decodedToken = jwtDecode(token);
          const username = decodedToken.username;

          // use token to get username --> user data
          const user = await sharebnbApi.getUser(username);
          setCurrentUser((data) => ({
            ...data,
            user: user,
            isLoading: false,
          }));
        } catch (err) {
          setError(err);
        }
      }
      if (token !== "") {
        getUser();
      } else {
        setCurrentUser((data) => ({
          ...data,
          isLoading: false,
        }));
      }
    },
    [token]
  );

  async function newProperty(formData) {
    const property = await sharebnbApi.addProperty({
      title: formData.title,
      host_username: "andres",
      image: `${AWS_BASE_URL}/${formData.image}`,
      price_night: Number(formData.price_night),
      description: formData.description,
      address: formData.city,
    });

    console.log("property from App: ", property);

    setProperties((prevProps) => ({
      data: [
        ...prevProps.data,
        {
          title: property.property.title,
          host_username: property.property.host_username,
          image: property.property.image,
          price_night: property.property.price_night,
          description: property.property.description,
          address: property.property.address,
        },
      ],
      isLoading: false,
    }));
  }

  async function signup(formData) {
    console.log("formData from app", formData);
    const token = await sharebnbApi.register({
      username: formData.username,
      password: formData.password,
      firstName: formData.first_name,
      lastName: formData.last_name,
      email: formData.email,
    });
    console.log("token: ", token);
    setToken(token);
    localStorage.setItem("token", token);
  }

  async function login({username, password}) {
    //console.log("username from App-login: ", username, password);
    const token = await sharebnbApi.login({username, password});
    setToken(token);
    localStorage.setItem("token", token);
  }

  function logout() {
    localStorage.removeItem("token");
    setCurrentUser({user: null, isLoading: true});
    setToken("");
  }

  async function searchProperty(formData) {
    const properties = await sharebnbApi.getAvailableProperties({
      checkin_date: formData.checkin_date,
      checkout_date: formData.checkout_date,
    });

    setBooking((prevBooking) => ({
      ...prevBooking,
      destination: formData.destination,
      checkin_date: formData.checkin_date,
      checkout_date: formData.checkout_date,
    }));

    let filteredProperties = properties;
    // console.log("properties from search: ", filteredProperties);
    // console.log("formData from search: ", formData);

    if (formData.destination !== "") {
      filteredProperties = properties.filter(
        (property) =>
          property.address.toLowerCase() === formData.destination.toLowerCase()
      );
    } else {
      filteredProperties = properties;
    }

    console.log("filtered Properties: ", filteredProperties);

    setProperties((prevProps) => ({
      ...prevProps,
      data: filteredProperties,
      isLoading: false,
    }));
  }

  async function addBooking(bookingData) {
    // console.log("booking data: ", currentUser.user, bookingData);
    // const resp = await sharebnbApi.createBooking({
    //   guest_username: currentUser.user.username,
    //   property_id: Number(bookingData.id),
    //   checkin_date: new Date(bookingData.checkin_date),
    //   checkout_date: new Date(bookingData.checkout_date),
    //   date_booked: new Date(),
    //   price_night: 100,
    // });
    // console.log("new booking: ", resp);
  }

  //Upload an image to AWS
  async function uploadImage(fileData) {
    const formDataObj = new FormData();
    formDataObj.append("file", fileData);

    const res = await fetch("http://localhost:3000/properties/uploadImage", {
      method: "POST",
      body: formDataObj,
    });

    console.log("new booking from Appjs: ", res);
  }

  if (properties.isLoading) return <h1>Loading...</h1>;

  return (
    <userContext.Provider value={{properties, currentUser}}>
      <div className="App">
        <BrowserRouter>
          <NavBar logout={logout} />
          <RoutesList
            properties={properties}
            newProperty={newProperty}
            uploadImage={uploadImage}
            searchProperty={searchProperty}
            signup={signup}
            login={login}
            booking={booking}
            addBooking={addBooking}
          />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
