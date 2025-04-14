import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rizqikhoir.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // images
    {
      url: "https://rizqikhoir.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
      images: [
        "https://rizqikhoir.vercel.app/og-image.png",
        "https://rizqikhoir.vercel.app/profile.jpg",
      ],
    },
  ];
}
