import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/healthcontentai',
  assetPrefix: '/healthcontentai',
};

export default nextConfig;
