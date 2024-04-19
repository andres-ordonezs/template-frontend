import React, {useContext} from "react";
import userContext from "./userContext";

import SearchForm from "./SearchForm";
import PropertiesList from "./PropertiesList";

import "./HomePage.css";

/**
 * Homepage
 *
 * state: none
 * useEffect: none
 * props: none
 *
 * RoutesList --> HomePage
 */

function HomePage({searchProperty}) {
  const {properties} = useContext(userContext);

  console.log("properties from homepage: ", properties.data);

  const propertiesLength = properties.data.length;

  if (properties.isLoading) return <h1>Loading...</h1>;

  // console.log("useContext: ", useContext(userContext));
  return (
    <div className="HomePage">
      <SearchForm searchProperty={searchProperty} />
      <PropertiesList />
    </div>
  );
}

export default HomePage;
