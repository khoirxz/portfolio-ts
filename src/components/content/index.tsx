"use client";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowTopRightIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import { Data } from "@/types/posts";
import { Button } from "../ui/button";
import AnimateText from "@/lib/AnimateText";

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
      <header className="mt-20 lg:mt-36 max-w-screen-xl mx-auto flex flex-col gap-9">
        <div className="px-2 xl:px-0 flex flex-col gap-4">
          <AnimateText text="Hi, I am Rizqi" />
          <AnimateText
            text="a full-stack programmer and project builder with a passion for
            startups and new technologies."
          />
        </div>
      </header>

      <main className="items-center justify-between relative transition-all mt-32">
        <motion.div
          className="px-1 gap-1 mt-16 max-w-screen-xl mx-auto grid custom-cols lg:mt-32"
          variants={variant}
          initial="hidden"
          animate="show"
        >
          {data.allPosts.edges.map((item) => (
            <motion.div key={item.node.id} variants={varianItem}>
              <Card
                className="bg-black/10 dark:bg-white/10 border-0 shadow-0"
                key={item.node.id}
              >
                <CardHeader>
                  <CardTitle>{item.node.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex gap-3 flex-wrap mb-2">
                    {item.node.category.map((item) => (
                      <span key={item.id} className="font-thin underline">
                        {item.title}
                      </span>
                    ))}
                  </div>
                  <CardDescription>{item.node.description}</CardDescription>
                </CardContent>

                <CardFooter>
                  <Link href={item.node.url} target="_blank">
                    <Button
                      variant="outline"
                      className="cursor-pointer rounded-lg bg-black hover:bg-black/80 text-white hover:text-white dark:bg-white dark:hover:bg-white/80 dark:text-black"
                    >
                      visit <ArrowTopRightIcon className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </>
  );
};

export default Content;
