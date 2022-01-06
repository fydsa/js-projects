import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.style.css";
import { Hamburger } from "../../icons/hamburger.icon";

function Navbar() {
  const [showLinks, setShowLinks] = useState(true);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <div className="nav-left" id={showLinks ? "close" : "open"}>
        <img src={logo} />
        <div className="hide-links">
          <Link to="home">Home</Link>
          <Link to="menu">Menu</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
      <div className="nav-right">
        <Link to="home">Home</Link>
        <Link to="menu">Menu</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <button onClick={handleShowLinks}>
          <Hamburger
            className="h-12 w-12"
            fill="red"
            strokeWidth={3}
            stroke={"white"}
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
