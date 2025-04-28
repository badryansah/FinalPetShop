"use client";
import React, { useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: email,
        password: password
      });

      console.log('Login sukses:', response.data);
      // bisa redirect setelah login sukses
    } catch (error) {
      console.error('Login gagal:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg px-10 py-8 w-full max-w-md">
        <h2 className="text-center text-xl font-semibold mb-8 text-gray-800">Sign in</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="text-right mb-6">
          <a href="#" className="text-sm text-orange-500 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
}
