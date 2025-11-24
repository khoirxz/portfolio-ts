"use client";
import { allActivities } from "content-collections";
import Link from "next/link";
import dayjs from "dayjs";

export const revalidate = 60; // ISR

export default function Activities() {
  // short by date
  const items = [...allActivities].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );

  return (
    <div className="font-[family-name:var(--font-pixelify-sans)] flex flex-col relative">
      {items.slice(0, 3).map((activity) => (
        <div
          className="flex flex-row gap-4 items-center relative"
          key={activity._meta.path}
        >
          {/* Line */}

          <span className="absolute top-0 bottom-0 left-5 w-1 h-full border-dashed border-gray-500 border-l-2"></span>

          <div className="flex flex-row gap-2 items-center absolute -top-4 left-1.5">
            <span className="bg-amber-200/40 rounded-full p-1.5 text-sm h-8 w-8 flex items-center justify-center">
              {activity.icon}
            </span>
            <p className="text-gray-600 text-sm flex flex-row gap-2 items-center">
              {dayjs(activity.date).format("DD MMMM YYYY")}{" "}
              <span className="h-1 w-1 bg-gray-600 rounded-full"></span>{" "}
              {activity.kind}
            </p>
          </div>

          <div className="flex flex-col gap-2 ml-12 my-5">
            <div className="flex flex-row items-center gap-2">
              <Link href={`/activities/${activity._meta.path}`}>
                <h2 className="text-sm font-bold text-black font-[family-name:var(--font-pixelify-sans)]">
                  {activity.title}
                </h2>
                <p className="text-gray-600 text-sm">{activity.summary}</p>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {items.length > 3 && (
        <div className="flex flex-row gap-2 items-center">
          <Link
            href="/activities"
            className="text-sm text-black font-[family-name:var(--font-pixelify-sans)]"
          >
            Lihat semua aktivitas
          </Link>
        </div>
      )}
    </div>
  );
}
