import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
const Navbar = () => {
  return (
    <div><br />
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
        
        <NavLink className="navbar-brand" to="/">
        articles
        </NavLink>
     
 
        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Create Article
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
 
export default Navbar;