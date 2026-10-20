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
          "Built the iOS and Android app from scratch with React Native, Expo, Redux Toolkit, and multilingual support.",
        project: "get-foodies",
      },
      {
        title: "Linxx",
        description:
          "Integrated APIs, updated interfaces, fixed bugs, and worked on mobile deployment through Capacitor.",
        project: "linxx",
      },
      {
        title: "Bitlux",
        description:
          "Built components, fixed bugs, integrated APIs, and generated dynamic ticket-query PDFs with jsPDF.",
        project: "bitlux",
      },
      {
        title: "Onyx",
        description:
          "Brought the desktop printing workflow to the web with real-time job tracking and provided API integrations.",
        project: "onyx",
      },
      {
        title: "Shopify application",
        description:
          "Contributed end-to-end features and system integration using React and Ruby on Rails, while learning Rails.",
        project: "shopify-app",
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
          "Built the full marketplace frontend and integrated backend APIs, wallet connectivity, and smart contracts for carbon credit trading.",
        project: "hestiya",
      },
      {
        title: "Gaming Platform",
        description:
          "Built the application UI, including the spin-wheel game, referral system, and wallet-based purchases.",
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
        title: "Real estate platform",
        description:
          "Contributed to a US real-estate application built around a microfrontend architecture.",
        project: "keller-williams",
      },
      {
        title: "Product improvements",
        description:
          "Worked on i18next integration, internationalization, bug fixes, and frontend improvements within the team.",
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
          "Created responsive interfaces and contributed to candidate, recruiter, and administrative dashboards.",
        project: "skillmatch",
      },
      {
        title: "Authentication & APIs",
        description:
          "Implemented authentication, integrated backend APIs, and contributed to API creation.",
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
