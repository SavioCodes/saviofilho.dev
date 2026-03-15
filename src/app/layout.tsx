import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";

import "@/app/globals.css";

import { DocumentLocale } from "@/components/chrome/document-locale";
import { getSiteCopy } from "@/config/site";
import { absoluteUrl, siteUrl, toSitePath } from "@/lib/site-config";

const displayFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const defaultCopy = getSiteCopy("en");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultCopy.metadata.title,
    template: "%s | Savio Filho",
  },
  description: defaultCopy.metadata.description,
  alternates: {
    canonical: toSitePath("/"),
    languages: {
      en: absoluteUrl("/"),
      "pt-BR": absoluteUrl("/pt-br"),
    },
  },
  openGraph: {
    title: defaultCopy.metadata.title,
    description: defaultCopy.metadata.ogDescription,
    url: absoluteUrl("/"),
    siteName: "Savio Filho",
    type: "website",
    images: [
      {
        url: absoluteUrl("/og/site-card.svg"),
        width: 1200,
        height: 630,
        alt: "Savio Filho portfolio social card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultCopy.metadata.title,
    description: defaultCopy.metadata.ogDescription,
    images: [absoluteUrl("/og/site-card.svg")],
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f0e1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
        <DocumentLocale />
        <div className="page-backdrop" />
        {children}
      </body>
    </html>
  );
}
