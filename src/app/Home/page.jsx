"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Foto from "@/app/asset/image.png";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-orange-500 text-2xl font-bold mb-3">Welcome to</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Sentra PetShop
            </h1>
            <p className="text-gray-700 text-base md:text-lg max-w-md mx-auto md:mx-0">
              Tempat terbaik untuk sahabat berbulu Anda! Temukan produk dan layanan terbaik
              untuk hewan peliharaan kesayangan Anda di sini.
            </p>
            <button
              onClick={() => router.push('/Login')}
              className="mt-8 px-6 py-3 bg-orange-500 text-white font-semibold rounded-2xl hover:bg-orange-600 transition duration-200"
            >
              Login
            </button>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[40%] shadow-2xl" />
              <Image
                src={Foto}
                alt="Pet Illustration"
                fill
                className="rounded-[40%] object-cover z-10"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
