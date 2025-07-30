// src/components/HowItWorks.jsx
import React from "react";
import { Upload, LocateFixed, Smile } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-orange-500" />,
      title: "Donate Food",
      description: "Upload details of excess food via Grabzy’s simple form.",
    },
    {
      icon: <LocateFixed className="h-10 w-10 text-green-600" />,
      title: "Auto-Match",
      description: "Grabzy connects your donation to the nearest NGO or shelter.",
    },
    {
      icon: <Smile className="h-10 w-10 text-blue-500" />,
      title: "Spread Joy",
      description: "Your food reaches those in need — safely and on time.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How Grabzy Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
