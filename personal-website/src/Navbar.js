
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand" to="/">
          Personal Website
        </NavLink>

        <div className="d-flex flex-row">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
