import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

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
        <a href={url}>
          <Button className="mt-5 bg-primary bg-white text-black w-full">
            Visit
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Card;
