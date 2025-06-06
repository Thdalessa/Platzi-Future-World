import type { NextConfig } from "next";
import { hostname } from "os";

const path = require("path");

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
    prependData: `@use "variables.scss" as *;`,
  },
  images: {
    remotePatterns: [
      {
        hostname: "cdn.shopify.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
