"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Components/page"; // Pastikan pathnya sesuai

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-16 md:py-24">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-orange-500 text-2xl font-semibold mb-3">PetShop</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              A pet store with everything you need
            </h1>
            <p className="text-gray-700 text-base md:text-lg max-w-md mx-auto md:mx-0 mb-6">
            Kami peduli dengan hewan peliharaan Anda. Rasa cinta kami terhadap hewan mendorong kami untuk melakukan yang terbaik.
            </p>

            <button
              onClick={() => router.push('/Layanan')}
              className="mt-8 px-6 py-3 bg-orange-500 text-white font-semibold rounded-2xl hover:bg-orange-600 transition duration-200"
            >
              Find More
            </button>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[40%] flex items-center justify-center shadow-2xl relative">
              {/* Ganti dengan gambar yang relevan atau ikon */}
              <img 
                src="https://via.placeholder.com/300" 
                alt="Pet"
                className="w-full h-full object-cover rounded-[40%]"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
