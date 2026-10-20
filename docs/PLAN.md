> Implementation note: the standalone app has now been built in `uzair-portfolio`. This file records the design plan; see `PHASES.md` and `VERIFICATION.md` for implementation status.

# New portfolio plan

Prepared: 20 October 2026
Status: Planning only. No new application has been scaffolded under this plan.

## 1. Project identity and scope

- Recommended project/repository name: `uzair-portfolio`.
- Public identity: **Muhammad Uzair Ahmad — Full-stack Developer**.
- Proposed new location: `/home/uzairahmad/Desktop/uzair-portfolio`, separate from the existing `/home/uzairahmad/Desktop/portfolio` application.
- Create a fresh Next.js app with its own package manifest, lockfile, configuration, Git repository, and `src/` directory during implementation.
- Do not copy the old dependency manifest, webpack overrides, animation system, or concept-preview implementation into the new app. Reuse verified content and selected assets as appropriate.
- The old application and the earlier uncommitted concept prototypes are not the new project's foundation. This planning step does not remove or modify those prototypes.
- Keep the name independent of a year, framework version, or `v2` suffix.

## 2. Purpose: hiring and direct client work

One site should support two visitor journeys without a mode switch or two duplicated websites.

| Visitor                     | Questions the site must answer                                                                 | Main evidence                                                            | Useful next action                         |
| --------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------ |
| Recruiter or hiring manager | What can Uzair build? What did he personally contribute? How does he work in a team?           | Experience, technical case studies, résumé, GitHub, clear role and scope | View/download résumé; contact about a role |
| Direct client               | Can Uzair solve this kind of problem? What can he deliver? What will working together involve? | Services, relevant project examples, tools, process, credible outcomes   | Start a project conversation; book a call  |

Lead with a clear professional role and useful work. The homepage introduces both journeys; project pages provide the evidence. Services should describe deliverables and suitable problems rather than a wall of technology names.

The visual concept is suitable for both audiences. The final content still needs verification before the site is ready to publish.

## 3. Visual direction

Use the combined image concept as the visual reference:

- **Product Studio foundation:** strong hierarchy, prominent product screenshots, clear services, and tools with distinct identities.
- **Fieldnotes structure:** readable case studies with problem, role, implementation, decisions, contributions, and results.
- **Editorial warmth:** selected serif accents, step numerals, personal writing, and restrained visual details.
- One shared design system across every route, rather than three themes or three implementations.
- Light: warm near-white surfaces, graphite text, forest/olive accents.
- Dark: charcoal surfaces, warm light text, restrained lime accents.
- Product screenshots retain their actual product colors. Small illustration tiles are decorative assets, not claimed product screenshots.
- No invented portraits, testimonials, logos, technologies, metrics, or awards from the generated images are treated as real content.
- Desktop, tablet, and mobile compositions must be designed deliberately. The supplied desktop concept images do not by themselves define mobile behavior.

Reference images:

- [Combined homepage, both themes](/home/uzairahmad/.codex/generated_images/01a1554f-9dec-7840-84aa-80c4dd194926/exec-4252ce71-93aa-4982-9fb6-d05dd0712ce5.png)
- [Combined project detail, both themes](/home/uzairahmad/.codex/generated_images/01a1554f-9dec-7840-84aa-80c4dd194926/exec-fe70555b-a037-4121-8d88-8043f8d85e32.png)
- [Work, tools, about, and contact](/home/uzairahmad/.codex/generated_images/01a1554f-9dec-7840-84aa-80c4dd194926/exec-d8013fb4-6c66-4941-856f-865403719a9f.png)

## 4. Portfolio coverage audit

