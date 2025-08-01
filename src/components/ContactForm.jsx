import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6wnev5n",           // Your EmailJS service ID
        "template_cnvp46x",         // Your EmailJS template ID
        formRef.current,
        "CQewYAeXtucwZEB4F"         // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("✅ Message sent successfully! We will get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("❌ Message failed to send. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="pt-24 bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        ></textarea>

        {/* Optional: Include timestamp or other hidden fields */}
        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString()}
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
