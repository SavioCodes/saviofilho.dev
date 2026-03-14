import Link from "next/link";

import { getWorkEntries } from "@/lib/content";

export const metadata = {
  title: "Work",
  description: "Case studies across public repositories and private product systems.",
};

export default async function WorkPage() {
  const entries = await getWorkEntries();
  const publicCount = entries.filter((entry) => entry.frontmatter.kind === "public").length;
  const privateCount = entries.length - publicCount;

  return (
    <div className="page-section-stack">
      <section className="page-masthead">
        <div className="page-masthead__copy">
          <p className="eyebrow">Work</p>
          <h1>Six systems that hold up under technical scrutiny.</h1>
          <p className="lead">
            Four are public repositories with runnable engineering proof. Two stay
            private, but the cases still show architecture, constraints, operating
            flows, and why the system was shaped the way it was.
          </p>
        </div>

        <aside className="paper-panel page-masthead__aside">
          <p className="micro-label">Index notes</p>
          <div className="fact-list">
            <div className="fact-list__item">
              <span>Public repos</span>
              <strong>{publicCount} case studies</strong>
            </div>
            <div className="fact-list__item">
              <span>Private systems</span>
              <strong>{privateCount} documented without public code</strong>
            </div>
            <div className="fact-list__item">
              <span>Selection rule</span>
              <strong>Keep only projects that hold up in technical interviews</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="folio-list">
        {entries.map((entry, index) => (
          <article className="folio-entry" key={entry.slug}>
            <div className="folio-entry__number">{String(index + 1).padStart(2, "0")}</div>

            <div className="folio-entry__meta">
              <span className={`pill pill-${entry.frontmatter.kind}`}>
                {entry.frontmatter.kind === "public"
                  ? "Public repository"
                  : "Private case study"}
              </span>
              <span>{entry.frontmatter.year}</span>
            </div>

            <div className="folio-entry__body">
              <h2>{entry.frontmatter.title}</h2>
              <p>{entry.frontmatter.summary}</p>
              <p className="project-highlight">{entry.frontmatter.highlight}</p>
              <ul className="tag-list">
                {entry.frontmatter.stack.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <div className="folio-entry__links">
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
