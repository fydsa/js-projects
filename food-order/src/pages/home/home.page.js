import React from "react";
import { Link } from "react-router-dom";
import "./home.style.css";

const Menu = () => {
  return (
    <div className="home">
      <div className="header">
        <h1>Food Corner</h1>
        <p>INDIAN FOOD AT A CLICK</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
