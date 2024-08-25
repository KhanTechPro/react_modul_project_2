import React, { useEffect } from "react";
import special from "../assets/special.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Special = () => {
  return (
    <div className="max-w-[1360px] mx-auto mt-[100px]">
      <div
        className="flex flex-row justify-between gap-[80px] items-center text-start my-12"
        data-aos="fade-right"
      >
        <div className="w-[100%]">
          <img src={special} alt="" />
        </div>
        <div>
          <h2 className="text-5xl font-bold">Special Offer</h2>
          <p className="my-6 text-gray-700">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="text-gray-700">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="flex gap-6">
            <button className="bg-[#5746E8] hover:bg-[#4534c4] text-white py-3 px-8 mt-10 rounded-full text-lg font-semibold transition">
              Shop now →
            </button>
            <button className="border border-[#4534c4] hover:bg-[#4534c4] text-black hover:text-white duration-500 py-3 px-8 mt-10 rounded-full text-lg font-semibold transition">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
