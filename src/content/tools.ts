import type { PortfolioProject } from "../types/content.ts";
// Verified build evidence; Blogsite remains deferred and live URLs remain owner-supplied.
export const tools: PortfolioProject[] = [
  {
    slug: "typespark",
    name: "TypeSpark",
    category: "Tools",
    subtitle: "Make it your type",
    summary:
      "A browser-based creative toolkit for styled text, glitch effects and signatures. I built the interfaces, text-processing logic and local PNG/GIF export workflows with Next.js and React.",
    illustration: "type",
    role: "Frontend Developer",
    team: "Client tool",
    platform: "Web",
    status: "Preview",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Canvas API",
      "Web Workers",
      "gifenc",
    ],
    scope: [
      "Unicode styles & selected-text editing",
      "Search, comparisons & copy fallback",
      "Seeded glitch presets & controls",
      "Animated GIF export in a Web Worker",
      "Typed/drawn signatures & PNG export",
      "Saved preferences & responsive controls",
    ],
    overview:
      "TypeSpark combines text styling, glitch effects and signature creation in one browser toolkit.\n\nProcessing runs locally, with no account or application backend. Shared controls, licensed local fonts and recoverable preferences support the three tools.",
    contributions: [
      {
        title: "Text styling & editing",
        description:
          "Built Unicode transformations, searchable styles, selected-text styling, comparison and copy flows, including manual-copy fallback and handling for unsupported characters.",
      },
      {
        title: "Glitch & signature exports",
        description:
          "Implemented stable seeded glitch output and local animated GIF export with a Web Worker. Built typed/drawn signatures with licensed local fonts, appearance controls and PNG export.",
      },
      {
        title: "Reusable UI & verification",
        description:
          "Created shared responsive controls, browser-saved preferences and server-rendered content. Used transformation, storage, font and browser checks to verify the implementation.",
      },
    ],
    problem: {
      text: "Bring focused text, glitch and signature workflows into a coherent browser interface, with local processing and understandable copy/export controls.",
    },
    solution: {
      text: "Combined shared React workspaces with pure text-processing functions, browser-side rendering and export utilities, while keeping explanatory content server-rendered.",
    },
    decisions: [
      {
        topic: "Local processing",
        choice: "Transform text and render exports in the browser",
        reason:
          "Keep user text local and avoid an application backend for these tools.",
      },
      {
        topic: "Animated export",
        choice: "Encode GIFs in a bundled Web Worker",
        reason:
          "Move encoding off the main thread and support progress, cancellation and cleanup.",
      },
      {
        topic: "Signature fonts",
        choice: "Bundle licensed fonts with coverage checks",
        reason:
          "Render signatures with actual fonts and retain the required license notices.",
      },
    ],
    results: [
      {
        text: "Delivered three connected creative tools with local processing, copying, PNG/GIF export and saved preferences.",
      },
    ],
    stackVerified: true,
    developmentWorkflow:
      "I used Codex-assisted planning, implementation and review to iterate faster, with automated tests and browser verification.",
    detailSummary:
      "Local text styling, glitch effects and signature tools for the browser.",
  },
  {
    slug: "globepick",
    name: "GlobePick",
    category: "Tools",
    subtitle: "A little curiosity. A whole world.",
    summary:
      "A geography toolkit for exploring countries, capitals and cities, practicing quizzes and creating printable activities. I built the generators, local saved state, sharing and worksheet flows with Next.js and React.",
    illustration: "globe",
    role: "Frontend Developer",
    team: "Client tool",
    platform: "Web",
    status: "Preview",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Web Crypto API",
      "localStorage",
    ],
    scope: [
      "Country, capital & city generators",
      "Filters, unique batches & no-repeat pools",
      "Local history, favorites & settings",
      "Validated shareable result replays",
      "Capital guess/reveal quizzes",
      "Country worksheets & starter packs",
    ],
    overview:
      "GlobePick helps users discover countries, capitals and cities, save and share results, and create learning activities.\n\nThe frontend uses bundled geography data and validated local state, without accounts or a runtime geography service. Explanatory content is server-rendered, and the homepage loads city records on demand.",
    contributions: [
      {
        title: "Generators & selection logic",
        description:
          "Built country, capital and city generators with inclusion/exclusion filters, unique batches, capacity handling and separate no-repeat pools. Connected the homepage spinner to the existing generator state.",
      },
      {
        title: "Persistence & sharing",
        description:
          "Implemented browser-saved settings, history and favorites, with validation and recovery for storage failures. Added validated share links that replay results without consuming the recipient’s selection pool.",
      },
      {
        title: "Learning, content & quality",
        description:
          "Created capital quizzes, country-project assignments, printable worksheets and starter packs. Added server-rendered content, source/licensing information, data validators and tests for selection, persistence and sharing.",
      },
    ],
    problem: {
      text: "Connect random place discovery with useful filters, saved results and learning activities without requiring accounts or a live geography service.",
    },
    solution: {
      text: "Used bundled data and a shared selection engine, validated local persistence and replay links, and print layouts built from the same assignment data shown in the preview.",
    },
    decisions: [
      {
        topic: "Data availability",
        choice:
          "Bundle geography data and load homepage city records on demand",
        reason:
          "Avoid a runtime geography service while keeping the larger city dataset out of the initial homepage tool.",
      },
      {
        topic: "Worksheet output",
        choice: "Use the same assignment objects for preview and print",
        reason:
          "Keep printable activities aligned with the selected countries and questions.",
      },
    ],
    results: [
      {
        text: "Delivered connected geography discovery, saved places, sharing, quizzes and printable learning activities, with checks for data integrity and application behavior.",
      },
    ],
    stackVerified: true,
    developmentWorkflow:
      "I used Codex-assisted planning, implementation and review to iterate faster, with automated tests and browser verification.",
    detailSummary:
      "Geography discovery, quizzes and printable country activities.",
  },
  {
    slug: "blogsite",
    name: "Blogsite",
    category: "Tools",
    subtitle: "Stories worth reading",
    summary:
      "A considered reading and browsing experience across a multi-page blog.",
    illustration: "blog",
    role: "Frontend development",
    team: "Client tool",
    platform: "Web",
    status: "Preview",
    stack: ["Responsive UI", "Content layouts", "Design systems"],
    scope: [
      "Article reading layouts",
      "Listing & category pages",
      "Search-page layouts",
      "Author-page layouts",
      "Responsive typography & spacing",
    ],
    overview:
      "A blog frontend with article, listing, category, search, and author-page layouts. The related project notes focus on consistent containers, typography, spacing, and themes.",
    contributions: [
      {
        title: "Browsing layouts",
        description:
          "Created listing, category, search and author-page layouts for browsing content.",
      },
      {
        title: "Article reading",
        description:
          "Built readable article layouts with responsive widths and typography.",
      },
      {
        title: "Shared presentation",
        description:
          "Applied consistent containers, spacing, themes and color rules across the pages.",
      },
    ],
    problem: {
      text: "A publishing site can feel inconsistent when pages use different widths and spacing. This draft reflects the layout discussion; replace it with the actual project brief.",
      demo: true,
    },
    solution: {
      text: "Use one shared design language while giving articles a narrower reading column than browsing pages.",
      demo: true,
    },
    decisions: [
      {
        topic: "Reading width",
        choice: "Separate article and listing composition",
        reason:
          "Support comfortable reading without limiting browsing layouts.",
        demo: true,
      },
    ],
    results: [
      {
        text: "Add the confirmed shipped pages, stack, and outcomes. The framework and public URL remain to be verified.",
        demo: true,
      },
    ],
    lessons: {
      text: "Add an actual lesson about content hierarchy, responsive layouts, or maintaining consistency across page types.",
      demo: true,
    },
    stackVerified: false,
  },
];
