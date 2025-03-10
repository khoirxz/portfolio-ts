export const dynamicParams = false;

import { getPost, getPosts } from "@/app/graphql/queries";
import { RichTextRenderer } from "@caisy/rich-text-react-renderer";
import Image from "next/image";

export async function generateStaticParams() {
  const data = await getPosts();
  return data.allPosts.edges.map((item) => ({
    slug: item.node.slug,
  }));
}

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const data = await getPost(slug);

  return (
    <section className="flex flex-col max-w-[500px] w-full mx-auto border-l border-dotted border-r border-zinc-700 pb-12">
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
          <span className="w-2 bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
          <h1 className="text-2xl font-semibold">
            {data.allPosts.edges[0].node.title}
          </h1>
        </div>
      </div>

      <div>
        <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
          .box-categories
        </p>
        <div className="border-t border-b border-dotted border-zinc-700 flex gap-1">
          <span className="w-2 bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
          <div className="flex gap-1">
            {data.allPosts.edges[0].node.category.map((item) => (
              <span
                key={item.id}
                className="text-xs text-zinc-500 hover:underline">
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
          <span className="w-2 bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
          <div>
            <RichTextRenderer node={data.allPosts.edges[0].node.content.json} />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
          .box-footer
        </p>
        <div className="border-t border-b border-dotted border-zinc-700 flex gap-1">
          <span className="w-2 bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
          <a
            href={data.allPosts.edges[0].node.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-2 py-1 w-32 text-black">
            Lihat
          </a>
          <span className="w-2 bg-white/10 border-l border-r border-zinc-700 flex-shrink-0"></span>
        </div>
      </div>
    </section>
  );
};

export default PostPage;