| Area                     | Covered by the concept?          | What is needed for the final portfolio                                                                                    |
| ------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Hero / introduction      | Yes                              | Clear role, specialisms, location, concise positioning, two purposeful calls to action                                    |
| Services                 | Yes                              | Three useful service categories, expected deliverables, supporting work links                                             |
| Selected projects        | Yes                              | Three strongest examples initially; choose based on contribution evidence and available visuals                           |
| Project archive          | Yes                              | Remaining projects with accurate categories, summaries, status, and links                                                 |
| Project case studies     | Structure covered                | Verified original problem, role, team context, constraints, solution, tradeoffs, contributions, evidence, and lessons     |
| Client tools             | Yes                              | TypeSpark, GlobePick, and Blogsite; confirm individual attribution, status, permitted screenshots, and any public URLs    |
| Experience               | Yes                              | Accurate job titles, employer names, dates, and current employment status                                                 |
| Skills                   | Partially                        | Grouped capabilities with links to work that demonstrates them; avoid percentage-based skill ratings                      |
| Approach                 | Yes                              | A short practical four-step process, expectations for feedback, testing, handoff, and collaboration                       |
| About                    | Yes                              | Concise personal background, professional interests, verified education if useful, authentic optional portrait            |
| Résumé                   | Missing from the visual coverage | Current accessible PDF, visible download/view link, alignment with the experience page                                    |
| Contact                  | Yes                              | Correct email, GitHub, LinkedIn, and working calendar link; useful prompts for both roles and projects                    |
| Credibility              | Incomplete                       | Real work evidence first; attributable, approved testimonials only if available                                           |
| Accessibility and mobile | Not established by the images    | Keyboard, focus, semantics, contrast in both themes, reflow, motion preferences, touch behavior                           |
| Discoverability          | Implementation work              | Route metadata, canonical URLs, social previews, sitemap, robots, relevant structured data, meaningful image descriptions |
| Error and utility states | Implementation work              | Proper not-found page, broken-link handling, image fallbacks, clipboard failure handling                                  |

### Minimum content needed before public launch

1. Confirm the current professional title, preferred contact details, and whether to state hiring/freelance availability.
2. Supply or update the résumé PDF and confirm employment dates and current role.
3. Complete three substantial case studies. Start with Bitlux, Linxx, and SkillMatch if they have the strongest evidence; adjust if another project has clearer contribution material.
4. Confirm project-specific technology choices and personal responsibilities. Do not automatically apply one employer's general stack to every product.
5. Confirm which project screenshots, names, links, and client/company credits can be shown publicly. Private work can use a permitted anonymized writeup where necessary.
6. Confirm tool overviews and release status. Existing notes describe TypeSpark and GlobePick as implemented applications with remaining public-launch checks; do not automatically label either as publicly live.
7. Blogsite's framework and public URL are not established by the related chat. Keep those fields absent until confirmed.
8. Use verified outcomes where available. Concrete shipped functionality and documented improvements are valid evidence when quantitative metrics do not exist.

Testimonials, a blog, pricing, a newsletter, and a live availability badge are optional. Their absence does not prevent a complete portfolio.

## 5. Pages and homepage sequence

### Routes

| Route                    | Purpose                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------ |
| `/`                      | Introduce Uzair, show the strongest work, and direct visitors to evidence or contact |
| `/work`                  | Browse the project archive                                                           |
| `/work/[slug]`           | Read an individual project case study                                                |
| `/tools`                 | Explore focused client tools and smaller products                                    |
| `/tools/[slug]`          | Read an individual tool's overview, contribution, technical story, and status        |
| `/about`                 | Professional background, capabilities, full experience, résumé, and approach         |
| `/contact`               | Email, calendar, social links, location/time zone, and what to share                 |
| Framework not-found page | Recover from invalid or removed URLs                                                 |

Services and approach are homepage sections for the initial release. Add dedicated pages only if there is enough distinct content and a clear visitor need. A résumé is a downloadable document, not an extra app route by default.

### Homepage order

1. Header and hero: role, introduction, view-work action, and get-in-touch action.
2. Services: web applications, full-stack systems/integrations, and mobile experiences.
3. Selected work: a large featured project and two supporting projects.
4. Tools and smaller products: TypeSpark, GlobePick, Blogsite.
5. Experience: concise highlights with access to the full background and résumé.
6. Approach: understand, shape, build, refine and ship.
7. About teaser: personal voice, capabilities, and a link to the about page.
8. Contact invitation and footer: clear email, professional links, résumé access.

