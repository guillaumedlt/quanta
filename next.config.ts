import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // 301 redirects: old domain factorymonaco.com -> quantamonaco.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "factorymonaco.com" }],
        destination: "https://quantamonaco.com/:path*",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.factorymonaco.com" }],
        destination: "https://quantamonaco.com/:path*",
        statusCode: 301,
      },
      // 301 redirect: www -> non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.quantamonaco.com" }],
        destination: "https://quantamonaco.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
