import { allProjects } from ".contentlayer/generated";
import MDX from "@/components/MDX";
import { notFound } from "next/navigation";
import Link from "next/link";

import { MoveUpLeftIcon } from "lucide-react";

export const generateStaticParams = async () =>
  allProjects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const doc = allProjects.find((p) => p.slug === slug);

  if (!doc) return {};

  return {
    title: doc.title,
    description: doc.summary,
    openGraph: {
      title: doc.title,
      description: doc.summary,
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const doc = allProjects.find((p) => p.slug === slug);

  if (!doc) return notFound();

  return (
    <div className="flex flex-col items-center relative">
      <div className="max-w-4xl w-full flex flex-col bg-white min-h-screen p-12 relative gap-8">
        <Link
          href="/projects"
          className="flex flex-row gap-2 mt-4 items-center">
          <MoveUpLeftIcon className="h-4 w-4" />{" "}
          <span className="text-sm font-[family-name:var(--font-pixelify-sans)]">
            Semua Proyek 👨‍💻
          </span>
        </Link>

        <article className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{doc.title}</h1>
          <MDX code={doc.body.code} />
        </article>
      </div>
    </div>
  );
}
