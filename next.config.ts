import type { NextConfig } from "next";

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

export default nextConfig;
