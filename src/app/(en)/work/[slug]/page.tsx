import type { Metadata } from "next";

import { buildMetadata, WorkDetailPage } from "@/features/site/pages";
import { getStaticSlugs, getWorkEntry } from "@/lib/content";
import { getWorkSocialPreviewPath } from "@/lib/social";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getStaticSlugs("work");
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getWorkEntry("en", slug);

  return buildMetadata(
    "en",
    `/work/${slug}`,
    entry.frontmatter.title,
    entry.frontmatter.summary,
    getWorkSocialPreviewPath(slug),
    `${entry.frontmatter.title} social preview`,
  );
}

export default async function EnglishWorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  return <WorkDetailPage locale="en" slug={slug} />;
}
