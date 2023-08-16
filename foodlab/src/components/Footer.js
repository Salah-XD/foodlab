import React from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="add">
        <img className="ft-logo" src="../images/logo/logo.png" alt="logo" />
        <div className="text">
          <div>203, Abc road , xyz</div>
          <div>
            <strong>Phone : </strong>+91 44 4269 2288
          </div>
          <div>
            <strong>Email : </strong>admin@parikshan.net.in
          </div>
        </div>
      </div>
      <div className="bdd">
        <div className="content">
          <div className="c1">
            <div className="path"></div>
            <ul>
              <li>
                <a href="">
                  <strong>Useful Link</strong>
                </a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Training Registration</a>
              </li>

              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
            </ul>
          </div>
          <div className="c2">
            <ul>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="c1">
            <div className="path"></div>
            <ul>
              <li>
                <a href="">
                  <strong>Site Map</strong>
                </a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Training Registration</a>
              </li>

              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          Food Labs Inc. &copy; Copyright 2022. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
