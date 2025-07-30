// src/components/CTASection.jsx
import React from "react";

function CTASection() {
  return (
    <section className="bg-gradient-to-r from-green-400 to-green-600 py-20 text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
      <p className="text-lg mb-8">
        Join Grabzy and be part of the movement to eliminate food waste and feed the hungry.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition">
          Join as Donor
        </button>
        <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition">
          Join as NGO
        </button>
        <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition">
          Explore Platform
        </button>
      </div>
    </section>
  );
}

export default CTASection;
