"use client";

import { useState, useEffect, useCallback } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // ambil dari localStorage saat client mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setIsDarkMode(savedTheme === "dark");
      } else {
        setIsDarkMode(
          window.matchMedia("(prefers-color-scheme: dark)").matches
        );
      }
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      const html = document.documentElement;
      if (newMode) {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
}
