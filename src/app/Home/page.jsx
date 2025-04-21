"use client"; 
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between">
        <div className="mb-12 md:mb-0">
          <h2 className="text-orange-500 text-xl font-semibold mb-2">Welcome to</h2>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Sentra PetShop</h1>
          <p className="text-gray-700 max-w-md mb-6">
            Kami peduli dengan hewan peliharaan Anda. Rasa cinta kami terhadap hewan mendorong kami untuk melakukan yang terbaik.
          </p>
          <Link href="/Login">
          <button
            onClick={() => router.push("/login")}
            className="bg-orange-400 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-500 transition"
          >
            Find More 
          </button>
            </Link>     
        </div>

        <div className="w-60 h-60 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[30%] flex items-center justify-center relative shadow-lg">
          {/* Gambar atau konten visual */}
        </div>
      </div>
    </div>
  );
}
