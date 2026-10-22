import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tools/typespark",
        destination: "/tools/textgenerators",
        permanent: true,
      },
      {
        source: "/tools/blogsite",
        destination: "/work/the-daily-mind",
        permanent: true,
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
