"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar/page";

const servicesData = [
  {
    id: 1,
    title: "Pemeriksaan Kesehatan",
    image: "/asset/Clinic/Lynkam1.png",
    link: "/Pages/Clinicpages/H1",
    badge: "News",
  },
  {
    id: 2,
    title: "Grooming",
    image: "/asset/Clinic/Lynkami2.png",
    link: "/Pages/Clinicpages/H2",
    badge: "News",
  },
  {
    id: 3,
    title: "Vaksinasi",
    image: "/asset/Clinic/Lynkami3.png",
    link: "/Pages/Clinicpages/H3",
    badge: "News",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center text-black">
            LAYANAN <span className="text-orange-500">KAMI</span>
          </h1>
        </div>

        {/* Services Cards */}
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-6 mb-16">
          {servicesData.map((service) => (
            <Link
              href={service.link}
              key={service.id}
              className="w-full md:w-80"
            >
              <div className="rounded-lg overflow-hidden mb-4 relative cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-black text-white text-xs font-bold px-4 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={320}
                  height={176}
                  className="w-full h-44 object-cover rounded-lg"
                />
                <h3 className="text-lg font-medium text-gray-700 text-center mt-2">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation */}
        <div className="w-full max-w-6xl flex justify-between">
          <Link
            href="/Home"
            className="border border-gray-300 text-gray-600 px-6 py-2 rounded-md flex items-center gap-2"
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
      </div>
    </div>
  );
}
