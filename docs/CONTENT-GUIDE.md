# Updating your portfolio

All personal and project data lives in `src/content/`. You can update these TypeScript objects without editing the layouts. TypeScript and the tests catch missing required fields and broken local asset references.

| File                        | What to change                                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `src/content/profile.ts`    | Profile, featured project slug, biography, contact/social links, résumé, education, recent work, languages, and certifications |
| `src/content/projects.ts`   | All ten project records, case-study copy, stacks, contributions, screenshots, product URLs and external walkthroughs           |
| `src/content/tools.ts`      | TypeSpark, GlobePick, Blogsite, cover styles and tool stories                                                                  |
| `src/content/experience.ts` | Companies, roles, YYYY-MM start/end dates, contribution bullets, project links, skill badges, and logo assets                  |
| `src/content/services.ts`   | Services, related work, skill groups, and process steps                                                                        |
| `src/content/toolkit.ts`    | Homepage skill highlights, project evidence links, and grouped libraries on About                                              |
| `src/content/tool-art.ts`   | Decorative tool artwork paths and image dimensions                                                                             |
| `src/app/globals.css`       | Shared light/dark theme tokens, typography, container, accessibility base                                                      |

Component/page-specific styling stays in Tailwind class names. UI labels and editorial section titles live in their components; actual portfolio facts live in the data above.

## Imported résumé and remaining gaps

The October 2026 résumé is now the source for profile details, employment dates, and the downloadable PDF. The updated PDF is served unchanged at `/documents/uzair-mern-stack-resume.pdf`; its source stays at the repository root. `docs/CONTENT-SOURCES.md` records source precedence. `docs/CONTENT-GAPS.md` lists project-specific missing information. Existing demo flags now apply to remaining case-study drafts, rather than the résumé or employment dates.

## Replace demo copy

1. Run `npm run content:checklist` to see the current gaps.
2. Find a field with `demo: true`, replace its text with a verified account, and remove the flag or set it to `false`. Its label disappears automatically.
3. Employment dates are already imported and `datesDemo` is `false`; update `experience.ts` if your employment changes.
4. The real résumé is already linked. For a future replacement, update the PDF in `public/documents/` and the path in `profile.ts`; keep `profile.resume.demo` as `false`.
5. After review, set `contentSettings.demoMode` to `false` to remove the footer preview label.

Project cards use `cardSubtitle` when provided, otherwise `subtitle`. The homepage timeline shows company, role, and start/end dates; About expands the same records into contribution bullets and skill badges.

A case study contains `overview`, `role`, `team`, `platform`, `scope`, `stack`, `contributions`, `problem`, `solution`, `decisions`, `results`, and optional `lessons`. Use an empty `decisions` array for projects without a separate technical choice table. Omit `lessons` when none is supplied; the Results section adapts without filler. A narrative is `{ text: "Your copy", demo: false }`. A decision is `{ topic, choice, reason, demo }`.

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

`image` is the plain screenshot fallback. The original six projects also have a `mockup` path for the existing device artwork. The device presentation uses SVG clip paths around that artwork, preserving the original screen pixels while matching the reference background. These existing mockups share a 1640 × 924 composition (the optimized exports retain those proportions). If you add an unrelated screenshot or montage, remove `mockup` and use the `image` object; the component will display the plain image correctly. Only set `mockup` for artwork matching the existing device template.

Dimensions reserve the correct space while the image loads. Keep product screenshots readable and preserve their proportions. The plain screenshot fallback uses `next/image` for appropriately sized variants. Existing device presentations use the pre-optimized WebP montage inside a responsive SVG, and the hero montage is preloaded. Tool covers are decorative static illustrations, not actual product screenshots. Set `illustration` to `type`, `globe`, or `blog`. Their optimized transparent WebP files live in `public/images/tools/`; change paths and dimensions in `src/content/tool-art.ts` to replace them. They use responsive `next/image` delivery. Generation prompts are recorded in `docs/TOOL-ART-PROMPTS.md`.

## Update libraries and skills

