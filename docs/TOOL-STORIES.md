# Current tool stories — 22 October 2026

TextGenerators.net and GlobePick are verified client-tool build stories with owner-supplied live URLs and real public UI screenshots. The Daily Mind is now a personal full-stack project in PROJECT-COPY.md.

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

### Optional technical decisions

- **Local processing:** Transform text and render exports in the browser. Keep user text local and avoid an application backend for these tools.
- **Animated export:** Encode GIFs in a bundled Web Worker. Move encoding off the main thread and support progress, cancellation and cleanup.
- **Signature fonts:** Bundle licensed fonts with coverage checks. Render signatures with actual fonts and retain the required license notices.

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

### Optional technical decisions

- **Data availability:** Bundle geography data and load homepage city records on demand. Avoid a runtime geography service while keeping the larger city dataset out of the initial homepage tool.
- **Worksheet output:** Use the same assignment objects for preview and print. Keep printable activities aligned with the selected countries and questions.

### Outcome

Delivered connected geography discovery, saved places, sharing, quizzes and printable learning activities, with checks for data integrity and application behavior.
