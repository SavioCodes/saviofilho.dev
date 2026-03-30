import Link from "next/link";

import type { Locale } from "@/config/i18n";
import { localizePath } from "@/config/i18n";
import { LocaleSwitcher } from "@/components/chrome/locale-switcher";
import { contactLinks, getSiteCopy } from "@/config/site";

type SiteShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function SiteShell({ locale, children }: SiteShellProps) {
  const copy = getSiteCopy(locale);

  return (
    <div className="site-shell">
      <div className="site-utility">
        <p className="site-utility__line">{copy.utilityLine}</p>
        <div className="site-utility__actions">
          <span className="site-utility__status">{copy.utilityStatus}</span>
          <span className="site-utility__divider" aria-hidden="true"></span>
          <LocaleSwitcher />
        </div>
      </div>

      <header className="site-header">
        <div className="site-header__identity">
          <Link className="site-mark" href={localizePath(locale, "/")}>
            <span className="site-mark-monogram">SF</span>
            <span className="site-mark-copy">
              <strong>Savio Filho</strong>
              <span className="site-mark-role">{copy.roleLabel}</span>
            </span>
          </Link>
          <p className="site-header__note">{copy.headerNote}</p>
        </div>

        <div className="site-header__panel">
          <p className="micro-label">{copy.headerLabel}</p>
          <nav className="site-nav" aria-label="Primary">
            {copy.navigation.map((item) => (
              <Link key={item.href} href={localizePath(locale, item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-footer__lead">
          <div className="site-footer__heading">
            <p className="eyebrow">{copy.footer.eyebrow}</p>
            <span className="site-footer__stamp">{copy.footer.stamp}</span>
          </div>
          <p className="footer-copy">{copy.footer.copy}</p>
          <div className="footer-ledger">
            <div className="footer-ledger__item">
              <span>{copy.footer.surfaceLabel}</span>
              <strong>{copy.footer.surfaceValue}</strong>
            </div>
            <div className="footer-ledger__item">
              <span>{copy.footer.contactLabel}</span>
              <strong>{copy.footer.contactValue}</strong>
            </div>
          </div>
        </div>

        <div className="site-footer__aside">
          <article className="paper-panel footer-panel footer-panel--contact">
            <p className="micro-label">{copy.footer.connectTitle}</p>
            <div className="footer-contact-list">
              {contactLinks.map((link) => (
                <a
                  className="footer-contact-link"
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{link.label}</span>
                  <strong>{copy.footer.openLabel}</strong>
                </a>
              ))}
            </div>
          </article>

          <article className="paper-panel footer-panel footer-panel--locale">
            <p className="micro-label">{copy.footer.localeTitle}</p>
            <p className="footer-panel__copy">{copy.footer.localeBody}</p>
            <LocaleSwitcher />
          </article>
        </div>
      </footer>
    </div>
  );
}
