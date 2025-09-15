import { allActivities } from ".contentlayer/generated";
import MDX from "@/components/MDX";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MoveUpLeftIcon } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  allActivities.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const doc = allActivities.find((a) => a.slug === slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.summary };
}

export const revalidate = 60; // ISR

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = allActivities.find((a) => a.slug === slug);
  if (!doc) return notFound();

  return (
    <main className="flex flex-col items-center relative">
      <div className="max-w-4xl w-full flex flex-col bg-white min-h-screen p-12 relative gap-8">
        <header>
          <Link
            href="/activities"
            className="flex flex-row gap-2 mt-4 items-center">
            <MoveUpLeftIcon className="h-4 w-4" />{" "}
            <span className="text-sm font-[family-name:var(--font-pixelify-sans)]">
              Semua Aktivitas 👨‍💻
            </span>
          </Link>
        </header>

        <article className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{doc.title}</h1>
          <MDX code={doc.body.code} />
        </article>
      </div>
    </main>
  );
}
