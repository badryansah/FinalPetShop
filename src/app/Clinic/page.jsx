"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar/page";
import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <motion.div
        className="flex-1 flex flex-col items-center justify-center py-12 px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="mb-12" variants={titleVariants}>
          <h1 className="text-4xl font-bold text-center text-black">
            LAYANAN <span className="text-orange-500">KAMI</span>
          </h1>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          className="w-full max-w-6xl flex flex-wrap justify-center gap-6 mb-16"
          variants={containerVariants}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="w-full md:w-80"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={service.link}>
                <div className="rounded-lg overflow-hidden mb-4 relative cursor-pointer">
                  <motion.div
                    className="absolute top-3 left-3 z-10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="bg-black text-white text-xs font-bold px-4 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={320}
                      height={176}
                      className="w-full h-44 object-cover rounded-lg"
                    />
                  </motion.div>
                  <motion.h3
                    className="text-lg font-medium text-gray-700 text-center mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="w-full max-w-6xl flex justify-between"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/Home"
              className="border border-gray-300 text-gray-600 px-6 py-2 rounded-md flex items-center gap-2 hover:bg-gray-50"
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
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
