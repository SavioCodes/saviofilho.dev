import type { Metadata } from "next";

import { buildMetadata, WritingDetailPage } from "@/features/site/pages";
import { getStaticSlugs, getWritingEntry } from "@/lib/content";

type WritingDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getStaticSlugs("writing");
}

export async function generateMetadata({
  params,
}: WritingDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getWritingEntry("en", slug);

  return buildMetadata("en", `/writing/${slug}`, entry.frontmatter.title, entry.frontmatter.summary);
}

export default async function EnglishWritingDetailPage({
  params,
}: WritingDetailPageProps) {
  const { slug } = await params;
  return <WritingDetailPage locale="en" slug={slug} />;
}
