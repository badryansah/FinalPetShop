"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar/page";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero Section with similar content to your image */}
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h2 className="text-orange-500 text-2xl font-bold">Welcome to</h2>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight my-4">
            Sentra Pet Clinic
          </h1>
          <p className="text-gray-700 text-lg mx-auto mb-8">
            Kami peduli dengan hewan peliharaan Anda. Rasa cinta kami terhadap
            hewan mendorong kami untuk melakukan yang terbaik.
          </p>

          <button
            onClick={() => router.push("/Clinic")}
            className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-200"
          >
            find more
          </button>
        </div>
      </main>
    </div>
  );
}
