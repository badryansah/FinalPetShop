"use client";
import React from 'react';
import Navbar from '../Components/page'; // ganti path sesuai lokasi Navbar.js

export default function LayananKami() {
  const layanan = [
    {
      title: 'Pemeriksaan Kesehatan',
      image: 'https://via.placeholder.com/300x200/87CEFA/000000?text=Health',
    },
    {
      title: 'Grooming',
      image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Grooming',
    },
    {
      title: 'Vaksinasi',
      image: 'https://via.placeholder.com/300x200/FFA500/000000?text=Vaksin',
    },
    {
      title: 'PetHotel',
      image: 'https://via.placeholder.com/300x200/98FB98/000000?text=PetHotel',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-300 to-gray-200 px-4 py-10">
            <Navbar />

      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        LAYANAN <span className="text-orange-500">KAMI</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {layanan.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer hover:shadow-grey-400"
          >
            <div
              className="relative h-48 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-40 rounded-t-xl"></div>
              <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full z-10">
                {item.title.split(" ")[0]}
              </span>
            </div>
            <div className="p-5 text-center min-h-[140px] flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">Sayangi hewan Anda, seperti Anda menyayangi manusia.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}