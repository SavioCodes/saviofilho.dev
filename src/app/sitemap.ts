import type { MetadataRoute } from "next";

import { localizePath } from "@/config/i18n";
import { getStaticSlugs } from "@/lib/content";
import { absoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [work, writing] = await Promise.all([
    getStaticSlugs("work"),
    getStaticSlugs("writing"),
  ]);

  const locales = ["en", "pt-br"] as const;
  const staticRoutes = ["", "/work", "/writing", "/resume"];

  return [
    ...locales.flatMap((locale) =>
      staticRoutes.map((route) => ({
        url: absoluteUrl(localizePath(locale, route || "/")),
        lastModified: new Date(),
      })),
    ),
    ...locales.flatMap((locale) =>
      work.map(({ slug }) => ({
        url: absoluteUrl(localizePath(locale, `/work/${slug}`)),
        lastModified: new Date(),
      })),
    ),
    ...locales.flatMap((locale) =>
      writing.map(({ slug }) => ({
        url: absoluteUrl(localizePath(locale, `/writing/${slug}`)),
        lastModified: new Date(),
      })),
    ),
  ];
}
