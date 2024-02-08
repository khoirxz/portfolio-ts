"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

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
    icon: <PiFacebookLogoLight size="1.3rem" />,
  },
  {
    url: "https://instagram.com/rizqi.khoir",
    icon: <PiInstagramLogoLight size="1.3rem" />,
  },
  {
    url: "https://github.com/khoirxz",
    icon: <PiGithubLogoLight size="1.3rem" />,
  },
];

const Navbar: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <div className="fixed top-12 left-2/4 py-4 px-2 -translate-x-2/4 -translate-y-2/4 max-w-screen-xl w-full">
      <NavigationMenu className="max-w-screen-xl justify-between">
        <NavigationMenuList>
          {social.map((item, i) => (
            <NavigationMenuItem key={i}>
              <Link href={item.url} legacyBehavior passHref>
                <NavigationMenuLink>
                  <Button size="icon" variant="ghost" type="button">
                    {item.icon}
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
    </div>
  );
};

export default Navbar;
