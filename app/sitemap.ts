import type { MetadataRoute } from "next";

import { getStaticSlugs } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [work, writing] = await Promise.all([
    getStaticSlugs("work"),
    getStaticSlugs("writing"),
  ]);

  const staticRoutes = ["", "/work", "/writing", "/resume"].map((route) => ({
    url: `https://saviofilho.dev${route}`,
    lastModified: new Date(),
  }));

  const workRoutes = work.map(({ slug }) => ({
    url: `https://saviofilho.dev/work/${slug}`,
    lastModified: new Date(),
  }));

  const writingRoutes = writing.map(({ slug }) => ({
    url: `https://saviofilho.dev/writing/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...workRoutes, ...writingRoutes];
}
