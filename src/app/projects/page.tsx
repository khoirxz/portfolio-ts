import Link from "next/link";

import { MoveUpLeftIcon } from "lucide-react";
import Posts from "@/components/posts";

export const revalidate = 60; // ISR

export default function Projects() {
  return (
    <main className="flex flex-col items-center relative">
      <div
        className="bg-[url('/pattern.svg')] bg-center w-full h-[2vh]"
        style={{
          backgroundSize: "1000px",
        }}></div>
      <div className="max-w-4xl w-full flex flex-col bg-white min-h-[97vh] p-12 relative gap-8">
        <Link href="/" className="flex flex-row gap-2 mt-4 items-center">
          <MoveUpLeftIcon className="h-4 w-4" />{" "}
          <span className="text-sm font-[family-name:var(--font-pixelify-sans)]">
            Halaman utama 🏠
          </span>
        </Link>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold mb-6">Semua Proyek</h1>

          <Posts />
        </div>
      </div>
    </main>
  );
}
