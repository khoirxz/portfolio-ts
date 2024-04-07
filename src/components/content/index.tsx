"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Data } from "@/types/posts";
import { Button } from "../ui/button";
import AnimateText from "@/lib/AnimateText";
import Card from "../Card";

const variant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const varianItem = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Content: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <>
      <header className="mt-12 lg:mt-20 px-3 md:px-0 max-w-screen-lg mx-auto flex flex-col gap-2">
        <div className="px-2 xl:px-0 flex flex-col gap-3">
          <AnimateText text="Halo, saya Rizqi" type="header" />
          <AnimateText
            text="a full-stack programmer and project builder with a passion for startups and new technologies."
            type="body"
          />
          <div>
            <Link
              href="mailto:khoirrurrohman@gmail.com"
              target="_blank"
              passHref
            >
              <Button className="rounded-full text-xs">Get in touch</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative max-w-screen-lg mx-auto transition-all my-10 px-2 flex flex-col gap-20">
        <div className="px-3 md:px-0">
          <h1 className="text-xl font-bold">Recent Projects</h1>
        </div>

        <motion.div
          variants={variant}
          initial="hidden"
          animate="show"
          className="px-3 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {data.allPosts.edges.map(
            ({
              node: { id, title, thumbnail, category, description, url },
            }) => (
              <motion.div key={id} variants={varianItem} className="w-full">
                <Card
                  title={title}
                  thumbnail={thumbnail}
                  category={category}
                  description={description}
                  url={url}
                />
              </motion.div>
            )
          )}
        </motion.div>
      </main>
    </>
  );
};

export default Content;
