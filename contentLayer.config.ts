import { defineDocumentType, makeSource } from "contentlayer2/source-files";

import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import readingTime from "reading-time";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    icon: { type: "string", required: true },
    summary: { type: "string", required: true },
    tech: { type: "list", of: { type: "string" } },
    cover: { type: "string", required: false },
    featured: { type: "boolean", default: false },
    externalUrl: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(-1)[0],
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

export const Activity = defineDocumentType(() => ({
  name: "Activity",
  filePathPattern: `activities/**/*.mdx`,
  contentType: "mdx",
  fields: {
    icon: { type: "string", required: true },

    title: { type: "string", required: true },
    date: { type: "date", required: true },
    kind: {
      type: "enum",
      options: ["code", "design", "music", "note"],
      default: "code",
    },
    summary: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(-1)[0],
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Project, Activity],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolink, { behavior: "wrap" }],
      [rehypePrettyCode, { theme: "github-dark" }],
    ],
  },
});
