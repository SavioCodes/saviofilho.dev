import Link from "next/link";

import { getWorkEntries } from "@/lib/content";

export const metadata = {
  title: "Work",
  description: "Case studies across public repositories and private product work.",
};

export default async function WorkPage() {
  const entries = await getWorkEntries();

  return (
    <div className="page-section-stack">
      <section className="page-intro">
        <p className="eyebrow">Work</p>
        <h1>Six projects that define the current portfolio.</h1>
        <p className="lead">
          Four are public repositories. Two remain private but are documented as
          product and systems case studies because the engineering decisions are
          still worth showing.
        </p>
      </section>

      <section className="card-grid">
        {entries.map((entry) => (
          <article className="project-card" key={entry.slug}>
            <div className="project-meta">
              <span className={`pill pill-${entry.frontmatter.kind}`}>
                {entry.frontmatter.kind === "public"
                  ? "Public repository"
                  : "Private case study"}
              </span>
              <span>{entry.frontmatter.year}</span>
            </div>
            <h2>{entry.frontmatter.title}</h2>
            <p>{entry.frontmatter.summary}</p>
            <p className="project-highlight">{entry.frontmatter.highlight}</p>
            <ul className="tag-list">
              {entry.frontmatter.stack.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="project-links">
              <Link className="text-link" href={`/work/${entry.slug}`}>
                Read case study
              </Link>
              {entry.frontmatter.repo ? (
                <a href={entry.frontmatter.repo} target="_blank" rel="noreferrer">
                  Repository
                </a>
              ) : (
                <span className="muted-copy">Repo stays private</span>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
