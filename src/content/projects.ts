import type { PortfolioProject } from "../types/content.ts";
// EDIT HERE: résumé facts, older portfolio details, and project media. demo:true marks remaining drafts.
export const projects: PortfolioProject[] = [
  {
    slug: "bitlux",
    mockup: "/images/projects/bitlux.webp",
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
    role: "Software Engineer",
    team: "Sofrix",
    platform: "Web",
    status: "Public link",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Redux Toolkit",
      "PostgreSQL",
      "jsPDF",
      "Salesforce",
    ],
    scope: [
      "UI components & bug fixes",
      "API integrations",
      "Dynamic ticket PDFs",
    ],
    overview:
      "An enterprise application for private jet operations, with booking lifecycle management, administrative dashboards, Salesforce integration, and PDF generation.",
    contributions: [
      {
        title: "UI & maintenance",
        description:
          "Fixed bugs and built reusable components for booking and operations interfaces.",
      },
      {
        title: "API integrations",
        description:
          "Integrated backend APIs into the product’s operational workflows.",
      },
      {
        title: "Dynamic PDFs",
        description: "Generated dynamic PDFs for ticket queries using jsPDF.",
      },
    ],
    problem: {
      text: "Booking operations involve requests, customer details, documents, and changing trip information. This draft frames the challenge as keeping those pieces connected without making the operational interface harder to use.",
      demo: true,
    },
    solution: {
      text: "Built and maintained components, connected APIs, and generated ticket-query PDFs using jsPDF within the existing Next.js application.",
    },
    decisions: [
      {
        topic: "Document generation",
        choice: "Generate ticket-query PDFs with jsPDF",
        reason:
          "Provide dynamic PDF documents from the application’s ticket information.",
      },
      {
        topic: "Client data",
        choice: "TanStack Query and Redux Toolkit",
        reason:
          "The résumé lists both tools in the application stack; the exact division of state responsibilities still needs your implementation notes.",
        demo: true,
      },
    ],
    results: [
      {
        text: "Delivered component updates, bug fixes, API integrations, and dynamic ticket-query PDF functionality.",
      },
    ],
    lessons: {
      text: "In operational products, clear states and dependable integrations can matter as much as individual screens. Add one real tradeoff and what you would change next time.",
      demo: true,
    },
    liveUrl: "https://bitlux-ops.vercel.app/",
    media: [
      {
        kind: "image",
        src: "/images/projects/bitlux-screen.webp",
        width: 1169,
        height: 832,
        alt: "Bitlux pending requests in a card layout",
        caption: "Bitlux pending requests in a card layout",
      },
      {
        kind: "image",
        src: "/images/projects/gallery/bitlux-request-detail.webp",
        width: 1169,
        height: 832,
        alt: "Bitlux trip and request details",
        caption: "Bitlux trip and request details",
      },
      {
        kind: "image",
        src: "/images/projects/gallery/bitlux-login.webp",
        width: 1169,
        height: 832,
        alt: "Bitlux sign-in interface",
        caption: "Bitlux sign-in interface",
      },
      {
        kind: "image",
        src: "/images/projects/gallery/bitlux-requests-table.webp",
        width: 1169,
        height: 832,
        alt: "Bitlux pending requests in a table layout",
        caption: "Bitlux pending requests in a table layout",
      },
    ],
  },
  {
    slug: "linxx",
    cardSubtitle: "Ambassador marketplace · Web + Mobile",
    mockup: "/images/projects/linxx.webp",
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
    role: "Software Engineer · Web & mobile",
    team: "Sofrix",
    platform: "Web + mobile",
    status: "Private project",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Redux Toolkit",
      "PostgreSQL",
      "Capacitor",
      "Plaid",
    ],
    scope: [
      "Job discovery",
      "Profiles & payments",
      "Cross-platform interfaces",
    ],
    overview:
      "A cross-platform ambassador job marketplace with listings, GPS-based discovery, profiles, payment-related flows, and notifications.",
    contributions: [
      {
        title: "API integration",
        description:
          "Integrated backend APIs into the web and mobile application.",
      },
      {
        title: "UI & maintenance",
        description:
          "Updated product interfaces and fixed bugs across marketplace workflows.",
      },
      {
        title: "Mobile deployment",
        description:
          "Worked on the mobile application deployment through Capacitor.",
      },
    ],
    problem: {
      text: "A marketplace has to make sense to people on both sides, and across different screen sizes. This draft focuses on helping ambassadors discover relevant work while giving brands a clear view of their opportunities.",
      demo: true,
    },
    solution: {
      text: "Improved interfaces and API connections in the Next.js application, addressed product bugs, and used Capacitor for mobile deployment.",
    },
    decisions: [
      {
        topic: "Mobile delivery",
        choice: "Use Capacitor for the mobile application",
        reason:
          "The documented implementation delivers the web-based product through a mobile wrapper.",
      },
      {
        topic: "Product data",
        choice: "TanStack Query, Redux Toolkit, and PostgreSQL",
        reason:
          "These tools are documented in the project stack; add the specific state and data-flow decisions you owned.",
        demo: true,
      },
    ],
    results: [
      {
        text: "Contributed API integrations, UI updates, bug fixes, and Capacitor-based mobile deployment.",
      },
    ],
    lessons: {
      text: "Shared code is useful when it preserves a coherent product, while individual workflows still need attention on small screens. Add the actual cross-platform lessons from this project.",
      demo: true,
    },
    media: [
      {
        kind: "image",
        src: "/images/projects/linxx-screen.webp",
        width: 1440,
        height: 798,
        alt: "Linxx job centre on desktop",
        caption: "Linxx job centre on desktop",
      },
      {
        kind: "image",
        src: "/images/projects/gallery/linxx-admin-wide.webp",
        width: 1440,
        height: 798,
        alt: "Linxx brand administration on a wide screen",
        caption: "Linxx brand administration on a wide screen",
      },
      {
        kind: "image",
        src: "/images/projects/gallery/linxx-brand-admin.webp",
        width: 768,
        height: 1312,
        alt: "Linxx brand administration in a narrow layout",
        caption: "Linxx brand administration in a narrow layout",
      },
      {
        kind: "image",
        src: "/images/projects/gallery/linxx-mobile-discovery.webp",
        width: 387,
        height: 838,
        alt: "Linxx mobile map and job discovery",
        caption: "Linxx mobile map and job discovery",
      },
      {
        kind: "image",
        src: "/images/projects/gallery/linxx-mobile-earnings.webp",
        width: 387,
        height: 838,
        alt: "Linxx mobile earnings and received payments",
        caption: "Linxx mobile earnings and received payments",
      },
      {
        kind: "image",
        src: "/images/projects/gallery/linxx-mobile-profile.webp",
        width: 387,
        height: 838,
        alt: "Linxx mobile profile and account settings",
        caption: "Linxx mobile profile and account settings",
      },
      {
        kind: "image",
        src: "/images/projects/gallery/linxx-tablet-jobs.webp",
        width: 768,
        height: 1152,
        alt: "Linxx job centre on tablet",
        caption: "Linxx job centre on tablet",
      },
    ],
  },
  {
    slug: "skillmatch",
    cardSubtitle: "Recruitment & assessments",
    mockup: "/images/projects/skillmatch.webp",
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
    stack: [
      "Next.js",
      "NestJS",
      "MongoDB",
      "Material UI",
      "Tailwind CSS",
      "TanStack Query",
      "Swagger",
    ],
    scope: ["Authentication", "Dashboards", "API integrations"],
    overview:
      "A recruitment platform combining job applications, skills assessments, coding tests, and administrative tools for candidates and recruiters.",
    contributions: [
      {
        title: "Responsive UI",
        description:
          "Created responsive application interfaces and contributed to candidate, recruiter, and administrative dashboards.",
      },
      {
        title: "Authentication",
        description:
          "Implemented authentication as part of the full-stack development team.",
      },
      {
        title: "APIs",
        description:
          "Integrated backend APIs and contributed to API creation and new features.",
      },
    ],
    problem: {
      text: "Candidates need a clear way to showcase their abilities, while recruiters need an organized assessment and hiring workflow. This is draft framing; replace it with the original product brief and constraints.",
      demo: true,
    },
    solution: {
      text: "Built responsive interfaces, implemented authentication, and connected workflows through API integration and backend API development in the Next.js and NestJS application.",
    },
    decisions: [
      {
        topic: "UI / API boundary",
        choice: "Next.js frontend with a NestJS API",
        reason:
          "The documented stack separates the web interface from backend application services.",
      },
      {
        topic: "API tooling",
        choice: "Swagger",
        reason:
          "Swagger is documented in the project stack; add how you used its API definitions in your work.",
        demo: true,
      },
    ],
    results: [
      {
        text: "Contributed responsive interfaces, authentication, dashboards, API integrations, and backend APIs for the recruitment platform.",
      },
    ],
    lessons: {
      text: "Different user roles need different views of the same product. Replace this draft with a concrete lesson about permissions, workflows, or collaboration.",
      demo: true,
    },
  },
  {
    slug: "hestiya",
    mockup: "/images/projects/hestiya.webp",
    name: "Hestiya",
    category: "Web3",
    subtitle: "A blockchain-connected carbon marketplace",
    summary:
      "Marketplace interfaces, wallet connectivity, and smart contract interactions for carbon credits.",
    image: {
      src: "/images/projects/hestiya.webp",
      width: 1440,
      height: 811,
    },
    role: "Frontend & Web3 developer",
    team: "Weiblocks",
    platform: "Web",
    status: "Public link",
    liveUrl: "https://hestiya-marketplace.vercel.app/",
    stack: ["React", "Web3", "Material UI", "Tailwind CSS", "Wagmi"],
    scope: ["Marketplace UI", "Wallet connectivity", "Contract integration"],
    overview:
      "A Web3 carbon credit marketplace with wallet connectivity and smart contract interactions supporting carbon credit transactions.",
    contributions: [
      {
        title: "Frontend ownership",
        description:
          "Built the full frontend UI for the carbon credit marketplace.",
      },
      {
        title: "Backend APIs",
        description: "Integrated the marketplace interface with backend APIs.",
      },
      {
        title: "Web3 integration",
        description:
          "Connected wallet functionality and smart contract interactions for blockchain-based carbon credit trading.",
      },
    ],
    problem: {
      text: "A blockchain transaction can have more visible stages than a conventional web action. This draft frames the challenge as presenting wallet and transaction states clearly within the marketplace.",
      demo: true,
    },
    solution: {
      text: "Built the marketplace frontend, integrated backend APIs, and connected wallet and smart contract interactions using React and Web3 tools.",
    },
    decisions: [
      {
        topic: "Wallet connectivity",
        choice: "Wagmi and Web3 integration",
        reason:
          "Connect the marketplace interface to wallets and smart contract interactions.",
      },
    ],
    results: [
      {
        text: "Built the full frontend UI with backend API and Web3 smart contract integration.",
      },
    ],
    lessons: {
      text: "Add a real example of handling a wallet edge case, transaction state, or product constraint.",
      demo: true,
    },
  },
  {
    slug: "gaming-platform",
    mockup: "/images/projects/gaming-platform.webp",
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
    role: "Frontend & full-stack contributor",
    team: "Weiblocks",
    platform: "Web",
    status: "Public link",
    liveUrl: "https://gaming-platform-frontend-eight.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Web3", "MongoDB"],
    scope: ["Authentication", "Referral flows", "Reward administration"],
    overview:
      "A gaming platform with login and signup, spin-wheel interactions, referrals, credit claiming, user management, and reward configuration.",
    contributions: [
      {
        title: "Frontend UI",
        description:
          "Built the full application UI, including the spin-wheel game.",
      },
      {
        title: "Referrals & purchases",
        description:
          "Implemented referral-system interfaces and wallet-based purchases.",
      },
      {
        title: "Full-stack features",
        description:
          "The old portfolio also documents login/signup, credit claiming, user management, and reward configuration contributions.",
      },
    ],
    problem: {
      text: "Users need clear reward states while administrators need understandable controls. Replace this draft with the original rules, constraints, and problem statement.",
      demo: true,
    },
    solution: {
      text: "Built the application UI and connected the spin-wheel, referral, and wallet-purchase experiences. Additional documented work covered authentication, credit claiming, and administrative controls.",
    },
    decisions: [
      {
        topic: "Wallet purchases",
        choice: "Web3-connected purchase flows",
        reason: "Support wallet-based purchases within the gaming application.",
      },
    ],
    results: [
      {
        text: "Built the full UI with spin-wheel gameplay, referrals, and wallet-based purchase functionality.",
      },
    ],
    lessons: {
      text: "Add an actual lesson about state management, reward rules, or testing.",
      demo: true,
    },
  },
  {
    slug: "development-solutions-group",
    mockup: "/images/projects/development-solutions-group.webp",
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
      text: "Implemented the corporate frontend with React 19, TypeScript, and Tailwind CSS, translating brand guidelines into responsive page layouts and using Formik and Yup for contact-form validation.",
    },
    decisions: [
      {
        topic: "Form validation",
        choice: "Formik and Yup",
        reason: "Validate the corporate website’s contact inputs.",
      },
    ],
    results: [
      {
        text: "Built the responsive corporate website with brand-aligned service/project pages and validated contact flows.",
      },
    ],
    lessons: {
      text: "Add a concrete lesson about brand implementation, accessibility, or form behavior.",
      demo: true,
    },
  },
  {
    role: "Software Engineer",
    team: "Sofrix",
    platform: "iOS + Android",
    status: "Private project",
    scope: [
      "iOS & Android app",
      "Shared application state",
      "Multilingual support",
    ],
    slug: "get-foodies",
    name: "Get Foodies",
    category: "Mobile apps",
    subtitle: "A food delivery app for iOS and Android",
    summary:
      "A mobile application built from scratch with React Native and Expo, shared state, and multilingual support.",
    stack: [
      "React Native",
      "Expo",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "i18n",
    ],
    overview:
      "An internal company food-delivery project. Built the mobile application from scratch using React Native and Expo, with Redux Toolkit and multilingual support. The résumé also lists Node.js and Express in the project stack.",
    contributions: [
      {
        title: "Mobile application",
        description:
          "Developed the iOS and Android application from scratch using React Native and Expo.",
      },
      {
        title: "State management",
        description: "Used Redux Toolkit for shared application state.",
      },
      {
        title: "Multiple languages",
        description: "Implemented multilingual support with i18n.",
      },
    ],
    decisions: [
      {
        topic: "Cross-platform app",
        choice: "React Native and Expo",
        reason: "Build the documented iOS and Android application.",
      },
      {
        topic: "Language support",
        choice: "i18n",
        reason: "Provide multilingual application content.",
      },
    ],
    problem: {
      text: "Add the original project brief, user problem, and constraints.",
      demo: true,
    },
    solution: {
      text: "Developed the iOS and Android application from scratch using React Native and Expo. Used Redux Toolkit for shared application state. Implemented multilingual support with i18n.",
    },
    results: [
      {
        text: "Developed the iOS and Android application from scratch using React Native and Expo. Used Redux Toolkit for shared application state. Implemented multilingual support with i18n.",
      },
    ],
    lessons: {
      text: "Add one concrete technical tradeoff or lesson from this project.",
      demo: true,
    },
  },
  {
    role: "Software Engineer",
    team: "Sofrix",
    platform: "Web",
    status: "Private project",
    scope: [
      "Desktop-to-web workflow",
      "Printing-system integration",
      "Real-time job tracking",
    ],
    slug: "onyx",
    name: "Onyx",
    category: "Web platforms",
    subtitle: "Desktop printing workflows brought to the web",
    summary:
      "A web application connecting a desktop printing system with real-time job tracking.",
    stack: ["Web application", "Printing APIs", "Real-time tracking"],
    overview:
      "A web application for a complex desktop printing workflow. The résumé documents the desktop-to-web conversion and real-time job tracking; the old portfolio also records integration with the printing system and APIs provided by Onyx Thrive.",
    contributions: [
      {
        title: "Web conversion",
        description:
          "Converted the complex desktop printing workflow into a web application.",
      },
      {
        title: "Job tracking",
        description:
          "Implemented real-time job tracking in the web experience.",
      },
      {
        title: "Printing integration",
        description:
          "Worked with the desktop printing system and its provided APIs.",
      },
    ],
    problem: {
      text: "The desktop printing system needed a web application with real-time visibility into printing jobs.",
    },
    solution: {
      text: "Converted the complex desktop printing workflow into a web application. Implemented real-time job tracking in the web experience. Worked with the desktop printing system and its provided APIs.",
    },
    decisions: [
      {
        topic: "Implementation details",
        choice: "Add the technical choice you made",
        reason: "Explain the constraint, alternatives, and why you chose it.",
        demo: true,
      },
    ],
    results: [
      {
        text: "Converted the complex desktop printing workflow into a web application. Implemented real-time job tracking in the web experience. Worked with the desktop printing system and its provided APIs.",
      },
    ],
    lessons: {
      text: "Add one concrete technical tradeoff or lesson from this project.",
      demo: true,
    },
  },
  {
    role: "Junior Software Engineer",
    team: "Strategist HUB",
    platform: "Web",
    status: "Private project",
    scope: ["Frontend improvements", "Bug fixes", "Internationalization"],
    slug: "keller-williams",
    name: "Real Estate Platform",
    category: "Web platforms",
    subtitle: "Microfrontends and internationalization",
    summary:
      "Frontend improvements for a US real-estate product, with microfrontend architecture and i18next.",
    stack: ["Microfrontends", "i18next"],
    overview:
      "A US real-estate platform contributed to at Strategist HUB. The résumé documents microfrontend architecture and i18next; the old portfolio identifies the project as Keller Williams and describes bug fixes and frontend improvements.",
    contributions: [
      {
        title: "Frontend maintenance",
        description:
          "Contributed bug fixes and interface improvements within a microfrontend-based application.",
      },
      {
        title: "Internationalization",
        description: "Worked on i18next integration and internationalization.",
      },
    ],
    problem: {
      text: "Add the original project brief, user problem, and constraints.",
      demo: true,
    },
    solution: {
      text: "Contributed bug fixes and interface improvements within a microfrontend-based application. Worked on i18next integration and internationalization.",
    },
    decisions: [
      {
        topic: "Implementation details",
        choice: "Add the technical choice you made",
        reason: "Explain the constraint, alternatives, and why you chose it.",
        demo: true,
      },
    ],
    results: [
      {
        text: "Contributed bug fixes and interface improvements within a microfrontend-based application. Worked on i18next integration and internationalization.",
      },
    ],
    lessons: {
      text: "Add one concrete technical tradeoff or lesson from this project.",
      demo: true,
    },
  },
  {
    role: "Full-stack contributor",
    team: "Sofrix",
    platform: "Web",
    status: "Private project",
    scope: ["End-to-end features", "System integration", "Non-embedded app"],
    slug: "shopify-app",
    name: "Shopify App",
    category: "Web platforms",
    subtitle: "A non-embedded Shopify application",
    summary:
      "Full-stack feature delivery and system integration using React and Ruby on Rails.",
    stack: ["React", "Ruby on Rails", "Shopify"],
    overview:
      "An ongoing non-embedded Shopify application documented in the updated résumé. Contributing end-to-end features and system integrations while actively learning Ruby on Rails.",
    contributions: [
      {
        title: "Full-stack features",
        description:
          "Contributing end-to-end application features across React and Ruby on Rails.",
      },
      {
        title: "System integration",
        description:
          "Working on system integration for the non-embedded Shopify application.",
      },
    ],
    results: [
      {
        text: "Feature development and system integration are ongoing; a final release outcome has not been supplied.",
      },
    ],
    problem: {
      text: "Add the original project brief, user problem, and constraints.",
      demo: true,
    },
    solution: {
      text: "Contributing end-to-end application features across React and Ruby on Rails. Working on system integration for the non-embedded Shopify application.",
    },
    decisions: [
      {
        topic: "Implementation details",
        choice: "Add the technical choice you made",
        reason: "Explain the constraint, alternatives, and why you chose it.",
        demo: true,
      },
    ],
    lessons: {
      text: "Add one concrete technical tradeoff or lesson from this project.",
      demo: true,
    },
  },
  {
    role: "Developer",
    team: "Personal demo",
    platform: "Web",
    status: "Public link",
    scope: ["Food-app demo", "Authentication integration"],
    slug: "welcome-to-food",
    name: "Welcome to Food",
    category: "Websites",
    subtitle: "A food-app demo with authentication",
    summary: "A Next.js food-app demo using NextAuth and Material UI.",
    liveUrl: "https://hackathon01uzair.vercel.app/",
    stack: ["Next.js", "NextAuth", "Material UI"],
    overview:
      "A demo food application listed in the updated résumé and the old portfolio. Its documented stack is Next.js, NextAuth, and Material UI.",
    contributions: [
      {
        title: "Demo application",
        description: "Developed a food-app demo using Next.js and Material UI.",
      },
      {
        title: "Authentication",
        description:
          "The old portfolio documents NextAuth integration in the demo application.",
      },
    ],
    decisions: [
      {
        topic: "Authentication",
        choice: "NextAuth",
        reason: "Provide authentication integration in the demo application.",
      },
    ],
    problem: {
      text: "Add the original project brief, user problem, and constraints.",
      demo: true,
    },
    solution: {
      text: "Developed a food-app demo using Next.js and Material UI. The old portfolio documents NextAuth integration in the demo application.",
    },
    results: [
      {
        text: "Developed a food-app demo using Next.js and Material UI. The old portfolio documents NextAuth integration in the demo application.",
      },
    ],
    lessons: {
      text: "Add one concrete technical tradeoff or lesson from this project.",
      demo: true,
    },
  },
];
