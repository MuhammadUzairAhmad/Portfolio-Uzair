export type ExperienceEntry = {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  location: string;
  logo?: {
    src: string;
    width: number;
    height: number;
    tone?: "light" | "dark";
  };
  initials: string;
  highlights: { title: string; description: string; project?: string }[];
  skills: string[];
  datesDemo: boolean;
};
// EDIT HERE: résumé dates use YYYY-MM; highlights, skill badges, and original logos are shared by Home and About.
export const experience: ExperienceEntry[] = [
  {
    company: "Freelance",
    role: "Software Engineer",
    startDate: "2026-07",
    endDate: "2026-10",
    location: "Pakistan",
    initials: "FL",
    highlights: [
      {
        title: "FieldBlink · 15 Aug–10 Oct 2026",
        description:
          "Took end-to-end ownership of primary-order, secondary-order and stock-management workflows, from researching requirements and mapping business processes to implementing React interfaces and Supabase data integration. Also implemented shop onboarding and verification workflows and reusable operational data tables.",
        project: "fieldblink",
      },
      {
        title: "Shopify GP-Lite / Barcode Buddy · 1 Jul–10 Aug 2026",
        description:
          "Delivered React and Ruby on Rails features for product labels, barcode/PDF generation and Shopify integrations. Added a standalone browser camera-scanning flow alongside the embedded app to address iframe permission restrictions.",
        project: "shopify-app",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Supabase",
      "TanStack Table",
      "TanStack Query",
      "Ruby on Rails",
      "Shopify GraphQL API",
    ],
    datesDemo: false,
  },
  {
    company: "Sofrix",
    role: "Software Engineer",
    startDate: "2025-07",
    endDate: "2026-06",
    location: "Faisalabad, Pakistan",
    initials: "S",
    highlights: [
      {
        title: "Get Foodies",
        description:
          "Built React Native/Expo mobile interfaces plus web UI and backend features for product listings, dynamic banners, discounts, account and theme settings.",
        project: "get-foodies",
      },
      {
        title: "Linxx",
        description:
          "Built and improved frontend and backend/API features, fixed workflow bugs, and supported mobile deployment through Capacitor.",
        project: "linxx",
      },
      {
        title: "Bitlux",
        description:
          "Worked across frontend and backend/API features, resolved rendering issues, added TanStack Query caching, and generated ticket PDFs with jsPDF.",
        project: "bitlux",
      },
      {
        title: "Onyx",
        description:
          "Integrated existing desktop printing APIs and a frontend Socket.io listener for job and printer status.",
        project: "onyx",
      },
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "React Native",
      "Expo",
      "Capacitor",
      "API integrations",
      "jsPDF",
    ],
    datesDemo: false,
    logo: {
      src: "/images/companies/sofrix.webp",
      width: 512,
      height: 138,
    },
  },
  {
    company: "Weiblocks",
    role: "Software Engineer",
    startDate: "2025-01",
    endDate: "2025-06",
    location: "Lahore, Pakistan",
    initials: "W",
    highlights: [
      {
        title: "Hestiya",
        description:
          "Built the marketplace frontend from Figma, integrated another developer’s Python APIs and Clerk authentication, and connected wallets and smart contracts.",
        project: "hestiya",
      },
      {
        title: "Gaming Platform",
        description:
          "Built frontend and backend functionality with authentication, wallets, spin-wheel gameplay, referrals, credits, and user/admin workflows.",
        project: "gaming-platform",
      },
    ],
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Wagmi",
      "Web3",
    ],
    datesDemo: false,
    logo: {
      src: "/images/companies/weiblocks.webp",
      width: 246,
      height: 256,
    },
  },
  {
    company: "Strategist HUB",
    role: "Junior Software Engineer",
    startDate: "2024-03",
    endDate: "2024-12",
    location: "Lahore, Pakistan",
    initials: "SH",
    highlights: [
      {
        title: "Keller Williams",
        description:
          "Resolved tickets while shadowing the CTO across 27+ interconnected React/Next.js repositories and shared packages.",
        project: "keller-williams",
      },
      {
        title: "Product improvements",
        description:
          "Added i18next keys for up to 22 languages, incorporated generated translation PRs, retested repository dependencies, and maintained Jest/CI coverage checks.",
      },
    ],
    skills: [
      "Microfrontends",
      "i18next",
      "Internationalization",
      "Frontend maintenance",
    ],
    datesDemo: false,
    logo: {
      src: "/images/companies/strategist-hub.webp",
      width: 512,
      height: 95,
      tone: "dark",
    },
  },
  {
    company: "Netixsol",
    role: "MERN Stack Developer",
    startDate: "2023-06",
    endDate: "2024-02",
    location: "Faisalabad, Pakistan",
    initials: "N",
    highlights: [
      {
        title: "SkillMatch",
        description:
          "Contributed from day one, building responsive candidate, recruiter and admin interfaces with Next.js.",
        project: "skillmatch",
      },
      {
        title: "Authentication & APIs",
        description:
          "Implemented authentication and API integrations, and created NestJS APIs backed by MongoDB under senior developer guidance.",
      },
    ],
    skills: [
      "Next.js",
      "NestJS",
      "MongoDB",
      "TanStack Query",
      "Swagger",
      "Authentication",
    ],
    datesDemo: false,
    logo: {
      src: "/images/companies/netixsol.webp",
      width: 512,
      height: 168,
    },
  },
  {
    company: "SJ Empowers",
    role: "Frontend Developer Intern",
    startDate: "2022-12",
    endDate: "2023-05",
    location: "Faisalabad, Pakistan",
    initials: "SJ",
    highlights: [
      {
        title: "Responsive pages",
        description:
          "Developed mobile-friendly pages using HTML5, CSS3, Bootstrap, and JavaScript.",
      },
      {
        title: "Reusable interfaces",
        description:
          "Built reusable UI components and added dynamic interactions across web pages.",
      },
    ],
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Responsive UI"],
    datesDemo: false,
  },
];
