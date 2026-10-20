# Verification record

Verified locally on 20 October 2026 against the production build, served on `127.0.0.1:4337`.

## Automated checks

| Check                   | Result                                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------------------------- |
| `npm run lint`          | Pass                                                                                                        |
| `npm run typecheck`     | Pass                                                                                                        |
| `npm test`              | 8 tests pass                                                                                                |
| `npm run format:check`  | Pass                                                                                                        |
| `npm run build`         | Pass; known portfolio pages prerendered                                                                     |
| `npm run test:smoke`    | All 14 pages pass; 3 missing URLs return 404; assets and preview SEO pass                                   |
| `npm audit --omit=dev`  | 0 known production dependency vulnerabilities                                                               |
| `npm run check:publish` | Intentionally blocked: demo narratives, résumé, employment dates, and real deployment URL still need review |

The smoke script verifies page status, one H1 per page, preview noindex metadata, robots, an empty preview sitemap, the PDF, social image, icon, and every project source image. Unit tests cover content routes, service evidence links, featured work, assets, demo field accounting, and publication configuration.

The full dependency audit reports **5 high-severity development-only findings** through `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces` (one underlying braces advisory, GHSA-vfj7-8cjw-p6xm, propagated through the chain). npm's proposed automatic fix downgrades the Next lint configuration to version 14.2.35. That incompatible downgrade was not applied to this Next 16 project. Recheck the upstream tooling before a public release. The production-only audit is clean; this is not a claim that all dependencies are vulnerability-free.

## Browser checks

- Light and dark homepage inspected at the default desktop viewport; preference persists after reload.
- Homepage checked at 320px and 390px widths with no document-level horizontal overflow.
- Mobile navigation opens, links navigate and close it, and Escape returns focus to its trigger from both the trigger and navigation links.
- Work archive navigation and Bitlux case study checked on mobile. The decision table scrolls inside its region, while the page fits the viewport.
- Tablet case-study and contact layouts inspected at 768px.
- Dark tools archive and TypeSpark detail inspected at 390px.
- About page inspected at desktop size. Résumé points to the valid, explicitly marked demo PDF.
- Copy-email action resolves and shows success feedback. The browser connector's separate clipboard read returned an empty string, so copied clipboard bytes were not independently verified through that connector.
- No console errors or warnings observed in the inspected production pages.

Screenshots are in `docs/previews/`: [light homepage](previews/home-light.jpg), [dark homepage](previews/home-dark.jpg), [mobile](previews/mobile.jpg), and [complete case study](previews/case-study.jpg).

## Performance and accessibility boundaries

The app uses local fonts, optimized WebP source images, responsive `next/image`, accurate dimensions, lazy collection images, static server output, and small client components. It contains no Three.js, animation runtime, autoplay video, tracking, or remote font fetch. The original six screenshot exports were reduced from 3.57 MB to 234 KB, with two additional flat UI screenshots totaling 103 KB; see `ASSETS.md`.

Keyboard controls, visible focus, native select semantics, headings, image descriptions, skip link, and reduced-motion handling are implemented. This was not a full assistive-technology audit. No hosted Lighthouse or real-user Core Web Vitals measurements have been collected; actual performance depends on deployment, caching, network, and future content.

Real contact and scheduling links are present. External email delivery and calendar booking were not triggered. No form pretends to submit data. There is no database or backend mail service to configure for the current contact flow.
