import Link from "next/link";
import type { Metadata } from "next";

import { SiteShell } from "@/components/chrome/site-shell";
import type { Locale } from "@/config/i18n";
import { localizePath, toHreflang } from "@/config/i18n";
import { contactLinks, getSiteCopy } from "@/config/site";
import {
  getWorkEntries,
  getWritingEntries,
  getWorkEntry,
  getWritingEntry,
} from "@/lib/content";
import { absoluteUrl } from "@/lib/site-config";
import type { Entry, WritingFrontmatter, WritingTheme } from "@/types/content";

function buildAlternates(locale: Locale, path = "/") {
  return {
    canonical: localizePath(locale, path),
    languages: {
      en: absoluteUrl(localizePath("en", path)),
      "pt-BR": absoluteUrl(localizePath("pt-br", path)),
    },
  };
}

export function buildMetadata(
  locale: Locale,
  path: string,
  title?: string,
  description?: string,
): Metadata {
  const copy = getSiteCopy(locale);
  const finalTitle = title ?? copy.metadata.title;
  const finalDescription = description ?? copy.metadata.description;
  const localeTag = toHreflang(locale);

  return {
    title: finalTitle,
    description: finalDescription,
    alternates: buildAlternates(locale, path),
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: absoluteUrl(localizePath(locale, path)),
      locale: localeTag,
      alternateLocale: locale === "en" ? ["pt-BR"] : ["en"],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
    },
  };
}

const writingThemeOrder: WritingTheme[] = [
  "ai-guardrails",
  "saas-ops",
  "backend-systems",
  "builder-notes",
];

const featuredWritingSlugOrder = [
  "simulation-before-execution",
  "billing-webhooks-need-replay-discipline",
  "contracts-beat-clever-apis",
] as const;

function getFeaturedWritingEntries(entries: Entry<WritingFrontmatter>[]) {
  const featuredEntries = featuredWritingSlugOrder
    .map((slug) => entries.find((entry) => entry.slug === slug && entry.frontmatter.featured))
    .filter((entry): entry is Entry<WritingFrontmatter> => Boolean(entry));

  if (featuredEntries.length >= 3) {
    return featuredEntries.slice(0, 3);
  }

  const fallbackEntries = entries.filter(
    (entry) => !featuredEntries.some((featured) => featured.slug === entry.slug),
  );

  return [...featuredEntries, ...fallbackEntries].slice(0, 3);
}

function getWritingThemeGroups(entries: Entry<WritingFrontmatter>[]) {
  return writingThemeOrder
    .map((theme) => ({
      theme,
      entries: entries.filter((entry) => entry.frontmatter.theme === theme),
    }))
    .filter((group) => group.entries.length > 0);
}

