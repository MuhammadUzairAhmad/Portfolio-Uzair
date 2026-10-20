# Uzair Portfolio

A standalone portfolio for Muhammad Uzair Ahmad, designed for both hiring teams and direct clients. Built with Next.js 16.4.2 App Router, React 19.3, TypeScript, and Tailwind CSS 4.3.3, with a `src/` directory.

The design combines a product-focused homepage, editorial typography, and detailed case studies. Light, dark, and system themes are supported. The original portfolio is a separate project.

## Run locally

Use Node.js 22.18 or newer; a currently supported LTS version is recommended.

```sh
npm ci
npm run dev -- --port 4337
```

Open [localhost:4337](http://localhost:4337).

To preview the production build:

```sh
npm run build
npm run start -- --hostname 127.0.0.1 --port 4337
```

## Included

- Homepage: hero, services, selected projects, tools, work experience, process, about, and contact.
- Work archive and six complete case-study routes.
- Tools archive and three individual tool stories.
- About, contact, custom 404, social sharing image, favicon, robots, and sitemap.
- Native theme selector, keyboard-friendly mobile navigation, copy-email feedback, and real contact links.
- Typed editable data, labeled demo narratives, and a clearly marked demo résumé PDF.
- Shared button variants, cards, badges, tables, containers, and case-study components.

Static server rendering is enforced by the current Next.js `ensureStatic` configuration. Client components are limited to themes, navigation, project filtering, and email copying. Fonts are hosted locally, image assets are optimized with reserved layout space, and this project has no Three.js dependency. Global CSS contains shared foundations; page and component styles use Tailwind utilities.

Preview screenshots: [light](docs/previews/home-light.jpg), [dark](docs/previews/home-dark.jpg), [mobile](docs/previews/mobile.jpg), and [case study](docs/previews/case-study.jpg).

Reference-aligned inner pages: [Work](docs/previews/work.jpg), [Tools](docs/previews/tools.jpg), [About](docs/previews/about.jpg), and [Contact](docs/previews/contact.jpg).

## Update your data

Start with [`docs/CONTENT-GUIDE.md`](docs/CONTENT-GUIDE.md). Main data files are in `src/content/`.

```sh
npm run content:checklist
```

The site stays in preview mode until the demo narratives, résumé, and employment dates are reviewed. The publication checklist and environment setup are documented in the guide. Actual field performance should be measured after deployment; no production Core Web Vitals score is claimed here.

## Quality checks

```sh
npm run lint
npm run typecheck
npm test
npm run format:check
npm run build
# With production server running on port 4337:
npm run test:smoke
```

See [`docs/VERIFICATION.md`](docs/VERIFICATION.md) for recorded results and limitations, [`docs/ASSETS.md`](docs/ASSETS.md) for image provenance, and [`docs/PHASES.md`](docs/PHASES.md) for commit phases.

## Git history

Implementation is committed locally in phases on `main`. No remote has been added and nothing has been pushed. To connect a new **empty** repository later, substitute your actual URL:

```sh
git remote add origin YOUR_NEW_REPOSITORY_URL
git push -u origin main
```

A normal push preserves the complete local commit history. If the remote already has commits, fetch and reconcile its history before pushing; do not overwrite it blindly.
