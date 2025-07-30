// src/components/ContactForm.jsx
import React from "react";

function ContactForm() {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded h-32"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
