"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "../Siderbar_admin/page";
import { MdEdit, MdDelete, MdSearch } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa"; // Menambahkan import FaUserCircle
import Link from "next/link";
import Image from "next/image";

export default function OrderPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Semua Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Data pesanan contoh
  const [orders, setOrders] = useState([
    {
      id: "#1234",
      customer: "SITI VELOCITY",
      date: "24 APRL 2000",
      total: 299000,
      status: "Pending",
    },
    {
      id: "#1234",
      customer: "SITI VELOCITY",
      date: "24 APRL 2000",
      total: 299000,
      status: "Pending",
    },
    {
      id: "#1234",
      customer: "SITI VELOCITY",
      date: "24 APRL 2000",
      total: 299000,
      status: "Pending",
    },
    {
      id: "#1235",
      customer: "BUDI SANTOSO",
      date: "25 APRL 2000",
      total: 450000,
      status: "Selesai",
    },
    {
      id: "#1236",
      customer: "DEWI PUTRI",
      date: "26 APRL 2000",
      total: 175000,
      status: "Dikirim",
    },
  ]);

  // Status pesanan yang tersedia
  const statusOptions = [
    "Semua Status",
    "Pending",
    "Dikirim",
    "Selesai",
    "Dibatalkan",
  ];

  // Format harga ke format Rupiah
  const formatRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Filter pesanan berdasarkan pencarian dan status
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "Semua Status" || order.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  // Pagination
  const ordersPerPage = 5;
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  // Handle delete click
  const handleDeleteClick = (order) => {
    setSelectedOrder(order);
    setShowDeleteModal(true);
  };

  // Handle confirm delete
  const handleConfirmDelete = () => {
    const updatedOrders = orders.filter(
      (order) =>
        order.id !== selectedOrder.id ||
        order.customer !== selectedOrder.customer
    );
    setOrders(updatedOrders);
    setShowDeleteModal(false);
    setSelectedOrder(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Pesanan</h1>
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <FaUserCircle className="h-8 w-8 text-gray-500" />
              <span className="font-medium text-gray-700">Admin</span>
            </Link>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Pelanggan
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Tanggal
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Total
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {formatRupiah(order.total)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Dikirim"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "Selesai"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-3 py-1 bg-orange-500 text-white rounded-lg"
                      >
                        Edit
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg"
                        onClick={() => handleDeleteClick(order)}
                      >
                        Hapus
                      </motion.button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-8 h-8 flex items-center justify-center rounded-md ${
                      currentPage === page
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </motion.button>
                )
              )}
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedOrder && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowDeleteModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white bg-opacity-90 rounded-lg p-6 w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Konfirmasi Hapus
            </h2>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus pesanan {selectedOrder.id} dari{" "}
              {selectedOrder.customer}?
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
                onClick={() => setShowDeleteModal(false)}
              >
                Batal
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
                onClick={handleConfirmDelete}
              >
                Hapus
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
