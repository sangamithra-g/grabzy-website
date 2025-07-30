// src/components/Features.jsx
import React from "react";
import { Leaf, Heart, Share } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Eco-Friendly",
      description: "Reduce food waste and carbon footprint with surplus redistribution.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Community Impact",
      description: "Help feed the hungry by connecting donors with NGOs and shelters.",
    },
    {
      icon: <Share className="h-8 w-8 text-blue-500" />,
      title: "Easy Sharing",
      description: "Donating food is now just a few clicks away — quick and hassle-free.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Grabzy?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
