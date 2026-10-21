# Verified tool stories — 22 October 2026

Based on the build chats and implementation references recorded in CONTENT-SOURCES.md. Learning sections and public URLs are optional; no launch or quantified speed claim is made.

## TypeSpark

**Role:** Frontend Developer

TypeSpark brings text styling, glitch effects and signature creation into a browser-based toolkit. Users can transform and copy text, adjust glitch presets, or create a typed or drawn signature and export the result. Text processing and image generation run locally, without an account, database or application backend.

I built the responsive tool workspaces, shared controls and processing/export flows using Next.js, React, TypeScript and Tailwind CSS. The work also covered licensed local fonts, recoverable browser preferences, server-rendered explanatory content and automated checks.

### Contributions

- **Text styling & editing:** Built Unicode transformations, searchable styles, selected-text styling, comparison and copy flows, including manual-copy fallback and handling for unsupported characters.
- **Glitch & signature exports:** Implemented stable seeded glitch output and local animated GIF export with a Web Worker. Built typed/drawn signatures with licensed local fonts, appearance controls and PNG export.
- **Reusable UI & verification:** Created shared responsive controls, browser-saved preferences and server-rendered content. Used transformation, storage, font and browser checks to verify the implementation.

### Stack

Next.js · React · TypeScript · Tailwind CSS · Canvas API · Web Workers · gifenc

### Decisions

- **Local processing:** Transform text and render exports in the browser. Keep user text local and avoid an application backend for these tools.
- **Animated export:** Encode GIFs in a bundled Web Worker. Move encoding off the main thread and support progress, cancellation and cleanup.
- **Signature fonts:** Bundle licensed fonts with coverage checks. Render signatures with actual fonts and retain the required license notices.

### Development workflow

I used Codex-assisted planning, implementation and review to speed up development and iteration. I reviewed the changes and checked the resulting behavior with automated tests and browser verification.

### Delivered capability

Implemented three connected creative tools with copy interactions, animated GIF and PNG export, saved preferences and responsive layouts. Automated and browser checks are documented in the project; public launch and deployed performance are separate checks.

## GlobePick

**Role:** Frontend Developer

GlobePick connects geography discovery with learning activities. Users can generate countries, capitals or cities, narrow the pool with filters, save places, share results and practice capital quizzes. Country-project assignments can also become printable A4 or US Letter worksheets.

I built the frontend with Next.js, React, TypeScript and Tailwind CSS. The implementation uses bundled geography data, validated browser storage and shareable replay links, with no account system, custom backend or runtime geography service. Server-rendered introductions and content pages support discovery, while city data loads on demand in the homepage spinner.

### Contributions

- **Generators & selection logic:** Built country, capital and city generators with inclusion/exclusion filters, unique batches, capacity handling and separate no-repeat pools. Connected the homepage spinner to the existing generator state.
- **Persistence & sharing:** Implemented browser-saved settings, history and favorites, with validation and recovery for storage failures. Added validated share links that replay results without consuming the recipient’s selection pool.
- **Learning, content & quality:** Created capital quizzes, country-project assignments, printable worksheets and starter packs. Added server-rendered content, source/licensing information, data validators and tests for selection, persistence and sharing.

### Stack

Next.js · React · TypeScript · Tailwind CSS · Web Crypto API · localStorage

### Decisions

- **Data availability:** Bundle geography data and load homepage city records on demand. Avoid a runtime geography service while keeping the larger city dataset out of the initial homepage tool.
- **Selection & persistence:** Separate mode-specific pools and validate browser state. Keep country, capital and city behavior independent and recover from invalid or unavailable saved data.
- **Worksheet output:** Use the same assignment objects for preview and print. Keep printable activities aligned with the selected countries and questions.

### Development workflow

I used Codex-assisted planning, implementation and review to speed up development and iteration. I reviewed the changes and checked the resulting behavior with automated tests and browser verification.

### Delivered capability

Delivered an integrated geography toolkit spanning discovery, saved places, shareable results and printable learning activities. Added checks for data integrity, selection, persistence and sharing, alongside production-route and browser verification.
