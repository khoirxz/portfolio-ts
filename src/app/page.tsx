"use server";

import Image from "next/image";
import Link from "next/link";

import { globalConfig } from "@/app/config";

import { getPosts } from "@/app/graphql/queries";

export default async function Home() {
  const data = await getPosts();

  return (
    <div className="flex flex-col items-center max-w-lg mx-auto">
      <section className="flex flex-col justify-end min-h-screen w-full gap-5 p-4 md:p-0">
        <div className="relative w-[120px] h-[120px] rounded-2xl overflow-hidden hover:scale-105 transition-all">
          <Image
            src="/profile.jpg"
            alt="Rizqi Khoirurrohman"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">{globalConfig.description}</h1>

          <p className="text-zinc-700">
            Membangun dengan rapi, bersih dan berkolaborasi.
          </p>
        </div>
      </section>

      <section className="flex flex-col w-full my-10">
        <div className="grid grid-cols-1 gap-4">
          {data.allPosts.edges.map((item) => (
            <Link
              key={item.node.id}
              href={`/post/${item.node.slug}`}
              scroll={false}>
              <div className="p-4 hover:bg-gray-200/50 rounded-lg cursor-pointer transition-all">
                <div className="flex flex-col gap-1 w-full">
                  <div className="relative w-full aspect-video rounded-sm mb-4">
                    <Image
                      src={item.node.thumbnail.src}
                      alt={item.node.thumbnail.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-lg object-cover"
                    />
                  </div>

                  <h1 className="font-semibold px-1">{item.node.title}</h1>
                  <p className="text-zinc-500 text-sm px-1">
                    {item.node.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
