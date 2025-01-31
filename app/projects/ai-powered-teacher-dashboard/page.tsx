"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { TbMessage2Filled } from "react-icons/tb";
import { IoTv } from "react-icons/io5";
import { ModeToggle } from "@/components/ui/toggle-mode";

const navItems = [
  { href: "/", label: "Home", icon: IoMdHome },
  { href: "/about", label: "About", icon: FaUser },
  { href: "/contact", label: "Say Hi", icon: TbMessage2Filled },
  { href: "/work", label: "My Work", icon: IoTv },
];

const ProjectDetails: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen bg-black text-white font-sans">
      {/* Sidebar Navigation */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col space-y-6">
        <nav className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`p-3 rounded-lg transition-colors ${
                pathname === item.href ? "text-white" : "text-gray-500"
              }`}
            >
              <div className="flex flex-col items-center">
                <item.icon className="w-6 h-6" />
                <span className="text-sm">{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          AI-Powered Teacher Dashboard
        </h1>

        <p className="text-gray-400 text-center mt-4">
          "As an instructor, managing student performance feels overwhelming at
          times..."
        </p>

        {/* Image */}
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/teacher-dashboard.png"
            alt="Teacher Dashboard"
            width={700}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Project Overview */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Project Overview</h2>
          <p className="text-gray-400 mt-4">
            Many educators struggle with tracking student performance...
          </p>
        </section>

        {/* Audience & Challenge */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold">The Audience</h3>
            <p className="text-gray-400 mt-2">
              Primary users: Instructors, teachers, and academic educators...
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">The Challenge</h3>
            <p className="text-gray-400 mt-2">
              Instructors lack real-time visibility to identify struggling
              students...
            </p>
          </div>
        </div>

        {/* Key Findings */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Key Findings</h2>
          <p className="text-gray-400 mt-4">
            Based on our research, we identified key issues...
          </p>
        </section>

        {/* Solution */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">The Solution</h2>
          <ul className="mt-4 text-gray-400 list-disc list-inside">
            <li>AI-powered grade prediction</li>
            <li>Visualized performance metrics</li>
            <li>Automated AI-driven recommendations</li>
            <li>Focused alerts for at-risk students</li>
          </ul>
        </section>

        {/* Data Visualizations */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Data Insights</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Image
              src="/images/grade-prediction.png"
              alt="Grade Prediction Analysis"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/images/performance-metrics.png"
              alt="Performance Metrics"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center border-t border-gray-700 pt-6">
          <p className="text-gray-500">© 2025 Joshua | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default ProjectDetails;
