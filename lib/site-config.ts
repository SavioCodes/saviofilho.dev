const defaultSiteUrl = "http://localhost:3000";

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

function normalizeBasePath(value: string) {
  if (!value || value === "/") {
    return "";
  }

  return `/${value.replace(/^\/+|\/+$/g, "")}`;
}

export const siteUrl = trimTrailingSlash(process.env.SITE_URL?.trim() || defaultSiteUrl);
export const siteBasePath = normalizeBasePath(process.env.SITE_BASE_PATH?.trim() || "");

export function toSitePath(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteBasePath}${normalizedPath}` || "/";
}

export function absoluteUrl(path = "/") {
  return new URL(toSitePath(path), `${siteUrl}/`).toString();
}
