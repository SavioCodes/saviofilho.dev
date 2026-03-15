"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { detectLocaleFromPath } from "@/config/i18n";

export function DocumentLocale() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = detectLocaleFromPath(pathname ?? "/");
    document.documentElement.lang = locale === "pt-br" ? "pt-BR" : "en";
  }, [pathname]);

  return null;
}
