// src/components/Footer.jsx
import React from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo + Description */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Grabzy</h3>
          <p className="text-sm text-gray-300 max-w-xs">
            Grabzy is on a mission to reduce food waste and feed the hungry. Be a part of the movement today.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@grabzy.org
            </li>
          </ul>
        </div>

        {/* Social Links + Copyright */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 mt-2 mb-2">
            <a href="#" className="hover:text-gray-300">
              <Facebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram />
            </a>
          </div>
          {/* 👇 Your copyright */}
          <div className="text-sm text-gray-400">
            © 2025 Grabzy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
