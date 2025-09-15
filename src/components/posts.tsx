"use client";
import { allProjects } from "../../.contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60; // ISR

export default function Posts() {
  const projects = [...allProjects].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  return (
    <div className="font-[family-name:var(--font-inter-tight)] flex flex-col gap-8">
      {projects.map((project) => (
        <div className="flex flex-row gap-4 items-center" key={project._id}>
          <div>
            <Image
              src={project.icon}
              alt={project.title}
              width={96}
              height={96}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Link href={project.url}>
              <h2 className="text-xl font-bold text-black font-[family-name:var(--font-plus-jakarta-sans)]">
                {project.title}
              </h2>
            </Link>
            <p className="text-gray-600 text-base/6">{project.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
