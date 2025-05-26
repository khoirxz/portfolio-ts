import { gql } from "graphql-request";
import client from "./client";
import { Data as POSTSPROPS } from "../types/posts";

export const getPosts = async () => {
  const gqlResponse: POSTSPROPS = await client.request(
    gql`
      {
        allPosts {
          edges {
            node {
              title
              description
              slug
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
