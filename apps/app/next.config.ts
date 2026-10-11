import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@albirru/design-system", "@albirru/database"],
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "motion",
      "date-fns",
      "recharts",
      "@base-ui/react",
      "clsx",
      "tailwind-merge",
      "nuqs",
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
