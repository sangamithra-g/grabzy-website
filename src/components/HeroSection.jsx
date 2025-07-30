// src/components/HeroSection.jsx
import React from "react";

function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="pt-24 w-screen min-h-screen bg-green-50 flex items-center justify-center overflow-hidden m-0 p-0"
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-10 md:p-20">
          <h2 className="text-5xl font-bold mb-6 text-green-700">
            Save Surplus Food with Grabzy
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            Join us in reducing food waste by redistributing unused meals to
            those in need.
          </p>
          <button
            onClick={scrollToPricing}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Get Started
          </button>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-0">
          <img
            src="https://source.unsplash.com/1600x900/?food,donation"
            alt="Food Donation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
