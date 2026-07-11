import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // "standalone" is for self-hosted servers (our cPanel deployment). It
  // conflicts with Vercel's own serverless build system, so skip it there.
  output: process.env.VERCEL ? undefined : "standalone",
  outputFileTracingRoot: path.join(__dirname),
  // The production host has a tight memory limit; types are already
  // checked locally on every change, so skip re-checking during this build.
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
