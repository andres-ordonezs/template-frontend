import React, {useState} from "react";

import "./SearchForm.css";

const INITIAL_STATE = {
  destination: null,
  checkin_date: "2024-04-20",
  checkout_date: "2024-04-27",
};

/** Search  Form htmlFor Jobs or Companies
 *
 * state: formData
 * props: a function, searchItem
 *
 * {JobsList, CompanyList} --> SearchhtmlForm
 *
 */
function SearchForm({searchProperty}) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  function handleSubmit(evt) {
    evt.preventDefault();
    searchProperty(formData);
  }

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData((fData) => ({...fData, [name]: value}));
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <div className="SearchForm-row">
          <div className="SearchForm-input">
            <label className="" htmlFor="destination">
              Where
            </label>
            <input
              type="text"
              className="form-control"
              id="destination"
              name="destination"
              placeholder="Destination"
              onChange={handleChange}
            />
          </div>
          <div className="SearchForm-input SearchForm-date">
            <label htmlFor="chekin-date">Check in</label>
            <input
              type="date"
              className="form-control"
              id="checkin_date"
              name="checkin_date"
              placeholder="Add dates"
              onChange={handleChange}
            />
          </div>
          <div className="SearchForm-input SearchForm-date">
            <label htmlFor="chekout-date">Check out</label>
            <input
              type="date"
              className="form-control"
              id="checkout_date"
              name="checkout_date"
              placeholder="Add dates"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary col-auto SearchForm-btn"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
