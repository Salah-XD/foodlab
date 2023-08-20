import React from "react";
import "../components/styles/main.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Main() {
  return (
    <div className="main absolute z-40 top-[40%] left-[15%]">
      <h1 className="text-5xl font-extrabold leading-[1.5]">
        Empowering Society <br /> Through Science
      </h1>
      <p className="text-2xl font-semibold mb-6 leading-[1.15   ]">
        Food Lab is one point solution for all <br /> food safety needs
      </p>
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <a
          href="#"
          className="text-[#fff] bg-[#278233] px-5 py-3 rounded-[7px] my-9 font-medium shadow-xl main-btn"
        >
          Get Started
        </a>
      </Link>
    </div>
  );
}

export default Main;
