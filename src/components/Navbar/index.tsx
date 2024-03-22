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

import { Social } from "@/types/social";

const social: Social = [
  {
    url: "https://facebook.com/rootbackdor",
    darkIcon: <PiFacebookLogoLight size="1.3rem" className="text-black" />,
    lightIcon: <PiFacebookLogoLight size="1.3rem" />,
  },
  {
    url: "https://instagram.com/rizqi.khoir",
    darkIcon: <PiInstagramLogoLight size="1.3rem" className="text-black" />,
    lightIcon: <PiInstagramLogoLight size="1.3rem" />,
  },
  {
    url: "https://github.com/khoirxz",
    darkIcon: <PiGithubLogoLight size="1.3rem" className="text-black" />,
    lightIcon: <PiGithubLogoLight size="1.3rem" />,
  },
];

const Navbar: React.FC = () => {
  const [yPosition, setYPosition] = useState<boolean>(false);

  const { setTheme, theme } = useTheme();

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
    <motion.div className="fixed top-1 left-2/4 -translate-x-2/4 max-w-screen-xl w-full">
      {yPosition ? (
        <motion.div
          className="w-[98%] xl:w-full"
          style={{
            position: "absolute",
            backgroundColor: "rgba(255, 255, 255, 0)",
            height: "100%",
            top: "0",
            left: "50%",
            translateX: "-50%",
            backdropFilter: "blur(5px)",
          }}
        ></motion.div>
      ) : null}
      <NavigationMenu className="max-w-screen-xl justify-between py-2 px-2">
        <NavigationMenuList>
          {social.map((item, i) => (
            <NavigationMenuItem key={i}>
              <Link href={item.url} legacyBehavior passHref>
                <NavigationMenuLink>
                  <Button size="icon" variant="ghost" type="button">
                    {theme === "dark" ? item.darkIcon : item.lightIcon}
                  </Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
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
