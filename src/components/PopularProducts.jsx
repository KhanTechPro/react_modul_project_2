import React, { useEffect } from "react";
import product1 from "../assets/product1.svg"; // Replace with actual paths
import product2 from "../assets/product2.svg";
import product3 from "../assets/product3.svg";
import product4 from "../assets/product4.svg";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "Chuck Taylor All Star",
      price: "100.20 €",
      rating: 4.5,
      image: product1,
    },
    {
      id: 2,
      name: "Run Star Hike Sequins",
      price: "190.00 €",
      rating: 4.5,
      image: product2,
    },
    {
      id: 3,
      name: "Chuck Taylor All Star",
      price: "120.20 €",
      rating: 4.5,
      image: product3,
    },
    {
      id: 4,
      name: "Chuck 70 Y2K Heart",
      price: "130.00 €",
      rating: 4.5,
      image: product4,
    },
  ];

  return (
    <div
      className="bg-white py-16 px-8 text-start max-w-[1360px] mx-auto"
      data-aos="fade-left"
    >
      <h2 className="text-5xl font-bold mb-4">
        Our <span className="text-[#5746E8]">Popular</span> Products
      </h2>
      <p className="text-lg text-gray-600 mb-12 w-[500px]">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-contain mb-4"
            />
            <div className="flex items-center justify-start text-gray-600 mb-2">
              <FaStar className="text-[#5746E8]" />
              <span className="ml-1">({product.rating})</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-xl font-bold text-gray-800">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
