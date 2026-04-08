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
      // Redirect old domain factorymonaco.com -> quantamonaco.com (301 permanent)
      {
        source: "/:path*",
        has: [{ type: "host", value: "factorymonaco.com" }],
        destination: "https://quantamonaco.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.factorymonaco.com" }],
        destination: "https://quantamonaco.com/:path*",
        permanent: true,
      },
      // Redirect www.quantamonaco.com -> quantamonaco.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.quantamonaco.com" }],
        destination: "https://quantamonaco.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
