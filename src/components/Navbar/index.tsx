"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import {
  PiInstagramLogoLight,
  PiFacebookLogoLight,
  PiGithubLogoLight,
} from "react-icons/pi";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const Navbar: React.FC = () => {
  const [yPosition, setYPosition] = useState<boolean>(false);

  const { setTheme } = useTheme();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 30) {
      setYPosition(true);
    } else {
      setYPosition(false);
    }
    console.log(yPosition);
  });

  return (
    <motion.div
      className="fixed z-50 top-1 left-2/4 -translate-x-2/4 max-w-screen-sm w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <NavigationMenu className="max-w-screen-sm mx-auto justify-end py-2 px-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  style={{
                    zIndex: "50",
                    backgroundColor: yPosition
                      ? "rgba(255, 255, 255, 0)"
                      : "transparent",
                    backdropFilter: yPosition ? "blur(5px)" : "blur(0px)",
                  }}
                >
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </motion.div>
  );
};

export default Navbar;
