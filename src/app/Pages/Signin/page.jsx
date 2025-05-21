"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import Logo from "@/app/asset/NavbarLogo/NavbarLogo.jpg";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = async () => {
    if (!email || !password || !username) return;

    setIsLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/Signin", {
        email: email,
        password: password,
        username: username,
      });

      console.log("Sign in sukses:", response.data);
      // bisa redirect setelah sign in sukses
    } catch (error) {
      console.error("Sign in gagal:", error.message);
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
          Sign in
        </h2>

        <div className="space-y-4 sm:space-y-6">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username Anda"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-800 bg-gray-50 text-sm sm:text-base"
            />
          </div>

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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-800 bg-gray-50 text-sm sm:text-base"
            />
          </div>

          <div>
            <button
              onClick={handleSignin}
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 sm:py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center text-sm sm:text-base mt-2"
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
              {isLoading ? "Processing..." : "Sign in"}
            </button>
          </div>

          <div className="relative flex py-2 sm:py-3 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-3 text-gray-500 text-xs sm:text-sm">
              atau
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <Link href="/Pages/Login">
            <button className="w-full bg-transparent border border-orange-500 hover:bg-orange-50 text-orange-600 font-semibold py-2 sm:py-3 px-4 rounded-lg transition duration-200 text-sm sm:text-base">
              Login
            </button>
          </Link>

          <div className="mt-4 sm:mt-6 text-center">
            <span className="text-gray-600 text-sm">Sudah punya akun? </span>
            <Link
              href="/Pages/Login"
              className="text-orange-500 hover:text-orange-600 font-medium text-sm"
            >
              Login di sini
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
