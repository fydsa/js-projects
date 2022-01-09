import React from "react";
import {
  FaceBook,
  Instagram,
  LinkedIn,
  Twitter,
} from "../../icons/hamburger.icon";
import "./footer.style.css";

const Footer = () => {
  return (
    <div class="footer">
      <div class="social-media">
        <Instagram fill="black" />
        <Twitter fill="black" />
        <LinkedIn fill="black" />
        <FaceBook fill="black" />
      </div>
      <p> &copy; 2021 IndianFood.com</p>
    </div>
  );
};

export default Footer;
