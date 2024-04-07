/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.caisy.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
