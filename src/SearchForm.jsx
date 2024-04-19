import React, {useState} from "react";

import "./SearchForm.css";

const INITIAL_STATE = {
  search: "",
};

/** Search  Form htmlFor Jobs or Companies
 *
 * state: formData
 * props: a function, searchItem
 *
 * {JobsList, CompanyList} --> SearchhtmlForm
 *
 */
function SearchForm({searchItem}) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  function handleSubmit(evt) {
    evt.preventDefault();
    searchItem(htmlFormData.search);
  }

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData((fData) => ({...fData, [name]: value}));
  }

  return (
    <div className="SearchForm">
      <form>
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
            />
          </div>
          <div className="SearchForm-input SearchForm-date">
            <label htmlFor="chekin-date">Check in</label>
            <input
              type="date"
              className="form-control"
              id="checkin-date"
              name="checkin-date"
              placeholder="Add dates"
            />
          </div>
          <div className="SearchForm-input SearchForm-date">
            <label htmlFor="chekout-date">Check out</label>
            <input
              type="date"
              className="form-control"
              id="checkout-date"
              name="checkout-date"
              placeholder="Add dates"
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
