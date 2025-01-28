"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  // Sync the toggle state with the current theme
  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  return (
    <div className="rotate-90">
      <div
        className="relative h-10 w-24 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center cursor-pointer p-1 "
        onClick={handleToggle}
      >
        {/* Slider background */}
        <div
          className={`absolute h-8 w-8 bg-white dark:bg-gray-900 rounded-full transform transition-transform duration-300 ${
            isDark ? "translate-x-14" : "translate-x-0"
          }`}
        ></div>

        {/* Sun Icon */}
        <Sun
          size={20}
          className={`absolute left-2 text-yellow-500 transition-opacity duration-300 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Moon Icon */}
        <Moon
          size={20}
          className={`absolute right-2 text-blue-500 transition-opacity duration-300 rotate-180 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
