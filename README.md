# saviofilho.dev

Editorial portfolio for Savio Filho with public repository case studies, private product case studies, short technical writing, and a resume page.

## Live preview

- Portfolio URL: https://saviocodes.github.io/saviofilho.dev/

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

## Routes

- `/`: positioning, featured work, writing, and contact
- `/work`: all case studies
- `/work/[slug]`: detailed technical case studies
- `/writing`: short technical writing
- `/resume`: experience snapshot, stack, and contact

## Roadmap

- [ ] Move from preview URL to a clean production domain
- [ ] Add more operational evidence to the strongest public case studies
- [ ] Expand writing with short backend and product-engineering notes

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
