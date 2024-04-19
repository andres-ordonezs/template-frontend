import React, {useState, useEffect} from "react";

import "./PropertyCard.css";

/**
 *
 * @param {*} param0
 * @returns
 */
function PropertyCard({property}) {
  return (
    <div className="PropertyCard">
      <img src={property.image} className="PropertyCard-img"></img>
      <div className="PropertyCard-details">
        <p>
          <b>{property.title}</b>
        </p>
        <p>{property.address}</p>
        <p>
          <b>${property.price_night}</b> night
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;
