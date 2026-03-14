import type { Metadata } from "next";

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
  const entry = await getWritingEntry(slug);

  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
  };
}

export default async function WritingDetailPage({
  params,
}: WritingDetailPageProps) {
  const { slug } = await params;
  const entry = await getWritingEntry(slug);

  return (
    <div className="page-section-stack">
      <section className="page-intro narrow">
        <p className="eyebrow">Writing</p>
        <h1>{entry.frontmatter.title}</h1>
        <p className="lead">{entry.frontmatter.summary}</p>
        <div className="project-meta">
          <span>{entry.frontmatter.publishedAt}</span>
          <span>{entry.readingMinutes} min read</span>
        </div>
      </section>

      <article className="rich-article">{entry.content}</article>
    </div>
  );
}
