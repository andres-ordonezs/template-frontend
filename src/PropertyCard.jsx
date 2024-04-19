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
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/cayman-islands-villa-kempa-kai-2020-021-1616076929.jpg"
        className="PropertyCard-img"
      ></img>
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
