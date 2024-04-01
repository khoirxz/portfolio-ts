"use client";
import { motion } from "framer-motion";

import { Social } from "@/types/social";

const social: Social = [
  {
    url: "https://github.com/khoirxz",
    name: "Github",
  },
  {
    url: "https://instagram.com/rizqi.khoir",
    name: "Instagram",
  },
  {
    url: "https://facebook.com/rootbackdor",
    name: "Facebook",
  },
];

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="border-t p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between max-w-screen-sm mx-auto py-6">
        <div>
          <p className="font-bold text-lg">
            &copy; {new Date().getFullYear()} Rizqi Khoirurrohman
          </p>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-3">Social</h5>
          <ul>
            {social.map(({ url, name }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
