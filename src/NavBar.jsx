import React from "react";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import userContext from "./userContext";
import "./NavBar.css";

/**
 * Navigation Bar with links to Properties, Bookings, Sigin, Signup
 *
 * Props:
 *  -None
 *
 * State: None
 *
 * App -> Navbar
 */
function NavBar({logout}) {
  const {currentUser} = useContext(userContext);

  function logoutUser() {
    logout();
  }

  function renderLinks() {
    return (
      <div className="NavBar-routes">
        <NavLink to="/NewPropertyForm">Add Property</NavLink>
        <NavLink onClick={logoutUser} to="/">
          Logout ({currentUser.user.username})
        </NavLink>
      </div>
    );
  }

  return (
    <div className="NavBar">
      <div className="NavBar-homepage">
        <NavLink to="/">ShareBnB</NavLink>
      </div>
      {!currentUser.user ? (
        <div className="NavBar-routes">
          <NavLink to="/Signup">Sign up</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      ) : (
        renderLinks()
      )}
    </div>
  );
}

export default NavBar;
