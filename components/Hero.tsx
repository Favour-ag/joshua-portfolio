"use client";

import React from "react";
import { ModeToggle } from "./ui/toggle-mode";
import Sidebar from "@/components/Sidebar";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen bg-white dark:bg-[#060A0F] text-black dark:text-white font-sans overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
        <h1 className="text-4xl md:text-7xl font-bold">
          Welcome to My Universe
        </h1>
        <p className="text-xl md:text-2xl">
          Designing Beyond The World For{" "}
          <span className="text-blue-500">YOU</span>
        </p>
      </div>

      {/* Mode Toggle */}
      <div className="z-10 absolute top-1/2 right-4 transform -translate-y-1/2">
        <ModeToggle />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-gray-300 rounded-full bottom-1/3 right-1/3 animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-1/3 right-1/4 animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeroSection;
