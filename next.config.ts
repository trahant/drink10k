import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // So refresh shows latest: avoid caching the HTML document (static assets still cached)
  async headers() {
    return [
      {
        source: "/",
        headers: [
          { key: "Cache-Control", value: "no-cache, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
