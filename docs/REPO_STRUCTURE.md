# Repository Structure

The repo is organized around two ideas:

1. `src/` holds implementation code.
2. `content/` holds editorial content, split by locale.

## Source tree

- `src/app`
  - App Router entrypoints, metadata, sitemap, robots, and locale route groups.
- `src/components`
  - Shared site chrome such as header, footer, and locale switcher.
- `src/features`
  - Page composers and MDX evidence primitives.
- `src/config`
  - Locale dictionaries and navigation copy.
- `src/lib`
  - Content loaders, URL helpers, and site config.
- `src/types`
  - Frontmatter and collection types.

## Content tree

- `content/en/work`
  - English case studies.
- `content/en/writing`
  - English writing notes.
- `content/pt-br/work`
  - PT-BR case studies.
- `content/pt-br/writing`
  - PT-BR writing notes.

## Slug rules

- Every published slug must exist in both locales.
- The file name is the slug.
- Keep frontmatter `order` aligned across both locale versions.
- If a new entry is added in only one locale, `src/lib/content.ts` will fail the build.

## Adding a new case study

1. Create `content/en/work/<slug>.mdx`.
2. Create `content/pt-br/work/<slug>.mdx`.
3. Keep `order`, `year`, `role`, `status`, `kind`, `stack`, and `repo` aligned.
4. Translate the body instead of leaving mixed-language fallback text.

## Adding a new writing note

1. Create `content/en/writing/<slug>.mdx`.
2. Create `content/pt-br/writing/<slug>.mdx`.
3. Keep the same slug and matching `order`.
4. Make sure the note still fits the portfolio rule: concrete system decision, real constraint, no generic thought-leadership filler.
