import Image from "next/image";
import Link from "next/link";

type Node = {
  title: string;
  description: string;
  thumbnail: {
    src: string;
    title: string;
  };
  url: string;
  category: {
    title: string;
    id: string;
  }[];
};

const Card: React.FC<Node> = ({
  title,
  description,
  thumbnail,
  url,
  category,
}) => {
  return (
    <div className="">
      <div className="w-full h-[370px] lg:h-[450px] flex flex-col gap-4">
        <div className="relative w-full h-full mx-auto">
          <Image
            src={thumbnail.src}
            alt={thumbnail.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            quality={100}
            className="rounded-lg object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Link href={url} target="_blank">
            <h1 className="font-bold text-xl">{title}</h1>
          </Link>
          <div className="flex flex-wrap gap-2 text-sm">
            {category.map(({ title, id }) => (
              <span
                key={id}
                className="px-3 py-1 dark:bg-zinc-700 bg-zinc-100 rounded-full"
              >
                {title}
              </span>
            ))}
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
