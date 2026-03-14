import { promises as fs } from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/mdx-components";

type CollectionName = "work" | "writing";

type BaseFrontmatter = {
  title: string;
  summary: string;
  order: number;
};

export type WorkFrontmatter = BaseFrontmatter & {
  order: number;
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

type Entry<TFrontmatter extends BaseFrontmatter> = {
  slug: string;
  frontmatter: TFrontmatter;
  readingMinutes: number;
};

const contentRoot = path.join(process.cwd(), "content");

async function readCollectionFiles(collection: CollectionName) {
  const directory = path.join(contentRoot, collection);
  const files = await fs.readdir(directory);
  return files.filter((file) => file.endsWith(".mdx"));
}

async function readEntrySource(collection: CollectionName, slug: string) {
  const filePath = path.join(contentRoot, collection, `${slug}.mdx`);
  return fs.readFile(filePath, "utf8");
}

function getReadingMinutes(source: string) {
  const textOnly = source
    .replace(/^---[\s\S]*?---/, "")
    .replace(/[`#>*_\-\[\]\(\)]/g, " ")
    .trim();

  return Math.max(1, Math.ceil(textOnly.split(/\s+/).filter(Boolean).length / 220));
}

async function getCollectionEntries<TFrontmatter extends BaseFrontmatter>(
  collection: CollectionName,
): Promise<Entry<TFrontmatter>[]> {
  const files = await readCollectionFiles(collection);

  const entries = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = await readEntrySource(collection, slug);
      const { data } = matter(source);

      return {
        slug,
        frontmatter: data as TFrontmatter,
        readingMinutes: getReadingMinutes(source),
      };
    }),
  );

  return entries.sort((left, right) => left.frontmatter.order - right.frontmatter.order);
}

export async function getWorkEntries() {
  return getCollectionEntries<WorkFrontmatter>("work");
}

export async function getWritingEntries() {
  const entries = await getCollectionEntries<WritingFrontmatter>("writing");
  return entries.sort(
    (left, right) =>
      new Date(right.frontmatter.publishedAt).getTime() -
      new Date(left.frontmatter.publishedAt).getTime(),
  );
}

async function compileEntry<TFrontmatter extends BaseFrontmatter>(
  collection: CollectionName,
  slug: string,
) {
  const source = await readEntrySource(collection, slug).catch(() => null);

  if (!source) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<TFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    slug,
    content,
    frontmatter,
    readingMinutes: getReadingMinutes(source),
  };
}

export async function getWorkEntry(slug: string) {
  return compileEntry<WorkFrontmatter>("work", slug);
}

export async function getWritingEntry(slug: string) {
  return compileEntry<WritingFrontmatter>("writing", slug);
}

export async function getStaticSlugs(collection: CollectionName) {
  const files = await readCollectionFiles(collection);
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}
