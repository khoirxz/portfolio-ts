"use server";

import Image from "next/image";
import Link from "next/link";

import { getPosts } from "@/app/graphql/queries";
import Posts from "./components/posts";

const socials: { name: string; url: string; icon: React.JSX.Element }[] = [
  {
    name: "GitHub",
    url: "https://github.com/khoirxz",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rizqi-khoirurrohman-86a292268/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rizqi.khoir/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/rootbackdor",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@gatot.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path>
      </svg>
    ),
  },
];

export default async function Home() {
  const data = await getPosts();

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto p-4 md:p-8 gap-5">
      <section className="flex flex-col w-full gap-5 bg-gray-50 p-5 rounded-2xl">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-[120px] h-[120px] hover:scale-105 transition-all z-20">
            <span className="absolute top-0 right-0 w-4 h-4 bg-green-300 rounded-full z-50 animate-ping"></span>
            <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full z-50"></span>
            {/* Online Indicator */}
            <Image
              src="/profile.jpg"
              alt="Rizqi Khoirurrohman"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="text-center md:text-left space-y-1">
              <h1 className="text-blue-500 hover:font-[family-name:var(--font-plus-jakarta-sans] transition-all text-lg font-semibold">
                Rizqi Khoirurrohman.
              </h1>
              <h1 className="text-sm">Fullstack developer and Pixel artist.</h1>
            </div>

            <div className="flex flex-row gap-4 justify-center md:justify-start">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mb-2 hover:text-blue-500 transition-all">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full space-y-3">
        <h1 className="font-semibold">Recent Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.allPosts.edges.map((item) => (
            <Posts key={item.node.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
