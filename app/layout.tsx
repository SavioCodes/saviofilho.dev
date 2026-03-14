import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";

import "./globals.css";

import { contactLinks, navigation } from "@/lib/site";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://saviofilho.dev"),
  title: {
    default: "Savio Filho | Backend Product Engineer",
    template: "%s | Savio Filho",
  },
  description:
    "Portfolio and case studies for Savio Filho, a software engineer focused on backend products, SaaS systems, and applied AI.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Savio Filho | Backend Product Engineer",
    description:
      "Case studies, technical writing, and product systems work across SaaS, automation, and applied AI.",
    url: "https://saviofilho.dev",
    siteName: "Savio Filho",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savio Filho | Backend Product Engineer",
    description:
      "Case studies, technical writing, and product systems work across SaaS, automation, and applied AI.",
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
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
        <div className="page-backdrop" />
        <div className="site-shell">
          <header className="site-header">
            <Link className="site-mark" href="/">
              <span className="site-mark-monogram">SF</span>
              <span className="site-mark-copy">
                <strong>Savio Filho</strong>
                <span>Backend product engineer</span>
              </span>
            </Link>

            <nav className="site-nav" aria-label="Primary">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <div>
              <p className="eyebrow">Open to software engineering roles</p>
              <p className="footer-copy">
                Focused on backend products, applied AI, and operationally sound SaaS.
              </p>
            </div>
            <div className="footer-links">
              {contactLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
