"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/app/asset/NavbarLogo/NavbarLogo.jpg";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdLabel,
  MdShoppingCart,
  MdPeople,
  MdLocalHospital,
  MdHotel,
  MdLogout,
} from "react-icons/md";

export default function AdminSidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const pathname = usePathname();

  const sidebarItems = [
    {
      name: "Dashboard",
      icon: <MdDashboard className="text-2xl" />,
      path: "/Admin/dashboard",
    },
    {
      name: "Produk",
      icon: <MdLabel className="text-2xl" />,
      path: "/Admin/produk",
    },
    {
      name: "Pesanan",
      icon: <MdShoppingCart className="text-2xl" />,
      path: "/Admin/pesanan",
    },
    {
      name: "Pelanggan",
      icon: <MdPeople className="text-2xl" />,
      path: "/Admin/pelanggan",
    },
    {
      name: "Klinik",
      icon: <MdLocalHospital className="text-2xl" />,
      path: "/Admin/klinik",
    },
    {
      name: "Hotel",
      icon: <MdHotel className="text-2xl" />,
      path: "/Admin/hotel",
    },
  ];

  // Update activeItem berdasarkan pathname saat ini
  useEffect(() => {
    const currentItem = sidebarItems.find(
      (item) => pathname === item.path || pathname.startsWith(item.path)
    );
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [pathname]);

  const sidebarVariants = {
    hidden: { x: -250 },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      className="h-screen w-64 bg-white shadow-lg fixed left-0 top-0"
    >
      {/* Logo Section */}
      <motion.div
        className="flex items-center gap-3 p-6 border-b"
        variants={itemVariants}
      >
        <Image
          src={Logo}
          alt="Sentra Petshop Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-xl font-bold text-gray-800">Sentra Petshop</span>
      </motion.div>

      {/* Navigation Items */}
      <nav className="p-4 space-y-2">
        {sidebarItems.map((item, index) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            whileHover={{ x: 10 }}
            custom={index}
          >
            <Link href={item.path}>
              <div
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors
                  ${
                    activeItem === item.name
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:bg-orange-100"
                  }`}
                onClick={() => setActiveItem(item.name)}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Logout Button */}

        <motion.div
          variants={itemVariants}
          whileHover={{ x: 10 }}
          className="pt-4 mt-4 border-t"
        >
          <Link href="/Home">
            <button
              className="flex items-center gap-3 p-3 w-full rounded-lg text-gray-700 hover:bg-red-100 transition-colors"
              onClick={() => {
                /* Add logout logic */
              }}
            >
              <MdLogout className="text-2xl" />
              <span className="font-medium">Logout</span>
            </button>
          </Link>
        </motion.div>
      </nav>
    </motion.div>
  );
}
