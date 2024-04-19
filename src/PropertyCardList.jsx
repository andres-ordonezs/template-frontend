import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";

import "./PropertyCardList.css";

import PropertyCard from "./PropertyCard";

/**
 *
 * @param {*} param0
 * @returns
 */
function PropertyCardList({properties}) {
  console.log("properties from Property Card: ", properties);
  return (
    <div className="PropertyCardList">
      {properties.map((property) => (
        <Link
          key={property.id}
          to={{
            pathname: `/propertyDetail/${property.id}`,
            state: {property: property},
          }}
          style={{textDecoration: "none"}}
          className="PropertyCardList-link"
        >
          <PropertyCard property={property} />
        </Link>
      ))}
    </div>
  );
}

export default PropertyCardList;
