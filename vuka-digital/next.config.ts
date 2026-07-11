import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // "standalone" is for self-hosted servers (our cPanel deployment). It
  // conflicts with Vercel's own serverless build system, so skip it there.
  output: process.env.VERCEL ? undefined : "standalone",
  // Only needed to fix local/cPanel file tracing (an unrelated lockfile in a
  // parent folder was confusing it). Vercel computes its own root correctly
  // and this override conflicts with its build packaging, so skip it there.
  outputFileTracingRoot: process.env.VERCEL ? undefined : path.join(__dirname),
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
