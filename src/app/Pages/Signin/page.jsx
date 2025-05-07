"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/Signin", {
        email: email,
        password: password,
        username: username, // Changed from Username to username
      });

      console.log("Sign in sukses:", response.data);
      // bisa redirect setelah login sukses
    } catch (error) {
      console.error("Sign in gagal:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg px-10 py-8 w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-8 text-gray-800">
          Sign in
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Fixed: use setUsername
            placeholder="Username" // Fixed placeholder text
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email" // Changed to email type
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
          />
        </div>
        <Link href="Login/">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-200">
            Login
          </button>
        </Link>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Sudah punya akun?{" "}
            <Link
              href="/Pages/Login"
              className="text-orange-500 hover:underline"
            >
              Login di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
