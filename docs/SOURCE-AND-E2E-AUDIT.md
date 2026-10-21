# Portfolio source and end-to-end audit

Reviewed 22 October 2026. This is an audit, not a website-content update. The old portfolio, résumé PDF and external profiles were not modified. Local production preview: http://127.0.0.1:4337/.

## Follow-up implementation

The owner-approved follow-up removes Bitlux’s broken action, restores Get Foodies Node/Express and visible SkillMatch authentication, and completes TypeSpark/GlobePick written stories using their build chats and code. Their verified stacks and qualitative Codex development workflows now render. Lessons are optional. Blogsite alone retains five narrative draft fields. The owner deferred résumé/GitHub changes. The audit below remains the historical findings, not a claim that these resolved items are still missing.

## Conclusion

The main page and project inventory is covered. The strongest next improvements are correcting inconsistencies, restoring a few supported contribution details, and strengthening evidence. Another general homepage section is less useful than these changes. The portfolio is suitable in structure for hiring teams and direct clients, but is not ready for public launch: a project destination is broken, the downloadable résumé contains older claims, three tool stories remain deferred, and public SEO is deliberately disabled.

## Sources and scope

- Old portfolio: `/home/uzairahmad/Desktop/portfolio/src/data/index.ts`, `src/components/portfolio/content.ts`, and its media inventory.
- Both pages of `/home/uzairahmad/Desktop/uzair-portfolio/Uzair-MERN-Stack-Resume.pdf`, extracted and visually inspected. The public PDF has the same SHA-256 as this source; it was preserved accurately, but preservation does not establish that its wording is up to date.
- Owner handoff: `/home/uzairahmad/Desktop/portfolio/portfolio-content-additions.md`.
- [Shared ChatGPT conversation](https://chatgpt.com/share/6ad92ca6-97b4-83ee-a2ad-fd1e30af5004), successfully reread in the browser. Its generated `Uzair-Portfolio-Content.md` attachment showed “Preview unavailable”; its actual file contents were not independently compared. The visible discussion and local handoff were compared.
- Latest owner corrections in this chat: MERN/Next.js positioning, SkillMatch contribution from day one, frontend/backend project scope, and Onyx existing-API/Socket.io integration only. These take precedence over older accounts.
- Current content, rendered production pages, downloadable assets, and selected external destinations. This is not an audit of the commercial applications themselves.

## Priority findings

| Priority                             | Finding and evidence                                                                                                                                                                                                                                                                                   | Recommended change                                                                                                                                                                                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| High — before launch                 | Bitlux’s `Open project` destination shows Vercel `404 DEPLOYMENT_NOT_FOUND`. The local case study and its four screenshots work.                                                                                                                                                                       | Remove/hide this external action until an owner-approved working replacement is supplied. Keep the case study and screenshots. Do not substitute an unrelated Bitlux domain.                                                                                       |
| High — consistency                   | The unchanged downloadable résumé still calls Shopify ongoing under Sofrix, uses present-tense wording for the ended Strategist HUB role, and includes Welcome to Food, which the owner removed from the website. It also links to the old portfolio.                                                  | Revise the résumé as a separate document update: preserve employment dates, align Shopify attribution/completion with the latest account, use historical tense, decide the résumé’s demo-project list, and update its portfolio URL when the new domain is chosen. |
| High — consistency outside this repo | The linked public GitHub README still gives Sofrix as Jan 2025–Present and different Weiblocks/Strategist HUB dates. The current portfolio uses the résumé dates. Browser verification confirmed the mismatch.                                                                                         | Update the GitHub profile README separately to match the authoritative dates and current project scope. Do not change portfolio dates to match the older README.                                                                                                   |
| Medium — actual omission             | Get Foodies’ rendered project stack omits Node.js and Express, although its résumé project entry lists both and the owner has confirmed backend contributions.                                                                                                                                         | Add these supported technologies to that project’s stack; keep exact endpoint ownership general until concrete examples are supplied.                                                                                                                              |
| Medium — actual omission             | SkillMatch’s `Authentication & API integration` scope exists in source, but the implementation map replaces the scope list on the rendered page. Authentication appears as a requirement/technology, rather than an explicit personal contribution. The résumé confirms authentication implementation. | Add an explicit authentication contribution to the visible case study. Preserve day-one involvement, team delivery and senior-guided backend work. Do not imply ownership of every assessment/proctoring feature.                                                  |
| Medium — actual omission             | TypeSpark and GlobePick have verified Next.js/React/TypeScript/Tailwind stacks in source, but `ToolSnapshot` renders no stack. Their overview/contributions do appear.                                                                                                                                 | Display the verified stack in these snapshots. Blogsite’s framework remains unconfirmed and must not inherit those claims.                                                                                                                                         |
| Medium — incomplete by agreement     | TypeSpark has 4 draft narrative fields, GlobePick 3, Blogsite 5. Their public pages intentionally show verified snapshots instead of unfinished stories. Real tool UI evidence is missing.                                                                                                             | Supply the actual brief, implementation choices and outcome, plus genuine screenshots/recordings. Confirm Blogsite’s actual stack and shipped pages. Optional public URLs are not prerequisites for valid private projects.                                        |
| Medium — evidence weakness           | Bitlux, Linxx and Get Foodies now state backend/API contributions, but the descriptions do not distinguish a created endpoint from an integration or improvement. This is supported broad scope, not fabricated detail.                                                                                | Add one specific backend problem → action → outcome example per project. Use shareable facts and omit private source code where necessary.                                                                                                                         |
| Medium — claim support               | SJ Empowers shows a secondary `Full-stack contributions` label, based on the owner’s broad clarification, while its displayed bullets and résumé title describe frontend work. Strategist HUB correctly remains tied to the frontend-only Keller Williams account.                                     | Add a concrete SJ backend/integration example if applicable, or narrow the secondary focus label. Keep official titles and dates. Do not relabel Keller Williams as backend work.                                                                                  |
| Low — naming difference              | The supplied Shopify App Store URL loads a listing now titled “Pick Bot ‑ Barcode Buddy.” The portfolio retains the owner’s historical GP-Lite / Barcode Buddy name.                                                                                                                                   | Consider a short current-listing alias, after confirming that it is the same engagement/product lineage. A new listing title alone does not prove the historic project name was wrong.                                                                             |
| Low — messaging                      | Homepage body copy is clearly MERN/Next.js full-stack, but root meta/OG descriptions still use generic web/mobile wording. The compact Backend & data card highlights Next.js/MongoDB/NextAuth; Node.js/Express/NestJS are visible deeper on About.                                                    | Align share/search descriptions with the current full-stack positioning. Consider one concise Node/Express/NestJS proof point on Home without adding a large skills wall.                                                                                          |
| Low — validation wording             | `scripts/content-checklist.ts` prints “Résumé download is current” solely from `profile.resume.demo === false`; it does not inspect the PDF.                                                                                                                                                           | Rename the check to something factual, such as “Real résumé configured,” and retain a separate manual content review.                                                                                                                                              |

References: `src/content/projects.ts` (SkillMatch scope/contributions and Get Foodies stack), `src/components/projects/case-study.tsx` (map versus scope rendering), `src/components/projects/tool-snapshot.tsx`, `src/content/experience.ts`, `src/app/layout.tsx`, and `scripts/content-checklist.ts`.

## Coverage against supplied material

| Area                     | Result                                                                                                                                                                                                                                                                     |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home sections            | Hero, services, featured projects, full-stack spotlight, employment, What I bring, tools, approach, About preview and contact CTA are present.                                                                                                                             |
| Company/client projects  | All ten included: Bitlux, Linxx, SkillMatch, Hestiya, Gaming Platform, Development Solutions Group, Get Foodies, Onyx, Keller Williams and Shopify.                                                                                                                        |
| Smaller tools            | TypeSpark, GlobePick and Blogsite retained with verified snapshots; intentionally incomplete case studies are not falsely presented as finished.                                                                                                                           |
| Employment               | All five companies, official résumé titles, dates and locations represented. Four old employer logos retained; SJ uses an initials fallback.                                                                                                                               |
| Profile                  | Updated LinkedIn URL, GitHub, email, phone, Calendly, Faisalabad/time zone, education, GPA, languages, three certifications and real résumé access represented.                                                                                                            |
| Résumé skills            | Core frontend, backend, database, auth, state, integration and developer-tool groups are covered on About. Get Foodies project-specific Node/Express omission is listed above.                                                                                             |
| Screenshots              | All eleven original records remain: four Bitlux, seven Linxx. Device artwork is separate from real screenshot galleries.                                                                                                                                                   |
| Recordings               | All five supplied Loom URLs mapped correctly: Linxx web/mobile, Hestiya, Gaming Platform, Get Foodies. All five embedded players played after user interaction during this audit.                                                                                          |
| Scope corrections        | SkillMatch hero/day-one involvement; no SkillMatch ongoing badge; Gaming full-stack/client-supplied contract; Hestiya another developer’s Python backend; Onyx no custom backend; Keller Williams 27+ repos, translation/Jest work and CTO-shadowing context all retained. |
| Source-specific features | Shopify camera controls, embedded/standalone modes, label sizes, QOH, Save/Cancel, GraphQL location fallback, truncation and rescan work are represented. Onyx print-job/printer states and existing desktop responsibility are represented.                               |
| Hiring/client paths      | Distinct role/project email subjects, résumé, calendar, social and telephone links are present. No message or booking was sent.                                                                                                                                            |

### Deliberate differences from the old portfolio

- Welcome to Food was removed by request; its local route returns 404. The old résumé still lists it, which is a document consistency decision, not an accidental missing website project.
- Older generic anonymous testimonials were not imported as verified endorsements. Add named, approved references only if available.
- The old WhatsApp action is absent; email, telephone and Calendly replace it. Restore WhatsApp only if it remains a desired contact channel.
- Firebase was listed in the old skill carousel; Supabase, Stripe and Auth0 appeared in broad service offerings. They are not current project-backed highlights. Their omission should not be “fixed” by inventing contribution claims. Confirm relevant experience before adding them.
- Decorative vendor logos, 3D scenes and heavy animation were not content that needed migration. Static theme-aware grids and restrained hover motion preserve the new performance direction.

## End-to-end verification performed

### Automated checks — pass

- 19 content/media/publication tests.
- ESLint, TypeScript/Next route type generation, complete Prettier check, production build.
- HTTP smoke checks for all 18 portfolio pages and four expected missing/removed-route 404s.
- Additional crawl of all 18 rendered pages: no missing internal route links or fragment targets detected; linked local assets returned nonempty HTTP 200 responses. Existing smoke coverage checks every source image, artwork, logo, résumé, icon and social preview.
- Each route has one main heading and a main landmark; preview noindex, disallow-all robots and empty sitemap remain correct for preview mode.
- Public/source résumé hashes match. This verifies preservation, not editorial freshness.

### Browser checks — pass within the tested scope

- All 18 pages at 320px in dark and light, and at 1280px in dark: no document overflow; no completed image with zero natural dimensions was detected. A 438px normal-viewport pass also completed. This does not replace testing on actual iOS/Android devices or other browser engines.
- Mobile navigation opens, Escape closes and returns focus, navigation to About closes the menu; all five experience disclosures default open.
- Project filters work: Web applications 9, Mobile apps 2, Full-stack 6, Platforms 7, All 10. Tools has its own destination.
- Image viewer opens at 296px width in the 320px viewport; Next/arrow navigation, Escape, scroll lock/cleanup and return focus worked for the tested Linxx gallery.
- Both distinct Linxx recordings and Hestiya/Gaming/Get Foodies loaded and played on-page after interaction. Closing removes the iframe; switching changes its source, and iframe URLs use autoplay=0. Native media/arrow behavior was exercised on a representative image gallery, not every image permutation.
- Contact buttons have the correct role/project compose subjects, email, phone and calendar targets. Copy email reported success in the UI. The browser connector’s independent clipboard read returned an empty value, so actual operating-system clipboard contents were not certified.
- Theme changes immediately and dark preference survived reload; temporary viewport overrides were reset and dark Home restored.
- No first-party console error was captured in the inspected log. A generic Object warning came from Loom’s CDN script.

### External destinations checked

| Destination                 | Observed result                                                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bitlux                      | Confirmed Vercel `DEPLOYMENT_NOT_FOUND` page. Must fix/hide this portfolio action.                                                                              |
| SkillMatch                  | Public product homepage loaded. Its current product features do not prove personal ownership of every feature.                                                  |
| Hestiya                     | Marketplace welcome screen loaded; authenticated transactions were not tested.                                                                                  |
| Gaming Platform             | Public landing page loaded; no sign-in, wallet, purchase or gameplay transaction was performed.                                                                 |
| Development Solutions Group | Corporate homepage loaded.                                                                                                                                      |
| Keller Williams             | Primary-page web lookup returned the product homepage. In-app browser navigation timed out; interactive browser access is inconclusive, not a confirmed outage. |
| Shopify App Store           | Listing loaded, under the current Pick Bot / Barcode Buddy title. No install was attempted.                                                                     |
| Calendly                    | Muhammad Uzair’s 30-minute date/time selection loaded with available dates. No booking was made.                                                                |
| GitHub                      | Profile loaded; conflicting employment dates confirmed in its README.                                                                                           |
| LinkedIn                    | Authentication wall appeared. The supplied URL matches the résumé; unauthenticated profile content was not verified.                                            |

## Remaining owner/deployment material

1. Complete the three deferred tool stories and real UI media.
2. Provide specific backend contribution examples and clarify the SJ focus label if needed.
3. Align résumé/GitHub and optionally the Shopify naming; confirm current availability rather than inferring it from ended employment or an ongoing product.
4. Supply the SJ Empowers logo if desired. Credential URLs/dates, approved testimonials, code/test samples, before/after images and measured results are optional evidence improvements.
5. Choose the actual HTTPS deployment URL and review public canonical/OG/sitemap/robots settings. `check:publish` correctly reports preview mode, 12 remaining tool draft fields and absent public origin as not ready. Do not clear flags just to silence the check.
6. Measure deployed mobile performance and accessibility. No Lighthouse score, Core Web Vitals, screen-reader certification or cross-browser/device certification was produced here.

## Suggested implementation order

1. Hide/replace the dead Bitlux action; restore Get Foodies Node/Express, visible SkillMatch authentication, and verified TypeSpark/GlobePick stack badges; improve checklist/metadata wording.
2. Update résumé and the external GitHub profile as separate, reviewable changes; the current audit does not edit them.
3. Add concrete backend evidence and completed tool stories, then prepare deployment and run deployed checks.

## Evidence

- [Unavailable Bitlux destination](previews/audit-bitlux-unavailable.jpg)
- [Current homepage after audit](previews/audit-home.jpg)
- [HTTP/content audit data](audit/source-http-results.json)
- [Browser breakpoint/filter/destination observations](audit/browser-results.json)

These are point-in-time observations, not guarantees of third-party uptime. No app source, résumé PDF, external profile, remote, push, deployment or publication settings were changed by this audit.
