"use client";
import React from "react";
import Image from "next/image";
import WhatsappIcon from "@/app/asset/Clinic/whatsapp-icon.png";

const Reservation = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6285244304050";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] px-4 py-8 sm:py-16">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16 text-black text-center sm:text-left">
          reserve a place for
          <br />
          your beloved pet !
        </h1>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-6 text-black">
              <input
                type="text"
                placeholder="Nama pemilik"
                className="w-full p-3 sm:p-4 rounded-lg bg-[#e0e0e0] placeholder-black text-sm sm:text-base"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 sm:p-4 rounded-lg bg-[#e0e0e0] placeholder-black text-sm sm:text-base"
                required
              />
              <input
                type="text"
                placeholder="Nama Hewan"
                className="w-full p-3 sm:p-4 rounded-lg bg-[#e0e0e0] placeholder-black text-sm sm:text-base"
                required
              />
              <input
                type="date"
                placeholder="Tanggal check in"
                className="w-full p-3 sm:p-4 rounded-lg bg-[#e0e0e0] placeholder-black text-sm sm:text-base"
                required
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6 text-black">
              <input
                type="tel"
                placeholder="No. Telephone"
                className="w-full p-3 sm:p-4 rounded-lg bg-[#e0e0e0] placeholder-black text-sm sm:text-base"
                required
              />
              <select
                className="w-full p-3 sm:p-4 rounded-lg bg-[#e0e0e0] text-black text-sm sm:text-base"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Hewan
                </option>
                <option value="cat">Kucing</option>
                <option value="dog">Anjing</option>
              </select>
              <input
                type="date"
                placeholder="Tanggal check out"
                className="w-full p-3 sm:p-4 rounded-lg bg-[#e0e0e0] placeholder-black text-sm sm:text-base"
                required
              />
              <textarea
                placeholder="Permintaan khusus"
                className="w-full p-3 sm:p-4 rounded-lg bg-[#e0e0e0] placeholder-black resize-none text-sm sm:text-base"
                rows="1"
              />
            </div>
          </div>

          {/* Reservation Button */}
          <div className="text-center mb-8">
            <button
              type="submit"
              className="w-full sm:w-auto bg-orange-500 text-white text-lg sm:text-xl font-medium px-8 sm:px-16 py-3 sm:py-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
              reservasi
            </button>
          </div>
        </form>

        {/* WhatsApp Button */}
        <div
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-2 border-2 border-black rounded-lg p-3 sm:p-4 cursor-pointer hover:bg-gray-100 transition-colors mx-auto"
        >
          <Image
            src={WhatsappIcon}
            alt="WhatsApp"
            width={24}
            height={24}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span className="text-xl sm:text-2xl text-black">Whatsapp</span>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
