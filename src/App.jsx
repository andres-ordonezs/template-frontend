import {useState, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./NavBar";
import sharebnbApi from "./sharebnbApi";
import userContext from "./userContext";

import SearchForm from "./SearchForm";
import PropertiesList from "./PropertiesList";

import "./App.css";

import FormTest from "./formTest";
import RoutesList from "./RouteList";

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

  console.log("properties: ", properties);

  useEffect(function fetchAllProperties() {
    async function fetchProperties() {
      const response = await sharebnbApi.getProperties();

      setProperties({
        data: response,
        isLoading: false,
      });
    }
    fetchProperties();
  }, []);

  async function newProperty(formData) {
    console.log("formData from Abb.jsx: ", formData);
    const property = await sharebnbApi.addProperty({
      title: formData.title,
      host_username: "andres",
      image: formData.image,
      price_night: Number(formData.price_night),
      description: formData.description,
      address: formData.address,
    });
    setProperties((properties) => ({...properties, property}));
  }

  return (
    <userContext.Provider value={{properties}}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <RoutesList properties={properties} newProperty={newProperty} />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
