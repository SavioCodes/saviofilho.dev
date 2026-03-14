import { contactLinks, resumeSections } from "@/lib/site";

export const metadata = {
  title: "Resume",
  description: "Profile, capabilities, stack, and contact details for Savio Filho.",
};

export default function ResumePage() {
  return (
    <div className="page-section-stack">
      <section className="resume-sheet">
        <div className="resume-sheet__intro">
          <p className="eyebrow">Resume</p>
          <h1>Savio Filho</h1>
          <p className="lead">
            Software engineer focused on backend products, SaaS systems, and
            applied AI with a strong bias toward documentation and operational
            clarity.
          </p>
        </div>

        <aside className="paper-panel resume-sheet__aside">
          <p className="micro-label">Availability</p>
          <p>{resumeSections.availability}</p>
          <div className="footer-links">
            {contactLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </aside>
      </section>

      <section className="resume-strip-grid">
        <article className="resume-strip">
          <p className="section-label">Focus</p>
          <ul className="stack-list">
            {resumeSections.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="resume-strip">
          <p className="section-label">Capabilities</p>
          <ul className="stack-list">
            {resumeSections.capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="resume-strip">
          <p className="section-label">Stack</p>
          <ul className="stack-list">
            {resumeSections.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
