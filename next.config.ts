import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the project root. Without this, Turbopack walks up and finds an
    // unrelated package-lock.json in the user's home directory and warns.
    root: path.join(__dirname),
  },
};

export default nextConfig;
