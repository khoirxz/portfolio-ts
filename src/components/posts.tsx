"use client";
import { allProjects } from "content-collections";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60; // ISR

export default function Posts() {
  return (
    <div className="font-[family-name:var(--font-inter-tight)] flex flex-col gap-8">
      {allProjects.map((project) => (
        <div
          className="flex flex-row gap-4 items-center"
          key={project._meta.path}>
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
            <Link href={`/projects/${project._meta.path}`}>
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
