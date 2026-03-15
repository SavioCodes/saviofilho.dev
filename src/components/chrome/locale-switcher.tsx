"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  defaultLocale,
  detectLocaleFromPath,
  localizePath,
  stripLocalePrefix,
} from "@/config/i18n";

export function LocaleSwitcher() {
  const pathname = usePathname() ?? "/";
  const currentLocale = detectLocaleFromPath(pathname);
  const basePath = stripLocalePrefix(pathname);

  const options = [
    { locale: defaultLocale, label: "EN" },
    { locale: "pt-br" as const, label: "PT-BR" },
  ];

  return (
    <div className="locale-switcher" aria-label="Locale switcher">
      {options.map((option) => {
        const href = localizePath(option.locale, basePath);
        const isActive = option.locale === currentLocale;

        return (
          <Link
            key={option.locale}
            className={`locale-switcher__link${isActive ? " locale-switcher__link--active" : ""}`}
            href={href}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}
