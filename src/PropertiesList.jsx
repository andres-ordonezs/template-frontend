import React, {useState, useEffect} from "react";
import userContext from "./userContext";
import {useContext} from "react";

import PropertyCardList from "./PropertyCardList";

import "./PropertiesList.css";

/**
 *
 * @returns
 */
function PropertiesList() {
  const {properties} = useContext(userContext);

  return (
    <div className="PropertiesList">
      <PropertyCardList properties={properties.data} />
    </div>
  );
}

export default PropertiesList;
