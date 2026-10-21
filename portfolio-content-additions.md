# Portfolio content additions — Muhammad Uzair Ahmad

Updated 21 October 2026. This revision incorporates the owner's detailed project account and supplied media links, together with earlier supported project discussions.

This is the current content handoff for the portfolio. It supersedes conflicting descriptions in the previous version of this file. The website source has not been edited. Keep **Bitlux, Linxx, and SkillMatch** as the three main featured projects.

## Editorial and implementation rules

- Use the case-study copy below as public content. Keep editorial notes and launch tasks out of public pages.
- Remove Welcome to Food from the portfolio project collection, navigation, related-project lists, and generated project routes or sitemap entries where applicable.
- Keep TypeSpark, GlobePick, and Blogsite pending further information. Preserve their existing verified descriptions without expanding plans into shipped-feature claims.
- Preserve authoritative résumé employment dates and profile details. “Ongoing” below describes the owner's latest project-status account; it does not extend employment dates or imply a current engagement.
- Shopify feature work is completed. Retain the combined embedded and standalone contribution.
- Qualitative outcomes and learning points below come from the owner's account. No numerical performance improvement, revenue, adoption, testimonial, or deployment date is invented.
- The owner has supplied the public product names and URLs below for inclusion. Links are recorded as supplied; the linked pages and videos were not inspected in this update.
- Keep separate fields for product URLs, screenshot galleries, and Loom walkthroughs. A recording is a walkthrough, not a live-demo URL or local MP4 file.
- Additional tradeoffs, team sizes, dates, metrics, and repositories are optional. Do not hold otherwise complete narratives in draft solely because those optional fields are absent.

## 1. Bitlux — featured

**Product:** Private-jet booking and ticketing operations.

**Project status:** Ongoing, as described by the owner. My documented contributions include completed improvements within that continuing product.

**Problem:** Existing screens had performance and data-rendering issues, inconsistent API handling, and code that needed cleanup. The interface also needed to follow updated Figma designs.

**My role and contribution:** I investigated and fixed performance and data-rendering issues, added TanStack Query for API handling and caching, and implemented toast messages and validation. I updated interfaces to match new Figma designs and refactored existing code into cleaner, more maintainable components. My wider work included reusable UI, backend API integration, and dynamic ticket PDF generation using jsPDF.

**Technical approach:** I introduced TanStack Query to handle API requests and cache server data while improving the affected UI and rendering behavior. I also added user feedback and validation around application actions.

**Outcome:** Fixed identified rendering and performance issues, updated the UI to the new designs, and improved API handling, validation, and code maintainability.

**Learning:** Gained experience improving an existing application by investigating behavior, introducing caching, and refactoring code alongside ongoing feature work.

**Stack:** Next.js, TypeScript, Tailwind CSS, TanStack Query, Redux Toolkit, PostgreSQL, jsPDF.

**Media:** Existing screenshots only; no Bitlux video supplied. Keep the existing four original screens.

**Editorial note:** Keep any existing owner-supplied project URL. Salesforce can remain product context where already supported, without adding personal integration ownership. The exact Redux/Query responsibility split and performance measurements are not supplied and are optional deeper detail.

## 2. Linxx — featured

**Product:** A job and service marketplace with ambassador/shopper workflows, listings, GPS discovery, approval flows, and Plaid integration.

**Project status:** Ongoing, as described by the owner.

**Problem:** The frontend needed backend API integration and working end-to-end flows. The mobile application also had issues associated with its Capacitor integration.

**My role and contribution:** I integrated backend APIs into the frontend, updated interfaces, tested end-to-end user flows, and fixed application bugs. I learned the Capacitor library while investigating and resolving mobile issues. My previously documented work also included approval/decline flows, GPS-related features, Plaid integration, and support for mobile deployment.

**Technical approach:** I worked through the connected frontend and API flows and tested behavior across the web application and its Capacitor-based mobile experience.

**Outcome:** Resolved identified web/mobile issues and verified the affected end-to-end workflows after integration and fixes.

