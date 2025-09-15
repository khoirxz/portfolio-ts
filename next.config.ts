import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

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
  experimental: {
    mdxRs: true,
  },
};

export default withContentlayer(nextConfig);
