import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"], // whitelist external image domain
  },
};

export default nextConfig;
