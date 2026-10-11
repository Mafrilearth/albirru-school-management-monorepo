import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@albirru/database"],
  poweredByHeader: false,
};

export default nextConfig;
