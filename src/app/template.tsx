"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const Template: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default Template;
