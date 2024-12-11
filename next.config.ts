import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    // Ensure this is enabled for the `/app` directory
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
