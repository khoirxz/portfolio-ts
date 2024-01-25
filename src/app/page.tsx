import { gql, GraphQLClient } from "graphql-request";

import {
  PiInstagramLogoFill,
  PiFacebookLogoFill,
  PiGithubLogoFill,
} from "react-icons/pi";

// import Card from "@/components/custom/card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Data } from "../types/posts";
import Link from "next/link";

const getData = async () => {
  const client = new GraphQLClient(
    `https://cloud.caisy.io/api/v3/e/${process.env.PROJECT_ID}/graphql`,
    {
      headers: {
        "x-caisy-apikey": `${process.env.API_KEY}`,
      },
    }
  );

  const gqlResponse: Data = await client.request(
    gql`
      {
        allPosts {
          edges {
            node {
              title
              description
              category {
                ... on Categories {
                  id
                  title
                }
              }
              id
              url
            }
          }
        }
      }
    `
  );

  return gqlResponse;
};

const Home: React.FC = async () => {
  const data = await getData();

  return (
    <main className="items-center justify-between">
      <div className="max-w-screen-xl mx-auto w-screen relative">
        <div className="static lg:fixed flex flex-col justify-between w-full p-24 h-screen lg:py-24 lg:pl-32 lg:max-w-xl">
          <div>
            <h1 className="font-bold text-6xl mb-8">Rizqi</h1>
            <p>
              I am an independent frontend programmer and project builder with a
              passion for startups and new technologies.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <span>
                <a target="_blank" href="mailto:khoirrurrohman@gmail.com">
                  khoirrurrohman@gmail.com
                </a>
              </span>
              <span className="flex gap-2">
                <PiInstagramLogoFill className="w-6 h-6" />
                <a
                  target="_blank"
                  href="https://www.instagram.com/rizqi.khoir/"
                >
                  @rizqi.khoir
                </a>
              </span>
              <span className="flex gap-2">
                <PiFacebookLogoFill className="w-6 h-6" />
                <a target="_blank" href="https://www.facebook.com/rootbackdor/">
                  rootbackdor
                </a>
              </span>
              <span className="flex gap-2">
                <PiGithubLogoFill className="w-6 h-6" />
                <a target="_blank" href="https://www.github.com/khoirxz/">
                  khoirxz
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="static lg:absolute p-24 w-full flex flex-col gap-5 md:right-0 md:py-24 lg:pl-0 lg:max-w-xl lg:pr-24">
          <h1 className="lg:hidden">Project</h1>
          {data.allPosts.edges.map((item) => (
            <Link key={item.node.id} href={item.node.url}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{item.node.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2 gap-2">
                    {item.node.category.map((item) => (
                      <Badge
                        key={item.id}
                        className="text-white group-hover:border-black group-hover:text-black"
                      >
                        {item.title}
                      </Badge>
                    ))}
                  </div>
                  <p>{item.node.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
