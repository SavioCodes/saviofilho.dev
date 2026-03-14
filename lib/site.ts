export const navigation = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/resume", label: "Resume" },
] as const;

export const contactLinks = [
  { href: "mailto:codessavio@gmail.com", label: "Email" },
  { href: "https://github.com/SavioCodes", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/savio-filho-7a0212309/",
    label: "LinkedIn",
  },
] as const;

export const principles = [
  "I prefer systems with clear constraints, explicit trade-offs, and boring operational paths.",
  "I treat tests, CI, and environment hygiene as part of the product, not afterthoughts.",
  "I use AI where it improves throughput or review loops, never as a substitute for product design.",
  "I write docs so another engineer can continue the project without guessing what I meant.",
] as const;

export const resumeSections = {
  focus: [
    "Backend product engineering for SaaS, internal tooling, and automation-heavy workflows.",
    "TypeScript/Node.js for APIs and service layers; Python for evaluation pipelines and systems scripts.",
    "Applied AI with cost, auditability, and deterministic fallbacks in mind.",
  ],
  capabilities: [
    "API design, auth flows, billing integrations, background jobs, and operational runbooks.",
    "Multi-tenant products with data isolation, quota controls, and developer-focused repository standards.",
    "Docs-first communication: architecture notes, launch checklists, deployment guides, and case studies.",
  ],
  stack: [
    "TypeScript, Node.js, Next.js, Express, React Native, Python",
    "PostgreSQL, Supabase, Prisma, Drizzle ORM, object storage",
    "GitHub Actions, Vitest, Jest, pytest, OpenAPI, Docker Compose",
  ],
  availability:
    "Open to Software Engineer roles with a strong backend or product systems component, remote or hybrid.",
};

export const nextBets = [
  {
    title: "QuoteFlow BR",
    summary:
      "A proposal engine for WhatsApp-based sales with pricing rules, document versions, approvals, and audit trails.",
  },
  {
    title: "Invoice Intake BR",
    summary:
      "PDF and email ingestion with structured extraction, reviewer queues, supplier normalization, and deterministic fallbacks.",
  },
  {
    title: "AcessoQR Public Core",
    summary:
      "A public operational slice for QR-based check-in, offline validation, sync recovery, and duplicate detection.",
  },
] as const;
