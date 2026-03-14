# saviofilho.dev

Editorial portfolio for Savio Filho with public repository case studies, private product case studies, short technical writing, and a resume page.

## Stack

- Next.js 16
- React 19
- TypeScript
- MDX via `next-mdx-remote`
- Custom CSS, no Tailwind

## Local development

```bash
npm install
npm run dev
```

## Build checks

```bash
npm run lint
npm run build
```

## Content model

- `content/work/*.mdx`: case studies
- `content/writing/*.mdx`: short technical notes
- `lib/content.ts`: loader and frontmatter handling

## Intent

The site is intentionally editorial instead of SaaS-template styled. The goal is to make the portfolio feel authored, specific, and human.
