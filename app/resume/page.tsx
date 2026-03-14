import { contactLinks, resumeSections } from "@/lib/site";

export const metadata = {
  title: "Resume",
  description: "Profile, capabilities, stack, and contact details for Savio Filho.",
};

export default function ResumePage() {
  return (
    <div className="page-section-stack">
      <section className="page-intro">
        <p className="eyebrow">Resume</p>
        <h1>Savio Filho</h1>
        <p className="lead">
          Software engineer focused on backend products, SaaS systems, and
          applied AI with a strong bias toward documentation and operational
          clarity.
        </p>
      </section>

      <section className="grid-two">
        <article className="card">
          <p className="section-label">Focus</p>
          <ul className="stack-list">
            {resumeSections.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <p className="section-label">Availability</p>
          <p>{resumeSections.availability}</p>
        </article>
      </section>

      <section className="grid-two">
        <article className="card">
          <p className="section-label">Capabilities</p>
          <ul className="stack-list">
            {resumeSections.capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <p className="section-label">Stack</p>
          <ul className="stack-list">
            {resumeSections.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card">
        <p className="section-label">Contact</p>
        <div className="footer-links">
          {contactLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
