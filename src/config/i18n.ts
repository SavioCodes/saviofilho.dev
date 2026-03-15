export const locales = ["en", "pt-br"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

function normalizePath(path = "/") {
  if (!path) {
    return "/";
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash !== "/" && withLeadingSlash.endsWith("/")
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(locale: Locale, path = "/") {
  const normalizedPath = normalizePath(path);

  if (locale === defaultLocale) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? "/pt-br" : `/pt-br${normalizedPath}`;
}

export function detectLocaleFromPath(pathname: string) {
  const normalizedPath = normalizePath(pathname);
  return normalizedPath === "/pt-br" || normalizedPath.startsWith("/pt-br/")
    ? "pt-br"
    : "en";
}

export function stripLocalePrefix(pathname: string) {
  const normalizedPath = normalizePath(pathname);

  if (normalizedPath === "/pt-br") {
    return "/";
  }

  if (normalizedPath.startsWith("/pt-br/")) {
    return normalizedPath.replace("/pt-br", "");
  }

  return normalizedPath;
}

export function toHreflang(locale: Locale) {
  return locale === "pt-br" ? "pt-BR" : "en";
}
