import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  `https://cloud.caisy.io/api/v3/e/${process.env.PROJECT_ID}/graphql`,
  {
    headers: {
      "Content-Type": "application/json",
      "x-caisy-apikey": `${process.env.API_KEY}`,
    },
    cache: "no-cache",
  }
);

export default client;
