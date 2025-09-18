"use client";
import { allActivities } from "content-collections";
import Link from "next/link";
import dayjs from "dayjs";

export const revalidate = 60; // ISR

export default function Activities() {
  return (
    <div className="font-[family-name:var(--font-inter-tight)] flex flex-col gap-8">
      {allActivities.map((activity) => (
        <div
          className="flex flex-row gap-4 items-center"
          key={activity._meta.path}>
          <div className="flex flex-row gap-2 items-center">
            <span className="bg-amber-200/40 rounded-full p-2 text-sm h-10 w-10 flex items-center justify-center">
              {activity.icon}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <Link href={`/activities/${activity._meta.path}`}>
                <h2 className="text-sm font-bold text-black font-[family-name:var(--font-plus-jakarta-sans)]">
                  {activity.title}
                </h2>
                <p className="text-gray-600 text-sm">{activity.summary}</p>
              </Link>
            </div>
            <p className="text-gray-600 text-sm">
              {dayjs(activity.date).format("DD MMMM YYYY")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
