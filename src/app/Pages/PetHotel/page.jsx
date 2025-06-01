import React from "react";
import Image from "next/image";
import Link from "next/link";
import Benner from "@/app/asset/Clinic/Benner.png";
import CatTower from "@/app/asset/Clinic/cat-tower.jpg";
import PetCage from "@/app/asset/Clinic/pet-cage.jpg";
import PetCare from "@/app/asset/Clinic/pet-care.jpg";
import PetBowls from "@/app/asset/Clinic/pet-bowls.jpg";

const PetHotel = () => {
  return (
    <div className="min-h-screen w-full bg-[#f3f3f3]">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section - Full Width */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[600px] mb-8 sm:mb-12 rounded-none overflow-hidden -mx-4">
          <Image
            src={Benner}
            fill
            className="object-cover"
            alt="Hero"
            priority
          />
          <div className="absolute inset-0 flex items-center px-4 sm:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white text-shadow leading-tight">
              Leave your <br />
              beloved pet <br />
              at our pet hotel
            </h1>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto">
          {/* About */}
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-black">
              about our pet hotel
            </h2>
            <p className="text-gray-700 text-base sm:text-lg px-4">
              We provide safe, comfortable and loving pet boarding services,
              <br className="hidden sm:block" />
              staffed by professional 24-hour caretakers.
            </p>
          </div>

          {/* Features + Pricing */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-12 mb-8 sm:mb-16">
            {/* Features */}
            <div className="flex-1 space-y-4 sm:space-y-6">
              {[
                "clean and air-conditioned cage",
                "animal toys",
                "regular playing schedule",
                "Daily report via WA",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <span className="bg-orange-500 text-white rounded-full w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold">
                    ✓
                  </span>
                  <p className="text-black text-base sm:text-lg">{feature}</p>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="flex-1 bg-orange-500 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">
                package price
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between border-b border-white/20 pb-2 sm:pb-3">
                  <span className="text-white text-base sm:text-lg">
                    daily package
                  </span>
                  <span className="text-white text-base sm:text-lg">
                    Rp50.000/h
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2 sm:pb-3">
                  <span className="text-white text-base sm:text-lg">
                    weekly package
                  </span>
                  <span className="text-white text-base sm:text-lg">
                    Rp300.000
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2 sm:pb-3">
                  <span className="text-white text-base sm:text-lg">
                    monthly package
                  </span>
                  <span className="text-white text-base sm:text-lg">
                    Rp1.300.000
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery and FAQ Section */}
          <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-16 mb-8 sm:mb-16">
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full md:w-[400px]">
              {[CatTower, PetCage, PetCare, PetBowls].map((img, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[180px] aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`Gallery ${index}`}
                    width={180}
                    height={180}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Research Button and FAQ */}
            <div className="flex-1 space-y-6 sm:space-y-8">
              <Link href="/Pages/Revervasion">
                <button className="w-full bg-orange-500 text-white text-lg sm:text-xl py-4 sm:py-5 rounded-lg hover:bg-orange-600 transition-duration-300">
                  research now
                </button>
              </Link>

              <div>
                <h3 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6 text-black">
                  FAQ(FREQUENTLY ASKED QUESTIONS)
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Do animals bring their own food?",
                    "Is there a doctor for animals?",
                    "what if animals don't get along with each other?",
                  ].map((question, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3"
                    >
                      <span className="text-orange-500 text-2xl sm:text-3xl font-bold">
                        +
                      </span>
                      <p className="text-gray-800 text-base sm:text-lg">
                        {question}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetHotel;
