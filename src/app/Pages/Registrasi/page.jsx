"use client";
import React, { useState } from "react";
import Navbar from "@/app/Components/Navbar/page";
import { motion } from "framer-motion";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <motion.div
        className="min-h-screen bg-gray-50 flex flex-col p-6 md:p-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="w-full text-center mb-4" variants={fadeIn}>
          <h1 className="text-3xl font-bold text-orange-500">Registrasi</h1>
        </motion.div>

        <div className="flex flex-col md:flex-row mt-20">
          {/* Left Side - Form */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col md:justify-center"
            variants={fadeIn}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <motion.div className="flex-1" variants={fadeIn}>
                    <label className="block text-gray-700 mb-2">
                      First Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </motion.div>
                  <motion.div className="flex-1" variants={fadeIn}>
                    <label className="block text-gray-700 mb-2">
                      Last Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </motion.div>
                </div>

                <motion.div variants={fadeIn}>
                  <label className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                    placeholder="E-mail address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </motion.div>

                <motion.div variants={fadeIn}>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-32 text-black"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0 flex flex-col justify-center"
            variants={fadeIn}
          >
            <motion.h2
              className="text-4xl font-bold mb-6 text-black"
              variants={fadeIn}
            >
              Feel free to contact us
            </motion.h2>
            <motion.p className="text-gray-600 mb-8" variants={fadeIn}>
              At et vehicula sodales est proin turpis pellentesque sinulla a
              aliquam amet rhoncus quisque eget sit. Sociis blandit et
              pellentesque aliquet at quisque tortor lacinia nullam
            </motion.p>

            <motion.div className="space-y-6" variants={staggerContainer}>
              {[
                { icon: "location", text: "Jl. Sultan allaudin" },
                { icon: "email", text: "sentrapetshop@gmail.com" },
                { icon: "phone", text: "+6295757975" },
                { icon: "time", text: "Mon - Fri: 10AM - 10PM" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  variants={fadeIn}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="bg-orange-500 p-3 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {/* Your existing SVG icons */}
                  </motion.div>
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
