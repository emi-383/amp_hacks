import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is served as plain files by Apache (no Node process), so the
  // build has to emit a static `out/` directory rather than a server bundle.
  output: "export",

  turbopack: {
    // Pin the project root. Without this, Turbopack walks up and finds an
    // unrelated package-lock.json in the user's home directory and warns.
    root: path.join(__dirname),
  },
};

export default nextConfig;
