"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar/page";
import ClinicImage from "@/app/asset/ClinicAsset/Clinic3.png";
import { motion } from "framer-motion";

export default function PemeriksaanKesehatanPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <motion.main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Title Section */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-16 text-black"
        >
          Vaksinasi
        </motion.h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg w-full md:w-1/2"
            variants={imageVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={ClinicImage}
              alt="Klinik Hewan"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div className="w-full md:w-1/2" variants={fadeInUp}>
            <motion.p
              className="text-xl text-gray-800 leading-relaxed mb-8"
              variants={fadeInUp}
            >
              Dokter Hewan kami menyediakan rekomendasi nutrisi, perawatan gigi,
              vaksinasi, pencegahan parasit, dan saran kesehatan yang
              disesuaikan dengan kondisi dan risiko penyakit hewan peliharaan.
            </motion.p>

            {/* Registration Button */}
            <motion.div className="flex justify-start" variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/Pages/Registrasi"
                  className="inline-block bg-orange-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition-colors"
                >
                  Registrasi
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Back Button */}
        <motion.div className="mt-20 max-w-6xl mx-auto" variants={fadeInUp}>
          <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/Home"
              className="border border-gray-300 text-gray-600 px-6 py-2 rounded-md flex items-center gap-2 w-max hover:bg-gray-50"
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
      </motion.main>
    </div>
  );
}
