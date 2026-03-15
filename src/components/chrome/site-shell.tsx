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
        <p>{copy.utilityLine}</p>
        <div className="site-utility__actions">
          <span>{copy.utilityStatus}</span>
          <LocaleSwitcher />
        </div>
      </div>

      <header className="site-header">
        <Link className="site-mark" href={localizePath(locale, "/")}>
          <span className="site-mark-monogram">SF</span>
          <span className="site-mark-copy">
            <strong>Savio Filho</strong>
            <span>{copy.roleLabel}</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {copy.navigation.map((item) => (
            <Link key={item.href} href={localizePath(locale, item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">{copy.footer.eyebrow}</p>
          <p className="footer-copy">{copy.footer.copy}</p>
        </div>
        <div className="footer-links footer-links-with-locale">
          {contactLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <LocaleSwitcher />
        </div>
      </footer>
    </div>
  );
}
