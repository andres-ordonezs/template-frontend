import React, {useState} from "react";
// import {useContext} from "react";
// import userContext from "./userContext";

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

function HomePage() {
  //   const {currentUser} = useContext(userContext);
  //console.log("First Name from Homepage: ", firstName);
  //console.log("useContext: ", useContext(userContext));
  return (
    <div className="HomePage">
      <SearchForm />
      <PropertiesList />
    </div>
  );
}

export default HomePage;
