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
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { Data } from "@/types/posts";
import { Button } from "../ui/button";
import Navbar from "../Navbar";

const Content: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <main className="items-center justify-between relative">
      <div className="fixed top-1 lg:top-3 left-2/4 py-4 px-2 -translate-x-2/4 -translate-y-2/4 max-w-screen-xl w-full">
        <Navbar />
      </div>

      <div className="px-1 gap-1 mt-16 max-w-screen-xl mx-auto w-screen grid custom-cols lg:mt-20 xl:gap-6">
        <Card className="bg-purple-600/10 border-0 shadow">
          <CardHeader>
            <CardTitle>Rizqi Khoirurrohman</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              I am an independent frontend programmer and project builder with a
              passion for startups and new technologies.
            </CardDescription>
            <CardDescription className="mt-3">
              <Link
                href="mailto:khoirrurrohman@gmail.com"
                className="underline"
              >
                khoirrurrohman@gmail.com
              </Link>
            </CardDescription>
          </CardContent>
        </Card>

        {data.allPosts.edges.map((item) => (
          <Card
            className="bg-black/10 dark:bg-white/10 border-0"
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
              <Button
                variant="outline"
                className="cursor-pointer rounded-lg bg-black hover:bg-black/80 text-white hover:text-white dark:bg-white dark:hover:bg-white/80 dark:text-black "
              >
                <ArrowTopRightIcon className="h-4 w-4 mr-2" /> visit
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Content;
