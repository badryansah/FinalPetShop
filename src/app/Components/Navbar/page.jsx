"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/asset/NavbarLogo/NavbarLogo.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: "#F97316" },
    tap: { scale: 0.95 },
  };

  const searchBarVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  return (
    <motion.div
      className="flex justify-center w-full py-7"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div
        className="shadow-md rounded-full bg-white px-6 py-3 flex flex-wrap items-center justify-between w-11/12 max-w-5xl relative"
        whileHover={{ boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)" }}
      >
        {/* Left Section: Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            className="w-15 h-15"
          />
          <motion.span
            className="ml-2 text-xl font-bold text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sentra Petshop
          </motion.span>
        </motion.div>

        {/* Center Section: Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {[
            { href: "/Home", label: "Home" },
            { href: "/Shop/H1", label: "Shop" },
            { href: "/Clinic", label: "Clinic" },
            { href: "/Pages/PetHotel", label: "Pet Hotel" },
          ].map((link, index) => (
            <motion.div
              key={link.href}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href={link.href} className="text-black font-medium">
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Section: Search Bar - Desktop */}
        <motion.div
          className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-1 w-64 text-black"
          variants={searchBarVariants}
          initial="rest"
          whileHover="hover"
        >
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-sm w-full"
          />
          <motion.button
            className="ml-2 bg-gray-800 rounded-full p-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
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
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white mt-3 p-4 rounded-lg shadow-lg flex-col space-y-4 w-full"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <motion.div className="flex flex-col space-y-2">
                {[
                  { href: "/Home", label: "Home" },
                  { href: "/Shop/H1", label: "Shop" },
                  { href: "/Clinic", label: "Clinic" },
                  { href: "/Pages/PetHotel", label: "Pet Hotel" },
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Link href={link.href} className="text-black font-medium">
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              {/* Mobile Search Bar */}
              <motion.div
                className="flex items-center bg-gray-100 rounded-full px-4 py-1"
                variants={searchBarVariants}
                whileHover="hover"
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent outline-none text-sm w-full"
                />
                <motion.button
                  className="ml-2 bg-gray-800 rounded-full p-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
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
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
