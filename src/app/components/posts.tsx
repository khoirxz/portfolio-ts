"use client";

import Image from "next/image";
import Link from "next/link";
import { Edge } from "../types/posts";

export default function Posts({ item }: { item: Edge }) {
  return (
    <Link
      key={item.node.id}
      href={`${item.node.url}`}
      target="_blank"
      rel="noopener noreferrer"
      scroll={false}>
      <div className="p-4 hover:bg-black/5 rounded-lg cursor-pointer transition-all">
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
          <p className="text-sm px-1">{item.node.description}</p>
        </div>
      </div>
    </Link>
  );
}
