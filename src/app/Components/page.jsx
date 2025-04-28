"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full backdrop-blur-md bg-white/80 shadow-lg py-4 px-6 sticky top-0 z-50 rounded-b-2xl border-b border-orange-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-orange-500 text-2xl font-extrabold tracking-wide">
          🐾 PetShop
        </div>

        {/* Navigation Links */}
        <div className="ml-auto flex items-center space-x-10">
          <Link
            href="/"
            className="text-gray-700 hover:text-orange-500 font-medium transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-gray-700 hover:text-orange-500 font-medium transition-all duration-300"
          >
            Products
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-orange-500 font-medium transition-all duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-orange-500 font-medium transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
