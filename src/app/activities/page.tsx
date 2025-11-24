import { allActivities } from "content-collections";
import Link from "next/link";
import dayjs from "dayjs";

import { MoveUpLeftIcon } from "lucide-react";
import ENUM from "@/ENUM";

export const revalidate = 60; // ISR

type Props = {
  searchParams: Promise<{ kind?: string }>;
};

export default async function ActivitiesPage({ searchParams }: Props) {
  const { kind } = await searchParams;

  let items = [...allActivities].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );

  if (kind && ENUM.KIND.some((validKind) => validKind.name === kind))
    items = items.filter((i) => i.kind === kind);

  return (
    <main className="flex flex-col items-center relative">
      <div className="max-w-4xl w-full flex flex-col bg-white min-h-screen p-12 relative gap-8">
        <header className="flex flex-col">
          <Link href="/" className="flex flex-row gap-2 mt-4 items-center">
            <MoveUpLeftIcon className="h-4 w-4" />{" "}
            <span className="text-sm font-[family-name:var(--font-pixelify-sans)]">
              Halaman utama 🏠
            </span>
          </Link>

          <nav className="ml-auto flex gap-2 text-md font-[family-name:var(--font-pixelify-sans)]">
            <a href="/activities" className="px-2 py-1 rounded bg-muted">
              All
            </a>
            {ENUM.KIND.map((k) => {
              const active = kind === k.name;
              return (
                <a
                  key={k.name}
                  href={`/activities?kind=${k.name}`}
                  className={`px-2 py-1 rounded ${
                    active ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {active ? `⭐ ${k.name}` : k.name}
                </a>
              );
            })}
          </nav>
        </header>

        <div>
          <ul className="grid grid-cols-1 gap-4">
            {items.map((a) => (
              <div
                className="flex flex-row gap-4 items-center"
                key={a._meta.path}
              >
                <div className="flex flex-row gap-2 items-center">
                  <span className="bg-amber-200/40 rounded-full p-2 text-2xl">
                    {a.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <Link href={`/activities/${a._meta.path}`}>
                      <h2 className="text-sm text-black font-[family-name:var(--font-plus-jakarta-sans)]">
                        <b>{a.title}</b> - {a.summary} - <b>{a.kind}</b>
                      </h2>
                    </Link>
                  </div>
                  <p className="text-gray-600 text-xs">
                    {dayjs(a.date).format("DD MMMM YYYY")}
                  </p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
