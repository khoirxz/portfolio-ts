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
import Navbar from "../Navbar";

const Content: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <main className="items-center justify-between relative transition-all">
      <div className="fixed top-1 lg:top-3 left-2/4 py-4 px-2 -translate-x-2/4 -translate-y-2/4 max-w-screen-xl w-full">
        <Navbar />
      </div>

      <header className="mt-28 max-w-screen-xl mx-auto flex flex-col gap-9">
        <div className="px-2 xl:px-0">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-zinc-700">
            Hi, I am <span className="dark:text-white text-black">Rizqi</span>,
            a full-stack programmer and project builder with a passion for
            startups and new technologies.
          </h1>
        </div>
        <div className="flex flex-row gap-3">
          <Link href="mailto:khoirrurrohman@gmail.com" passHref>
            <motion.div className="flex items-center px-2">
              Mail me
              <PaperPlaneIcon className="h-4 w-4 ml-2" />
            </motion.div>
          </Link>
        </div>
      </header>

      <div className="px-1 gap-1 mt-16 max-w-screen-xl mx-auto grid custom-cols lg:mt-32">
        {data.allPosts.edges.map((item) => (
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
                  <ArrowTopRightIcon className="h-4 w-4 mr-2" /> visit
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Content;
