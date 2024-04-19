import React, {useState} from "react";

import "./NewPropertyForm.css";

/** New Property Form
 *
 * state: formData
 * props: a function, searchItem
 *
 * {JobsList, CompanyList} --> SearchhtmlForm
 *
 */
function NewPropertyForm({newProperty}) {
  const [formData, setFormData] = useState({});

  console.log("formData:", formData);

  console.log("newProperty:", newProperty);

  function handleSubmit(evt) {
    evt.preventDefault();
    newProperty(formData);
  }

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData((fData) => ({...fData, [name]: value}));
  }

  return (
    <div className="NewPropertyForm">
      <h1>List a new Property</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_night">Price per night</label>
          <input
            type="number"
            pattern="^\d*(\.\d{0,2})?$"
            step="0.01"
            className="form-control"
            id="price_night"
            name="price_night"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            onChange={handleChange}
          />
        </div>
        <div className="form-group NewPropertyForm-imgSelect">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default NewPropertyForm;