Keep skills tied to services and work. A separate skills section is only needed if it provides useful evidence that these sections do not already convey.

### Case-study content model

- Product name, category, short overview, status, relevant dates if confirmed.
- Client/company credit and engagement type, keeping team work and personal ownership explicit.
- Role, collaborators, scope, and what was outside personal responsibility.
- Original problem, audience, goals, and constraints.
- Implemented solution and key decisions, with reasons and relevant alternatives.
- Stack by responsibility, such as UI, API, storage, and integrations.
- Specific contributions illustrated by appropriate screenshots or diagrams.
- Validation performed, verified results, limitations, and lessons.
- Live link, permitted repository/code example, walkthrough, or explanation of a private project.
- Next relevant project.

Use a summary strip and a readable long-form layout. A table of contents appears when the page length warrants it. Draft fields stay in authoring material and must not appear as fabricated finished copy on the public site.

## 6. Framework and dependencies

- Use the **latest stable Next.js** release when scaffolding, with App Router and TypeScript in strict mode. The official current release article is Next.js 16.4; resolve and record the latest stable patch at setup time rather than assuming a specific patch number.
- Use the compatible React and React DOM versions recommended by that stable Next.js release.
- Use the current stable Tailwind CSS release supported by its official Next.js setup, presently the v4 documentation and CSS-first theme workflow.
- Use a supported Node LTS version compatible with the selected Next.js release.
- Keep a committed lockfile and record the selected versions in the new project's README.
- Start from `create-next-app` with explicit TypeScript, Tailwind, ESLint, App Router, `src/`, and `@/*` alias choices. Review generated defaults rather than copying the old configuration.
- Follow the selected stable release's current prerendering and caching model. Local content should produce static output where practical; do not add databases or custom cache layers for file-backed portfolio content.
- Stable React Compiler can be enabled if supported by the selected scaffold. Do not enable experimental compiler/runtime flags merely to appear current.
- Small initial dependencies: `clsx`, a Tailwind-version-compatible `tailwind-merge`, a theme helper if useful, and tree-shakeable icons. Use native elements for simple interactions.
- Start with typed local content and reusable React templates. Add MDX only if actual rich editorial content justifies it; a CMS is not required for the initial site.
- Avoid adding Redux, a table engine, animation framework, component framework, or form library without a demonstrated need.

## 7. Proposed `src/` structure

```text
uzair-portfolio/
├── public/
│   ├── images/projects/
│   ├── images/tools/
│   └── documents/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── work/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── tools/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── projects/
│   │   ├── tools/
│   │   └── theme/
│   ├── content/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── tools.ts
│   │   ├── experience.ts
│   │   └── services.ts
│   ├── lib/
│   │   ├── cn.ts
│   │   ├── content.ts
│   │   └── metadata.ts
│   └── types/
│       └── content.ts
├── tests/
├── next.config.ts
├── postcss.config.mjs
├── package.json
└── README.md
```

Keep routes focused on composing sections and data. Do not put every route and all content into one large component or build a generic page-builder abstraction.

## 8. Styling contract

### Allowed in `globals.css`

- Tailwind import and CSS-first theme configuration.
- Semantic design tokens for light/dark colors, fonts, spacing where useful, borders, and radii.
- Tailwind `@theme inline` mappings when theme utilities reference semantic CSS variables.
- Base document/body styles and shared heading/paragraph/link defaults.
- A single screen container primitive, implemented with a thin `Container` component and, if useful, one global utility.
- Shared focus, selection, scroll offset, and reduced-motion behavior.
- Font declarations and genuinely global typography rules.

### Tailwind classes in TSX

Use inline `className` utilities for section grids, spacing, alignment, image treatment, responsive behavior, hover/focus states, card appearance, button variants, and page composition. “Inline Tailwind” means utility classes in JSX; it does not mean replacing them with React `style` objects.

Do not place page-specific selectors, component skins, or long button/card stylesheets in `globals.css`. Do not create a second custom page stylesheet that bypasses this rule. Repeated utility combinations belong in reusable components or small typed variant maps.

