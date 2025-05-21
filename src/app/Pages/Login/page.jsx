"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/asset/NavbarLogo/NavbarLogo.jpg";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) return;

    setIsLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });

      console.log("Login sukses:", response.data);
      // bisa redirect setelah login sukses
    } catch (error) {
      console.error("Login gagal:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-gray-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-xl px-4 py-8 w-full max-w-md border-t-4 border-orange-500 sm:px-6 md:px-8 md:py-10">
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center">
            <Image
              src={Logo}
              alt="Logo"
              width={48}
              height={48}
              className="w-15 h-15"
            />
          </div>
        </div>

        <h2 className="text-center text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-800">
          Welcome Back
        </h2>

        <div className="space-y-4 sm:space-y-6">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-800 bg-gray-50 text-sm sm:text-base"
            />
          </div>

          <div className="relative">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a
                href="Signin/"
                className="text-xs text-orange-500 hover:text-orange-600"
              >
                Lupa password?
              </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-800 bg-gray-50 text-sm sm:text-base"
            />
          </div>

          <div>
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 sm:py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center text-sm sm:text-base"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : null}
              {isLoading ? "Processing..." : "Login"}
            </button>
          </div>

          <div className="relative flex py-2 sm:py-3 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-3 text-gray-500 text-xs sm:text-sm">
              atau
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <Link href="/Home">
            <button className="w-full bg-transparent border border-orange-500 hover:bg-orange-50 text-orange-600 font-semibold py-2 sm:py-3 px-4 rounded-lg transition duration-200 text-sm sm:text-base">
              Lanjut ke Home
            </button>
          </Link>

          <div className="mt-4 sm:mt-6 text-center">
            <span className="text-gray-600 text-sm">Login sebagai </span>
            <Link
              href="/Admin/dashboard"
              className="text-orange-500 hover:text-orange-600 font-medium text-sm"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