Edit `src/content/toolkit.ts`. `toolkitHighlights` controls the four homepage cards; each `project` slug links to related work. `toolkitGroups` controls the seven detailed groups on `/about#toolkit`. These lists describe experience across projects, not dependencies installed in this portfolio. Keep experience levels accurate (Docker is currently labeled basic setup), and keep project examples relevant. No layout edits are needed when changing the names or rows.

## Screenshots and videos

Each project can have a `media` array. Bitlux currently has four screenshot entries and Linxx has seven, migrated from the old portfolio. Use a local image in `public/images/projects/` with its real dimensions:

```ts
media: [
  {
    kind: "image",
    src: "/images/projects/gallery/my-screen.webp",
    width: 1440,
    height: 900,
    alt: "Describe the actual screen",
    caption: "Explain the workflow shown",
  },
],
```

For video, place an MP4 or WebM in `public/videos/`, and add the following object to that same array. This is an editing example; the sample paths are not installed assets:

```ts
{
  kind: "video",
  src: "/videos/my-project-walkthrough.mp4",
  width: 1920,
  height: 1080,
  caption: "Booking workflow walkthrough",
  poster: "/images/projects/my-video-poster.webp",
  captions: { src: "/videos/my-project-en.vtt", language: "en", label: "English" },
  transcript: "A text description of the demonstrated workflow.",
}
```

The gallery reserves image space, lazy-loads screenshots, and opens an on-page viewer on selection. Videos use native controls, inline playback, and `preload="none"`; there is no autoplay. Add captions/transcripts when a recording has speech or meaningful audio. There are no local video entries currently. Five owner-supplied Loom recordings open as on-demand embedded players in the same viewer, so they do not require local files or invented thumbnails. Actual playback/access should be checked in the publication environment.

A supplied `productUrl` shows an external project button; `productLinkLabel` provides an accurate label, such as an App Store listing or company website. Without it, no demo link is invented; the case study and any gallery remain usable. Projects without a screenshot use a typographic cover. Add `image` when a real screen is available, and the cover switches automatically. A recorded URL does not guarantee that a third-party deployment is still accessible.

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

## Experience presentation and grid backgrounds

Home and About share `src/components/experience/experience-list.tsx` and the typed records in `src/content/experience.ts`. Home shows all five companies, roles, and start/end dates. About places experience before the full toolkit and renders every role open initially, with contribution bullets and skill badges; native disclosures still let a reader collapse an entry.

Edit `startDate` and `endDate` using `YYYY-MM`. Date labels are derived automatically and rendered as semantic time elements. Omit `endDate` only for a genuinely current position. `highlights` contains a title, description, and optional project slug; `skills` controls the badges. `logo` stores a public asset path, width, height, and optional `tone: "dark"` for artwork with white lettering. No logo means the entry's `initials` are used. Four original logos are supplied; the SJ Empowers logo still needs an approved asset. See COMPANY-LOGOS.md for provenance.

`src/components/ui/grid-background.tsx` provides three static CSS grid sizes: `small` (24px), `medium` (48px), and `large` (96px). The homepage hero uses small; the homepage approach section uses medium; shared contact calls to action and the Contact intro use large. Optional glow and crosshair markers are static. The component is decorative, ignores pointer events, and has no client state, animation loop, image request, or added library. Keep section wrappers positioned and isolated when reusing it. All component styling remains in Tailwind utilities; no new global component styles were added.

Page introductions can opt into the faint small grid with the `grid` prop on `PageIntro`. Work, Tools, and About use it at 70% of the standard grid layer opacity. It is confined to each introduction; their content sections keep clean backgrounds. Contact retains its separate large-grid introduction.

## External walkthrough links and status

Use a separate typed array for hosted recordings:

```ts
walkthroughs: [
  { label: "Web walkthrough", url: "https://www.loom.com/share/RECORDING_ID", provider: "Loom" },
],
```

The recording button opens an on-page native dialog. Its Loom iframe mounts only while open and uses autoplay=0. Closing or switching videos unmounts the player. A secondary Open on Loom link is available for playback trouble. Images use the same viewer with previous/next controls and arrow keys; Escape closes the dialog. No fabricated thumbnails or video downloads are added. Keep web/mobile recordings separately labeled. Optional `projectStatus` is `Ongoing product` or `Completed feature work`; this is independent of employment dates and `status` access classification. Keep preview/noindex until launch review.

