"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "../Siderbar_admin/page";
import { MdSearch, MdHotel, MdPets, MdCalendarToday } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

export default function HotelPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Stats data
  const stats = [
    {
      title: "Kamar",
      value: "10",
      icon: <MdHotel className="text-2xl text-orange-500" />,
    },
    {
      title: "Hewan Menginap",
      value: "10",
      icon: <MdPets className="text-2xl text-orange-500" />,
    },
    {
      title: "Reservasi Hari Ini",
      value: "10",
      icon: <MdCalendarToday className="text-2xl text-orange-500" />,
    },
  ];

  // Sample hotel booking data
  const bookings = [
    {
      name: "SITI VELOCITY",
      pet: "Kucing",
      checkIn: "26 April 2025",
      checkOut: "26 April 2025",
      status: "Dipesan",
    },
    {
      name: "SITI VELOCITY",
      pet: "Kucing",
      checkIn: "26 April 2025",
      checkOut: "26 April 2025",
      status: "Dipesan",
    },
    {
      name: "SITI VELOCITY",
      pet: "Anjing",
      checkIn: "26 April 2025",
      checkOut: "26 April 2025",
      status: "Menginap",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Hotel</h1>
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <FaUserCircle className="h-8 w-8 text-gray-500" />
              <span className="font-medium text-gray-700">Admin</span>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.title}</p>
                </div>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Cari..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Nama Pemesan
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Hewan
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Tanggal Masuk
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Tanggal Keluar
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((booking, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {booking.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {booking.pet}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {booking.checkIn}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {booking.checkOut}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full 
                      ${
                        booking.status === "Menginap"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          </div>
    </div>
  );
}
