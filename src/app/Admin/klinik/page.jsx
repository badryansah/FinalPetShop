"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "../Siderbar_admin/page";
import { MdSearch } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

export default function KlinikPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Sample clinic data
  const clinicData = [
    {
      name: "SITI VELOCITY",
      email: "sti@gmail.com",
      phone: "00098782",
      address: "Jakarta",
      totalOrders: 12,
      status: "Dibayar",
    },
    {
      name: "SITI VELOCITY",
      email: "",
      phone: "00098782",
      address: "Jakarta",
      totalOrders: 12,
      status: "Dibayar",
    },
    {
      name: "SITI VELOCITY",
      email: "",
      phone: "00098782",
      address: "Jakarta",
      totalOrders: 12,
      status: "Dibayar",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Klinik</h1>
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <FaUserCircle className="h-8 w-8 text-gray-500" />
              <span className="font-medium text-gray-700">Admin</span>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Clinic Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Nama
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Nomor Hp
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Alamat
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Total Pesanan
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clinicData.map((clinic, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {clinic.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 underline">
                    {clinic.email && (
                      <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {clinic.phone}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {clinic.address}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {clinic.totalOrders}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                      {clinic.status}
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