## Tone and theme

`docs/PROJECT-COPY.md` contains the audience-focused project summaries, overviews, and outcomes. Lead with product context and delivered work, keep implementation choices deeper in the case study, and place learning after contribution. Preserve the owner handoff for facts and contribution boundaries.

The header theme control is a light/dark button. New visitors start in light mode; explicit choices persist through next-themes. There is no system dropdown.

## Contribution maps, hiring paths, and deferred tools

`context` is the concise product-context paragraph shown in the case-study Overview. `overview` retains the fuller source narrative. Optional `implementation` contains a title, description and `steps` array, each with `title` and `description`. These are explanatory contribution maps based on confirmed work, not measured results, code samples or screenshots. For projects without real imagery, the map provides an intentional hero presentation; existing screenshots remain unchanged. The implementation section lists technologies in full rather than treating three stack initials as an architecture diagram.

Gaming Platform remains a full-stack project. Its homepage spotlight and Full-stack archive filter make the frontend/backend responsibility explicit. The featured trio and their order remain unchanged. The client supplied the smart contract.

Hero role/copy lives in `profile.ts`, and résumé links use its existing PDF path. Service copy is read from `services.ts`; evidence links point to existing projects. Contact paths in `contact-paths.tsx` provide separate role/project email subjects and résumé/calendar actions. These are compose links; they do not send messages automatically. No current employer, availability or response-time guarantee has been added.

Tools with remaining narrative draft flags use `ToolSnapshot`, showing only the verified summary, overview, scope and contributions. Draft problems/decisions/outcomes/lessons are not rendered. Their original content and flags remain in `tools.ts` for later editing and still protect publication. The Blogsite snapshot does not present unconfirmed libraries as its stack.

## Explicit scope and involvement

`profile.heroProjectSlug` selects SkillMatch independently of featured-project order. `developmentScope` explicitly controls Full-stack archive filtering; do not infer backend ownership from role text or API integration alone. `involvement` supplies SkillMatch’s “Contributed from day one” badge independently of optional product status. Employment `focus` is a secondary description; preserve official résumé `role` and date fields. See the latest clarification in `CONTENT-SOURCES.md`.

## Concise tool details and optional content

All Tools use `ToolSnapshot`, including complete records. It shows overview, role/contributions, verified stack and any confirmed decisions, workflow and outcomes. Lessons are optional and omitted when absent; demo-marked decisions/results/lessons never render. TypeSpark/GlobePick are complete written records. Blogsite retains draft fields and `stackVerified: false`, so its unconfirmed stack is hidden.

Set `developmentWorkflow` only when confirmed; current Codex wording is qualitative, with no invented speed percentage. Add a future owner-supplied live URL through `productUrl`. Optional `media` and `walkthroughs` use the existing on-page viewers. Absent URLs or company-laptop evidence do not create empty media sections or require fabricated screenshots.

## Homepage selections and service scope

`profile.homeFeaturedProjectSlugs` controls only the ordered Home cards: SkillMatch, Hestiya, Bitlux. It is independent of Work archive `featured` flags and `heroProjectSlug`. Services use `href: "/work"`, a short description, three `deliverables`, and a compact stack list. Keep deliverables client-facing; detailed library inventory belongs on About.

Employment focus labels were retired; titles/dates and factual highlights remain. Home `toolkitHighlights` uses frontend/mobile, backend/authentication, data/state and API integrations. TanStack Query belongs with data fetching/caching; jsPDF describes PDF generation within connected document workflows. Related project links are examples, not a claim that every badge was used on that one project. The shared approach describes scope → full-stack MVP → test/launch → improve/scale and also appears on About.

## Current compact Home layout

Home uses Services as its single capability overview: one short description, three technology badges and a /work link per card. Detailed skills/capabilities live on About; Services links to /about#toolkit. The former Home SkillsSection/toolkitHighlights and deliverable lists have been removed. Edit detailed toolkitGroups in toolkit.ts and About capabilities in services.ts. Keep homepage featured selection and the MVP process independent of this simplification.
