import { allProjects, allActivities } from ".content-collections/generated";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.SITE_URL ?? "https://rizqikhoir.my.id";

  return [
    {
      url: site,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // images
    {
      url: site,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      images: [`${site}/og-image.png`, `${site}/profile.jpg`],
    },
    ...allProjects.map((p) => ({
      url: `${site}/projects/${p._meta.path}`,
      lastModified: new Date(p.date),
      priority: 0.5,
    })),
    ...allActivities.map((p) => ({
      url: `${site}/activities/${p._meta.path}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly",
      priority: 0.5,
    })),
  ];
}
