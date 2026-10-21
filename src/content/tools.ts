import type { PortfolioProject } from "../types/content.ts";
// Verified against build chats, READMEs and implementation; live URLs remain owner-supplied.
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
      "Unicode text styles & copy tools",
      "Glitch presets & animated GIF export",
      "Typed/drawn signatures & PNG export",
      "Browser-saved preferences",
    ],
    overview:
      "TypeSpark brings text styling, glitch effects and signature creation into a browser-based toolkit. Users can transform and copy text, adjust glitch presets, or create a typed or drawn signature and export the result. Text processing and image generation run locally, without an account, database or application backend.\n\nI built the responsive tool workspaces, shared controls and processing/export flows using Next.js, React, TypeScript and Tailwind CSS. The work also covered licensed local fonts, recoverable browser preferences, server-rendered explanatory content and automated checks.",
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
        text: "Implemented three connected creative tools with copy interactions, animated GIF and PNG export, saved preferences and responsive layouts. Automated and browser checks are documented in the project; public launch and deployed performance are separate checks.",
      },
    ],
    stackVerified: true,
    developmentWorkflow:
      "I used Codex-assisted planning, implementation and review to speed up development and iteration. I reviewed the changes and checked the resulting behavior with automated tests and browser verification.",
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
      "Local history, favorites & shareable results",
      "Capital quizzes & printable worksheets",
    ],
    overview:
      "GlobePick connects geography discovery with learning activities. Users can generate countries, capitals or cities, narrow the pool with filters, save places, share results and practice capital quizzes. Country-project assignments can also become printable A4 or US Letter worksheets.\n\nI built the frontend with Next.js, React, TypeScript and Tailwind CSS. The implementation uses bundled geography data, validated browser storage and shareable replay links, with no account system, custom backend or runtime geography service. Server-rendered introductions and content pages support discovery, while city data loads on demand in the homepage spinner.",
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
        topic: "Selection & persistence",
        choice: "Separate mode-specific pools and validate browser state",
        reason:
          "Keep country, capital and city behavior independent and recover from invalid or unavailable saved data.",
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
        text: "Delivered an integrated geography toolkit spanning discovery, saved places, shareable results and printable learning activities. Added checks for data integrity, selection, persistence and sharing, alongside production-route and browser verification.",
      },
    ],
    stackVerified: true,
    developmentWorkflow:
      "I used Codex-assisted planning, implementation and review to speed up development and iteration. I reviewed the changes and checked the resulting behavior with automated tests and browser verification.",
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
    scope: ["Articles & categories", "Search layouts", "Author pages"],
    overview:
      "A blog frontend with article, listing, category, search, and author-page layouts. The related project notes focus on consistent containers, typography, spacing, and themes.",
    contributions: [
      {
        title: "Content layouts",
        description: "Created multiple page types for browsing and reading.",
      },
      {
        title: "Visual consistency",
        description:
          "Worked on shared layout, spacing, typography, and color rules.",
      },
      {
        title: "Responsive reading",
        description:
          "Adapted readable article widths and broader listing layouts.",
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
