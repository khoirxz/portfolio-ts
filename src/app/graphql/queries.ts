import { gql } from "graphql-request";
import client from "./client";
import { Data as POSTSPROPS } from "../types/posts";
import { POSTPROPS } from "../types/post";

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

export const getPost = async (slug: string) => {
  const gqlResponse: POSTPROPS = await client.request(
    gql`
      query ($slug: String!) {
        allPosts(where: { slug: { eq: $slug } }) {
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
                width
              }
              content {
                json
              }
            }
          }
        }
      }
    `,
    { slug }
  );

  return gqlResponse;
};
