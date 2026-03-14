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

  return (
    <div className="page-section-stack">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio / 2026</p>
          <h1>
            I build backend-heavy products that survive first contact with real
            operations.
          </h1>
          <p className="lead">
            I work across SaaS, automation, and applied AI with a product lens:
            auth, billing, queues, data contracts, docs, and the operational
            details that make a system trustworthy.
          </p>
        </div>

        <div className="hero-aside card">
          <p className="micro-label">Current narrative</p>
          <ul className="metric-list">
            <li>Backend + product systems</li>
            <li>TypeScript / Node.js / Python</li>
            <li>Public repos + private case studies</li>
            <li>PT-BR native, English-ready documentation</li>
          </ul>
          <div className="hero-actions">
            <Link className="button-primary" href="/work">
              Browse case studies
            </Link>
            <Link className="button-secondary" href="/resume">
              View resume
            </Link>
          </div>
        </div>
      </section>

      <section className="grid-two">
        <article className="card">
          <p className="section-label">Why this site exists</p>
          <h2>A curated portfolio, not a project dump.</h2>
          <p>
            GitHub is where I keep the code. This site is where I explain why
            the work mattered, what constraints shaped it, and which trade-offs
            I made on purpose.
          </p>
        </article>

        <article className="card">
          <p className="section-label">What I optimize for</p>
          <ul className="stack-list">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-block">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Selected work</p>
            <h2>Public repos with real system boundaries</h2>
          </div>
          <Link className="text-link" href="/work">
            See all 6 case studies
          </Link>
        </div>

        <div className="card-grid">
          {featuredWork.map((entry) => (
            <article className="project-card" key={entry.slug}>
              <div className="project-meta">
                <span className={`pill pill-${entry.frontmatter.kind}`}>
                  {entry.frontmatter.kind === "public"
                    ? "Public repository"
                    : "Private case study"}
                </span>
                <span>{entry.frontmatter.year}</span>
              </div>
              <h3>{entry.frontmatter.title}</h3>
              <p>{entry.frontmatter.summary}</p>
              <p className="project-highlight">{entry.frontmatter.highlight}</p>
              <ul className="tag-list">
                {entry.frontmatter.stack.slice(0, 4).map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Link className="text-link" href={`/work/${entry.slug}`}>
                Read case study
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="grid-two">
        <article className="card">
          <p className="section-label">Private work, still usable</p>
          <h2>Client-sensitive systems can still become strong case studies.</h2>
          <p>
            Two of the projects here stay private at the repo level but are
            documented openly: a WhatsApp quote workflow and a QR-based
            accessibility audit platform. The code stays private; the decisions
            do not.
          </p>
        </article>

        <article className="card">
          <p className="section-label">Writing</p>
          <h2>Short technical notes with operational bias.</h2>
          <div className="writing-list compact">
            {latestWriting.map((entry) => (
              <Link key={entry.slug} className="writing-item" href={`/writing/${entry.slug}`}>
                <span>{entry.frontmatter.title}</span>
                <span>{entry.readingMinutes} min</span>
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="section-block">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Next bets</p>
            <h2>Projects worth building next</h2>
          </div>
        </div>

        <div className="card-grid card-grid-tight">
          {nextBets.map((project) => (
            <article className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
