export type ExperienceEntry = {
  company: string;
  role: string;
  focus?: string;
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
    company: "Sofrix",
    focus: "Full-stack contributions",
    role: "Software Engineer",
    startDate: "2025-07",
    endDate: "2026-06",
    location: "Faisalabad, Pakistan",
    initials: "S",
    highlights: [
      {
        title: "Get Foodies",
        description:
          "Built the iOS and Android app with React Native and Expo, contributed backend/API work, and connected multilingual mobile flows.",
        project: "get-foodies",
      },
      {
        title: "Linxx",
        description:
          "Contributed frontend and backend/API work, integrated flows, fixed bugs, and supported mobile deployment through Capacitor.",
        project: "linxx",
      },
      {
        title: "Bitlux",
        description:
          "Contributed frontend and backend/API work, investigated rendering issues, added TanStack Query caching, and integrated ticket PDF generation.",
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
    focus: "Full-stack contributions",
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
    focus: "Full-stack contributions",
    role: "MERN Stack Developer",
    startDate: "2023-06",
    endDate: "2024-02",
    location: "Faisalabad, Pakistan",
    initials: "N",
    highlights: [
      {
        title: "SkillMatch",
        description:
          "Contributed to SkillMatch from day one, building responsive candidate, recruiter and admin interfaces alongside backend API work under senior guidance.",
        project: "skillmatch",
      },
      {
        title: "Authentication & APIs",
        description:
          "Worked on authentication and API integrations, and created backend APIs under senior developer guidance.",
      },
      {
        title: "Full-stack delivery",
        description:
          "Collaborated on frontend and backend features using Next.js, NestJS, and MongoDB.",
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
    focus: "Full-stack contributions",
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
