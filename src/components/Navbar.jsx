// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Grabzy</h1>
        <ul className="flex space-x-6">
          <li onClick={() => scrollToSection("hero")} className="cursor-pointer hover:text-green-500">Home</li>
          <li onClick={() => scrollToSection("features")} className="cursor-pointer hover:text-green-500">Features</li>
          <li onClick={() => scrollToSection("faq")} className="cursor-pointer hover:text-green-500">FAQ</li>
          <li onClick={() => scrollToSection("pricing")} className="cursor-pointer hover:text-green-500">Pricing</li>
          <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-green-500">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
