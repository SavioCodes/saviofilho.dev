import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? "/saviofilho.dev" : "",
  assetPrefix: isGitHubPagesBuild ? "/saviofilho.dev/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
