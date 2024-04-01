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
import AnimateText from "@/lib/AnimateText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Content: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <>
      <header className="mt-12 lg:mt-20 px-3 md:px-0 max-w-screen-sm mx-auto flex flex-col gap-2">
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

      <main className="relative items-center justify-between transition-all my-10 px-2">
        <div className="mb-5 px-3 md:px-0 max-w-screen-sm mx-auto">
          <h1 className="text-xl font-bold">Recent Projects</h1>
        </div>

        <Carousel className="cursor-grab max-w-screen-sm mx-auto relative">
          <div className="absolute bg-gradient-to-r from-[#09090B] to-transparent z-10 h-full w-[10px] left-0"></div>
          <div className="absolute bg-gradient-to-l from-[#09090B] to-transparent z-10 h-full w-[10px] right-0"></div>
          <CarouselContent>
            {data.allPosts.edges.map((item) => (
              <CarouselItem
                key={item.node.id}
                className="md:basis-1/2 lg:basis-1/2"
              >
                <Card
                  className="bg-black/10 dark:bg-white/10 border-0 shadow-0 z-10"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute right-4 cursor-pointer disabled:hidden text-white dark:text-white/5 dark:hover:text-white hover:text-white bg-zinc-900/20 border-zinc-900/5 hover:border-white hover:bg-zinc-900" />
          <CarouselPrevious className="absolute left-4 cursor-pointer disabled:hidden text-white dark:text-white/5 dark:hover:text-white hover:text-white bg-zinc-900/20 border-zinc-900/5 hover:border-white hover:bg-zinc-900" />
        </Carousel>
      </main>
    </>
  );
};

export default Content;
