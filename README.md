# saviofilho.dev

Editorial portfolio for Savio Filho with bilingual case studies, technical notes, and a resume surface that mirrors the public GitHub narrative.

## Live preview

- Portfolio URL: https://saviocodes.github.io/saviofilho.dev/

## Stack

- Next.js 16
- React 19
- TypeScript
- MDX via `next-mdx-remote`
- Custom CSS, no Tailwind
- Locale-aware content loaders with hard parity between `en` and `pt-br`

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

- `content/en/work/*.mdx`: English case studies
- `content/en/writing/*.mdx`: English notes
- `content/pt-br/work/*.mdx`: PT-BR case studies
- `content/pt-br/writing/*.mdx`: PT-BR notes
- `src/lib/content.ts`: locale-aware loader and parity checks

## Repository structure

- `src/app`: App Router entrypoints and locale routes
- `src/components`: shared site chrome
- `src/features`: page composition and MDX evidence components
- `src/config`: locale copy and site dictionaries
- `src/lib`: content loading and site URL helpers
- `src/types`: content frontmatter types
- `content`: editorial source of truth split by locale

Detailed notes: see [docs/REPO_STRUCTURE.md](./docs/REPO_STRUCTURE.md).

## Routes

- `/`, `/work`, `/writing`, `/resume`: English default routes
- `/pt-br`, `/pt-br/work`, `/pt-br/writing`, `/pt-br/resume`: PT-BR mirrored routes
- `/work/[slug]` and `/pt-br/work/[slug]`: locale-matched case studies
- `/writing/[slug]` and `/pt-br/writing/[slug]`: locale-matched notes

Builds fail if a published slug exists in one locale but not the other.

## Roadmap

- [ ] Move from GitHub Pages to a clean production domain
- [ ] Add custom social cards for each flagship public repository
- [ ] Keep public flagship repos and the strongest private case studies aligned with GitHub changes

## Deployment

The build is configured through explicit environment variables instead of
inferring behavior from the CI runtime:

```bash
SITE_URL=https://saviocodes.github.io
SITE_BASE_PATH=/saviofilho.dev
```

When the custom domain is ready, switch to:

```bash
SITE_URL=https://saviofilho.dev
SITE_BASE_PATH=
```

## Intent

The site is intentionally editorial instead of SaaS-template styled. The goal is to make the portfolio feel authored, specific, and human.

## License

MIT. See [LICENSE](./LICENSE).
