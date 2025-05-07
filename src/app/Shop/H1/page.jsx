"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar/page";

export default function ShopByPetPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Premium Dog Food",
      price: "19.99",
      image: "/images/products/growssy-dog.png",
      isNew: true,
    },
    {
      id: 2,
      name: "Premium Cat Food",
      price: "19.99",
      image: "/images/products/growssy-cat.png",
      isNew: true,
    },
    {
      id: 3,
      name: "Premium Dog Food",
      price: "19.99",
      image: "/images/products/growssy-dog.png",
    },
    {
      id: 4,
      name: "Excel Premium",
      price: "19.99",
      image: "/images/products/excel.png",
    },
    {
      id: 5,
      name: "Whiskas",
      price: "19.99",
      image: "/images/products/whiskas-can.png",
    },
    {
      id: 6,
      name: "Whiskas Premium",
      price: "19.99",
      image: "/images/products/whiskas-bag.png",
    },
    {
      id: 7,
      name: "Premium Food",
      price: "19.99",
      image: "/images/products/cleo.png",
    },
    {
      id: 8,
      name: "KANDANG KUCING PINK SMAI",
      price: "19.99",
      image: "/images/products/pet-carrier.png",
    },
    {
      id: 9,
      name: "tempat makan hewan",
      price: "19.99",
      image: "/images/products/pet-bowl.png",
    },
    {
      id: 10,
      name: "Dog Biscuits",
      price: "19.99",
      image: "/images/products/dog-biscuits.png",
    },
    {
      id: 11,
      name: "Cat Litter",
      price: "19.99",
      image: "/images/products/cat-litter.png",
    },
    {
      id: 12,
      name: "Pet Shampoo",
      price: "19.99",
      image: "/images/products/pet-shampoo.png",
    },
    {
      id: 13,
      name: "Pet Toys",
      price: "19.99",
      image: "/images/products/pet-toys.png",
    },
    {
      id: 14,
      name: "Pet Brush",
      price: "19.99",
      image: "/images/products/pet-brush.png",
    },
    {
      id: 15,
      name: "Pet Collar",
      price: "19.99",
      image: "/images/products/pet-collar.png",
    },
    {
      id: 16,
      name: "Fish Food",
      price: "19.99",
      image: "/images/products/fish-food.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-y-auto bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 bg-white z-30 px-4 py-4 shadow-sm ">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-2xl hover:text-orange-500 transition-colors text-black"
          >
            ☰
          </button>
          <h1 className="text-3xl font-bold text-black">Shop by pet</h1>
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
            <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-black">
              {products.map((product) => (
                <div
                  key={product.id}
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
                      <span className="product-badge absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                    <button className="product-favorite absolute top-2 right-2 text-orange-500 hover:scale-110 transition-transform">
                      ♡
                    </button>
                  </div>
                  <div className="product-info mt-4 space-y-1">
                    <h3 className="product-name text-sm font-medium line-clamp-2 text-black">
                      {product.name}
                    </h3>
                    <p className="product-price text-black font-semibold ">
                      ${product.price}
                    </p>
                    <button className="product-add-cart w-full mt-2 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              className={`px-3 py-1 rounded ${
                currentPage === 1 ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              1
            </button>
            <Link href="/Shop/H2">
              <button
                className={`px-3 py-1 rounded ${
                  currentPage === 2 ? "bg-orange-500 text-white" : "bg-gray-200"
                }`}
              >
                2
              </button>
            </Link>
            <button className="ml-4 text-gray-600">Next ›</button>
          </div>
        </div>
      </div>
    </div>
  );
}
