"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { TbMessage2Filled } from "react-icons/tb";
import { IoTv } from "react-icons/io5";

const navItems = [
  { href: "/", label: "Home", icon: IoMdHome },
  { href: "/about", label: "About", icon: FaUser },
  { href: "/contact", label: "Say Hi", icon: TbMessage2Filled },
  { href: "/work", label: "My Work", icon: IoTv },
];

const Sidebar: React.FC = () => {
  const { theme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  // Fix hydration issue by ensuring theme is correctly detected
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Check if dark mode is active (fallback to default dark mode)
  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  return (
    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col space-y-6">
      <div
        className={`flex flex-col items-center space-y-4 px-3 py-6 border rounded-full transition-colors duration-300 ${
          isDark ? "bg-[#080E14] text-white" : "bg-gray-100 text-black"
        }`}
      >
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-col">
          <div className="space-y-8">
            <div className="flex justify-center">
              <Link href="/" className="text-xl font-bold pt-4">
                JOSHUA
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "p-3 rounded-lg transition-colors hover:bg-zinc-800",
                    pathname === item.href ? "text-white" : "text-zinc-400"
                  )}
                >
                  <div className="flex flex-col items-center">
                    <item.icon className="w-6 h-6" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-center pb-8">
            <div className="flex gap-2">
              <Link
                href="https://behance.net"
                target="_blank"
                className="text-zinc-400 hover:text-white"
              >
                Be
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900/90 backdrop-blur-md px-6 py-3 rounded-full z-50">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  pathname === item.href ? "text-white" : "text-zinc-400"
                )}
              >
                <item.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
