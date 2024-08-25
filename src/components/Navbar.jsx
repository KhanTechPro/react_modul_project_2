import React, { useEffect } from "react";
import Logo from "../assets/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="max-w-[1360px] mx-auto">
      <div
        className="flex flex-wrap justify-around items-center space-x-[120px]"
        data-aos="fade-right"
      >
        <a href="">
          <img src={Logo} alt="logo" className="w-[220px]" />
        </a>
        <ul className="flex flex-wrap justify-between items-center space-x-[150px] text-violet-200 text-xl">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
