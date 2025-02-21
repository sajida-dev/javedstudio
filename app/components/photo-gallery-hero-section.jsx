"use client";

import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white leading-tight">
          Creative <br /> Photography
        </h1>
        <p className="text-sm text-gray-500 mt-4 uppercase tracking-wide">
          Currently Available for Photography Work
        </p>
        <Link
          href="#contact"
          className="mt-6 inline-block bg-pink-500 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-pink-600 transition-all"
        >
          BOOK SCHEDULE
        </Link>
      </div>
      
      {/* Photo Gallery Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        <div className="relative group">
          <img
            src="/assets/02.png"
            alt="Portrait 1"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="relative group">
          <img
            src="/assets/02.png"
            alt="Portrait 2"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="relative group">
          <img
            src="/assets/02.png"
            alt="Portrait 3"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Background Large Text */}
      <h2 className="absolute bottom-10 md:bottom-5 left-1/2 -translate-x-1/2 text-[100px] md:text-[150px] font-bold text-gray-200 dark:text-gray-700 opacity-50">
        Photo Gallery
      </h2>
    </section>
  );
};

export default HeroSection;
