"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdArrowBack, MdLock } from "react-icons/md";
import gopayImage from "../Shopasset/Gopay.png";
import ovoImage from "../Shopasset/ovo.png";
import danaImage from "../Shopasset/DANA.png";
import mandiriImage from "../Shopasset/Mandiri.png";
import bcaImage from "../Shopasset/BCA.png";
import Link from "next/link";

export default function PaymentPage() {
  // Helper function to format currency to IDR
  const formatToRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Sample order items with prices in Rupiah
  const orderItems = [
    { name: "Cat cage", price: 550000 },
    { name: "Cat feeding place", price: 300000 },
    { name: "Cat food (cleo)", price: 1450000 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const discount = 0.2; // 20% discount
  const total = subtotal * (1 - discount);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Payment Methods */}
          <div className="space-y-6">
            {/* Payment Method Box */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="font-bold mb-6 text-black">Payment Method</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-gray-600">E-wallet</h3>
                  <div className="flex gap-4">
                    <button className="p-2 border rounded hover:border-orange-500">
                      <Image
                        src={gopayImage}
                        alt="Gopay"
                        width={80}
                        height={30}
                      />
                    </button>
                    <button className="p-2 border rounded hover:border-orange-500">
                      <Image src={ovoImage} alt="OVO" width={80} height={30} />
                    </button>
                    <button className="p-2 border rounded hover:border-orange-500">
                      <Image
                        src={danaImage}
                        alt="DANA"
                        width={80}
                        height={30}
                      />
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-gray-600">Credit card</h3>
                  <div className="flex gap-4">
                    <button className="p-2 border rounded hover:border-orange-500">
                      <Image
                        src={mandiriImage}
                        alt="Mandiri"
                        width={80}
                        height={30}
                      />
                    </button>
                    <button className="p-2 border rounded hover:border-orange-500">
                      <Image src={bcaImage} alt="BCA" width={80} height={30} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Payment Box */}
            <div className="bg-white rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-gray-600">Card payment</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full p-3 pl-10 border rounded bg-gray-50 text-black"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="mb-2 text-gray-600">Expiry date</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full p-3 pl-10 border rounded bg-gray-50 text-black"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-gray-600">CVC/CVV</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="000"
                        className="w-full p-3 pl-10 border rounded bg-gray-50 text-black"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2">
                        <MdLock className="w-5 h-5 text-gray-400" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h2 className="font-bold mb-4 text-black">List item</h2>
              <div className="space-y-2">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between text-black">
                    <span>- {item.name}</span>
                    <span>{formatToRupiah(item.price)}</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-4">
                  <div className="flex justify-between font-bold text-black">
                    <span>Total</span>
                    <div className="text-right">
                      <div>{formatToRupiah(total)}</div>
                      <div className="text-sm text-red-500">-20%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-center text-black">
                <span>Today you pay (Rupiah)</span>
                <span className="font-bold">{formatToRupiah(total)}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/Shop/Keranjang">
                <button className="px-6 py-3 border rounded hover:bg-gray-50 text-black">
                  <MdArrowBack className="inline-block mr-1" /> Back
                </button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-orange-500 text-white py-3 rounded font-medium"
              >
                BUY IT NOW
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
