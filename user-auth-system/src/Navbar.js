
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/register" className="brand">
        User Auth System
      </Link>

      <div className="nav-links">
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
