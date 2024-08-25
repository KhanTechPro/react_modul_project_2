import React, { useEffect } from "react";
import banner from "../assets/banner.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Quality = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="max-w-[1360px] mx-auto">
      <div
        className="flex flex-row justify-between gap-[80px] items-center text-start"
        data-aos="fade-right"
      >
        <div>
          <h2 className="text-5xl font-bold">
            We Provide You Super Quality Shoes
          </h2>
          <p className="py-6 text-gray-500">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="text-gray-500">
            Our dedication to detail and excellence ensures your satisfaction
          </p>

          <button className="bg-[#5746E8] hover:bg-[#4534c4] text-white py-3 px-8 mt-10 rounded-full text-lg font-semibold transition">
            View details
          </button>
        </div>

        <div>
          <img src={banner} alt="image" className="w-[100%] rounded-xl" />
        </div>
      </div>

      <div
        className="flex flex-row justify-between items-center text-start mt-[50px] gap-6"
        data-aos="fade-left"
      >
        <div className="shadow-2xl w-[400px] p-6">
          <h3 className="font-bold text-3xl my-3">Free shipping</h3>
          <p>
            Enjoy seamless shopping with our complimentary shipping service.
          </p>
        </div>

        <div className="shadow-2xl w-[400px] p-6">
          <h3 className="font-bold text-3xl my-3">Secure Payment</h3>
          <p>
            Experience worry-free transactions with our secure payment options.
          </p>
        </div>

        <div className="shadow-2xl w-[400px] p-6">
          <h3 className="font-bold text-3xl my-3">Love to help you</h3>
          <p>Our dedicated team is here to assist you every step of the way.</p>
        </div>
      </div>
    </div>
  );
};

export default Quality;
