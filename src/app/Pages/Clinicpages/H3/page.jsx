"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar/page";
import ClinicImage from "@/app/asset/ClinicAsset/Clinic3.png";

export default function PemeriksaanKesehatanPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-16 text-black  ">
          Vaksinasi
        </h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="rounded-lg overflow-hidden shadow-lg w-full md:w-1/2">
            <Image
              src={ClinicImage}
              alt="Klinik Hewan"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <p className="text-xl text-gray-800 leading-relaxed mb-8">
              Dokter Hewan kami menyediakan rekomendasi nutrisi, perawatan gigi,
              vaksinasi, pencegahan parasit, dan saran kesehatan yang
              disesuaikan dengan kondisi dan risiko penyakit hewan peliharaan.
            </p>

            {/* Registration Button */}
            <div className="flex justify-start">
              <Link
                href="/Pages/Registrasi"
                className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition-colors"
              >
                Registrasi
              </Link>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-20 max-w-6xl mx-auto">
          <Link
            href="/Home"
            className="border border-gray-300 text-gray-600 px-6 py-2 rounded-md flex items-center gap-2 w-max"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Link>
        </div>
      </main>
    </div>
  );
}
