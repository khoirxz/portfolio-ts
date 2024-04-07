import { gql, GraphQLClient } from "graphql-request";

import { Data } from "../types/posts";
import Content from "@/components/content";

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
              thumbnail {
                src
                title
              }
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

  return <Content data={data} />;
};

export default Home;
