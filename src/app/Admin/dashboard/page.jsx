"use client";
import React from "react";
import { motion } from "framer-motion";
import AdminSidebar from "../Siderbar_admin/page";
import {
  MdHotel,
  MdLocalHospital,
  MdShoppingCart,
  MdPayment,
  MdNotifications,
  MdAdd,
  MdSettings,
} from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AdminDashboard() {
  // Sample data for the chart
  const salesData = [
    { day: "Sen", amount: 5000 },
    { day: "Sel", amount: 8000 },
    { day: "Rab", amount: 15000 },
    { day: "Kam", amount: 12000 },
    { day: "Jum", amount: 20000 },
    { day: "Sab", amount: 10000 },
    { day: "Ming", amount: 18000 },
  ];

  const statsCards = [
    {
      title: "Hotel",
      value: "1",
      icon: <MdHotel className="text-3xl text-black" />,
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Klinik",
      value: "1",
      icon: <MdLocalHospital className="text-3xl text-black" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Pesanan",
      value: "1",
      icon: <MdShoppingCart className="text-3xl text-black" />,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Pembayaran",
      value: "1",
      icon: <MdPayment className="text-3xl text-black" />,
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="bg-white p-4 shadow-sm flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-black hover:text-gray-900"
              >
                <MdNotifications className="text-2xl" />
              </motion.button>
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </span>
            <div className="flex items-center space-x-2">
              <FaUserCircle className="h-8 w-8 text-gray-500" />
              <span className="font-medium text-gray-700">Admin</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {statsCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`bg-white rounded-lg shadow-sm p-6 relative overflow-hidden`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm">{card.title}</p>
                    <h3 className="text-2xl font-bold mt-2 text-black">
                      {card.value}
                    </h3>
                  </div>
                  <div className="text-gray-400">{card.icon}</div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`}
                ></div>
              </motion.div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sales Chart */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-lg font-semibold mb-4 text-black">
                Total Penjualan Mingguan
              </h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="amount"
                      stroke="#F97316"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-lg font-semibold mb-4 text-black">
                Tindakan Cepat
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 bg-green-100 text-green-700 rounded-lg flex items-center justify-center gap-2"
                >
                  <MdAdd className="text-xl" /> Tambah Produk
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center gap-2"
                >
                  <MdSettings className="text-xl" /> Kelola Layanan
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