### Theme behavior

- Light, dark, and system preference; remember an explicit user choice.
- One root theme selector consistent with Tailwind's documented dark-mode setup.
- Semantic utilities such as `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, and `text-primary-foreground`.
- A primary button automatically adapts to the theme. Separate “light button” and “dark button” components are not needed.
- Theme initialization must avoid hydration mismatches and unnecessary flashes.
- Check all actual combinations for readable text, controls, focus, and screenshots.

### Class composition

- `cn` combines `clsx` and `tailwind-merge`.
- Typed maps use complete literal class names, as required by Tailwind's source scanning.
- Map a prop to a complete string, such as `variantClasses[variant]`; do not build strings like `bg-${color}-500`.
- Start with plain typed variant maps. Add a dedicated variant library only if the actual component complexity warrants it.

## 9. Reusable components

Build the components actually used by the portfolio, with normal HTML semantics and small APIs.

| Component                                              | Planned responsibility                                                                                                             |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `Button`                                               | Native button, typed primary/secondary/outline/ghost variants; small/default/large/icon sizes; disabled and focus behavior         |
| `ButtonLink`                                           | Internal Next.js link or external anchor using the same shared button classes; no nested interactive elements                      |
| `Card` primitives                                      | Shared surface, padding variants, header/content/footer where useful; explicit project/tool card compositions                      |
| `Badge`                                                | Technology, category, or verified project-status label                                                                             |
| `Table` primitives                                     | Semantic table/caption/header/body/row/cell for genuine tabular comparisons in case studies; contained mobile overflow when needed |
| `Container`, `Section`, `SectionHeading`               | Consistent page width, section rhythm, and headings without dictating every page's layout                                          |
| `Header`, `MobileNav`, `Footer`                        | Shared navigation, active route, keyboard/touch behavior, social and résumé access                                                 |
| `ThemeToggle`                                          | Accessible theme choice and persistence                                                                                            |
| `ProjectCard`, `ToolCard`                              | Reusable content presentations with truthful links and status                                                                      |
| `CaseStudyLayout`, `CaseStudyMeta`, `ContributionList` | Consistent project/tool detail presentation                                                                                        |
| `ExperienceList`, `ApproachSteps`                      | Shared data presentation on home/about without duplicating content                                                                 |
| `CopyEmailButton`                                      | Explicit clipboard action with success and failure feedback; a normal email link always remains usable                             |

Avoid building a sortable/filterable data-table framework for a portfolio. Experience can be a semantic list. A simple comparison table is sufficient when the content is actually tabular.

## 10. React and Next.js implementation rules

- Server Components by default for page content, sections, cards, and case studies.
- Add client boundaries only for actual state, browser APIs, or event handling: menu, theme, copy email, optional filters/gallery controls.
- Keep state near its owner; derive values from existing state/props rather than synchronizing duplicate state.
- Use Effects for external synchronization where necessary, not for normal derived data or event-driven actions.
- Keep rendering pure, use stable content IDs/slugs as keys, and avoid direct DOM-driven application state.
- Use composition and typed props; keep project data separate from presentation.
- Avoid blanket memoization. Measure a real issue before introducing manual memo/callback machinery.
- Avoid a global state manager for a small content-led site.
- Use semantic buttons for actions and links for navigation, accessible labels, visible keyboard focus, and proper heading order.
- Use framework image/font/link facilities where they help; do not override Next.js's bundling defaults without evidence.
- Dynamic-import genuinely heavy optional demos when requested. Ordinary text and page content must remain in initial server-rendered HTML.

## 11. Responsive behavior and performance

- Start with mobile layouts, add breakpoint variants according to available space, and validate in between preset widths.
- Check representative widths: 320, 375/390, 768, 1024, 1440, and a larger desktop.
- Collapse the header to accessible navigation without clipped controls. Menu closes on navigation; verify Escape/focus behavior if an overlay/dialog is used.
- Stack project compositions and service/tool grids deliberately. Avoid shrinking desktop typography or columns until the content becomes unreadable.
- Constrain long-form reading width separately from the general page container.
- Resize images appropriately, reserve dimensions, and lazy-load images below the fold. Give only the actual above-the-fold priority image eager treatment.
- Limit font families and weights, use local/optimized fonts, and optimize static illustrations independently of the large design mockup images.
- Use small CSS transitions, honor reduced motion, and keep normal browser scrolling. No scroll hijacking or essential information behind hover.
- Do not load the full set of project galleries or tool demos on the homepage.
- Inspect production route bundles, image payloads, and runtime errors before release. Do not claim a performance score from an image or development-server check.
- Target good Core Web Vitals: LCP at most 2.5 seconds, INP at most 200 milliseconds, CLS at most 0.1, assessed at the 75th percentile of real visits when sufficient field data exists.
- Use production mobile lab measurements as development evidence; they do not prove field performance or guarantee future scores.

## 12. Discoverability, trust, and contact

- Route-specific title/description, correct production origin/canonicals, social images, sitemap and robots configuration.
- Appropriate truthful Person/site/project structured data where supported by visible content; no ratings or invented facts.
- Searchable project text in server-rendered HTML, meaningful links and image alt text, valid unknown-slug 404s.
- Clearly distinguish public links, private work, and in-development products. Omit a live action if there is no verified public destination.
- Keep email and calendar contact as the reliable initial flow. Add a form only if delivery, validation, privacy information, spam handling, and success/error states will be implemented and tested together.
- Add a privacy page or relevant notice if data collection, forms, or analytics introduce a real need; do not add unrelated boilerplate features by default.
- Verify all résumé, contact, calendar, social, and project links before publication.

## 13. Delivery phases and completion checks

### Phase 1 — Plan and content inventory (current phase)

Deliver this plan, the recommended name, a sitemap, a styling/component contract, and a list of factual content gaps. No app scaffolding, source migration, or deployment in this phase.

### Phase 2 — Fresh application foundation

Create the separate `uzair-portfolio` application with `src/`, latest stable compatible dependencies, lockfile, strict TypeScript, lint/format scripts, and minimal framework configuration. Implement semantic light/dark tokens, typography, container, and the small shared component set. Verify the base components in both themes before composing all pages.

### Phase 3 — Homepage and responsive layout

Build the combined visual direction, including every agreed homepage section and the three tools. Compare against the reference images while adjusting deliberately for tablet and mobile. Keep factual copy separate from presentation.

### Phase 4 — Full routes and case studies

Build work/tools archives, project and tool templates, about, contact, résumé access, and not-found handling. Complete at least three evidence-backed project stories and accurate tool overviews. Do not publish authoring placeholders as finished project facts.

### Phase 5 — Verification and launch preparation

- Type checking, lint, formatting, and production build pass.
- Targeted content checks catch duplicate/missing slugs, invalid required fields, and publication-ineligible drafts.
- Browser checks cover navigation, unknown routes, mobile menu, theme persistence, project/tool links, contact actions, and résumé download.
- Check representative content and long names at 320px through desktop; no unintended horizontal page overflow.
- Keyboard and focus checks, both-theme contrast, and reduced-motion verification pass.
- Production asset/bundle/performance inspection is documented without fabricated guarantees.
- Metadata, indexing configuration, social previews, and public links are correct for the chosen production domain.
- Remaining factual questions and any optional follow-up work are explicit.

Publication is a separate implementation-stage action, not part of this planning request.

## 14. Official references checked

- [Next.js 16.4 release](https://nextjs.org/blog/next-16-4)
- [create-next-app options, including src directory](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [React: Thinking in React](https://react.dev/learn/thinking-in-react)
- [React: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [Tailwind theme variables](https://tailwindcss.com/docs/theme)
- [Tailwind dark mode](https://tailwindcss.com/docs/dark-mode)
- [Tailwind class detection and literal variant maps](https://tailwindcss.com/docs/detecting-classes-in-source-files)
- [Tailwind responsive design](https://tailwindcss.com/docs/responsive-design)
- [Core Web Vitals definitions and measurement](https://web.dev/articles/vitals)