export async function HomePage({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const [workEntries, writingEntries] = await Promise.all([
    getWorkEntries(locale),
    getWritingEntries(locale),
  ]);

  const publicWorkEntries = workEntries.filter((entry) => entry.frontmatter.kind === "public");
  const privateWorkEntries = workEntries.filter((entry) => entry.frontmatter.kind === "private");
  const featuredWork = publicWorkEntries.slice(0, 3);
  const featuredWriting = getFeaturedWritingEntries(writingEntries);
  const leadWriting = featuredWriting[0];
  const secondaryWriting = featuredWriting.slice(1, 3);
  const publicWorkCount = publicWorkEntries.length;
  const privateWorkCount = privateWorkEntries.length;

  const notebookFacts = [
    {
      label: copy.home.factLabels.publicSurface,
      value:
        locale === "pt-br"
          ? `${publicWorkCount} estudos de caso com repositorio publico`
          : `${publicWorkCount} repository-backed case studies`,
    },
    {
      label: copy.home.factLabels.privateSurface,
      value:
        locale === "pt-br"
          ? `${privateWorkCount} sistemas privados documentados sem expor codigo`
          : `${privateWorkCount} product systems with code kept private`,
    },
    {
      label: copy.home.factLabels.writing,
      value:
        locale === "pt-br"
          ? `${writingEntries.length} notas curtas sobre sistemas de produto e IA`
          : `${writingEntries.length} short notes about product systems and AI edges`,
    },
  ] as const;

  return (
    <SiteShell locale={locale}>
      <div className="page-section-stack home-stack">
        <section className="home-masthead">
          <div className="home-masthead__copy">
            <p className="eyebrow">{copy.home.eyebrow}</p>
            <p className="home-kicker">{copy.home.kicker}</p>
            <h1>{copy.home.title}</h1>
            <p className="lead">{copy.home.lead}</p>
            <div className="hero-actions">
              <Link className="button-primary" href={localizePath(locale, "/work")}>
                {copy.home.primaryCta}
              </Link>
              <Link className="button-secondary" href={localizePath(locale, "/resume")}>
                {copy.home.secondaryCta}
              </Link>
            </div>
          </div>

          <aside className="home-masthead__rail">
            <article className="paper-panel paper-panel-accent">
              <p className="micro-label">{copy.home.currentFocusTitle}</p>
              <ul className="dossier-list">
                {copy.home.currentFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="paper-panel">
              <p className="micro-label">{copy.home.insideTitle}</p>
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

        <section className="cover-ledger">
          <article className="paper-panel cover-ledger__intro">
            <p className="section-label">{copy.home.dispatchLabel}</p>
            <h2>{copy.home.dispatchTitle}</h2>
            <p>{copy.home.dispatchBody}</p>
          </article>

          <div className="cover-ledger__routes">
            {copy.home.dispatchRoutes.map((route, index) => (
              <Link
                className="route-sheet"
                href={localizePath(locale, route.href)}
                key={route.href}
              >
                <span className="route-sheet__index">{String(index + 1).padStart(2, "0")}</span>
                <div className="route-sheet__body">
                  <strong>{route.title}</strong>
                  <p>{route.body}</p>
                </div>
                <span className="text-link">{route.cta}</span>
              </Link>
            ))}
          </div>

          <article className="paper-panel cover-ledger__notes">
            <p className="micro-label">{copy.home.readingRulesLabel}</p>
            <h2>{copy.home.readingRulesTitle}</h2>
            <ul className="dossier-list">
              {copy.home.readingRules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="proof-band">
          {copy.home.proofMarks.map((mark, index) => (
            <article className="proof-band__item" key={mark}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{mark}</p>
            </article>
          ))}
        </section>

        <section className="editorial-columns">
          <article className="paper-panel manifesto-panel">
            <p className="section-label">{copy.home.whyExistsLabel}</p>
            <h2>{copy.home.whyExistsTitle}</h2>
            <p>{copy.home.whyExistsBody}</p>
          </article>

          <article className="paper-panel principles-panel">
            <p className="section-label">{copy.home.principlesLabel}</p>
            <div className="principle-notes">
              {copy.home.currentFocus.map((principle, index) => (
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
              <p className="section-label">{copy.home.selectedWorkLabel}</p>
              <h2>{copy.home.selectedWorkTitle}</h2>
            </div>
            <Link className="text-link" href={localizePath(locale, "/work")}>
              {copy.home.selectedWorkCta}
            </Link>
          </div>

          <div className="case-index">
            {featuredWork.map((entry, index) => (
              <article className="case-index__item case-index__item-public" key={entry.slug}>
                <div className="case-index__number">{String(index + 1).padStart(2, "0")}</div>
                <div className="case-index__meta">
                  <span className={`pill pill-${entry.frontmatter.kind}`}>
                    {entry.frontmatter.kind === "public"
                      ? copy.work.repoLabel
                      : copy.work.privateLabel}
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
                  <Link className="text-link" href={localizePath(locale, `/work/${entry.slug}`)}>
                    {copy.work.readCase}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-columns editorial-columns-bottom">
          <article className="paper-panel private-work-panel">
            <p className="section-label">{copy.home.privateWorkLabel}</p>
            <h2>{copy.home.privateWorkTitle}</h2>
            <p>{copy.home.privateWorkBody}</p>
            <div className="surface-ledger">
              {privateWorkEntries.map((entry) => (
                <article className="surface-ledger__item surface-ledger__item-private" key={entry.slug}>
                  <div className="surface-ledger__meta">
                    <span className="pill pill-private">{copy.work.privateLabel}</span>
                    <span>{entry.frontmatter.year}</span>
                  </div>
                  <div className="surface-ledger__body">
                    <strong>{entry.frontmatter.title}</strong>
                    <p>{entry.frontmatter.highlight}</p>
                  </div>
                  <div className="surface-ledger__actions">
                    <Link className="text-link" href={localizePath(locale, `/work/${entry.slug}`)}>
                      {copy.work.readCase}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="paper-panel github-surface-panel">
            <p className="section-label">{copy.home.surfaceLabel}</p>
            <h2>{copy.home.surfaceTitle}</h2>
            <p>{copy.home.surfaceBody}</p>
            <div className="surface-ledger">
              {publicWorkEntries.map((entry) => (
                <article className="surface-ledger__item surface-ledger__item-public" key={entry.slug}>
                  <div className="surface-ledger__meta">
                    <span className="pill pill-public">{copy.work.repoLabel}</span>
                    <span>{entry.frontmatter.year}</span>
                  </div>
                  <div className="surface-ledger__body">
                    <strong>{entry.frontmatter.title}</strong>
                    <p>{entry.frontmatter.highlight}</p>
                  </div>
                  <div className="surface-ledger__actions">
                    <Link className="text-link" href={localizePath(locale, `/work/${entry.slug}`)}>
                      {copy.work.readCase}
                    </Link>
                    {entry.frontmatter.repo ? (
                      <a
                        className="muted-copy"
                        href={entry.frontmatter.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {copy.work.openRepo}
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="section-block section-block-editorial">
          <div className="section-heading-row">
            <div className="section-heading-copy">
              <p className="section-label">{copy.home.writingLabel}</p>
              <h2>{copy.home.writingTitle}</h2>
              <p className="group-lead">{copy.home.writingBody}</p>
            </div>
            <Link className="text-link" href={localizePath(locale, "/writing")}>
              {copy.home.writingCta}
            </Link>
          </div>

          <div className="writing-spotlight">
            {leadWriting ? (
              <Link
                className="featured-note-card writing-spotlight__lead"
                href={localizePath(locale, `/writing/${leadWriting.slug}`)}
              >
                <span className="section-label">{copy.writing.featuredLabel}</span>
                <strong>{leadWriting.frontmatter.title}</strong>
                <p>{leadWriting.frontmatter.summary}</p>
                <div className="featured-note-card__meta">
                  <span>{copy.writing.themes[leadWriting.frontmatter.theme].title}</span>
                  <span>
                    {leadWriting.readingMinutes} {copy.writing.minutes}
                  </span>
                </div>
              </Link>
            ) : null}

            <div className="writing-list compact">
              {secondaryWriting.map((entry) => (
                <Link
                  key={entry.slug}
                  className="writing-item writing-item-note"
                  href={localizePath(locale, `/writing/${entry.slug}`)}
                >
                  <div className="writing-item__body">
                    <strong>{entry.frontmatter.title}</strong>
                    <p>{copy.writing.themes[entry.frontmatter.theme].title}</p>
                  </div>
                  <div className="writing-item__meta">
                    <span>{entry.frontmatter.publishedAt}</span>
                    <span>
                      {entry.readingMinutes} {copy.writing.minutes}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block section-block-editorial">
          <div className="section-heading-row">
            <div>
              <p className="section-label">{copy.home.systemsLabel}</p>
              <h2>{copy.home.systemsTitle}</h2>
            </div>
          </div>

          <div className="atlas-grid">
            {copy.home.systemsMap.map((item, index) => (
              <Link className="atlas-card" href={localizePath(locale, item.href)} key={item.title}>
                <div className="atlas-card__meta">
                  <span className="atlas-card__index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="atlas-card__tag">{item.tag}</span>
                </div>
                <div className="atlas-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
                <span className="text-link">{item.cta}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

export async function WorkPage({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const entries = await getWorkEntries(locale);
  const publicEntries = entries.filter((entry) => entry.frontmatter.kind === "public");
  const privateEntries = entries.filter((entry) => entry.frontmatter.kind === "private");
  const publicCount = publicEntries.length;
  const privateCount = privateEntries.length;

  return (
    <SiteShell locale={locale}>
      <div className="page-section-stack">
        <section className="page-masthead">
          <div className="page-masthead__copy">
            <p className="eyebrow">{copy.work.eyebrow}</p>
            <h1>{copy.work.title}</h1>
            <p className="lead">{copy.work.lead}</p>
          </div>

          <aside className="paper-panel page-masthead__aside">
            <p className="micro-label">{copy.work.statsLabel}</p>
            <div className="fact-list">
              <div className="fact-list__item">
                <span>{copy.work.stats.publicRepos}</span>
                <strong>
                  {locale === "pt-br"
                    ? `${publicCount} casos publicos`
                    : `${publicCount} case studies`}
                </strong>
              </div>
              <div className="fact-list__item">
                <span>{copy.work.stats.privateSystems}</span>
                <strong>
                  {locale === "pt-br"
                    ? `${privateCount} sistemas documentados sem codigo publico`
                    : `${privateCount} documented without public code`}
                </strong>
              </div>
              <div className="fact-list__item">
                <span>{copy.work.stats.rule}</span>
                <strong>
                  {locale === "pt-br"
                    ? "So entram projetos que se sustentam em entrevista tecnica"
                    : "Keep only projects that hold up in technical interviews"}
                </strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="work-group">
          <div className="section-heading-row">
            <div className="section-heading-copy">
              <p className="section-label">{copy.work.repoLabel}</p>
              <h2>{copy.work.publicTitle}</h2>
              <p className="group-lead">{copy.work.publicBody}</p>
            </div>
          </div>

          <section className="folio-list">
            {publicEntries.map((entry, index) => (
              <article className="folio-entry folio-entry-public" key={entry.slug}>
                <div className="folio-entry__number">{String(index + 1).padStart(2, "0")}</div>
                <div className="folio-entry__meta">
                  <span className="pill pill-public">{copy.work.repoLabel}</span>
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
                  <Link className="text-link" href={localizePath(locale, `/work/${entry.slug}`)}>
                    {copy.work.readCase}
                  </Link>
                  {entry.frontmatter.repo ? (
                    <a href={entry.frontmatter.repo} target="_blank" rel="noreferrer">
                      {copy.work.openRepo}
                    </a>
                  ) : (
                    <span className="muted-copy">{copy.work.repoPrivate}</span>
                  )}
                </div>
              </article>
            ))}
          </section>
        </section>

        <section className="work-group">
          <div className="section-heading-row">
            <div className="section-heading-copy">
              <p className="section-label">{copy.work.privateLabel}</p>
              <h2>{copy.work.privateTitle}</h2>
              <p className="group-lead">{copy.work.privateBody}</p>
            </div>
          </div>

          <section className="folio-list">
            {privateEntries.map((entry, index) => (
              <article className="folio-entry folio-entry-private" key={entry.slug}>
                <div className="folio-entry__number">
                  {String(publicEntries.length + index + 1).padStart(2, "0")}
                </div>
                <div className="folio-entry__meta">
                  <span className="pill pill-private">{copy.work.privateLabel}</span>
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
                  <Link className="text-link" href={localizePath(locale, `/work/${entry.slug}`)}>
                    {copy.work.readCase}
                  </Link>
                  <span className="muted-copy">{copy.work.repoPrivate}</span>
                </div>
              </article>
            ))}
          </section>
        </section>
      </div>
    </SiteShell>
  );
}

export async function WritingPage({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const entries = await getWritingEntries(locale);
  const featuredEntries = getFeaturedWritingEntries(entries);
  const writingThemeGroups = getWritingThemeGroups(entries);

  return (
    <SiteShell locale={locale}>
      <div className="page-section-stack">
        <section className="page-masthead">
          <div className="page-masthead__copy">
            <p className="eyebrow">{copy.writing.eyebrow}</p>
            <h1>{copy.writing.title}</h1>
            <p className="lead">{copy.writing.lead}</p>
          </div>

          <aside className="paper-panel page-masthead__aside">
            <p className="micro-label">{copy.writing.ruleLabel}</p>
            <p>{copy.writing.ruleBody}</p>
          </aside>
        </section>

        <section className="section-block section-block-editorial">
          <div className="section-heading-row">
            <div>
              <p className="section-label">{copy.writing.featuredLabel}</p>
              <h2>{copy.writing.featuredTitle}</h2>
            </div>
          </div>

          <div className="card-grid writing-featured-grid">
            {featuredEntries.map((entry) => (
              <Link
                className="writing-card writing-card-featured"
                key={entry.slug}
                href={localizePath(locale, `/writing/${entry.slug}`)}
              >
                <div className="project-meta">
                  <span>{copy.writing.themes[entry.frontmatter.theme].title}</span>
                  <span>{entry.frontmatter.publishedAt}</span>
                </div>
                <h2>{entry.frontmatter.title}</h2>
                <p>{entry.frontmatter.summary}</p>
                <ul className="tag-list">
                  {entry.frontmatter.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <span className="text-link">{copy.writing.readNote}</span>
                  <span className="muted-copy">
                    {entry.readingMinutes} {copy.writing.minutes}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="writing-theme-stack">
          {writingThemeGroups.map((group) => (
            <article className="paper-panel writing-theme-section" key={group.theme}>
              <div className="writing-theme-section__header">
                <p className="section-label">{copy.writing.themeLabel}</p>
                <h2>{copy.writing.themes[group.theme].title}</h2>
                <p>{copy.writing.themes[group.theme].description}</p>
              </div>
              <div className="writing-list writing-list-themed">
                {group.entries.map((entry) => (
                  <Link
                    className="writing-item writing-item-note"
                    key={entry.slug}
                    href={localizePath(locale, `/writing/${entry.slug}`)}
                  >
                    <div className="writing-item__body">
                      <strong>{entry.frontmatter.title}</strong>
                      <p>{entry.frontmatter.summary}</p>
                    </div>
                    <div className="writing-item__meta">
                      <span>{entry.frontmatter.publishedAt}</span>
                      <span>
                        {entry.readingMinutes} {copy.writing.minutes}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="section-block section-block-editorial">
          <div className="section-heading-row">
            <div>
              <p className="section-label">{copy.writing.ledgerLabel}</p>
              <h2>{copy.writing.ledgerTitle}</h2>
            </div>
          </div>

          <section className="notes-ledger">
            {entries.map((entry, index) => (
              <article className="notes-ledger__row" key={entry.slug}>
                <div className="notes-ledger__index">{String(index + 1).padStart(2, "0")}</div>
                <div className="notes-ledger__date">{entry.frontmatter.publishedAt}</div>
                <div className="notes-ledger__body">
                  <h2>{entry.frontmatter.title}</h2>
                  <p>{entry.frontmatter.summary}</p>
                  <ul className="tag-list">
                    <li>{copy.writing.themes[entry.frontmatter.theme].title}</li>
                    {entry.frontmatter.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="notes-ledger__meta">
                  <span>
                    {entry.readingMinutes} {copy.writing.minutes}
                  </span>
                  <Link className="text-link" href={localizePath(locale, `/writing/${entry.slug}`)}>
                    {copy.writing.readNote}
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </section>
      </div>
    </SiteShell>
  );
}

export function ResumePage({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);

  return (
    <SiteShell locale={locale}>
      <div className="page-section-stack">
        <section className="resume-sheet">
          <div className="resume-sheet__intro">
            <p className="eyebrow">{copy.resume.eyebrow}</p>
            <h1>{copy.resume.title}</h1>
            <p className="lead">{copy.resume.lead}</p>
          </div>

          <aside className="paper-panel resume-sheet__aside">
            <p className="micro-label">{copy.resume.availabilityLabel}</p>
            <p>{copy.resume.availability}</p>
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
            <p className="section-label">{copy.resume.sectionLabels.focus}</p>
            <ul className="stack-list">
              {copy.resume.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="resume-strip">
            <p className="section-label">{copy.resume.sectionLabels.capabilities}</p>
            <ul className="stack-list">
              {copy.resume.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="resume-strip">
            <p className="section-label">{copy.resume.sectionLabels.stack}</p>
            <ul className="stack-list">
              {copy.resume.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </SiteShell>
  );
}

export async function WorkDetailPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const copy = getSiteCopy(locale);
  const entry = await getWorkEntry(locale, slug);
  const allEntries = await getWorkEntries(locale);
  const nextEntry = allEntries.find(
    (item) => item.frontmatter.order === entry.frontmatter.order + 1,
  );

  return (
    <SiteShell locale={locale}>
      <div className="page-section-stack">
        <section className="detail-hero">
          <div className="detail-copy">
            <p className="eyebrow">
              {entry.frontmatter.kind === "public"
                ? copy.detail.publicRepo
                : copy.detail.privateCase}
            </p>
            <h1>{entry.frontmatter.title}</h1>
            <p className="lead">{entry.frontmatter.summary}</p>
          </div>

          <aside className="detail-aside detail-aside-sheet paper-panel">
            <dl className="meta-grid">
              <div>
                <dt>{copy.detail.role}</dt>
                <dd>{entry.frontmatter.role}</dd>
              </div>
              <div>
                <dt>{copy.detail.year}</dt>
                <dd>{entry.frontmatter.year}</dd>
              </div>
              <div>
                <dt>{copy.detail.status}</dt>
                <dd>{entry.frontmatter.status}</dd>
              </div>
              <div>
                <dt>{copy.detail.readingTime}</dt>
                <dd>
                  {entry.readingMinutes} {copy.detail.minutes}
                </dd>
              </div>
            </dl>

            <div className="detail-links">
              {entry.frontmatter.repo ? (
                <a href={entry.frontmatter.repo} target="_blank" rel="noreferrer">
                  {copy.detail.openRepository}
                </a>
              ) : (
                <span className="muted-copy">{copy.detail.repoPrivate}</span>
              )}
            </div>

            <ul className="tag-list">
              {entry.frontmatter.stack.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="detail-dossier">
          <article className="paper-panel paper-panel-accent detail-dossier__quote">
            <p className="section-label">{copy.detail.highlight}</p>
            <h2>{entry.frontmatter.highlight}</h2>
            <p>{entry.frontmatter.status}</p>
          </article>

          <article className="paper-panel detail-dossier__note">
            <p className="section-label">{copy.detail.inspectFirst}</p>
            <p>
              {entry.frontmatter.kind === "public"
                ? copy.detail.inspectPublic
                : copy.detail.inspectPrivate}
            </p>
            {entry.frontmatter.repo ? (
              <a className="text-link" href={entry.frontmatter.repo} target="_blank" rel="noreferrer">
                {copy.detail.openRepository}
              </a>
            ) : (
              <span className="muted-copy">{copy.detail.repoPrivate}</span>
            )}
          </article>
        </section>

        <article className="rich-article">{entry.content}</article>

        {nextEntry ? (
          <section className="paper-panel next-card next-card-sheet">
            <p className="section-label">{copy.detail.nextCase}</p>
            <h2>{nextEntry.frontmatter.title}</h2>
            <p>{nextEntry.frontmatter.summary}</p>
            <Link className="text-link" href={localizePath(locale, `/work/${nextEntry.slug}`)}>
              {copy.detail.continueReading}
            </Link>
          </section>
        ) : null}
      </div>
    </SiteShell>
  );
}

export async function WritingDetailPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const copy = getSiteCopy(locale);
  const [entry, allEntries] = await Promise.all([
    getWritingEntry(locale, slug),
    getWritingEntries(locale),
  ]);
  const relatedEntries = allEntries
    .filter(
      (item) => item.slug !== slug && item.frontmatter.theme === entry.frontmatter.theme,
    )
    .slice(0, 3);
  const themeCopy = copy.writing.themes[entry.frontmatter.theme];

  return (
    <SiteShell locale={locale}>
      <div className="page-section-stack">
        <section className="page-intro narrow">
          <p className="eyebrow">{copy.detail.writingEyebrow}</p>
          <h1>{entry.frontmatter.title}</h1>
          <p className="lead">{entry.frontmatter.summary}</p>
          <div className="project-meta">
            <span>{entry.frontmatter.publishedAt}</span>
            <span>
              {entry.readingMinutes} {copy.writing.minutes}
            </span>
            <span className="pill pill-theme">
              {copy.detail.theme}: {themeCopy.title}
            </span>
          </div>
        </section>

        <article className="rich-article">{entry.content}</article>

        {relatedEntries.length > 0 ? (
          <section className="paper-panel related-notes-panel">
            <p className="section-label">{copy.detail.relatedNotes}</p>
            <h2>{themeCopy.title}</h2>
            <p>{copy.detail.relatedNotesBody}</p>
            <div className="writing-list compact">
              {relatedEntries.map((relatedEntry) => (
                <Link
                  className="writing-item writing-item-note"
                  key={relatedEntry.slug}
                  href={localizePath(locale, `/writing/${relatedEntry.slug}`)}
                >
                  <div className="writing-item__body">
                    <strong>{relatedEntry.frontmatter.title}</strong>
                    <p>{relatedEntry.frontmatter.summary}</p>
                  </div>
                  <div className="writing-item__meta">
                    <span>{relatedEntry.frontmatter.publishedAt}</span>
                    <span>
                      {relatedEntry.readingMinutes} {copy.writing.minutes}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </SiteShell>
  );
}
