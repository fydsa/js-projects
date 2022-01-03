import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} />
      </div>
      <div className="nav-right">
        <Link to="home">Home</Link>
        <Link to="menu">Menu</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
