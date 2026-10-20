import type { PortfolioProject } from "../types/content.ts";
// EDIT HERE: tool details. No live URLs are invented for unreleased/private tools.
export const tools: PortfolioProject[] = [
  {
    slug: "typespark",
    name: "TypeSpark",
    category: "Tools",
    subtitle: "Make it your type",
    summary:
      "Text styling, glitch experiments, and signatures—all in the browser.",
    illustration: "type",
    role: "Development",
    team: "Client tool",
    platform: "Web",
    status: "Preview",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    scope: ["Text generator", "Glitch Studio", "Signature export"],
    overview:
      "A browser-based text styling application with Unicode styles, a Glitch Studio, and a signature generator. Transformation and image exports happen locally in the browser.",
    contributions: [
      {
        title: "Text tools",
        description: "Built text transformation and copy interactions.",
      },
      {
        title: "Creative workflows",
        description:
          "Implemented glitch styling and signature-generation experiences.",
      },
      {
        title: "Local export",
        description:
          "Worked on browser-based export flows and responsive controls.",
      },
    ],
    problem: {
      text: "Focused creative tools should let people try ideas without making them learn a complicated editor. Replace this draft with the original client requirements and constraints.",
      demo: true,
    },
    solution: {
      text: "Keep input, preview, and actions close together; give each tool focused controls and understandable export feedback.",
      demo: true,
    },
    decisions: [
      {
        topic: "Local processing",
        choice: "Transform text and create exports in the browser",
        reason: "Support immediate feedback without an application backend.",
        demo: false,
      },
      {
        topic: "Controls",
        choice: "Use focused editors for different output types",
        reason: "Keep text, glitch, and signature interactions clear.",
        demo: true,
      },
    ],
    results: [
      {
        text: "A text generator, Glitch Studio, and signature generator with local copying and export features.",
      },
    ],
    lessons: {
      text: "Add a verified lesson about Unicode compatibility, font rendering, or export behavior.",
      demo: true,
    },
  },
  {
    slug: "globepick",
    name: "GlobePick",
    category: "Tools",
    subtitle: "A little curiosity. A whole world.",
    summary:
      "Discover places, practice capitals, and create geography learning activities.",
    illustration: "globe",
    role: "Development",
    team: "Client tool",
    platform: "Web",
    status: "Preview",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    scope: [
      "Country & city generators",
      "Capital quizzes",
      "Printable worksheets",
    ],
    overview:
      "A frontend geography learning application with country, capital, and city generators, filters, quizzes, browser-saved history and favorites, shareable results, and printable activities.",
    contributions: [
      {
        title: "Generator experiences",
        description: "Built filtering and repeat-prevention flows.",
      },
      {
        title: "Saved places",
        description:
          "Implemented local history, favorites, and shareable results.",
      },
      {
        title: "Learning activities",
        description:
          "Created quizzes and print-friendly worksheets with server-rendered introductions.",
      },
    ],
    problem: {
      text: "Geography tools need to balance playful exploration with predictable controls and useful learning material. Replace this draft with the actual product brief.",
      demo: true,
    },
    solution: {
      text: "Connect focused generator tools with optional learning activities, while keeping saved state local and printable content simple.",
      demo: true,
    },
    decisions: [
      {
        topic: "Data availability",
        choice: "Use bundled geography data",
        reason:
          "Keep core generation independent of a runtime geography service.",
        demo: false,
      },
      {
        topic: "Print output",
        choice: "Offer print-friendly worksheets",
        reason: "Make activities useful beyond the screen.",
        demo: false,
      },
    ],
    results: [
      {
        text: "Country, capital, and city discovery tools with quizzes, saved places, shareable results, and worksheets.",
      },
    ],
    lessons: {
      text: "Add a real example covering data quality, random selection, persistence, or print behavior.",
      demo: true,
    },
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
  },
];
