import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  category: {
    id: string;
    title: string;
  }[];
  url: string;
};

const Card: React.FC<CardProps> = ({ title, description, category, url }) => {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Link href={url} target="_blank">
        <div className="bg-black m-1 p-6 rounded-xl flex flex-col gap-1">
          <h1 className="font-bold text-2xl">{title}</h1>
          <div className="my-3 flex gap-2">
            {category.map((item) => (
              <Badge
                key={item.id}
                className="text-white group-hover:border-black group-hover:text-black"
              >
                {item.title}
              </Badge>
            ))}
          </div>
          <p className="group-hover:text-black">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
