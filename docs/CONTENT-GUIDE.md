# Updating your portfolio

All personal and project data lives in `src/content/`. You can update these TypeScript objects without editing the layouts. TypeScript and the tests catch missing required fields and broken local asset references.

| File                        | What to change                                                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `src/content/profile.ts`    | Name, role, hero headline and featured project slug, intro, biography, contact/social links, résumé, education, footer preview label |
| `src/content/projects.ts`   | All six project records, case-study copy, stacks, contributions, screenshots, live links                                             |
| `src/content/tools.ts`      | TypeSpark, GlobePick, Blogsite, cover styles and tool stories                                                                        |
| `src/content/experience.ts` | Companies, roles, descriptions, and confirmed dates                                                                                  |
| `src/content/services.ts`   | Services, related work, skill groups, and process steps                                                                              |
| `src/content/toolkit.ts`    | Homepage skill highlights, project evidence links, and grouped libraries on About                                                    |
| `src/content/tool-art.ts`   | Decorative tool artwork paths and image dimensions                                                                                   |
| `src/app/globals.css`       | Shared light/dark theme tokens, typography, container, accessibility base                                                            |

Component/page-specific styling stays in Tailwind class names. UI labels and editorial section titles live in their components; actual portfolio facts live in the data above.

## Replace demo copy

1. Run `npm run content:checklist` to see the current gaps.
2. Find a field with `demo: true`, replace its text with a verified account, and remove the flag or set it to `false`. Its label disappears automatically.
3. Confirm experience dates and set each `datesDemo` to `false`.
4. Put your real résumé in `public/documents/`, update `profile.resume.href` and `label`, and set `profile.resume.demo` to `false`. Remove the old demo file if it is no longer useful.
5. After review, set `contentSettings.demoMode` to `false` to remove the footer preview label.

Project cards use `cardSubtitle` when provided, otherwise `subtitle`. The homepage timeline intentionally shows companies and roles; confirmed dates remain in the expandable About experience rows.

A case study contains `overview`, `role`, `team`, `platform`, `scope`, `stack`, `contributions`, `problem`, `solution`, `decisions`, `results`, and `lessons`. A narrative is `{ text: "Your copy", demo: false }`. A decision is `{ topic, choice, reason, demo }`.

Use specific, truthful outcomes. A shipped feature, a resolved workflow, or a lesson is useful even when you have no measured percentage. Add metrics or testimonials only when you can substantiate them and have permission to share them. Check client permission before publishing private project screenshots.

## Add or reorder a project

Copy one project object, give it a unique lowercase hyphenated `slug`, and update its fields. Its route is generated automatically at `/work/your-slug`. Tool records generate `/tools/your-slug`. Keep the three preferred home projects marked `featured: true`; their array order controls presentation. The first one gets the wide card. Service links use project slugs, so update `services.ts` if you rename one.

The homepage hero highlights the project selected by `profile.heroProjectSlug`. Change that slug in `profile.ts`; the image, project name, caption, and link update together. Choose a project with an image.

## Replace screenshots

Place optimized WebP/AVIF images in `public/images/projects/`. The path in content starts with `/images/projects/`, without `public`. Store the real pixel dimensions with the image:

```ts
image: {
  src: "/images/projects/my-project.webp",
  width: 1440,
  height: 900,
},
```

`image` is the plain screenshot fallback. The current six projects also have a `mockup` path for the existing device artwork. The device presentation uses SVG clip paths around that artwork, preserving the original screen pixels while matching the reference background. These existing mockups share a 1640 × 924 composition (the optimized exports retain those proportions). If you add an unrelated screenshot or montage, remove `mockup` and use the `image` object; the component will display the plain image correctly. Only set `mockup` for artwork matching the existing device template.

Dimensions reserve the correct space while the image loads. Keep product screenshots readable and preserve their proportions. The plain screenshot fallback uses `next/image` for appropriately sized variants. Existing device presentations use the pre-optimized WebP montage inside a responsive SVG, and the hero montage is preloaded. Tool covers are decorative static illustrations, not actual product screenshots. Set `illustration` to `type`, `globe`, or `blog`. Their optimized transparent WebP files live in `public/images/tools/`; change paths and dimensions in `src/content/tool-art.ts` to replace them. They use responsive `next/image` delivery. Generation prompts are recorded in `docs/TOOL-ART-PROMPTS.md`.

## Update libraries and skills

Edit `src/content/toolkit.ts`. `toolkitHighlights` controls the four homepage cards; each `project` slug links to related work. `toolkitGroups` controls the six detailed groups on `/about#toolkit`. These lists describe experience across projects, not dependencies installed in this portfolio. Keep experience levels accurate (Docker is currently labeled basic setup), and keep project examples relevant. No layout edits are needed when changing the names or rows.

## Local checks

```sh
npm run lint
npm run typecheck
npm test
npm run format:check
npm run build
npm run start -- --port 4337
# In a second terminal, with the production server running:
npm run test:smoke
```

`test:smoke` is specifically for the demo preview: it checks the preview's noindex metadata, empty sitemap, route status codes, and local assets. It deliberately needs updating when you switch to a public release. Set `SMOKE_URL` if you use another port.

## When the real content is ready

Copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_SITE_URL` to your real HTTPS origin, and run `npm run check:publish`. This check intentionally fails while demo content remains. For a local Node script to read the environment file, use `node --env-file=.env.local --experimental-strip-types scripts/check-publish.ts`, or supply the variables through the shell.

Only then set `PORTFOLIO_PUBLIC=true` and rebuild. A public build refuses to proceed with known demo flags, draft employment dates, a demo résumé, or an invalid site URL. The public build enables indexing, canonical URLs, the sitemap, and Person structured data. This is a content safeguard; it does not verify claims or client permissions for you.

The current project has no server form, database, tracking, or external font request. Contact actions use your email and scheduling link. Adding a form later should include real delivery, clear success/error feedback, spam controls, and environment-based secrets.
