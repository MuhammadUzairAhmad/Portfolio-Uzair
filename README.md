# Uzair Portfolio

A standalone portfolio for Muhammad Uzair Ahmad, designed for both hiring teams and direct clients. Built with Next.js 16.4.2 App Router, React 19.3, TypeScript, and Tailwind CSS 4.3.3, with a `src/` directory.

The design combines a product-focused homepage, editorial typography, and detailed case studies. A direct light/dark toggle remembers the visitor’s choice; new visitors start in light mode. The original portfolio is a separate project.

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

- Homepage: hero, services, selected projects, practical skill highlights, tools, work experience, process, about, and contact.
- Work archive and ten project case-study routes.
- Tools archive and three individual tool stories.
- Eleven original Bitlux/Linxx screenshots in lazy-loaded galleries, five labeled external Loom walkthroughs, and optional native video support.
- About with a grouped development toolkit, contact, custom 404, social sharing image, favicon, robots, and sitemap.
- Shared experience timeline with real logos, roles/dates, and expanded contribution cards on About.
- Small, medium, and large static CSS grids adapted to both themes.
- One-click theme toggle, on-page image/video lightboxes, keyboard-friendly mobile navigation, copy-email feedback, and real contact links.
- Typed editable data, labeled demo narratives, and the updated two-page résumé PDF.
- Shared button variants, cards, badges, tables, containers, and case-study components.

Static server rendering is enforced by the current Next.js `ensureStatic` configuration. Client components are limited to themes, navigation, project filtering, email copying, and media viewers. Loom iframes mount only when the visitor opens a recording. Fonts are hosted locally, image assets are optimized with reserved layout space, and this project has no Three.js dependency. Global CSS contains shared foundations; page and component styles use Tailwind utilities.

Preview screenshots: [light](docs/previews/home-light.jpg), [dark](docs/previews/home-dark.jpg), [mobile](docs/previews/mobile.jpg), and [case study](docs/previews/case-study.jpg).

Reference-aligned inner pages: [Work](docs/previews/work.jpg), [Tools](docs/previews/tools.jpg), [About](docs/previews/about.jpg), and [Contact](docs/previews/contact.jpg).

## Update your data

Start with [`docs/CONTENT-GUIDE.md`](docs/CONTENT-GUIDE.md). Main data files are in `src/content/`.

```sh
npm run content:checklist
```

The résumé and employment dates have been updated from the October 2026 source. The site stays in preview mode while remaining case-study drafts are reviewed. See [`docs/CONTENT-GAPS.md`](docs/CONTENT-GAPS.md) for the remaining information to add. The publication checklist and environment setup are documented in the guide. Actual field performance should be measured after deployment; no production Core Web Vitals score is claimed here.

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
