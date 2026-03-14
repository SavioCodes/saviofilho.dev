import type { NextConfig } from "next";

const siteBasePath = process.env.SITE_BASE_PATH?.trim()
  ? `/${process.env.SITE_BASE_PATH.trim().replace(/^\/+|\/+$/g, "")}`
  : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: siteBasePath,
  assetPrefix: siteBasePath ? `${siteBasePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
