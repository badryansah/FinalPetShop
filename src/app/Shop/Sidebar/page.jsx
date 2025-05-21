"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [priceRange, setPriceRange] = useState([0, 399]);

  const categories = [
    { name: "Furniture", count: 25 },
    { name: "Bowls", count: 12 },
    { name: "Clothing", count: 32 },
    { name: "Food", count: 90 },
    { name: "Toys", count: 75 },
    { name: "Sale", count: 21 },
  ];

  const brands = [
    { name: "Natural food", count: 285 },
    { name: "Pet care", count: 165 },
    { name: "Dogs friend", count: 380 },
    { name: "Pet food", count: 420 },
    { name: "Favorite pet", count: 185 },
    { name: "Green line", count: 320 },
  ];

  const tags = [
    "Dog food",
    "Cat food",
    "Natural",
    "Parrot",
    "Small dog",
    "Cat",
  ];

  const popularProducts = [
    {
      name: "Premium Dog Food",
      price: 19.99,
      image: "/images/products/dog-food.png",
    },
    {
      name: "Premium Cat Food",
      price: 20.99,
      image: "/images/products/cat-food.png",
    },
    { name: "Cat Bed", price: 50.0, image: "/images/products/cat-bed.png" },
    { name: "Dog Leash", price: 20.0, image: "/images/products/dog-leash.png" },
    { name: "Cat Bowl", price: 15.0, image: "/images/products/cat-bowl.png" },
  ];

  return (
    <div className="w-full bg-white text-black">
      {/* Sidebar Content */}
      <div className="p-4">
        {/* Filter by Categories */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-black">
            Filter by categories
          </h3>
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between mb-2"
            >
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-orange-500"
                />
                <span className="ml-2 text-black">{category.name}</span>
              </label>
              <span className="text-black text-sm">({category.count})</span>
            </div>
          ))}
        </div>

        {/* Filter by Price */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-black">Filter by Price</h3>
          <div className="px-2">
            <input
              type="range"
              min="0"
              max="399"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-2">
              <span className="text-black">
                Price: ${priceRange[0]} - ${priceRange[1]}
              </span>
            </div>
            <button className="mt-2 bg-black text-white px-4 py-1 rounded text-sm">
              Apply
            </button>
          </div>
        </div>

        {/* Filter by Brands */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-black">Filter by brands</h3>
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-between mb-2"
            >
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-orange-500"
                />
                <span className="ml-2 text-black">{brand.name}</span>
              </label>
              <span className="text-black text-sm">({brand.count})</span>
            </div>
          ))}
        </div>

        {/* Filter by Tags */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3 text-black">Filter by tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-black"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Popular Products */}
        <div>
          <h3 className="font-semibold mb-3 text-black">Popular products</h3>
          <div className="space-y-4">
            {popularProducts.map((product) => (
              <div key={product.name} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-black">
                    {product.name}
                  </h4>
                  <p className="text-sm text-black">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
