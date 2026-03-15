export type CollectionName = "work" | "writing";

export const writingThemes = [
  "ai-guardrails",
  "saas-ops",
  "backend-systems",
  "builder-notes",
] as const;

export type WritingTheme = (typeof writingThemes)[number];

export type BaseFrontmatter = {
  title: string;
  summary: string;
  order: number;
};

export type WorkFrontmatter = BaseFrontmatter & {
  year: string;
  role: string;
  status: string;
  highlight: string;
  kind: "public" | "private";
  stack: string[];
  repo?: string;
};

export type WritingFrontmatter = BaseFrontmatter & {
  publishedAt: string;
  tags: string[];
  theme: WritingTheme;
  featured?: boolean;
};

export type Entry<TFrontmatter extends BaseFrontmatter> = {
  slug: string;
  frontmatter: TFrontmatter;
  readingMinutes: number;
};
