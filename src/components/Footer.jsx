"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-12 min-h-[250px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Links */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 border-b border-gray-700 pb-8">
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-6 text-lg">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="/products" className="hover:text-white transition-colors">
              Products
            </a>
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 md:mt-0 text-2xl">
            <a href="#" className="hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
