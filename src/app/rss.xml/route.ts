import { allProjects, allActivities } from ".contentlayer/generated";

function escapeXML(s: string) {
  return s.replace(
    /[<>&'"]/g,
    (c) =>
      ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[
        c
      ] as string)
  );
}

export async function GET() {
  const site = process.env.SITE_URL ?? "https://rizqikhoir.my.id";
  const items = [
    ...allProjects.map((d) => ({
      title: d.title,
      url: `${site}/projects/${d.slug}`,
      date: d.date,
      desc: d.summary,
    })),
    ...allActivities.map((d) => ({
      title: d.title,
      url: `${site}/activities/${d.slug}`,
      date: d.date,
      desc: d.summary ?? "",
    })),
  ].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Portfolio Feed</title><link>${site}</link><description>Projects & Activity</description>
${items
  .map(
    (i) =>
      `<item><title>${escapeXML(i.title)}</title>
<link>${i.url}</link><guid>${i.url}</guid>
<pubDate>${new Date(i.date).toUTCString()}</pubDate>
<description>${escapeXML(i.desc)}</description>
</item>`
  )
  .join("")}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
