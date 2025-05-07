"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar/page";

export default function ShopPageTwo() {
  const [currentPage, setCurrentPage] = useState(2);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      image: "/images/products/placeholder.png",
    },
    {
      id: 20,
      name: "Premium Dog Food",
      price: "19.99",
      image: "/images/products/placeholder.png",
    },
    {
      id: 21,
      name: "Premium Cat Food",
      price: "19.99",
      image: "/images/products/placeholder.png",
    },
    {
      id: 22,
      name: "Premium Dog Food",
      price: "19.99",
      image: "/images/products/placeholder.png",
    },
    {
      id: 23,
      name: "Premium Dog Food",
      price: "19.99",
      image: "/images/products/placeholder.png",
    },
    {
      id: 24,
      name: "Premium Cat Food",
      price: "19.99",
      image: "/images/products/placeholder.png",
    },
    {
      id: 25,
      name: "Premium Dog Food",
      price: "19.99",
      image: "/images/products/placeholder.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-y-auto bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 bg-white z-30 px-4 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-2xl hover:text-orange-500 transition-colors"
          >
            ☰
          </button>
          <h1 className="text-3xl font-bold">Shop by pet</h1>
          <button className="text-2xl">🛒</button>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="flex-1 flex relative">
        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed top-[72px] left-0 h-[calc(100vh-72px)] w-64 bg-white transform 
            transition-transform duration-300 ease-in-out z-20
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            overflow-y-auto border-r border-gray-200
          `}
        >
          <div className="p-4">
            <Sidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Products Grid */}
            <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-contain"
                    />
                    <button className="absolute top-2 right-2 text-orange-500">
                      ♡
                    </button>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-medium">{product.name}</h3>
                    <p className="text-gray-900 font-semibold">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <Link href="/Shop/H1">
              <button
                className={`px-3 py-1 rounded ${
                  currentPage === 1 ? "bg-orange-500 text-white" : "bg-gray-200"
                }`}
              >
                1
              </button>
            </Link>
            <button
              className={`px-3 py-1 rounded ${
                currentPage === 2 ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              2
            </button>
            <button className="ml-4 text-gray-600">Next ›</button>
          </div>
        </div>
      </div>
    </div>
  );
}
