import Link from "next/link";

import { getWritingEntries } from "@/lib/content";

export const metadata = {
  title: "Writing",
  description:
    "Short technical writing on product systems, AI usage, and portfolio curation.",
};

export default async function WritingPage() {
  const entries = await getWritingEntries();

  return (
    <div className="page-section-stack">
      <section className="page-intro">
        <p className="eyebrow">Writing</p>
        <h1>Notes about systems, cost, and product reality.</h1>
        <p className="lead">
          I keep these short on purpose. The goal is to make my thinking legible,
          not to publish broad thought leadership.
        </p>
      </section>

      <section className="writing-list">
        {entries.map((entry) => (
          <article className="writing-card" key={entry.slug}>
            <div className="project-meta">
              <span>{entry.frontmatter.publishedAt}</span>
              <span>{entry.readingMinutes} min read</span>
            </div>
            <h2>{entry.frontmatter.title}</h2>
            <p>{entry.frontmatter.summary}</p>
            <ul className="tag-list">
              {entry.frontmatter.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <Link className="text-link" href={`/writing/${entry.slug}`}>
              Read note
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
