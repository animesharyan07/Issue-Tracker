// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  // const handleLogoClick = () => {
  //     navigate('/');
  // };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src="/path/to/logo.png" alt="Logo" className="logo" /> */}
        <Link to="/" className="logo-text">
          <span>IssueTracker</span>
        </Link>
        {/* Add a text for branding */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="#">Issues</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
