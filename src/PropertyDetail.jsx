import React from "react";
import userContext from "./userContext";
import {useContext} from "react";
import {useParams} from "react-router-dom";

import "./PropertyDetail.css";

/**
 */

function PropertyDetail({booking, addBooking}) {
  const {properties} = useContext(userContext);

  const {id} = useParams();

  const property = properties.data.find((prop) => prop.id === parseInt(id));

  function createBooking() {
    addBooking({
      id,
      checkin_date: booking.checkin_date,
      checkout_date: booking.checkout_date,
    });
  }

  return (
    <div className="PropertyDetail">
      <h1>{property.title}</h1>
      <div className="PropertyDetail-img">
        <img src={property.image} />
      </div>
      <div className="PropertyDetail-container">
        <div className="PropertyDetail-info">
          <h3>{property.description}</h3>
          <p>{property.address}</p>
        </div>
        <div className="PropertyDetail-booking">
          <h3>${property.price_night} USD night</h3>
          <div className="PropertyDetail-dates">
            <p>
              <i>Check in:</i> <br />
              {booking.checkin_date}
            </p>
            <p>
              <i>Check out: </i>
              <br />
              {booking.checkout_date}
            </p>
          </div>

          <button
            className="btn btn-primary PropertyDetail-btn"
            onClick={createBooking}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
