// src/components/FAQ.jsx
import React from "react";

const faqs = [
  {
    question: "What is Grabzy?",
    answer: "Grabzy connects people with leftover food to those in need to reduce food waste.",
  },
  {
    question: "Is Grabzy free to use?",
    answer: "Yes, Grabzy is 100% free for donors and recipients.",
  },
  {
    question: "How do I become a volunteer?",
    answer: "Sign up on our platform and check the volunteer box during registration.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="pt-24 bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-5 rounded shadow">
              <h4 className="font-semibold text-lg">{faq.question}</h4>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
