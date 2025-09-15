"use client";

import { MDXContent } from "@content-collections/mdx/react";
import Image, { ImageProps } from "next/image";

import Badge from "./badge";

const components = {
  Image: (props: ImageProps) => <Image {...props} alt={props.alt} />,
  Callout: (props: { children: React.ReactNode }) => (
    <div className="rounded-2xl border p-4 bg-zinc-400">{props.children}</div>
  ),
  Badge: (props: { title: string }) => <Badge title={props.title} />,
  Title: (props: { children: React.ReactNode }) => (
    <h1 className="text-xl font-bold">{props.children}</h1>
  ),
  Link: (props: { children: React.ReactNode; href: string }) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  ),
  List: (props: { children: React.ReactNode }) => (
    <span>✅ {props.children}</span>
  ),
} as const;

export default function MDX({ code }: { code: string }) {
  return <MDXContent code={code} components={components} />;
}
