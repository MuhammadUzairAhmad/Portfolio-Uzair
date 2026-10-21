import type { PortfolioProject } from "../types/content.ts";
// Owner-approved case studies: portfolio-content-additions.md (21 October 2026).
export const projects: PortfolioProject[] = [
  {
    slug: "bitlux",
    mockup: "/images/projects/bitlux.webp",
    name: "Bitlux",
    category: "Web platforms",
    subtitle: "Private jet booking & operations",
    summary: "Private-jet booking and ticketing operations.",
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
    ],
    scope: [
      "Performance & rendering fixes",
      "TanStack Query API requests & caching",
      "Figma UI updates, reusable components & validation",
      "Backend API integrations",
      "Dynamic ticket PDFs with jsPDF",
    ],
    overview: "Private-jet booking and ticketing operations.",
    contributions: [
      {
        title: "Performance & data",
        description:
          "Investigated and fixed performance and data-rendering issues; introduced TanStack Query for API requests and caching.",
      },
      {
        title: "UI & maintainability",
        description:
          "Updated interfaces to new Figma designs, added toast messages and validation, and refactored reusable components.",
      },
      {
        title: "Integrations & documents",
        description:
          "Integrated backend APIs and generated dynamic ticket PDFs using jsPDF.",
      },
    ],
    problem: {
      text: "Existing screens had performance and data-rendering issues, inconsistent API handling, and code that needed cleanup. The interface also needed to follow updated Figma designs.",
    },
    solution: {
      text: "I introduced TanStack Query to handle API requests and cache server data while improving the affected UI and rendering behavior. I also added user feedback and validation around application actions.",
    },
    decisions: [
      {
        topic: "API handling",
        choice: "Introduce TanStack Query requests and caching",
        reason:
          "Address inconsistent API handling and improve affected data-rendering behavior.",
      },
      {
        topic: "User feedback",
        choice: "Toast messages and validation",
        reason: "Give users feedback around application actions.",
      },
      {
        topic: "Documents",
        choice: "Generate ticket PDFs using jsPDF",
        reason: "Build dynamic documents from ticket information.",
      },
    ],
    results: [
      {
        text: "Fixed identified rendering and performance issues, updated the UI to the new designs, and improved API handling, validation, and code maintainability.",
      },
    ],
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
    lessons: {
      text: "Gained experience improving an existing application by investigating behavior, introducing caching, and refactoring code alongside ongoing feature work.",
    },
    projectStatus: "Ongoing product",
    productUrl: "https://bitlux-ops.vercel.app/",
  },
  {
    slug: "linxx",
    cardSubtitle: "Ambassador marketplace · Web + Mobile",
    mockup: "/images/projects/linxx.webp",
    name: "Linxx",
    category: "Web & mobile",
    subtitle: "An ambassador marketplace, across screens",
    summary:
      "A job and service marketplace with ambassador/shopper workflows, listings, GPS discovery, approval flows, and Plaid integration.",
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
      "Marketplace listings & ambassador/shopper flows",
      "Backend API integration & end-to-end flow testing",
      "Approval/decline workflows",
      "GPS discovery & Plaid integration",
      "Capacitor mobile fixes & deployment support",
    ],
    overview:
      "A job and service marketplace with ambassador/shopper workflows, listings, GPS discovery, approval flows, and Plaid integration.",
    contributions: [
      {
        title: "Connected workflows",
        description:
          "Integrated backend APIs, updated interfaces, and tested complete end-to-end user flows.",
      },
      {
        title: "Web & mobile debugging",
        description:
          "Fixed application bugs and investigated Capacitor-specific mobile issues while learning the library.",
      },
      {
        title: "Marketplace integrations",
        description:
          "Contributed approval/decline flows, GPS features, Plaid integration, and mobile deployment support.",
      },
    ],
    problem: {
      text: "The frontend needed backend API integration and working end-to-end flows. The mobile application also had issues associated with its Capacitor integration.",
    },
    solution: {
      text: "I worked through the connected frontend and API flows and tested behavior across the web application and its Capacitor-based mobile experience.",
    },
    decisions: [
      {
        topic: "Integration verification",
        choice: "Test connected frontend/API flows",
        reason:
          "Verify affected workflows after API integration and bug fixes.",
      },
      {
        topic: "Mobile debugging",
        choice: "Investigate Capacitor behavior across web and mobile",
        reason: "Resolve issues specific to the mobile experience.",
      },
    ],
    results: [
      {
        text: "Resolved identified web/mobile issues and verified the affected end-to-end workflows after integration and fixes.",
      },
    ],
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
    lessons: {
      text: "Developed practical experience debugging Capacitor-specific mobile behavior and testing complete flows across web and mobile.",
    },
    projectStatus: "Ongoing product",
    walkthroughs: [
      {
        label: "Web walkthrough",
        url: "https://www.loom.com/share/a93960cdd4eb4dde9b04b4b2d9b56cb0",
        provider: "Loom",
      },
      {
        label: "Mobile walkthrough",
        url: "https://www.loom.com/share/b320d04b28c04107aabe73a9cea70885",
        provider: "Loom",
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
      "Recruitment and candidate assessment, including profiles, job workflows, dashboards, and administrative interfaces.",
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
    stack: [
      "Next.js",
      "NestJS",
      "MongoDB",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Material UI",
      "Passport-JWT",
      "Swagger",
    ],
    scope: [
      "Responsive screens & dashboards",
      "Validation & reusable components",
      "Authentication & API integration",
      "Backend APIs under senior guidance",
    ],
    overview:
      "Recruitment and candidate assessment, including profiles, job workflows, dashboards, and administrative interfaces.",
    contributions: [
      {
        title: "Frontend delivery",
        description:
          "Built responsive UI screens and dashboards, validation, and reusable components under senior developers.",
      },
      {
        title: "State & integrations",
        description:
          "Integrated APIs and worked with Redux Toolkit, Tailwind CSS, and TanStack Query.",
      },
      {
        title: "Backend contribution",
        description:
          "Created APIs under senior guidance on my first professional project.",
      },
    ],
    problem: {
      text: "The platform needed responsive frontend interfaces, validation, reusable components, authentication, and integration with backend services.",
    },
    solution: {
      text: "I worked within the team's frontend and backend patterns, using shared components, state management, API integration, and validation to build connected application features.",
    },
    decisions: [
      {
        topic: "Team delivery",
        choice: "Follow existing frontend/backend patterns",
        reason: "Deliver connected features with senior developer guidance.",
      },
      {
        topic: "Shared interfaces",
        choice: "Reusable components, validation and state management",
        reason: "Support consistent screens and dashboard functionality.",
      },
    ],
    results: [
      {
        text: "Delivered frontend screens and dashboard features, integrated backend services, and contributed APIs as part of the team.",
      },
    ],
    lessons: {
      text: "Built my foundation in professional frontend development, reusable component design, state management, validation, and API integration, while gaining initial backend experience with senior support.",
    },
    productUrl: "https://www.skillmatch.tech/",
  },
  {
    slug: "hestiya",
    mockup: "/images/projects/hestiya.webp",
    name: "Hestiya Marketplace",
    category: "Web3",
    subtitle: "A blockchain-connected carbon marketplace",
    summary:
      "A Web3 carbon-credit marketplace for discovery, trading, holdings, and retirement.",
    image: {
      src: "/images/projects/hestiya.webp",
      width: 1440,
      height: 811,
    },
    role: "Frontend Developer",
    team: "Weiblocks",
    platform: "Web",
    status: "Public link",
    stack: [
      "React",
      "Tailwind CSS",
      "Material UI",
      "Clerk",
      "Wagmi",
      "Reown AppKit",
      "Web3",
    ],
    scope: [
      "Figma-to-React frontend",
      "Clerk authentication & Python API integration",
      "Listing filters, cart & P2P transactions",
      "Wallets, smart contracts & Web3 transactions",
      "Holdings, retirement, OTP & PDF receipts",
    ],
    overview:
      "A Web3 carbon-credit marketplace for discovery, trading, holdings, and retirement.",
    contributions: [
      {
        title: "Frontend from Figma",
        description:
          "Built the React frontend from scratch, including listing filters, cart interactions, P2P transactions, holdings, retirement, OTP verification, and PDF receipts.",
      },
      {
        title: "Authentication & APIs",
        description:
          "Integrated Clerk sign-in/sign-up and collaborated with the developer responsible for the Python backend to connect its APIs.",
      },
      {
        title: "Web3 integration",
        description:
          "Integrated wallet connectivity, smart-contract interactions, and Web3 transactions using Wagmi and Reown AppKit.",
      },
    ],
    problem: {
      text: "The project needed a frontend built from Figma and connected to authentication, an existing backend, wallets, and smart contracts.",
    },
    solution: {
      text: "Converted the designs into React interfaces and integrated the Python backend, Clerk authentication, and Web3 connections using Wagmi and Reown AppKit.",
    },
    decisions: [
      {
        topic: "Accounts",
        choice: "Integrate Clerk sign-in/sign-up",
        reason: "Connect authentication to the marketplace frontend.",
      },
      {
        topic: "Service boundaries",
        choice: "Integrate another developer’s Python APIs",
        reason:
          "Connect marketplace workflows while retaining frontend ownership.",
      },
      {
        topic: "Web3 connections",
        choice: "Wagmi and Reown AppKit",
        reason: "Connect wallets and smart-contract transaction flows.",
      },
    ],
    results: [
      {
        text: "Delivered a frontend connecting the marketplace's discovery, account, transaction, and holdings workflows to the supporting services.",
      },
    ],
    lessons: {
      text: "Web3 was new to me on this project. I learned how wallet integration, smart-contract interactions, and Web3 transactions work while collaborating with another developer on API integration.",
    },
    productUrl: "https://marketplace.hestiya.com/",
    walkthroughs: [
      {
        label: "Hestiya walkthrough",
        url: "https://www.loom.com/share/46665cdffcbf4862a7d0fdd3b43ec15d",
        provider: "Loom",
      },
    ],
  },
  {
    slug: "gaming-platform",
    mockup: "/images/projects/gaming-platform.webp",
    name: "Gaming Platform",
    category: "Web platforms",
    subtitle: "Games, referrals, and connected rewards",
    summary:
      "A wallet-connected gaming application with spin-wheel gameplay, referrals, bonuses, credit claims, and user/admin workflows.",
    image: {
      src: "/images/projects/gaming-platform.webp",
      width: 1440,
      height: 811,
    },
    role: "Full-Stack Developer",
    team: "Weiblocks",
    platform: "Web",
    status: "Public link",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth",
      "Web3",
    ],
    scope: [
      "Google OAuth & email/password accounts",
      "Wallet & client-provided contract integration",
      "Spin-wheel gameplay & reward history",
      "Referral validation, bonuses & credit claims",
      "User management & transfer/claim approvals",
      "Configurable referral percentages, prizes & free-spin timing",
    ],
    overview:
      "A wallet-connected gaming application with spin-wheel gameplay, referrals, bonuses, credit claims, and user/admin workflows.",
    contributions: [
      {
        title: "Full-stack implementation",
        description:
          "Converted the client’s v0 frontend demo into a working Next.js application with frontend and backend functionality and MongoDB data.",
      },
      {
        title: "Accounts, wallets & gameplay",
        description:
          "Implemented NextAuth Google OAuth and email/password authentication, wallet integration, spin-wheel win/lose outcomes, referrals, bonuses, and credit claims. Integrated a client-provided smart contract.",
      },
      {
        title: "User & admin workflows",
        description:
          "Built referral, credit, spin/reward history and admin interfaces, including user editing, account enable/disable, claim/transfer approval or rejection, and configurable referral percentages, prizes, and free-spin timing.",
      },
    ],
    problem: {
      text: "The client supplied a frontend demo generated with v0. It needed to be turned into a working Next.js application with backend functionality, authentication, wallet integration, gameplay, and referral/bonus workflows.",
    },
    solution: {
      text: "Used Next.js for frontend and backend functionality, MongoDB for application data, NextAuth for authentication, and Web3 libraries for wallet/contract integration.",
    },
    decisions: [
      {
        topic: "Application structure",
        choice: "Next.js frontend and backend with MongoDB",
        reason:
          "Turn the client’s frontend demo into a connected full-stack application.",
      },
      {
        topic: "Authentication",
        choice: "NextAuth Google OAuth and credentials",
        reason: "Support Google and email/password sign-in.",
      },
      {
        topic: "Contract integration",
        choice: "Use the client-provided smart contract",
        reason:
          "Connect wallet and contract behavior without claiming contract authorship.",
      },
    ],
    results: [
      {
        text: "Turned a frontend demo into a working full-stack application with connected user/admin workflows, authentication, wallet purchases, gameplay, and referral/credit features.",
      },
    ],
    lessons: {
      text: "Gained experience connecting authentication, backend data, wallet interactions, reward-related features, and administrative controls in one application.",
    },
    productUrl: "https://gaming-platform-frontend-eight.vercel.app/",
    walkthroughs: [
      {
        label: "Gaming Platform walkthrough",
        url: "https://www.loom.com/share/6da67165fe7d42be84fdd0f9fa4829ea",
        provider: "Loom",
      },
    ],
  },
  {
    slug: "development-solutions-group",
    mockup: "/images/projects/development-solutions-group.webp",
    name: "Development Solutions Group",
    category: "Websites",
    subtitle: "A clear digital presence for a corporate brand",
    summary: "A company portfolio/corporate website.",
    image: {
      src: "/images/projects/development-solutions-group.webp",
      width: 1440,
      height: 811,
    },
    role: "Frontend developer",
    team: "Sofrix",
    platform: "Web",
    status: "Public link",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Formik", "Yup"],
    scope: [
      "Responsive Home, About, Projects & Contact",
      "Client-requested company presentation",
      "Formik & Yup contact validation",
    ],
    overview: "A company portfolio/corporate website.",
    contributions: [
      {
        title: "Responsive company pages",
        description:
          "Built Home, About, Projects, and Contact interfaces following the client’s requested design, using React 19, TypeScript, and Tailwind CSS.",
      },
      {
        title: "Contact validation",
        description: "Implemented contact-form validation with Formik and Yup.",
      },
    ],
    problem: {
      text: "Build the company website to match the client's requested design and presentation.",
    },
    solution: {
      text: "I built responsive company portfolio interfaces using React 19, TypeScript, and Tailwind CSS, following the client's requested design. The work included Home, About, Projects, and Contact interfaces, with contact-form validation using Formik and Yup.",
    },
    decisions: [],
    results: [
      {
        text: "Delivered the requested company presentation through responsive pages and a validated contact interface.",
      },
    ],
    productUrl: "https://development-solution-group.vercel.app/",
  },
  {
    role: "Software Engineer",
    team: "Sofrix",
    platform: "iOS + Android",
    status: "Private project",
    scope: [
      "iOS & Android interfaces from Figma",
      "Registration, OTP & profile completion",
      "Redux Toolkit & backend API integration",
      "Multilingual interfaces & location features",
      "Banners & file-based routing",
    ],
    slug: "get-foodies",
    name: "Get Foodies",
    category: "Mobile apps",
    subtitle: "A food delivery app for iOS and Android",
    summary:
      "An iOS and Android food application with onboarding, multilingual interfaces, and location-related features.",
    stack: [
      "React Native",
      "Expo",
      "Redux Toolkit",
      "i18n",
      "File-based routing",
    ],
    overview:
      "An iOS and Android food application with onboarding, multilingual interfaces, and location-related features.",
    contributions: [
      {
        title: "Mobile UI from Figma",
        description:
          "Built my first React Native/Expo application from scratch for iOS and Android, including onboarding, profile completion, and banner interfaces.",
      },
      {
        title: "API-connected flows",
        description:
          "Integrated backend APIs for registration, OTP verification, and profile completion.",
      },
      {
        title: "State, language & location",
        description:
          "Implemented Redux Toolkit state, multilingual interfaces, location-related features, and file-based routing.",
      },
    ],
    decisions: [
      {
        topic: "Mobile structure",
        choice: "React Native and Expo with file-based routing",
        reason: "Implement the supplied mobile designs across iOS and Android.",
      },
      {
        topic: "Learning during delivery",
        choice: "AI-assisted learning alongside implementation",
        reason:
          "Understand the unfamiliar stack and application lifecycle while building API-connected flows.",
      },
    ],
    problem: {
      text: "Convert supplied Figma designs into a mobile application and connect its UI to backend APIs across iOS and Android.",
    },
    solution: {
      text: "Used React Native and Expo with file-based routing. I learned mobile development principles and application lifecycle behavior while implementing the project. AI-assisted learning helped me understand the unfamiliar stack and move through implementation faster.",
    },
    results: [
      {
        text: "Implemented the described mobile interfaces and API-connected flows for iOS and Android.",
      },
    ],
    lessons: {
      text: "Developed practical knowledge of React Native, Expo, mobile application lifecycle behavior, routing, and API integration through my first mobile project.",
    },
    walkthroughs: [
      {
        label: "Get Foodies walkthrough",
        url: "https://www.loom.com/share/e0b16509dc234de2bd5298a0a78859b2",
        provider: "Loom",
      },
    ],
  },
  {
    role: "Frontend Developer",
    team: "Sofrix",
    platform: "Web",
    status: "Private project",
    scope: [
      "Browser actions through existing desktop APIs",
      "Frontend Socket.io status events",
      "Ready, queued, printing, failed & printed job states",
      "Printer online/offline monitoring",
    ],
    slug: "onyx",
    name: "Onyx",
    category: "Web platforms",
    subtitle: "Web interfaces for desktop print operations",
    summary:
      "Onyx is desktop printing software connected to physical printers. It accepts PDF printing commands, including copy quantities, and reports print-job and printer states.",
    stack: ["Onyx Thrive / desktop APIs", "Socket.io frontend listener"],
    overview:
      "Onyx is desktop printing software connected to physical printers. It accepts PDF printing commands, including copy quantities, and reports print-job and printer states.",
    contributions: [
      {
        title: "Desktop API integration",
        description:
          "Built and integrated browser interfaces with the APIs exposed by the existing desktop application, allowing web actions to operate the printing workflow.",
      },
      {
        title: "Live status display",
        description:
          "Added a frontend Socket.io listener for ready, queued, printing, failed, and printed jobs, plus online/offline printer status.",
      },
      {
        title: "Frontend scope",
        description:
          "Integrated the existing desktop APIs and event source. The desktop application remained responsible for printer execution; I did not build a custom backend or Socket.io server.",
      },
    ],
    problem: {
      text: "Provide browser-based operation so different users could work from different locations instead of depending on one computer's interface.",
    },
    solution: {
      text: "The web application consumed existing desktop APIs for actions and listened for status events through Socket.io. The observed workflow included ready, queued, printing, failed, and printed job states, together with printer online/offline status.",
    },
    decisions: [
      {
        topic: "Actions",
        choice: "Consume existing desktop APIs",
        reason:
          "Operate the desktop workflow from the browser while desktop software executes print jobs.",
      },
      {
        topic: "Status updates",
        choice: "Frontend Socket.io listener",
        reason:
          "Represent job transitions and printer connectivity from the existing event source.",
      },
    ],
    results: [
      {
        text: "Enabled the described printing workflow to be operated and monitored through a web interface while the existing desktop application remained responsible for printer execution.",
      },
    ],
    lessons: {
      text: "Learned to consume event-driven updates through a frontend Socket.io listener and represent the different stages of a physical printing workflow.",
    },
  },
  {
    role: "Junior Software Engineer",
    team: "Strategist HUB",
    platform: "Web",
    status: "Public link",
    scope: [
      "27+ interconnected application/shared-package repositories",
      "i18next keys & generated translation pull requests",
      "Translation support for up to 22 languages",
      "Child/parent dependency debugging & merge coordination",
      "Jest tests & CI coverage checks",
    ],
    slug: "keller-williams",
    name: "Keller Williams",
    category: "Web platforms",
    subtitle: "Microfrontends and internationalization",
    summary:
      "A real-estate platform comprising more than 27 interconnected React/Next.js repositories, including application repositories and shared packages such as table components, with translation support for up to 22 languages. I worked as a Junior Software Engineer at Strategist HUB while shadowing the CTO.",
    stack: [
      "React.js",
      "Next.js",
      "i18next",
      "Jest",
      "Git / pull requests",
      "CI coverage checks",
      "Microfrontends / shared packages",
    ],
    overview:
      "A real-estate platform comprising more than 27 interconnected React/Next.js repositories, including application repositories and shared packages such as table components, with translation support for up to 22 languages. I worked as a Junior Software Engineer at Strategist HUB while shadowing the CTO.",
    contributions: [
      {
        title: "Cross-repository investigation",
        description:
          "Resolved assigned bugs and missing translation keys across a platform with 27+ interconnected React/Next.js repositories and shared packages, while shadowing the CTO as a junior engineer.",
      },
      {
        title: "Translation workflow",
        description:
          "Added translation key/value pairs with i18next and incorporated generated pull requests from the team’s English-to-other-languages translation tool, supporting up to 22 languages.",
      },
      {
        title: "Dependency-aware delivery",
        description:
          "Coordinated child-repository review and merges, retested consuming parent applications, and progressed parent changes.",
      },
      {
        title: "Tests & CI coverage",
        description:
          "Updated existing Jest tests or added tests when affected changes required them to satisfy coverage and CI checks.",
      },
    ],
    problem: {
      text: "Bugs and translation changes could involve code in several dependent repositories. A small UI change or missing translation key could require tracing through parent and child repositories, coordinating merges, and retesting the consuming applications.",
    },
    solution: {
      text: "Worked within the existing microfrontend/shared-package structure, used i18next translation keys and the team's translation tooling, debugged across repository boundaries, and maintained Jest tests and coverage checks.",
    },
    decisions: [
      {
        topic: "Translations",
        choice: "Use i18next and generated translation pull requests",
        reason:
          "Add missing keys and incorporate the team’s existing translation tooling.",
      },
      {
        topic: "Repository dependencies",
        choice:
          "Merge child changes, retest parents, then progress parent changes",
        reason: "Verify changes across consuming repositories.",
      },
      {
        topic: "Regression checks",
        choice: "Update or add affected Jest tests",
        reason: "Maintain CI and coverage checks for the changes.",
      },
    ],
    results: [
      {
        text: "Resolved assigned bugs and translation tickets, tested changes through dependent repositories, and updated tests where needed to satisfy the project's checks.",
      },
    ],
    lessons: {
      text: "Gained practical exposure to microfrontends, shared packages, cross-repository debugging, translation workflows, dependency-aware pull requests, and Jest. The work developed patience and a systematic approach to finding issues across several layers of a large codebase.",
    },
    productUrl: "https://kw.com/",
    productLinkLabel: "Visit Keller Williams website",
  },
  {
    role: "Freelance Full-Stack Developer",
    team: "Client project",
    platform: "Web",
    status: "Public link",
    scope: [
      "iOS/Android camera selection, zoom, torch & permissions",
      "Combined embedded and standalone workflows",
      "3×1, 2×1 and 1.5×1 product labels",
      "Product search, selection, quantities/QOH & removal",
      "Save/Cancel layout editing & long-text truncation",
      "Inventory-location fallback & GraphQL fixes",
      "Order scan tags & rescan handling",
    ],
    slug: "shopify-app",
    name: "Shopify GP-Lite / Barcode Buddy",
    category: "Web platforms",
    subtitle: "Embedded & standalone scanning and labels",
    summary:
      "Shopify picking, packing, barcode scanning, and product-label printing.",
    stack: [
      "Ruby on Rails",
      "React",
      "Shopify GraphQL API",
      "JsBarcode",
      "WickedPDF",
      "PDF-merging tools",
    ],
    overview:
      "Shopify picking, packing, barcode scanning, and product-label printing.",
    contributions: [
      {
        title: "Mobile camera scanning",
        description:
          "Implemented iOS/Android barcode scanning with camera selection, zoom, torch controls, and permission handling.",
      },
      {
        title: "Embedded & standalone",
        description:
          "Extended the embedded app with standalone workflows while preserving embedded use. Completed this feature work as a freelance full-stack developer.",
      },
      {
        title: "Labels & Shopify data",
        description:
          "Worked across React and Rails on label printing, barcode/PDF generation, Shopify GraphQL, order scan tags, and rescan handling.",
      },
    ],
    results: [
      {
        text: "Completed a combined embedded/standalone mobile-scanning solution and the described printing and data-integration improvements.",
      },
    ],
    problem: {
      text: "The existing application was embedded-only. The feature work needed mobile camera scanning and standalone workflows alongside the embedded experience, together with label-printing and Shopify-data improvements.",
    },
    solution: {
      text: "Combined embedded and standalone workflows supported the mobile scanning experience. Shopify GraphQL supplied product, variant, inventory-location, and metafield data. JsBarcode, WickedPDF, and PDF-merging tools supported the label-printing workflow.",
    },
    decisions: [
      {
        topic: "App modes",
        choice: "Preserve embedded use while adding standalone workflows",
        reason:
          "Support mobile scanning alongside the existing Shopify experience.",
      },
      {
        topic: "Label generation",
        choice: "JsBarcode, WickedPDF and PDF-merging tools",
        reason: "Generate barcodes and printable product labels.",
      },
      {
        topic: "Shopify data",
        choice: "GraphQL product, variant, location and metafield integration",
        reason: "Support labels and handle missing inventory-location data.",
      },
    ],
    projectStatus: "Completed feature work",
    productUrl:
      "https://apps.shopify.com/groovepacker-lite?st_source=autocomplete&surface_detail=autocomplete_apps",
    productLinkLabel: "View Shopify App Store listing",
  },
];
