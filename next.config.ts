import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 2, // cap SWC parallel workers (default: numCPUs - 1 = 13, causes memory/I/O crash)
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
