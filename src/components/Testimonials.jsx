// src/components/Testimonials.jsx
import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Restaurant Owner",
      quote:
        "Grabzy made food donation effortless. I can now share excess food without hassle and make a difference!",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sister Maria",
      role: "NGO Coordinator",
      quote:
        "We’ve served so many people thanks to Grabzy’s instant alerts. It's a game-changer for food distribution.",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Sunita Devi",
      role: "Food Recipient",
      quote:
        "Warm meals on difficult days. Thank you, Grabzy, for giving me hope and food when I needed it most.",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What People Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 italic text-center mb-4">
                “{testimonial.quote}”
              </p>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
