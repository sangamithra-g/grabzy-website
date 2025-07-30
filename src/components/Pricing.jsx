// src/components/Pricing.jsx
import React from "react";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: ["Donate food", "Receive alerts", "Access to community"],
    },
    {
      name: "Pro",
      price: "₹99/month",
      features: ["Priority matching", "Analytics dashboard", "Volunteer management"],
    },
  ];

  return (
    <section id="pricing" className="pt-24 bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Pricing Plans</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="border p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-2xl font-bold text-green-600 mb-4">{plan.price}</p>
            <ul className="space-y-2 text-gray-600">
              {plan.features.map((feat, i) => (
                <li key={i}>✔ {feat}</li>
              ))}
            </ul>
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
