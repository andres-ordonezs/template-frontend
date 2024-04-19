import React, {useState} from "react";

import "./SignupForm.css";
import {useNavigate} from "react-router-dom";

/** New Property Form
 *
 * state: formData
 * props: a function, searchItem
 *
 * {JobsList, CompanyList} --> SearchhtmlForm
 *
 */
function SignupForm({signup}) {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    signup(formData);
    navigate("/");
  }

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData((fData) => ({...fData, [name]: value}));
  }

  return (
    <div className="NewPropertyForm">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            className="form-control"
            id="first_name"
            name="first_name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            className="form-control"
            id="last_name"
            name="last_name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mail">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
