# Current tool stories — 22 October 2026

TextGenerators.net and GlobePick are verified client-tool build stories with owner-supplied live URLs and original illustrated covers. The Daily Mind is a personal full-stack publishing project in this collection.

## TextGenerators.net

**Introduction:** Local text styling, glitch effects and signature tools for the browser.

**Role:** Frontend Developer

### Overview

TextGenerators.net combines text styling, glitch effects and signature creation in one browser toolkit.

Processing runs locally, with no account or application backend. Shared controls, licensed local fonts and recoverable preferences support the three tools.

### My contribution

**Client tool · Frontend implementation**

Built the connected browser tool experience: interfaces, transformation logic, local exports and verification. Processing runs in the browser, so this project did not require an application backend.

- **Text styling & editing:** Built Unicode transformations, searchable styles, selected-text styling, comparison and copy flows, including manual-copy fallback and handling for unsupported characters.
- **Glitch & signature exports:** Implemented stable seeded glitch output and local animated GIF export with a Web Worker. Built typed/drawn signatures with licensed local fonts, appearance controls and PNG export.
- **Reusable UI & verification:** Created shared responsive controls, browser-saved preferences and server-rendered content. Used transformation, storage, font and browser checks to verify the implementation.

### Tech stack

Next.js · React · TypeScript · Tailwind CSS · Canvas API · Web Workers · gifenc

**Development workflow:** I used Codex-assisted planning, implementation and review to iterate faster, with automated tests and browser verification.

### Key decisions

- **Keep creative work in the browser:** The tools transform user text and generate downloadable images and animations. Process text, signatures and exports locally without an application backend. These workflows can run without an account or sending the entered text to an application server.
- **Keep GIF export off the main interface thread:** Animated exports require encoding work while the user is working with the tool. Encode GIFs in a Web Worker with progress, cancellation and cleanup. Separate export work from the interface and let the user cancel an export rather than wait for it to finish.

### Outcome

Delivered three connected creative tools with local processing, copying, PNG/GIF export and saved preferences.

## GlobePick

**Introduction:** Geography discovery, quizzes and printable country activities.

**Role:** Frontend Developer

### Overview

GlobePick helps users discover countries, capitals and cities, save and share results, and create learning activities.

The frontend uses bundled geography data and validated local state, without accounts or a runtime geography service. Explanatory content is server-rendered, and the homepage loads city records on demand.

### My contribution

**Client tool · Frontend implementation**

Built the geography generators, local saved state, sharing and learning workflows. The tool uses bundled data and browser storage without an application backend.

- **Generators & selection logic:** Built country, capital and city generators with inclusion/exclusion filters, unique batches, capacity handling and separate no-repeat pools. Connected the homepage spinner to the existing generator state.
- **Persistence & sharing:** Implemented browser-saved settings, history and favorites, with validation and recovery for storage failures. Added validated share links that replay results without consuming the recipient’s selection pool.
- **Learning, content & quality:** Created capital quizzes, country-project assignments, printable worksheets and starter packs. Added server-rendered content, source/licensing information, data validators and tests for selection, persistence and sharing.

### Tech stack

Next.js · React · TypeScript · Tailwind CSS · Web Crypto API · localStorage

**Development workflow:** I used Codex-assisted planning, implementation and review to iterate faster, with automated tests and browser verification.

### Key decisions

- **Avoid a runtime geography dependency:** The generators need country and city data; the city dataset is larger than the homepage needs initially. Bundle geography data and load homepage city records on demand. Generate results without a runtime geography service and keep the larger city dataset out of the initial homepage tool.
- **Keep worksheet previews and printouts aligned:** Learners need the printed activity to match the countries and questions they selected. Build the on-screen preview and printed worksheet from the same assignment objects. Use one source for both outputs so the print layout reflects the selected activity.

### Outcome

Delivered connected geography discovery, saved places, sharing, quizzes and printable learning activities, with checks for data integrity and application behavior.

## The Daily Mind

**Introduction:** A public reading experience backed by an administrative workspace for creating, organizing and publishing content.

**Role:** Full-Stack Developer

### Overview

The Daily Mind is a personal blog and publishing platform. Readers can browse articles, explore categories and search for content, while an administrative workspace supports writing, organizing and publishing posts.

### My contribution

**Personal project · Full-stack implementation**

I built the frontend and backend, connecting the public reading experience with content management, authentication, permissions and publishing workflows. This project demonstrates my work across the interface, APIs and MongoDB data models.

- **Reading & discovery:** Built responsive article pages, category browsing and search, connecting the public Next.js interface to backend content APIs.
- **Editor & publishing:** Implemented the Tiptap editing experience and backend workflows for drafts, published and scheduled articles, with category organization and SEO metadata.
- **Authentication & permissions:** Built login, session-refresh and permission-controlled administration, including separate content creation, editing and publishing permissions.
- **Media & application data:** Connected Cloudinary image uploads and MongoDB/Mongoose data models for articles, categories, users and application settings.

### Tech stack

Next.js · React · TypeScript · NestJS · MongoDB · Mongoose · Tailwind CSS · TanStack Query · Tiptap · Cloudinary · JWT

### Key decisions

- **Separate content preparation from public reading:** Editors need to prepare articles before readers can see them. Represent draft, scheduled and published states separately, and filter public content accordingly. Support editorial preparation and scheduled publication while keeping draft content out of public article queries.
- **Control what each administrator can change:** Reading, editing and publishing content are different administrative responsibilities. Check permissions for each admin API action alongside authentication. Apply access rules to creating, updating, publishing and deleting content rather than treating every signed-in administrator as having the same permissions.

### Outcome

Built a connected reading and content-management application, with frontend, backend and publishing capabilities available to demonstrate through the project preview.
