import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.caisy.io",
        pathname: "/assets/**",
      },
    ],
  },
};

export default withContentCollections(nextConfig);
