import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,   // 👈 abilita la cartella app/
  },
};

export default nextConfig;
