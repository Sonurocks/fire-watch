import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fire-watch.co",
      },
    ],
  },
};

export default nextConfig;
