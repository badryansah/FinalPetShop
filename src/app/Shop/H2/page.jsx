"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar/page";
import { motion, AnimatePresence } from "framer-motion";

export default function ShopPageTwo() {
  const [currentPage, setCurrentPage] = useState(2);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Animation variants
  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const products = [
    {
      id: 17,
      name: "Premium Dog Food",
      price: "19.99",
      image: "/images/products/growssy-dog.png",
      isNew: true,
    },
    {
      id: 18,
      name: "Premium Cat Food",
      price: "19.99",
      image: "/images/products/growssy-cat.png",
      isNew: true,
    },
    {
      id: 19,
      name: "Premium Dog Food",
      price: "19.99",
      image: "/images/products/gray-placeholder.png",
    },
    {
      id: 20,
      name: "Premium Dog Food",
      price: "19.99",
      image: "/images/products/gray-placeholder.png",
    },
    {
      id: 21,
      name: "Premium Cat Food",
      price: "19.99",
      image: "/images/products/gray-placeholder.png",
    },
    {
      id: 22,
      name: "Premium Dog Food",
      price: "19.99",
      image: "/images/products/gray-placeholder.png",
    },
    {
      id: 23,
      name: "Premium Dog Food",
      price: "19.99",
      image: "/images/products/gray-placeholder.png",
    },
    {
      id: 24,
      name: "Premium Cat Food",
      price: "19.99",
      image: "/images/products/gray-placeholder.png",
    },
    {
      id: 25,
      name: "Premium Dog Food",
      price: "19.99",
      image: "/images/products/gray-placeholder.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-y-auto bg-gray-50">
      {/* Header */}
      <motion.div
        className="sticky top-0 bg-white z-30 px-4 py-4 shadow-sm"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-2xl hover:text-orange-500 transition-colors text-black mr-4"
            >
              ☰
            </motion.button>
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold text-black"
            >
              Shop by pet
            </motion.h1>
          </div>

          <Link href="Keranjang/">
            <motion.button
              className="text-2xl text-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🛒
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Main Content with Sidebar */}
      <div className="flex-1 flex relative">
        {/* Overlay for mobile */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <motion.div
          variants={sidebarVariants}
          initial="hidden"
          animate={isSidebarOpen ? "visible" : "hidden"}
          className="fixed top-[72px] left-0 h-[calc(100vh-72px)] w-64 bg-white z-20
            overflow-y-auto border-r border-gray-200"
        >
          <div className="p-4">
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Products Grid */}
            <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="product-card bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-black"
                >
                  <div className="product-image-container relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="product-image w-full h-48 object-contain"
                    />
                    {product.isNew && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="product-badge absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full"
                      >
                        New
                      </motion.span>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="product-favorite absolute top-2 right-2 text-orange-500"
                    >
                      ♡
                    </motion.button>
                  </div>
                  <Link href="Keranjang/">
                    <div className="product-info mt-4 space-y-1 text-black">
                      <h3 className="product-name text-sm font-medium line-clamp-2 text-black">
                        {product.name}
                      </h3>
                      <p className="product-price font-semibold text-black">
                        ${product.price}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="product-add-cart w-full mt-2 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pagination */}
          <motion.div
            className="flex justify-center items-center mt-8 space-x-2"
            variants={itemVariants}
          >
            <Link href="/Shop/H1">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`px-3 py-1 rounded ${
                  currentPage === 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                1
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`px-3 py-1 rounded ${
                currentPage === 2
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              2
            </motion.button>
            <Link href="/Home">
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="ml-4 text-black"
              >
                Home ›
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
