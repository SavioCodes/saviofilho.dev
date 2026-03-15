import { promises as fs } from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

import type { Locale } from "@/config/i18n";
import { locales } from "@/config/i18n";
import { mdxComponents } from "@/features/mdx/components";
import type {
  BaseFrontmatter,
  CollectionName,
  Entry,
  WorkFrontmatter,
  WritingFrontmatter,
} from "@/types/content";

const contentRoot = path.join(process.cwd(), "content");

function getCollectionDirectory(locale: Locale, collection: CollectionName) {
  return path.join(contentRoot, locale, collection);
}

async function readCollectionFiles(locale: Locale, collection: CollectionName) {
  const directory = getCollectionDirectory(locale, collection);
  const files = await fs.readdir(directory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .sort();
}

async function assertLocaleParity(collection: CollectionName) {
  const localeFileSets = await Promise.all(
    locales.map(async (locale) => ({
      locale,
      slugs: await readCollectionFiles(locale, collection),
    })),
  );

  const [reference, ...rest] = localeFileSets;
  const referenceKey = reference.slugs.join("|");

  for (const localeEntry of rest) {
    if (localeEntry.slugs.join("|") !== referenceKey) {
      throw new Error(
        `Locale mismatch in ${collection}: ${reference.locale}=${reference.slugs.join(", ")} / ${localeEntry.locale}=${localeEntry.slugs.join(", ")}`,
      );
    }
  }

  return reference.slugs;
}

async function readEntrySource(
  locale: Locale,
  collection: CollectionName,
  slug: string,
) {
  const filePath = path.join(getCollectionDirectory(locale, collection), `${slug}.mdx`);
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
  locale: Locale,
  collection: CollectionName,
): Promise<Entry<TFrontmatter>[]> {
  const slugs = await assertLocaleParity(collection);

  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const source = await readEntrySource(locale, collection, slug);
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

export async function getWorkEntries(locale: Locale) {
  return getCollectionEntries<WorkFrontmatter>(locale, "work");
}

export async function getWritingEntries(locale: Locale) {
  const entries = await getCollectionEntries<WritingFrontmatter>(locale, "writing");
  return entries.sort(
    (left, right) =>
      new Date(right.frontmatter.publishedAt).getTime() -
      new Date(left.frontmatter.publishedAt).getTime(),
  );
}

async function compileEntry<TFrontmatter extends BaseFrontmatter>(
  locale: Locale,
  collection: CollectionName,
  slug: string,
) {
  await assertLocaleParity(collection);
  const source = await readEntrySource(locale, collection, slug).catch(() => null);

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

export async function getWorkEntry(locale: Locale, slug: string) {
  return compileEntry<WorkFrontmatter>(locale, "work", slug);
}

export async function getWritingEntry(locale: Locale, slug: string) {
  return compileEntry<WritingFrontmatter>(locale, "writing", slug);
}

export async function getStaticSlugs(collection: CollectionName) {
  const slugs = await assertLocaleParity(collection);
  return slugs.map((slug) => ({ slug }));
}
