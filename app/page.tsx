import Link from "next/link";

import { getWorkEntries, getWritingEntries } from "@/lib/content";
import { nextBets, principles } from "@/lib/site";

export default async function HomePage() {
  const [workEntries, writingEntries] = await Promise.all([
    getWorkEntries(),
    getWritingEntries(),
  ]);

  const featuredWork = workEntries.slice(0, 3);
  const latestWriting = writingEntries.slice(0, 3);
  const publicWorkCount = workEntries.filter((entry) => entry.frontmatter.kind === "public").length;
  const privateWorkCount = workEntries.length - publicWorkCount;
  const notebookFacts = [
    {
      label: "Public engineering surface",
      value: `${publicWorkCount} repository-backed case studies`,
    },
    {
      label: "Private work still documented",
      value: `${privateWorkCount} product systems with code kept private`,
    },
    {
      label: "Writing rhythm",
      value: `${writingEntries.length} short notes about product systems and AI edges`,
    },
  ] as const;
  const currentFocus = [
    "Billing, auth, queue, and review flows that still behave after day one.",
    "Applied AI with cost ceilings, fallback paths, and logs instead of magic prompts.",
    "Systems writeups that show boundaries, failure modes, and operator-facing detail.",
  ] as const;
  const proofMarks = [
    "Runbooks, QA lists, and architecture notes stay visible.",
    "Public repos ship with tests, build steps, and explicit trade-offs.",
    "Private systems still show workflow design, constraints, and audit trails.",
  ] as const;

  return (
    <div className="page-section-stack home-stack">
      <section className="home-masthead">
        <div className="home-masthead__copy">
          <p className="eyebrow">Savio Filho / Portfolio / 2026</p>
          <p className="home-kicker">Backend product engineer from Brazil</p>
          <h1>
            I build product systems with clear boundaries, boring operations, and proof you can inspect.
          </h1>
          <p className="lead">
            The work here is centered on tenant isolation, webhook lifecycles, upload
            pipelines, billing states, AI cost controls, and the docs that keep those
            systems understandable once another engineer or operator has to touch them.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" href="/work">
              Browse case studies
            </Link>
            <Link className="button-secondary" href="/resume">
              View resume
            </Link>
          </div>
        </div>

        <aside className="home-masthead__rail">
          <article className="paper-panel paper-panel-accent">
            <p className="micro-label">Current focus</p>
            <ul className="dossier-list">
              {currentFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="paper-panel">
            <p className="micro-label">What is inside this portfolio</p>
            <div className="fact-list">
              {notebookFacts.map((fact) => (
                <div className="fact-list__item" key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </section>

      <section className="proof-band">
        {proofMarks.map((mark, index) => (
          <article className="proof-band__item" key={mark}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{mark}</p>
          </article>
        ))}
      </section>

      <section className="editorial-columns">
        <article className="paper-panel manifesto-panel">
          <p className="section-label">Why this site exists</p>
          <h2>This is a case file, not a gallery wall.</h2>
          <p>
            GitHub is where I keep the code. This site is where I explain why
            the work mattered, which constraints shaped it, and how the system
            behaves once real operations start touching it.
          </p>
        </article>

        <article className="paper-panel principles-panel">
          <p className="section-label">Operating principles</p>
          <div className="principle-notes">
            {principles.map((principle, index) => (
              <div className="principle-note" key={principle}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-block section-block-editorial">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Selected work</p>
            <h2>Flagship repos shaped like real operating systems</h2>
          </div>
          <Link className="text-link" href="/work">
            See all 6 case studies
          </Link>
        </div>

        <div className="case-index">
          {featuredWork.map((entry, index) => (
            <article className="case-index__item" key={entry.slug}>
              <div className="case-index__number">{String(index + 1).padStart(2, "0")}</div>

              <div className="case-index__meta">
                <span className={`pill pill-${entry.frontmatter.kind}`}>
                  {entry.frontmatter.kind === "public"
                    ? "Public repository"
                    : "Private case study"}
                </span>
                <span>{entry.frontmatter.year}</span>
              </div>

              <div className="case-index__body">
                <h3>{entry.frontmatter.title}</h3>
                <p>{entry.frontmatter.summary}</p>
                <p className="project-highlight">{entry.frontmatter.highlight}</p>
                <ul className="tag-list">
                  {entry.frontmatter.stack.slice(0, 4).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              <div className="case-index__action">
                <Link className="text-link" href={`/work/${entry.slug}`}>
                  Read case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-columns editorial-columns-bottom">
        <article className="paper-panel private-work-panel">
          <p className="section-label">Private work, still legible</p>
          <h2>Code can stay private. Decision-making should not.</h2>
          <p>
            Two of the projects here stay private at the repo level but are
            still documented with the same standard: workflow boundaries,
            operational constraints, and the trade-offs that shaped the build.
          </p>
        </article>

        <article className="paper-panel writing-panel">
          <p className="section-label">Writing</p>
          <h2>Short notes, written like field reports.</h2>
          <div className="note-ledger">
            {latestWriting.map((entry) => (
              <Link key={entry.slug} className="note-ledger__item" href={`/writing/${entry.slug}`}>
                <span className="note-ledger__date">{entry.frontmatter.publishedAt}</span>
                <span className="note-ledger__title">{entry.frontmatter.title}</span>
                <span className="note-ledger__meta">{entry.readingMinutes} min</span>
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="section-block section-block-editorial">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Next bets</p>
            <h2>Projects worth building next</h2>
          </div>
        </div>

        <div className="bet-grid">
          {nextBets.map((project, index) => (
            <article className="bet-card" key={project.title}>
              <span className="bet-card__index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
