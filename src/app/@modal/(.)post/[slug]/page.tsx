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
        <div className="relative w-full aspect-video rounded-sm mb-4">
          <Image
            src={data.allPosts.edges[0].node.thumbnail.src}
            alt={data.allPosts.edges[0].node.thumbnail.title}
            width={500}
            height={500}
            priority
            className="w-full rounded-sm"
          />
        </div>
      </div>

      <div className="mt-7">
        <h1 className="text-2xl font-semibold">
          {data.allPosts.edges[0].node.title}
        </h1>
      </div>

      <div>
        <div className="flex gap-1">
          {data.allPosts.edges[0].node.category.map((item) => (
            <span
              key={item.id}
              className="text-xs text-zinc-500 hover:underline bg-zinc-100 px-2 py-1 rounded-md">
              {item.title}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div>
          <RichTextRenderer node={data.allPosts.edges[0].node.content.json} />
        </div>
      </div>

      <div className="mt-2">
        <a
          href={data.allPosts.edges[0].node.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition-all">
          Lihat
        </a>
      </div>
    </PostModal>
  );
}
