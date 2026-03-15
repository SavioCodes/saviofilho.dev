export type CollectionName = "work" | "writing";

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
};

export type Entry<TFrontmatter extends BaseFrontmatter> = {
  slug: string;
  frontmatter: TFrontmatter;
  readingMinutes: number;
};