**Learning:** Developed practical experience debugging Capacitor-specific mobile behavior and testing complete flows across web and mobile.

**Stack:** Next.js, TypeScript, Tailwind CSS, TanStack Query/React Query, Redux Toolkit, PostgreSQL, Capacitor, Plaid.

**Media:** Keep the existing seven original desktop/tablet/mobile screens, plus:

- [Web walkthrough](https://www.loom.com/share/a93960cdd4eb4dde9b04b4b2d9b56cb0)
- [Mobile walkthrough](https://www.loom.com/share/b320d04b28c04107aabe73a9cea70885)

**Editorial note:** “Linxxu” and “linux” in the latest message refer to Linxx. Keep the internal/company-project classification; the supplied recordings are authorized portfolio media, not confirmation of an older public demo domain. End-to-end testing is confirmed, but no automated E2E framework was named.

## 3. SkillMatch — featured

**Product:** Recruitment and candidate assessment, including profiles, job workflows, dashboards, and administrative interfaces.

**Problem:** The platform needed responsive frontend interfaces, validation, reusable components, authentication, and integration with backend services.

**My role and contribution:** SkillMatch was my first professional project. Working under senior developers, I built UI screens and dashboards, implemented validation, integrated APIs, and developed reusable components. I worked with Redux Toolkit, Tailwind CSS, and TanStack Query as part of frontend delivery. I also contributed to the backend by creating APIs under senior guidance.

**Technical approach:** I worked within the team's frontend and backend patterns, using shared components, state management, API integration, and validation to build connected application features.

**Outcome:** Delivered frontend screens and dashboard features, integrated backend services, and contributed APIs as part of the team.

**Learning:** Built my foundation in professional frontend development, reusable component design, state management, validation, and API integration, while gaining initial backend experience with senior support.

**Stack:** Next.js, NestJS, MongoDB, Redux Toolkit, TanStack Query, Tailwind CSS, Material UI, Passport-JWT, Swagger.

**Public URL:** [SkillMatch](https://www.skillmatch.tech/)

**Editorial note:** Do not present this as sole product ownership. Swagger is documented in the stack, but its exact use does not need to be invented to complete the case study. Assessment/webcam capabilities may remain product context without attributing unsupported implementation ownership.

## 4. Shopify GP-Lite / Barcode Buddy — completed feature work

**Product:** Shopify picking, packing, barcode scanning, and product-label printing.

**Status:** The described feature work is complete.

**Historical role:** The saved README records Freelance Full-Stack Developer, August–September 2026. Preserve the authoritative résumé dates if different.

**Problem:** The existing application was embedded-only. The feature work needed mobile camera scanning and standalone workflows alongside the embedded experience, together with label-printing and Shopify-data improvements.

**My role and contribution:** I implemented camera-based barcode scanning for iOS and Android, including camera selection, zoom, torch controls, and permission handling. I extended the existing app with non-embedded, standalone workflows while preserving embedded use.

I also worked across React and Ruby on Rails on product-label printing, barcode/PDF generation, Shopify GraphQL integrations, order scan tags, and rescan handling.

**Technical approach:** Combined embedded and standalone workflows supported the mobile scanning experience. Shopify GraphQL supplied product, variant, inventory-location, and metafield data. JsBarcode, WickedPDF, and PDF-merging tools supported the label-printing workflow.

**Outcome:** Completed a combined embedded/standalone mobile-scanning solution and the described printing and data-integration improvements.

**Stack:** Ruby on Rails, React, Shopify GraphQL API, JsBarcode, WickedPDF, PDF-merging tools.

**Additional supported implementation details:**

- Configurable 3×1, 2×1, and 1.5×1 labels.
- Product selection/search, print quantities, editable quantities/QOH, and product removal.
- Explicit Save/Cancel behavior for label-layout edits.
- Inventory-location fallback and fixes for missing GraphQL location data.
- Long-text truncation for label layouts.
- Order-scanning tag and rescan improvements.

**App Store URL:** [GP-Lite / Barcode Buddy](https://apps.shopify.com/groovepacker-lite?st_source=autocomplete&surface_detail=autocomplete_apps)

**Editorial note:** The App Store URL is supplied by the owner. Do not infer that every historical proposal, such as background processing or email completion notifications, shipped. No new screenshots or video were supplied for this project.

## 5. Hestiya Marketplace

**Product:** A Web3 carbon-credit marketplace for discovery, trading, holdings, and retirement.

**Problem:** The project needed a frontend built from Figma and connected to authentication, an existing backend, wallets, and smart contracts.

**My role and contribution:** I built the React frontend from scratch from the Figma designs. I collaborated directly with the developer responsible for the Python backend to understand and integrate its APIs. I integrated Clerk for sign-in/sign-up and worked on wallet connectivity, smart-contract interactions, and Web3 transactions.

My previously documented frontend work also covered listing filters, cart interactions, P2P transactions, holdings, retirement workflows, OTP verification, and PDF receipts.

**Technical approach:** Converted the designs into React interfaces and integrated the Python backend, Clerk authentication, and Web3 connections using Wagmi and Reown AppKit.

**Outcome:** Delivered a frontend connecting the marketplace's discovery, account, transaction, and holdings workflows to the supporting services.

**Learning:** Web3 was new to me on this project. I learned how wallet integration, smart-contract interactions, and Web3 transactions work while collaborating with another developer on API integration.

**Stack:** React, Tailwind CSS, Material UI, Clerk, Wagmi, Reown AppKit, Web3. Python backend developed by another developer.

**Public URL:** [Hestiya Marketplace](https://marketplace.hestiya.com/)

**Video:** [Hestiya walkthrough](https://www.loom.com/share/46665cdffcbf4862a7d0fdd3b43ec15d)

**Editorial note:** The owner now explicitly supplies the marketplace domain for use. It can replace the previous domain-confirmation placeholder; keep any existing preview URL as secondary if useful. Attribute frontend/API integration ownership accurately; do not claim authorship of the Python backend.

## 6. Gaming Platform — full-stack ownership

**Product:** A wallet-connected gaming application with spin-wheel gameplay, referrals, bonuses, credit claims, and user/admin workflows.

**Problem:** The client supplied a frontend demo generated with v0. It needed to be turned into a working Next.js application with backend functionality, authentication, wallet integration, gameplay, and referral/bonus workflows.

**My role and contribution:** I converted the client's demo into a Next.js application and built both frontend and backend functionality. I implemented Google and email/password authentication, wallet integration, the spin-wheel experience with win/lose outcomes, referrals, bonuses, credit claims, and user/admin interfaces.

**Additional supported features recovered from earlier discussions:**

- NextAuth authentication using Google OAuth and credentials.
- Referral validation and reward/credit handling.
- User views for referrals, credits, and spin/reward history.
- Admin user management, including viewing/editing users and enabling/disabling accounts.
- Administrative approval/rejection of credit transfers or claims.
- Configurable referral percentages and spin-wheel prize/free-spin timing settings.
- Integration with a client-provided smart contract.

**Technical approach:** Used Next.js for frontend and backend functionality, MongoDB for application data, NextAuth for authentication, and Web3 libraries for wallet/contract integration.

**Outcome:** Turned a frontend demo into a working full-stack application with connected user/admin workflows, authentication, wallet purchases, gameplay, and referral/credit features.

**Learning:** Gained experience connecting authentication, backend data, wallet interactions, reward-related features, and administrative controls in one application.

**Stack:** Next.js, TypeScript, Tailwind CSS, MongoDB, NextAuth, Web3 integrations. Earlier technical discussions mention Web3.js/ethers.js.

**Public URL:** [Gaming Platform](https://gaming-platform-frontend-eight.vercel.app/)

**Video:** [Gaming Platform walkthrough](https://www.loom.com/share/6da67165fe7d42be84fdd0f9fa4829ea)

**Editorial note:** Replace the previous frontend-only contribution wording. Earlier user discussions support the additional admin/referral features above. Do not invent exact bonus amounts, reward probabilities, fairness guarantees, or cashout rules. The contract was supplied by the client; describe contract integration rather than contract authorship.

## 7. Development Solutions Group

**Product:** A company portfolio/corporate website.

**Client brief:** Build the company website to match the client's requested design and presentation.

**My role and contribution:** I built responsive company portfolio interfaces using React 19, TypeScript, and Tailwind CSS, following the client's requested design. The work included Home, About, Projects, and Contact interfaces, with contact-form validation using Formik and Yup.

**Outcome:** Delivered the requested company presentation through responsive pages and a validated contact interface.

**Stack:** React 19, TypeScript, Tailwind CSS, Formik, Yup.

**Public URL:** [Development Solutions Group](https://development-solution-group.vercel.app/)

**Editorial note:** The client brief is now supplied. A separate architectural tradeoff or fabricated learning story is unnecessary for this smaller website.

## 8. Get Foodies

**Product:** An iOS and Android food application with onboarding, multilingual interfaces, and location-related features.

**Problem:** Convert supplied Figma designs into a mobile application and connect its UI to backend APIs across iOS and Android.

**My role and contribution:** Get Foodies was my first React Native and Expo project. I built the mobile application from scratch from Figma designs, created the UI, and integrated backend APIs. I implemented registration, OTP verification, profile completion, Redux Toolkit state management, multilingual support, location-related features, and banner interfaces.

**Technical approach:** Used React Native and Expo with file-based routing. I learned mobile development principles and application lifecycle behavior while implementing the project. AI-assisted learning helped me understand the unfamiliar stack and move through implementation faster.

**Outcome:** Implemented the described mobile interfaces and API-connected flows for iOS and Android.

**Learning:** Developed practical knowledge of React Native, Expo, mobile application lifecycle behavior, routing, and API integration through my first mobile project.

**Stack:** React Native, Expo, Redux Toolkit, i18n, file-based routing. Do not add an exact Expo/React Native version without checking the project.

**Video:** [Get Foodies walkthrough](https://www.loom.com/share/e0b16509dc234de2bd5298a0a78859b2)

**Editorial note:** Keep the internal/company-project classification. The owner has supplied a shareable recording. App Store/Play Store publication is not established, and a recording does not require inventing store-release status or backend ownership.

## 9. Onyx — web frontend for desktop print operations

**Product context:** Onyx is desktop printing software connected to physical printers. It accepts PDF printing commands, including copy quantities, and reports print-job and printer states.

**Client brief:** Provide browser-based operation so different users could work from different locations instead of depending on one computer's interface.

**My role and contribution:** I built/integrated web interfaces with the APIs exposed by the desktop application. Actions in the web application were reflected in the desktop printing workflow. I added a frontend Socket.io listener to receive updates and display print-job and printer status.

**Technical approach:** The web application consumed existing desktop APIs for actions and listened for status events through Socket.io. The observed workflow included ready, queued, printing, failed, and printed job states, together with printer online/offline status.

**Outcome:** Enabled the described printing workflow to be operated and monitored through a web interface while the existing desktop application remained responsible for printer execution.

**Learning:** Learned to consume event-driven updates through a frontend Socket.io listener and represent the different stages of a physical printing workflow.

**Confirmed technologies/integrations:** Existing Onyx Thrive/desktop APIs and a Socket.io frontend listener. The exact frontend framework was not supplied.

**Scope:** No custom backend was developed by me for this project; the frontend integrated the existing desktop application's APIs and event source.

**Access/media:** Work was performed on the client's laptop through proxy/remote access. No public URL, screenshots, or video are available. Show this as a private project and omit unavailable media controls.

**Editorial note:** Remove the old “tracking transport unknown” gap. Do not claim Socket.io server implementation or direct browser-to-printer execution. The exact framework is optional additional detail, not a reason to fabricate a stack.

## 10. Keller Williams — Strategist HUB

**Product URL:** [Keller Williams](https://kw.com/)

**Product context:** A real-estate platform comprising more than 27 interconnected React/Next.js repositories, including application repositories and shared packages such as table components, with translation support for up to 22 languages.

**My role:** Junior Software Engineer at Strategist HUB, working while shadowing the CTO.

**Problem:** Bugs and translation changes could involve code in several dependent repositories. A small UI change or missing translation key could require tracing through parent and child repositories, coordinating merges, and retesting the consuming applications.

**My role and contribution:** My main responsibility was investigating and resolving tickets, especially translation-related issues. I traced bugs and missing translation strings through nested repository dependencies and added the required translation key/value pairs.

The team had an internal application that generated translations from English into other languages. I worked with its generated translation pull requests, incorporated those changes into my own work, and tested the result locally.

I also worked through the dependent repository process: getting child-repository changes approved and merged, retesting them with the parent, and then progressing the parent changes. When my changes affected Jest tests or reduced coverage enough to fail CI, I updated existing tests or added tests appropriate to the changes.

**Technical approach:** Worked within the existing microfrontend/shared-package structure, used i18next translation keys and the team's translation tooling, debugged across repository boundaries, and maintained Jest tests and coverage checks.

**Outcome:** Resolved assigned bugs and translation tickets, tested changes through dependent repositories, and updated tests where needed to satisfy the project's checks.

**Learning:** Gained practical exposure to microfrontends, shared packages, cross-repository debugging, translation workflows, dependency-aware pull requests, and Jest. The work developed patience and a systematic approach to finding issues across several layers of a large codebase.

**Stack/practices:** React.js, Next.js, i18next, Jest, Git/pull requests, CI coverage checks, existing microfrontend/shared-package architecture.

**Editorial note:** The owner explicitly identifies Keller Williams and supplies kw.com for inclusion. Label it as the product/company website, not as a claim of ownership of the whole public website. “Shadowing the CTO” describes the working context; it is not a CTO title or architecture-lead claim. I used the translation tooling; I did not claim to build its translation engine or manually translate all 22 languages.

## 11. TypeSpark — deferred

Keep the existing verified overview and implemented stack/behavior. Further project details, real UI media, outcomes, and optional public URL will be supplied later. Do not expand earlier text/signature feature plans into shipped-feature claims.

## 12. GlobePick — deferred

Keep the existing verified geography-tool overview, implemented stack, bundled-data/local-state/worksheet scope. Further details, real media, outcomes, and optional public URL will be supplied later. Do not treat planning discussions as proof of implementation.

## 13. Blogsite — deferred

Keep the existing verified frontend-layout overview and contribution summary. The owner will supply the actual stack, shipped pages, project-specific details, outcomes, and real media later. Do not assume an earlier multi-tenant blog/newsletter plan describes this exact implementation.

## Media and link inventory

| Project                          | Screenshots                                           | Walkthroughs                                                                                                                              | Public link / access                                                                                                    |
| -------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Bitlux                           | Four existing original screens; images only           | None supplied                                                                                                                             | Preserve existing owner-supplied project URL                                                                            |
| Linxx                            | Seven existing original desktop/tablet/mobile screens | [Web](https://www.loom.com/share/a93960cdd4eb4dde9b04b4b2d9b56cb0), [Mobile](https://www.loom.com/share/b320d04b28c04107aabe73a9cea70885) | Internal/company project; no new public demo supplied                                                                   |
| SkillMatch                       | No new screenshots supplied                           | None supplied                                                                                                                             | [Live link](https://www.skillmatch.tech/)                                                                               |
| Shopify GP-Lite                  | No new screenshots supplied                           | None supplied                                                                                                                             | [Shopify App Store](https://apps.shopify.com/groovepacker-lite?st_source=autocomplete&surface_detail=autocomplete_apps) |
| Hestiya                          | Preserve existing mockup as a mockup                  | [Walkthrough](https://www.loom.com/share/46665cdffcbf4862a7d0fdd3b43ec15d)                                                                | [Marketplace](https://marketplace.hestiya.com/)                                                                         |
| Gaming Platform                  | No new screenshots supplied                           | [Walkthrough](https://www.loom.com/share/6da67165fe7d42be84fdd0f9fa4829ea)                                                                | [Live link](https://gaming-platform-frontend-eight.vercel.app/)                                                         |
| Development Solutions Group      | Preserve existing mockup as a mockup                  | None supplied                                                                                                                             | [Company portfolio](https://development-solution-group.vercel.app/)                                                     |
| Get Foodies                      | No separate screenshots supplied                      | [Walkthrough](https://www.loom.com/share/e0b16509dc234de2bd5298a0a78859b2)                                                                | Internal/company project                                                                                                |
| Onyx                             | Unavailable                                           | Unavailable                                                                                                                               | Private client-laptop work                                                                                              |
| Keller Williams                  | No new screenshots supplied                           | None supplied                                                                                                                             | [Product/company website](https://kw.com/)                                                                              |
| TypeSpark / GlobePick / Blogsite | Pending                                               | Pending                                                                                                                                   | Further details later                                                                                                   |

The five Loom URLs are now supplied and associated with their projects. Replace the old blanket statement that no project videos were available. They are external recordings, so no local video filename is required to link to them. Add a labeled external walkthrough action; use an embed only if the site's gallery supports it and playback/access is checked. Do not invent video thumbnails, captions, transcripts, or claims about recorded content beyond the owner's descriptions.

## Completion and launch handoff

The core narratives for the ten commercial/company projects above now have enough owner-supplied context for substantive portfolio copy. Some smaller projects do not need an artificial “tradeoff” or “lesson” section; omit unused fields cleanly.

### Required content changes

1. Replace the earlier case-study drafts with the supported copy above.
2. Retain Bitlux, Linxx, and SkillMatch as the main featured projects.
3. Mark Bitlux and Linxx as ongoing products per the owner's account, without changing résumé employment dates.
4. Keep Shopify feature work marked completed.
5. Correct Gaming Platform to full-stack ownership and Hestiya to frontend ownership with another developer's Python backend.
6. Update Keller Williams with CTO-shadowing context, 27+ repositories, up-to-22-language translation work, dependency-aware debugging/merges, and Jest/coverage work.
7. Update Onyx with the desktop-API integration, frontend Socket.io listener, no custom backend scope, and private-media/access status.
8. Remove Welcome to Food from the portfolio.
9. Add all five Loom links and the supplied product URLs with clear labels. Keep existing real screenshots.
10. Leave TypeSpark, GlobePick, and Blogsite details for the owner's later update.

### Remaining practical work

- Apply this file inside the actual portfolio source repository; this document update does not change the website.
- Check linked pages and Loom playback in the publication environment.
- Verify rendering of screenshot and external-video actions, especially the two distinct Linxx recordings.
- Add captions/transcripts to recordings where available.
- Keep unavailable Onyx media controls hidden.
- Retain the SJ Empowers initials fallback until an approved logo is supplied.
- Add certification credential URLs/dates or testimonials only when available; these are optional additions.
- Use the authoritative résumé/contact record for current availability and employment. Ongoing product status alone does not establish current employment.
- Review the actual deployment URL, canonical metadata, sitemap, robots behavior, and noindex state before launch.
- Run npm run content:checklist and the repository's appropriate build/content checks after implementing the changes. Those commands were not run during this document update.
- Update checklist logic or copy so valid private projects and optional missing metrics/media do not produce misleading public draft badges.

## Instructions for the portfolio coding agent

Use this revision as the latest owner-supplied content handoff. Apply the supported project narratives, contribution boundaries, outcomes, learning points, media mappings, and removal request. Preserve résumé dates, profile details, real screenshot galleries, and the main featured-project order. Clear draft flags for fields now answered, omit optional empty sections, and keep the three deferred tool/blog records pending. Keep editorial notes out of public copy. Do not invent numerical improvements, an automated E2E framework, a current employer, a new deployment date, an Onyx backend, Hestiya Python-backend ownership, or Gaming smart-contract authorship. Verify links/media and run the existing content/build checks. Keep preview/noindex until deployment and launch review are complete.
