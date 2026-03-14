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
      <section className="page-masthead">
        <div className="page-masthead__copy">
          <p className="eyebrow">Writing</p>
          <h1>Notes about systems, cost, and product reality.</h1>
          <p className="lead">
            I keep these short on purpose. The goal is to make my thinking legible,
            not to publish broad thought leadership.
          </p>
        </div>

        <aside className="paper-panel page-masthead__aside">
          <p className="micro-label">Writing rule</p>
          <p>
            Every note should clarify a decision or constraint I actually care
            about in products: money, operations, interfaces, and where AI helps
            without taking over the product.
          </p>
        </aside>
      </section>

      <section className="notes-ledger">
        {entries.map((entry, index) => (
          <article className="notes-ledger__row" key={entry.slug}>
            <div className="notes-ledger__index">{String(index + 1).padStart(2, "0")}</div>
            <div className="notes-ledger__date">{entry.frontmatter.publishedAt}</div>
            <div className="notes-ledger__body">
              <h2>{entry.frontmatter.title}</h2>
              <p>{entry.frontmatter.summary}</p>
              <ul className="tag-list">
                {entry.frontmatter.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="notes-ledger__meta">
              <span>{entry.readingMinutes} min read</span>
              <Link className="text-link" href={`/writing/${entry.slug}`}>
                Read note
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
