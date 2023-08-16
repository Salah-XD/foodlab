import React from "react";
import "./styles/navbar.css";
// import artboard from "../../images/logo/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src="../images/logo/logo.png" alt="logo" />

      <nav className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Co-traveller</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
          <li className="ham">&#9776;</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
