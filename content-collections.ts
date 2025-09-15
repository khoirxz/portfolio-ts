import { defineConfig, defineCollection } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";

const projects = defineCollection({
  name: "projects",
  directory: "src/content/projects",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    date: z.string(),
    summary: z.string(),
    tech: z.array(z.string()).optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    externalUrl: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, [rehypeAutolink, { behavior: "wrap" }]],
    });
    return {
      ...document, // ini object, aman untuk spread
      mdx, // string code hasil compile
    };
  },
});

const activities = defineCollection({
  name: "activities",
  directory: "src/content/activities",
  include: "**/*.mdx",
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    date: z.string(),
    kind: z.enum(["code", "design", "music", "note"]),
    summary: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, [rehypeAutolink, { behavior: "wrap" }]],
    });
    return {
      ...document, // ini object, aman untuk spread
      mdx, // string code hasil compile
    };
  },
});

export default defineConfig({
  collections: [projects, activities],
});
