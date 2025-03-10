import Image from "next/image";

import { getPost, getPosts } from "@/app/graphql/queries";
import { PostModal } from "./modal";
import { RichTextRenderer } from "@caisy/rich-text-react-renderer";

export async function generateStaticParams() {
  const data = await getPosts();
  return data.allPosts.edges.map((item) => ({
    slug: item.node.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await getPost(slug);

  return (
    <PostModal>
      <div>
        <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
          .image-cover
        </p>
        <div className="relative">
          <Image
            src={data.allPosts.edges[0].node.thumbnail.src}
            alt={data.allPosts.edges[0].node.thumbnail.title}
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-7">
        <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
          .text-title
        </p>
        <div className="border-t border-b border-dotted border-zinc-700 flex gap-1">
          <span className="w-2 bg-black/10 dark:bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
          <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
            {data.allPosts.edges[0].node.title}
          </h1>
        </div>
      </div>

      <div>
        <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
          .box-categories
        </p>
        <div className="border-t border-b border-dotted border-zinc-700 flex gap-1">
          <span className="w-2 bg-black/10 dark:bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
          <div className="flex gap-1 text-zinc-600 dark:text-zinc-200">
            {data.allPosts.edges[0].node.category.map((item) => (
              <span key={item.id} className="text-xs hover:underline">
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
          .text-description
        </p>
        <div className="border-t border-b border-dotted border-zinc-700 flex gap-1">
          <span className="w-2 bg-black/10 dark:bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
          <div className="dark:text-zinc-200 text-zinc-800">
            <RichTextRenderer node={data.allPosts.edges[0].node.content.json} />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
          .box-footer
        </p>
        <div className="border-t border-b border-dotted border-zinc-700 flex gap-1">
          <span className="w-2 bg-black/10 dark:bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
          <a
            href={data.allPosts.edges[0].node.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 dark:bg-white px-2 py-1 w-32 text-center hover:bg-zinc-700 dark:text-black">
            Lihat
          </a>
          <span className="w-2 bg-white/10 border-l border-r border-zinc-700 flex-shrink-0"></span>
        </div>
      </div>
    </PostModal>
  );
}
