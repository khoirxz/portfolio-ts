"use client";

import { motion } from "framer-motion";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Template: React.FC<DivProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Template;
