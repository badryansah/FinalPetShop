"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/asset/Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-center w-full py-7">
      <div className="shadow-md rounded-full bg-white px-6 py-3 flex flex-wrap items-center justify-between w-11/12 max-w-5xl relative">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="ml-2 text-xl font-bold text-black">
            Sentra Petshop
          </span>
        </div>

        {/* Center Section: Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/Home" className="text-black font-medium">
            Home
          </Link>
          <Link href="Shop/" className="text-black font-medium">
            Shop
          </Link>
          <Link href="Clinic/" className="text-black font-medium">
            Clinic
          </Link>
        </div>

        {/* Right Section: Search Bar - Desktop */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-1 w-64">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-sm w-full"
          />
          <button className="ml-2 bg-gray-800 rounded-full p-1">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden absolute top-full left-0 right-0 bg-white mt-3 p-4 rounded-lg shadow-lg flex-col space-y-4 w-full`}
        >
          <div className="flex flex-col space-y-2">
            <Link href="/Home" className="text-black font-medium">
              Home
            </Link>
            <Link href="Shop/" className="text-black font-medium">
              Shop
            </Link>
            <Link href="Clinic/" className="text-black font-medium">
              Clinic
            </Link>
          </div>
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-1">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm w-full"
            />
            <button className="ml-2 bg-gray-800 rounded-full p-1">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
