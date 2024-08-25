import React from "react";
import Logo from "../assets/footer-logo.svg";

const Footer = () => {
  return (
    <div className="bg-black w-[100%] mx-auto">
      <div className="max-w-[1360px] mx-auto py-8 flex flex-wrap justify-around space-x-[120px]">
        <div className="w-[250px]">
          <img src={Logo} alt="logo" className="w-[220px]" />
          <p className="text-white">
            Get shoes ready for the new term at your nearest Converse store.
            Find Your perfect Size In Store. Get Rewards
          </p>
          <div></div>
        </div>

        <div className="w-[250px] text-white">
          <h3 className="font-bold text-2xl py-2">Products</h3>
          <h6 className="py-1">Chuck Taylor All Star</h6>
          <h6>Run Star Hike Platform</h6>
          <h6 className="py-1">Chuck 70 Tri-Color</h6>
          <h6>Star Player 76</h6>
          <h6 className="py-1">Chuck Taylor All Star Lift Platform</h6>
          <h6>Run Star Legacy Chelsea CX</h6>
        </div>

        <div className="w-[250px] text-white">
          <h3 className="font-bold text-2xl py-2">Help</h3>
          <h6 className="py-1">About us</h6>
          <h6>FAQs</h6>
          <h6>How it works</h6>
          <h6 className="py-1">Privacy policy</h6>
          <h6>Payment policy</h6>
        </div>

        <div className="w-[250px] text-white py-2">
          <h3 className="font-bold text-2xl">Get in touch</h3>
          <h6 className="py-1">customer@converse.com</h6>
          <h6>+92554862354
          </h6>

        </div>
      </div>
    </div>
  );
};

export default Footer;
