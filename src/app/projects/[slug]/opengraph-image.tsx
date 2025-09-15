import { ImageResponse } from "next/og";
import { allProjects } from "../../../../.contentlayer/generated";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const p = allProjects.find((x) => x.slug === slug);
  const title = p?.title ?? "Project";
  const summary = p?.summary ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg,#0ea5e9,#1e293b)",
        }}>
        <div style={{ fontSize: 64, fontWeight: 800, color: "white" }}>
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,.9)",
            marginTop: 12,
          }}>
          {summary}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "rgba(255,255,255,.7)",
          }}>
          roox.dev • Next.js Portfolio
        </div>
      </div>
    ),
    size
  );
}
