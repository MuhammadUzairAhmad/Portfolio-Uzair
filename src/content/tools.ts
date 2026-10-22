import type { PortfolioProject } from "../types/content.ts";
// Verified build stories with owner-supplied live links and real UI captures.
export const tools: PortfolioProject[] = [
  {
    slug: "textgenerators",
    name: "TextGenerators.net",
    category: "Tools",
    subtitle: "Make it your type",
    summary:
      "A browser-based creative toolkit for styled text, glitch effects and signatures. I built the interfaces, text-processing logic and local PNG/GIF export workflows with Next.js and React.",
    illustration: "type",
    role: "Frontend Developer",
    team: "Client tool",
    platform: "Web",
    status: "Public link",
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
      "TextGenerators.net combines text styling, glitch effects and signature creation in one browser toolkit.\n\nProcessing runs locally, with no account or application backend. Shared controls, licensed local fonts and recoverable preferences support the three tools.",
    ownership: {
      label: "Client tool · Frontend implementation",
      summary:
        "Built the connected browser tool experience: interfaces, transformation logic, local exports and verification. Processing runs in the browser, so this project did not require an application backend.",
    },
    productUrl: "https://textgenerators.net/",
    image: {
      src: "/images/tools/textgenerators-live.webp",
      width: 1280,
      height: 720,
    },
    media: [
      {
        kind: "image",
        src: "/images/tools/textgenerators-live.webp",
        width: 1280,
        height: 720,
        alt: "TextGenerators.net public homepage interface",
        caption: "Public homepage captured from the live site, October 2026.",
      },
    ],
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
        topic: "Keep creative work in the browser",
        context:
          "The tools transform user text and generate downloadable images and animations.",
        choice:
          "Process text, signatures and exports locally without an application backend.",
        reason:
          "These workflows can run without an account or sending the entered text to an application server.",
      },
      {
        topic: "Keep GIF export off the main interface thread",
        context:
          "Animated exports require encoding work while the user is working with the tool.",
        choice:
          "Encode GIFs in a Web Worker with progress, cancellation and cleanup.",
        reason:
          "Separate export work from the interface and let the user cancel an export rather than wait for it to finish.",
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
    status: "Public link",
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
    ownership: {
      label: "Client tool · Frontend implementation",
      summary:
        "Built the geography generators, local saved state, sharing and learning workflows. The tool uses bundled data and browser storage without an application backend.",
    },
    productUrl: "https://globe-pick-countries-tool.vercel.app/",
    image: {
      src: "/images/tools/globepick-live.webp",
      width: 1280,
      height: 720,
    },
    media: [
      {
        kind: "image",
        src: "/images/tools/globepick-live.webp",
        width: 1280,
        height: 720,
        alt: "GlobePick public homepage interface",
        caption: "Public homepage captured from the live site, October 2026.",
      },
    ],
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
        topic: "Avoid a runtime geography dependency",
        context:
          "The generators need country and city data; the city dataset is larger than the homepage needs initially.",
        choice:
          "Bundle geography data and load homepage city records on demand.",
        reason:
          "Generate results without a runtime geography service and keep the larger city dataset out of the initial homepage tool.",
      },
      {
        topic: "Keep worksheet previews and printouts aligned",
        context:
          "Learners need the printed activity to match the countries and questions they selected.",
        choice:
          "Build the on-screen preview and printed worksheet from the same assignment objects.",
        reason:
          "Use one source for both outputs so the print layout reflects the selected activity.",
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
    slug: "the-daily-mind",
    name: "The Daily Mind",
    illustration: "blog",
    category: "Tools",
    subtitle: "Personal full-stack blog & publishing platform",
    summary:
      "My personal publishing platform with a Next.js reading experience and a NestJS/MongoDB backend for content management, authentication, permissions and publishing workflows.",
    detailSummary:
      "A public reading experience backed by an administrative workspace for creating, organizing and publishing content.",
    role: "Full-Stack Developer",
    developmentScope: "Full-stack",
    team: "Personal project",
    platform: "Web",
    status: "Public link",
    productUrl: "https://the-daily-mind.vercel.app/",
    productLinkLabel: "Open project preview",
    image: {
      src: "/images/projects/the-daily-mind-live.webp",
      width: 1280,
      height: 720,
    },
    media: [
      {
        kind: "image",
        src: "/images/projects/the-daily-mind-live.webp",
        width: 1280,
        height: 720,
        alt: "The Daily Mind public homepage with featured articles and categories",
        caption:
          "The Daily Mind public homepage, captured from the live preview in October 2026.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "TanStack Query",
      "Tiptap",
      "Cloudinary",
      "JWT",
    ],
    scope: [
      "Public reading, categories & search",
      "Rich-text content management",
      "Draft, published & scheduled articles",
      "Authentication & permission-controlled administration",
      "Cloudinary image uploads",
      "SEO metadata & content settings",
    ],
    overview:
      "The Daily Mind is a personal blog and publishing platform. Readers can browse articles, explore categories and search for content, while an administrative workspace supports writing, organizing and publishing posts.",
    context:
      "The Daily Mind is my personal blog and publishing platform. It combines a public reading experience with an administrative workspace for creating, organizing and publishing content.",
    ownership: {
      label: "Personal project · Full-stack implementation",
      summary:
        "I built the frontend and backend, connecting the public reading experience with content management, authentication, permissions and publishing workflows. This project demonstrates my work across the interface, APIs and MongoDB data models.",
    },
    contributions: [
      {
        title: "Reading & discovery",
        description:
          "Built responsive article pages, category browsing and search, connecting the public Next.js interface to backend content APIs.",
      },
      {
        title: "Editor & publishing",
        description:
          "Implemented the Tiptap editing experience and backend workflows for drafts, published and scheduled articles, with category organization and SEO metadata.",
      },
      {
        title: "Authentication & permissions",
        description:
          "Built login, session-refresh and permission-controlled administration, including separate content creation, editing and publishing permissions.",
      },
      {
        title: "Media & application data",
        description:
          "Connected Cloudinary image uploads and MongoDB/Mongoose data models for articles, categories, users and application settings.",
      },
    ],
    problem: {
      text: "Connect a public blog with an administration workflow that can manage articles, publishing status, access permissions and media from one application.",
    },
    solution: {
      text: "Built a Next.js frontend and a NestJS/MongoDB API, with shared publishing data, permission-controlled administration, rich-text content and image-upload workflows.",
    },
    decisions: [
      {
        topic: "Separate content preparation from public reading",
        context:
          "Editors need to prepare articles before readers can see them.",
        choice:
          "Represent draft, scheduled and published states separately, and filter public content accordingly.",
        reason:
          "Support editorial preparation and scheduled publication while keeping draft content out of public article queries.",
      },
      {
        topic: "Control what each administrator can change",
        context:
          "Reading, editing and publishing content are different administrative responsibilities.",
        choice:
          "Check permissions for each admin API action alongside authentication.",
        reason:
          "Apply access rules to creating, updating, publishing and deleting content rather than treating every signed-in administrator as having the same permissions.",
      },
    ],
    results: [
      {
        text: "Built a connected reading and content-management application, with frontend, backend and publishing capabilities available to demonstrate through the project preview.",
      },
    ],
  },
];
