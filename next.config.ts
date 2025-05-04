import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Deshabilitado temporalmente
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Solo usa basePath en producción
  basePath: process.env.NODE_ENV === 'production' ? '/healthcontentai' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/healthcontentai' : '',
};

export default nextConfig;
