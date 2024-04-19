import React, {useState, useEffect} from "react";

import sharebnbApi from "./sharebnbApi";

import PropertyCardList from "./PropertyCardList";

import "./PropertiesList.css";

/**
 *
 * @returns
 */
function PropertiesList() {
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

  return (
    <div className="PropertiesList">
      <PropertyCardList properties={properties.data} />
    </div>
  );
}

export default PropertiesList;
