import type { PortfolioProject } from "../types/content.ts";
// EDIT HERE: project facts and case studies. demo:true marks illustrative copy.
export const projects: PortfolioProject[] = [
  {
    slug: "bitlux",
    name: "Bitlux",
    category: "Web platforms",
    subtitle: "Private jet booking & operations",
    summary:
      "Connecting booking workflows, operational tools, and the details behind private aviation.",
    image: {
      src: "/images/projects/bitlux-screen.webp",
      width: 1169,
      height: 832,
    },
    featured: true,
    role: "Full-stack contributor",
    team: "Sofrix",
    platform: "Web",
    status: "Private project",
    stack: ["Next.js", "TypeScript", "Salesforce", "jsPDF"],
    scope: ["Booking workflows", "Salesforce integration", "Dynamic documents"],
    overview:
      "An enterprise application for private jet operations, with booking lifecycle management, administrative dashboards, Salesforce integration, and PDF generation.",
    contributions: [
      {
        title: "Booking workflows",
        description:
          "Contributed to interfaces and full-stack features supporting the booking lifecycle.",
      },
      {
        title: "Salesforce integration",
        description: "Worked on connecting product workflows with Salesforce.",
      },
      {
        title: "Document generation",
        description:
          "Implemented dynamic PDF generation for travel-related documents.",
      },
    ],
    problem: {
      text: "Booking operations involve requests, customer details, documents, and changing trip information. This draft frames the challenge as keeping those pieces connected without making the operational interface harder to use.",
      demo: true,
    },
    solution: {
      text: "Organize the booking journey into clear stages, keep important trip context visible, and connect operational actions to the relevant integrations and documents. Replace this draft with your exact implementation approach.",
      demo: true,
    },
    decisions: [
      {
        topic: "Workflow boundaries",
        choice: "Separate booking stages into focused views",
        reason:
          "Make the current state and available next actions easier to understand.",
        demo: true,
      },
      {
        topic: "Document flow",
        choice: "Use shared trip data when generating documents",
        reason:
          "Reduce repeated data entry and make document output easier to maintain.",
        demo: true,
      },
    ],
    results: [
      {
        text: "A booking and operations interface with connected Salesforce and document-generation capabilities.",
        demo: false,
      },
      {
        text: "Add a verified example of a workflow improvement, release outcome, or feedback from the team.",
        demo: true,
      },
    ],
    lessons: {
      text: "In operational products, clear states and dependable integrations can matter as much as individual screens. Add one real tradeoff and what you would change next time.",
      demo: true,
    },
  },
  {
    slug: "linxx",
    name: "Linxx",
    category: "Web & mobile",
    subtitle: "An ambassador marketplace, across screens",
    summary:
      "A connected marketplace experience for brands and ambassadors on web and mobile.",
    image: {
      src: "/images/projects/linxx-screen.webp",
      width: 1440,
      height: 798,
    },
    featured: true,
    role: "Full-stack contributor",
    team: "Sofrix",
    platform: "Web + mobile",
    status: "Private project",
    stack: ["Next.js", "TypeScript", "Capacitor", "Plaid"],
    scope: [
      "Job discovery",
      "Profiles & payments",
      "Cross-platform interfaces",
    ],
    overview:
      "A cross-platform ambassador job marketplace with listings, GPS-based discovery, profiles, payment-related flows, and notifications.",
    contributions: [
      {
        title: "Product interfaces",
        description:
          "Contributed to the marketplace's frontend and supporting backend features.",
      },
      {
        title: "Web & mobile",
        description: "Worked across the Next.js and Capacitor experience.",
      },
      {
        title: "Connected workflows",
        description:
          "Contributed to discovery, profile, and payment-related product flows.",
      },
    ],
    problem: {
      text: "A marketplace has to make sense to people on both sides, and across different screen sizes. This draft focuses on helping ambassadors discover relevant work while giving brands a clear view of their opportunities.",
      demo: true,
    },
    solution: {
      text: "Use consistent product concepts across web and mobile, with layouts adapted to each task and device. Keep job, profile, and payment states understandable throughout the journey.",
      demo: true,
    },
    decisions: [
      {
        topic: "Cross-platform UI",
        choice: "Share product concepts; adapt presentation",
        reason:
          "Preserve consistency without forcing a desktop layout onto a phone.",
        demo: true,
      },
      {
        topic: "Location context",
        choice: "Keep discovery filters close to results",
        reason: "Help users understand why an opportunity is relevant.",
        demo: true,
      },
    ],
    results: [
      {
        text: "A web and mobile marketplace supporting discovery, profiles, payments, and related workflows.",
      },
      {
        text: "Replace with a verified contribution outcome or an example from a shipped release.",
        demo: true,
      },
    ],
    lessons: {
      text: "Shared code is useful when it preserves a coherent product, while individual workflows still need attention on small screens. Add the actual cross-platform lessons from this project.",
      demo: true,
    },
  },
  {
    slug: "skillmatch",
    name: "SkillMatch",
    category: "Web platforms",
    subtitle: "Connecting candidates and recruiters",
    summary:
      "Applications, assessments, and recruiting workflows brought into a connected platform.",
    image: {
      src: "/images/projects/skillmatch.webp",
      width: 1440,
      height: 811,
    },
    featured: true,
    role: "Full-stack contributor",
    team: "Netixsol",
    platform: "Web",
    status: "Public link",
    liveUrl: "https://www.skillmatch.tech/",
    stack: ["Next.js", "NestJS", "MongoDB", "TypeScript"],
    scope: ["Authentication", "Dashboards", "API integrations"],
    overview:
      "A recruitment platform combining job applications, skills assessments, coding tests, and administrative tools for candidates and recruiters.",
    contributions: [
      {
        title: "Authentication",
        description:
          "Built authentication features as part of the full-stack team.",
      },
      {
        title: "Dashboards",
        description:
          "Contributed to candidate, recruiter, and administrative interfaces.",
      },
      {
        title: "API integrations",
        description:
          "Connected application interfaces with APIs and product workflows.",
      },
    ],
    problem: {
      text: "Candidates need a clear way to showcase their abilities, while recruiters need an organized assessment and hiring workflow. This is draft framing; replace it with the original product brief and constraints.",
      demo: true,
    },
    solution: {
      text: "Connect the candidate journey with recruiting and administrative workflows through focused interfaces and clear API boundaries. Add the specific features and decisions you implemented.",
      demo: true,
    },
    decisions: [
      {
        topic: "UI / API boundary",
        choice: "Next.js interface with a NestJS API",
        reason:
          "Keep presentation and application responsibilities understandable.",
        demo: true,
      },
      {
        topic: "Feedback states",
        choice: "Make loading, error, and success states explicit",
        reason: "Help people understand the outcome of their actions.",
        demo: true,
      },
      {
        topic: "Data flow",
        choice: "Use clear API contracts for shared workflows",
        reason:
          "Keep client and server behavior consistent as features change.",
        demo: true,
      },
    ],
    results: [
      {
        text: "A recruitment platform with authentication, dashboards, applications, and assessment-related capabilities.",
      },
      {
        text: "Add verified release outcomes, team feedback, or measured improvements when available.",
        demo: true,
      },
    ],
    lessons: {
      text: "Different user roles need different views of the same product. Replace this draft with a concrete lesson about permissions, workflows, or collaboration.",
      demo: true,
    },
  },
  {
    slug: "hestiya",
    name: "Hestiya",
    category: "Web3",
    subtitle: "A blockchain-connected carbon marketplace",
    summary:
      "Marketplace interfaces, wallet connectivity, and smart contract interactions for carbon credits.",
    image: { src: "/images/projects/hestiya.webp", width: 1440, height: 811 },
    role: "Engineering contributor",
    team: "Weiblocks",
    platform: "Web",
    status: "Public link",
    liveUrl: "https://marketplace.hestiya.com/",
    stack: ["React", "TypeScript", "Wagmi", "Web3"],
    scope: ["Marketplace UI", "Wallet connectivity", "Contract integration"],
    overview:
      "A Web3 carbon credit marketplace with wallet connectivity and smart contract interactions supporting carbon credit transactions.",
    contributions: [
      {
        title: "Marketplace interfaces",
        description: "Implemented responsive product interfaces.",
      },
      {
        title: "Wallet connectivity",
        description: "Contributed to wallet connection and interaction flows.",
      },
      {
        title: "Contract interactions",
        description:
          "Integrated application behavior with smart contract functionality; this does not claim authorship of the contracts.",
      },
    ],
    problem: {
      text: "A blockchain transaction can have more visible stages than a conventional web action. This draft frames the challenge as presenting wallet and transaction states clearly within the marketplace.",
      demo: true,
    },
    solution: {
      text: "Keep the marketplace interface focused on the user's task, with clear connection and transaction feedback around the Web3 integration.",
      demo: true,
    },
    decisions: [
      {
        topic: "Integration feedback",
        choice: "Explain wallet and transaction states",
        reason: "Make asynchronous blockchain actions easier to follow.",
        demo: true,
      },
    ],
    results: [
      {
        text: "Responsive marketplace interfaces with wallet and smart contract integration.",
      },
    ],
    lessons: {
      text: "Add a real example of handling a wallet edge case, transaction state, or product constraint.",
      demo: true,
    },
  },
  {
    slug: "gaming-platform",
    name: "Gaming Platform",
    category: "Web platforms",
    subtitle: "Games, referrals, and connected rewards",
    summary:
      "A platform combining a spin-wheel experience, referrals, credit claiming, and administrative controls.",
    image: {
      src: "/images/projects/gaming-platform.webp",
      width: 1440,
      height: 811,
    },
    role: "Full-stack contributor",
    team: "Weiblocks",
    platform: "Web",
    status: "Public link",
    liveUrl: "https://gaming-platform-frontend-eight.vercel.app/",
    stack: ["Next.js", "MongoDB", "TypeScript", "Web3"],
    scope: ["Authentication", "Referral flows", "Reward administration"],
    overview:
      "A gaming platform with login and signup, spin-wheel interactions, referrals, credit claiming, user management, and reward configuration.",
    contributions: [
      {
        title: "Application features",
        description: "Built frontend and full-stack product functionality.",
      },
      {
        title: "Referral flows",
        description: "Worked on referral and reward-related experiences.",
      },
      {
        title: "Administration",
        description:
          "Contributed to user-management and configuration interfaces.",
      },
    ],
    problem: {
      text: "Users need clear reward states while administrators need understandable controls. Replace this draft with the original rules, constraints, and problem statement.",
      demo: true,
    },
    solution: {
      text: "Separate player-facing interactions from administrative configuration and present clear feedback around reward actions.",
      demo: true,
    },
    decisions: [
      {
        topic: "User roles",
        choice: "Separate player and admin workflows",
        reason: "Keep each interface focused on the relevant actions.",
        demo: true,
      },
    ],
    results: [
      {
        text: "An application covering gameplay, referrals, credit claiming, and administrative configuration.",
      },
    ],
    lessons: {
      text: "Add an actual lesson about state management, reward rules, or testing.",
      demo: true,
    },
  },
  {
    slug: "development-solutions-group",
    name: "Development Solutions Group",
    category: "Websites",
    subtitle: "A clear digital presence for a corporate brand",
    summary:
      "A responsive website translating company brand guidelines into services, work, and contact flows.",
    image: {
      src: "/images/projects/development-solutions-group.webp",
      width: 1440,
      height: 811,
    },
    role: "Frontend developer",
    team: "Sofrix",
    platform: "Web",
    status: "Public link",
    liveUrl: "https://development-solution-group.vercel.app/",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Formik / Yup"],
    scope: [
      "Brand implementation",
      "Responsive layouts",
      "Validated contact flows",
    ],
    overview:
      "A corporate website showcasing services and projects, with responsive layouts and Formik/Yup contact validation.",
    contributions: [
      {
        title: "Frontend implementation",
        description: "Built responsive site layouts and reusable interfaces.",
      },
      {
        title: "Brand guidelines",
        description: "Carried the visual brand through the site.",
      },
      {
        title: "Contact flows",
        description: "Implemented forms and validation with Formik and Yup.",
      },
    ],
    problem: {
      text: "A corporate site needs to communicate clearly across pages and screen sizes. Replace this draft with the client's specific brief and content requirements.",
      demo: true,
    },
    solution: {
      text: "Use a consistent design system, readable page hierarchy, and responsive layouts to support the company's content and contact journey.",
      demo: true,
    },
    decisions: [
      {
        topic: "Design consistency",
        choice: "Reuse layout and interface patterns",
        reason: "Keep pages coherent and easier to maintain.",
        demo: true,
      },
    ],
    results: [
      {
        text: "A responsive company website with service, portfolio, and validated contact experiences.",
      },
    ],
    lessons: {
      text: "Add a concrete lesson about brand implementation, accessibility, or form behavior.",
      demo: true,
    },
  },
];
