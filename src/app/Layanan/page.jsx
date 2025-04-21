"use client";
import React from 'react';

export default function LayananKami() {
  const layanan = [
    {
      title: 'Pemeriksaan Kesehatan',
      image: 'https://via.placeholder.com/300x200/87CEFA/000000?text=Health', // Ganti dengan gambar asli
    },
    {
      title: 'Grooming',
      image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Grooming',
    },
    {
      title: 'Vaksinasi',
      image: 'https://via.placeholder.com/300x200/FFA500/000000?text=Vaksin',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-12">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
        LAYANAN <span className="text-orange-500">KAMI</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {layanan.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
          >
            <div
              className="relative h-48 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-3 py-1 rounded-full">
                News
              </span>
            </div>
            <div className="p-4 text-center text-sm font-medium text-gray-700">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
