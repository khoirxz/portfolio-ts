"use server";

import Image from "next/image";
import Link from "next/link";

import { getPosts } from "@/app/graphql/queries";

export default async function Home() {
  const data = await getPosts();

  return (
    <div className="flex flex-col items-center min-h-screen">
      <section className="flex flex-col max-w-[500px] w-full mx-auto border-l border-dotted border-r border-zinc-700 pb-12">
        <div className="mt-7">
          <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
            .text-title
          </p>
          <div className="border-t border-b border-dotted border-zinc-700 flex gap-1">
            <span className="w-2 bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
            <h1 className="text-2xl font-semibold">Full stack developer</h1>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
            .text-description
          </p>
          <div className="border-t border-b border-dotted border-zinc-700 flex gap-1">
            <span className="w-2 bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
            <p className="text-zinc-200">
              Pada umumnya saya menggunakan React/Next JS untuk frontend dan PHP
              (Laravel) sebagai backend.
              <br /> Saya tertarik pada teknologi baru dan berkerjasama dengan
              tim untuk membangun solusi teknologi yang efektif dan efisien.
            </p>
          </div>
        </div>
      </section>
      <span className="w-full border-b border-zinc-700"></span>
      <section className="flex flex-col max-w-[500px] w-full mx-auto border-l border-dotted border-r border-zinc-700">
        <div className="mt-7">
          <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
            .text-title-project-section
          </p>
          <div className="border-t border-b border-dotted border-zinc-700 flex gap-1">
            <span className="w-2 bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
            <h1 className="text-2xl font-semibold">Proyek</h1>
          </div>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 my-6">
          {data.allPosts.edges.map((item, i) => (
            <Link
              key={item.node.id}
              href={`/post/${item.node.slug}`}
              scroll={false}>
              <div className="mb-4">
                <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
                  .box-{i + 1}
                </p>
                <div className="border-t border-b border-dotted border-zinc-700 relative flex justify-between">
                  <span className="w-2 bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="relative w-full aspect-video rounded-sm mb-4">
                      <Image
                        src={item.node.thumbnail.src}
                        alt={item.node.thumbnail.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-lg object-cover"
                      />
                    </div>

                    <h1 className="text-zinc-200 font-semibold px-1">
                      {item.node.title}
                    </h1>
                    <p className="text-zinc-300 text-sm px-1">
                      {item.node.description}
                    </p>
                  </div>
                  <span className="w-2 bg-white/10 border-l border-zinc-700 flex-shrink-0"></span>
                  {i % 2 === 0 && (
                    <div className="absolute top-0 right-0 h-full w-px border-r border-dotted border-zinc-700"></div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <span className="w-full border-b border-zinc-700"></span>
    </div>
  );
}
