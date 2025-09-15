import { allProjects, allActivities } from "../../../.contentlayer/generated";

export async function GET() {
  const site = process.env.SITE_URL ?? "https://rizqikhoir.my.id";
  const urls = [
    `${site}/`,
    `${site}/projects`,
    `${site}/activities`,
    ...allProjects.map((p) => `${site}/projects/${p.slug}`),
    ...allActivities.map((a) => `${site}/activities/${a.slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `<url><loc>${u}</loc></url>`).join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
