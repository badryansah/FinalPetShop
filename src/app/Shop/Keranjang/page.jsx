"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdArrowBack, MdAdd, MdRemove } from "react-icons/md";

export default function BasketPage() {
  // Helper function to format currency to IDR
  const formatToRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  // Sample cart data with prices in Rupiah
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "cat cage,for cat",
      price: 550000,
      image: "/cat-cage.jpg",
      quantity: 1,
      stock: "1,999... million",
      selected: false,
    },
    {
      id: 2,
      name: "cat feeding place",
      price: 300000,
      image: "/cat-feeding.jpg",
      quantity: 1,
      stock: "1,999... million",
      selected: false,
    },
    {
      id: 3,
      name: "cat food",
      price: 750000,
      image: "/cat-food.jpg",
      quantity: 1,
      stock: "1,999... million",
      selected: true,
      discount: 550000,
    },
  ]);

  const [allSelected, setAllSelected] = useState(false);

  // Calculate total
  const total = cartItems.reduce((sum, item) => {
    if (item.selected) {
      return sum + (item.discount || item.price) * item.quantity;
    }
    return sum;
  }, 0);

  // Handle item selection
  const toggleItemSelection = (id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    );
  };

  // Handle select all
  const toggleSelectAll = () => {
    const newSelectedState = !allSelected;
    setAllSelected(newSelectedState);
    setCartItems(
      cartItems.map((item) => ({
        ...item,
        selected: newSelectedState,
      }))
    );
  };

  // Update quantity
  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change); // Prevent negative quantities
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Handle checkout
  const handleCheckout = () => {
    const selectedItems = cartItems.filter((item) => item.selected);
    if (selectedItems.length === 0) {
      alert("Silakan pilih item yang akan dibeli");
      return;
    }

    const orderSummary = selectedItems.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.discount || item.price,
      total: (item.discount || item.price) * item.quantity,
    }));

    const totalAmount = total + 60000; // Add shipping cost

    console.log("Order Summary:", orderSummary);
    console.log(
      "Total Amount (including shipping):",
      formatToRupiah(totalAmount)
    );

    // Here you would typically:
    // 1. Send the order to your backend
    // 2. Clear selected items from cart
    // 3. Redirect to payment page
    alert("Melanjutkan ke pembayaran: " + formatToRupiah(totalAmount));
  };

  // Handle back navigation
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={handleBack} className="text-black">
          <MdArrowBack className="text-2xl" />
        </button>
        <h1 className="text-xl font-semibold text-black">
          Keranjang ({cartItems.length})
        </h1>
      </div>

      {/* Select All */}
      <div className="bg-white p-4 rounded-lg mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={toggleSelectAll}
            className="w-5 h-5 rounded border-black text-orange-500 focus:ring-orange-500"
          />
          <span className="text-black">all item</span>
        </div>
        <div className="text-right">
          <div className="font-semibold">{formatToRupiah(total)}</div>
          <div className="text-sm text-black">
            ongkir: {formatToRupiah(60000)}
          </div>
          <div className="text-xs text-red-500">diskon50</div>
        </div>
      </div>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg mb-4">
          <div className="flex gap-4">
            <input
              type="checkbox"
              checked={item.selected}
              onChange={() => toggleItemSelection(item.id)}
              className="w-5 h-5 mt-8 rounded border-black text-orange-500 focus:ring-orange-500"
            />
            <div className="w-24 h-24 relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-black">{item.name}</h3>
              <div className="text-sm text-black mb-2">
                {formatToRupiah(item.price)}
              </div>
              {item.discount && (
                <div className="text-xs text-red-500">
                  diskon:{formatToRupiah(item.discount)}
                </div>
              )}
              <div className="text-xs text-black">{item.stock}</div>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="p-1 rounded-md bg-gray-100 hover:bg-gray-200 text-black"
                >
                  <MdRemove />
                </button>
                <span className="w-8 text-center text-black">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="p-1 rounded-md bg-gray-100 hover:bg-gray-200 text-black"
                >
                  <MdAdd />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Checkout Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Link href="Payment/">
          <motion.button
            onClick={handleCheckout}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-orange-500 text-white rounded-lg font-medium"
          >
            Check out({cartItems.filter((item) => item.selected).length})
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
