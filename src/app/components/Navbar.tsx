"use client";
import Link from "next/link";

import { globalConfig } from "../config";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition-all ${
        isScrolled ? "bg-white/70 backdrop-blur-md" : "bg-white"
      }`}>
      <div className="py-4 flex justify-between items-center max-w-lg mx-auto px-3 lg:px-0">
        <Link
          href={"/"}
          className="font-semibold text-lg hover:italic hover:font-light hover:underline transition-all">
          {globalConfig.title}
        </Link>

        <a
          href="mailto:khoirrurrohman@gmail.com"
          className="hover:underline text-zinc-500 text-sm">
          Lest talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
