import type { Metadata } from "next";

import { getStaticSlugs, getWorkEntries, getWorkEntry } from "@/lib/content";

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
  const entry = await getWorkEntry(slug);

  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const entry = await getWorkEntry(slug);
  const allEntries = await getWorkEntries();
  const nextEntry = allEntries.find(
    (item) => item.frontmatter.order === entry.frontmatter.order + 1,
  );

  return (
    <div className="page-section-stack">
      <section className="detail-hero">
        <div className="detail-copy">
          <p className="eyebrow">
            {entry.frontmatter.kind === "public"
              ? "Public repo"
              : "Private case study"}
          </p>
          <h1>{entry.frontmatter.title}</h1>
          <p className="lead">{entry.frontmatter.summary}</p>
        </div>

        <aside className="detail-aside card">
          <dl className="meta-grid">
            <div>
              <dt>Role</dt>
              <dd>{entry.frontmatter.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{entry.frontmatter.year}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{entry.frontmatter.status}</dd>
            </div>
            <div>
              <dt>Reading time</dt>
              <dd>{entry.readingMinutes} min</dd>
            </div>
          </dl>

          <div className="detail-links">
            {entry.frontmatter.repo ? (
              <a href={entry.frontmatter.repo} target="_blank" rel="noreferrer">
                Open repository
              </a>
            ) : (
              <span className="muted-copy">Repository intentionally private</span>
            )}
          </div>

          <ul className="tag-list">
            {entry.frontmatter.stack.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </aside>
      </section>

      <article className="rich-article">{entry.content}</article>

      {nextEntry ? (
        <section className="card next-card">
          <p className="section-label">Next case study</p>
          <h2>{nextEntry.frontmatter.title}</h2>
          <p>{nextEntry.frontmatter.summary}</p>
          <a className="text-link" href={`/work/${nextEntry.slug}`}>
            Continue reading
          </a>
        </section>
      ) : null}
    </div>
  );
}
