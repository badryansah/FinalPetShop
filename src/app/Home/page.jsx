"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar/page";
import { motion } from "framer-motion";

export default function Page() {
  const router = useRouter();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <motion.main
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="flex-1 flex flex-col items-center justify-center px-6"
      >
        <div className="text-center max-w-2xl">
          <motion.h2
            variants={fadeInUp}
            className="text-orange-500 text-2xl font-bold"
          >
            Welcome to
          </motion.h2>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl font-extrabold text-gray-900 leading-tight my-4"
          >
            Sentra Pet Clinic
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-700 text-lg mx-auto mb-8"
          >
            Kami peduli dengan hewan peliharaan Anda. Rasa cinta kami terhadap
            hewan mendorong kami untuk melakukan yang terbaik.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/Clinic")}
            className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-200"
          >
            find more
          </motion.button>
        </div>
      </motion.main>
    </div>
  );
}
