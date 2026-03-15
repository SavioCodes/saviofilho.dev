import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-shell">
      <div className="page-section-stack">
        <section className="page-intro narrow">
          <p className="eyebrow">404</p>
          <h1>This page is not here.</h1>
          <p className="lead">
            The case study may have moved during the bilingual cleanup. Start again from the work index.
          </p>
          <Link className="button-primary" href="/work">
            Go to work
          </Link>
        </section>
      </div>
    </div>
  );
}
