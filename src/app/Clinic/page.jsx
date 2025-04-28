import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white text-center px-6">
      <h2 className="text-orange-500 text-2xl md:text-3xl font-semibold mb-2 animate-fade-in">
        Welcome to
      </h2>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in delay-100">
        Sentra Pet Clinic
      </h1>
      <p className="text-base md:text-lg text-gray-700 max-w-xl mb-8 animate-fade-in delay-200">
        Kami peduli dengan hewan peliharaan Anda. Rasa cinta kami terhadap hewan
        mendorong kami untuk melakukan yang terbaik.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out animate-fade-in delay-300">
        find more
      </button>
    </div>
  );
};

export default HeroSection;
