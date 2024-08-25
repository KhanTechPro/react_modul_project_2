import React, { useEffect } from "react";
import bigShoes from "../assets/big-shoe.png";
import shoe1 from "../assets/shoe1.svg";
import shoe2 from "../assets/shoe2.svg";
import shoe3 from "../assets/shoe3.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <>
      <div
        className="max-w-[1360px] mx-auto flex flex-row"
        data-aos="fade-left"
      >
        <div className=" p-8 lg:p-14 relative w-[650px]">
          <div className="flex flex-col">
            <div className="lg:text-left">
              <h1 className="text-lg text-gray-600 mb-2">
                Our Summer Collection
              </h1>
              <h2 className="text-6xl font-bold mb-4">New Collection</h2>
              <h3 className="text-5xl text-[#5746E8] font-bold mb-4">
                Converse
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Discover stylish Converse arrivals, quality comfort, and
                innovation for your active life.
              </p>
              <button className="bg-[#5746E8] hover:bg-[#4534c4] text-white py-3 px-8 mt-10 rounded-full text-lg font-semibold transition">
                Shop now →
              </button>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 gap-8">
              <div>
                <h4 className="text-5xl font-bold">1k+</h4>
                <p className="text-gray-600 text-2xl">Brands</p>
              </div>
              <div>
                <h4 className="text-5xl font-bold">500+</h4>
                <p className="text-gray-600 text-2xl">Shops</p>
              </div>
              <div>
                <h4 className="text-5xl font-bold">250k+</h4>
                <p className="text-gray-600 text-2xl">Customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F2F4FF] w-[700px]">
          <div>
            <div className="flex items-center justify-center mt-8 lg:mt-0">
              <img
                src={bigShoes}
                alt="Converse"
                className="max-w-xs lg:max-w-lg"
              />
            </div>

            <div className="flex justify-center p-8 space-x-4">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <img src={shoe1} alt="Black Converse" className="w-24 h-24" />
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <img src={shoe2} alt="Red Converse" className="w-24 h-24" />
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md border-2 border-[#5746E8]">
                <img src={shoe3} alt="Tan Converse" className="w-24 h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
