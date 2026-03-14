import type { MetadataRoute } from "next";

import { getStaticSlugs } from "@/lib/content";
import { siteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [work, writing] = await Promise.all([
    getStaticSlugs("work"),
    getStaticSlugs("writing"),
  ]);

  const staticRoutes = ["", "/work", "/writing", "/resume"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const workRoutes = work.map(({ slug }) => ({
    url: `${siteUrl}/work/${slug}`,
    lastModified: new Date(),
  }));

  const writingRoutes = writing.map(({ slug }) => ({
    url: `${siteUrl}/writing/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...workRoutes, ...writingRoutes];
}
