import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} />
      </div>
      <div className="nav-right"></div>
    </div>
  );
}

export default Navbar;
