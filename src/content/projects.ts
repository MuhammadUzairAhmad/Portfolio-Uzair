import type { PortfolioProject } from "../types/content.ts";
// Owner clarifications: full-stack positioning, SkillMatch from day one, and Onyx integration-only.
export const projects: PortfolioProject[] = [
  {
    slug: "bitlux",
    mockup: "/images/projects/bitlux.webp",
    name: "Bitlux",
    category: "Web platforms",
    subtitle: "Private jet booking & operations",
    summary:
      "A private aviation platform for booking and ticketing operations. I contributed across the frontend and backend, improving rendering, API handling and caching, updating interfaces, and generating ticket PDFs.",
    image: {
      src: "/images/projects/bitlux-screen.webp",
      width: 1169,
      height: 832,
    },
    featured: true,
    role: "Full-Stack Developer",
    team: "Sofrix",
    platform: "Web",
    status: "Private project",
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
      "Backend & API contributions",
    ],
    overview:
      "Bitlux supports the work behind private-jet bookings, bringing trip requests, operational screens, and ticket documents into a web application. I contributed to an existing product where performance issues, inconsistent data rendering, and changing interface designs needed attention alongside new feature work.\n\nMy responsibility was to investigate those problems and improve the affected interfaces and integrations. I introduced TanStack Query for API requests and caching, added validation and toast feedback, updated screens to new Figma designs, and refactored components. I also integrated backend APIs and generated dynamic ticket PDFs with jsPDF. The work resolved identified issues and improved the maintainability of the application; the product itself continues to evolve.\n\nMy scope also included backend/API contributions within the existing application.",
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
      {
        title: "Backend & API contributions",
        description:
          "Contributed to backend/API work alongside frontend features, integrations and maintenance in the existing application.",
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
        text: "Resolved the identified rendering and performance issues, aligned affected screens with updated designs, and improved API handling and validation. Dynamic ticket PDFs and reusable components supported the existing booking and operations workflows.",
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
    context:
      "Bitlux supports private-jet bookings, operational requests and ticket documents. I worked across frontend and backend contributions within the existing product, alongside rendering fixes, updated interfaces and API integrations.",
    implementation: {
      title: "Improving the booking workflow",
      description: "The areas I changed within the existing application.",
      steps: [
        {
          title: "Interface",
          description: "Updated Figma screens, validation and toast feedback.",
        },
        {
          title: "Requests & caching",
          description:
            "Introduced TanStack Query for API handling and server-data caching.",
        },
        {
          title: "Operational documents",
          description:
            "Integrated backend APIs and generated dynamic ticket PDFs with jsPDF.",
        },
        {
          title: "Backend contributions",
          description:
            "Worked on backend/API functionality alongside the frontend and existing integrations.",
        },
      ],
    },
    developmentScope: "Full-stack",
  },
  {
    slug: "linxx",
    cardSubtitle: "Ambassador marketplace · Web + Mobile",
    mockup: "/images/projects/linxx.webp",
    name: "Linxx",
    category: "Web & mobile",
    subtitle: "An ambassador marketplace, across screens",
    summary:
      "A job and service marketplace across web and mobile. I contributed to frontend and backend/API work, connected user flows, and resolved application and Capacitor mobile issues.",
    image: {
      src: "/images/projects/linxx-screen.webp",
      width: 1440,
      height: 798,
    },
    featured: true,
    role: "Full-Stack Developer",
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
      "Backend & API contributions",
    ],
    overview:
      "Linxx connects marketplace listings with ambassador and shopper workflows across web and mobile. Its features include job discovery, GPS-related functionality, approvals, and a Plaid integration. My work focused on connecting these interfaces to backend services and making the affected user journeys work from beginning to end.\n\nI integrated APIs, updated screens, investigated bugs, and tested the connected flows. On mobile, I worked through issues specific to the Capacitor integration while supporting deployment. My contributions also included approval and decline flows, GPS features, and Plaid integration. After the changes, I verified the affected workflows across web and mobile. The ongoing product provided practical experience improving connected features across two delivery environments.\n\nMy responsibilities also included backend/API work, in addition to frontend integration and mobile debugging.",
    contributions: [
      {
        title: "Connected workflows",
        description:
          "Integrated backend APIs, updated interfaces, and tested complete end-to-end user flows.",
      },
      {
        title: "Web & mobile debugging",
        description:
          "Investigated and fixed application bugs and Capacitor-specific mobile issues, then tested affected web and mobile flows.",
      },
      {
        title: "Marketplace integrations",
        description:
          "Contributed approval/decline flows, GPS features, Plaid integration, and mobile deployment support.",
      },
      {
        title: "Backend & API work",
        description:
          "Contributed backend/API work alongside frontend integrations and improvements to connected application flows.",
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
        text: "Connected frontend screens to the required backend services, resolved identified web and mobile issues, and verified the affected end-to-end flows. This included marketplace interactions and fixes to the Capacitor mobile experience.",
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
    context:
      "Linxx connects marketplace listings with ambassador and shopper workflows across web and mobile, including discovery, approvals, GPS-related features and Plaid integration. My contributions spanned the frontend, backend/API work, and verification of affected user journeys.",
    implementation: {
      title: "Connected across web and mobile",
      description:
        "My integration, debugging and verification work across the product.",
      steps: [
        {
          title: "Marketplace journeys",
          description:
            "Connected backend APIs to listings, approvals and other interfaces.",
        },
        {
          title: "Mobile behavior",
          description:
            "Investigated and fixed issues in the Capacitor mobile experience.",
        },
        {
          title: "Flow verification",
          description:
            "Tested affected end-to-end journeys across web and mobile.",
        },
        {
          title: "Backend contributions",
          description:
            "Contributed to backend/API functionality as part of connected web and mobile feature work.",
        },
      ],
    },
    developmentScope: "Full-stack",
  },
  {
    slug: "skillmatch",
    cardSubtitle: "Recruitment & assessments",
    mockup: "/images/projects/skillmatch.webp",
    name: "SkillMatch",
    category: "Web platforms",
    subtitle: "Connecting candidates and recruiters",
    summary:
      "A recruitment and assessment product I contributed to from day one. I built frontend screens, dashboards, validation and reusable components, integrated APIs, and created backend APIs under senior developer guidance.",
    image: {
      src: "/images/projects/skillmatch.webp",
      width: 1440,
      height: 811,
    },
    featured: true,
    role: "Full-Stack Developer",
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
      "SkillMatch brings candidate profiles, job workflows, assessments, and recruitment dashboards into one platform. Candidates and hiring teams need connected interfaces to move between account details, opportunities, and administrative tasks. I contributed from day one, working within the development team on frontend features, integrations and backend APIs.\n\nMy contributions included responsive UI, dashboards, form validation, shared components, and backend API integration. I used Redux Toolkit, Tailwind CSS, and TanStack Query as part of frontend delivery, and also created APIs under senior guidance. This was my first professional project, with responsibilities spanning substantial frontend implementation and supported backend contributions. I delivered these application features as part of the wider team.",
    contributions: [
      {
        title: "Frontend delivery",
        description:
          "Built responsive UI screens and dashboards, validation, and reusable components under senior developers.",
      },
      {
        title: "State & integrations",
        description:
          "Implemented authentication, integrated APIs, and worked with Redux Toolkit, Tailwind CSS, and TanStack Query.",
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
        text: "Delivered responsive screens and dashboard features, connected them to backend services, and contributed APIs under senior guidance. The work supported candidate, recruiter, and administrative workflows as part of the wider team.",
      },
    ],
    lessons: {
      text: "Built my foundation in professional frontend development, reusable component design, state management, validation, and API integration, while gaining initial backend experience with senior support.",
    },
    productUrl: "https://www.skillmatch.tech/",
    context:
      "SkillMatch brings candidate profiles, jobs, assessments and recruitment dashboards into one product. I contributed from day one, working across frontend features and senior-guided backend API development as part of the team.",
    implementation: {
      title: "Building connected recruitment features",
      description:
        "Contributed from day one across frontend delivery and senior-guided backend API development.",
      steps: [
        {
          title: "Screens & forms",
          description:
            "Built responsive candidate, recruiter and admin interfaces with validation.",
        },
        {
          title: "Shared frontend",
          description:
            "Developed reusable components and worked with Redux Toolkit and TanStack Query.",
        },
        {
          title: "Backend services",
          description:
            "Integrated APIs and created APIs under senior developer guidance.",
        },
      ],
    },
    developmentScope: "Full-stack",
    involvement: "Contributed from day one",
  },
  {
    slug: "hestiya",
    mockup: "/images/projects/hestiya.webp",
    name: "Hestiya Marketplace",
    category: "Web3",
    subtitle: "A blockchain-connected carbon marketplace",
    summary:
      "A carbon-credit marketplace with trading, holdings, and retirement workflows. I built its frontend from Figma and connected authentication, another developer’s backend APIs, wallets, and smart-contract interactions.",
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
      "Hestiya Marketplace is a Web3 carbon-credit platform for discovering credits, trading, managing holdings, and retirement. The project needed a frontend that brought together conventional account and marketplace features with wallet connections and blockchain transactions. I owned the React frontend implementation, starting from supplied Figma designs.\n\nI collaborated with the developer building the Python backend to understand its APIs and connect the interface. I integrated Clerk sign-in and sign-up, worked on wallet and smart-contract interactions with Wagmi and Reown AppKit, and delivered listing filters, cart interactions, P2P transactions, holdings, retirement, OTP verification, and PDF receipts. This connected the marketplace experience to its supporting services while keeping backend authorship with the other developer.",
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
        text: "Delivered the marketplace frontend and connected discovery, authentication, transactions, holdings, and retirement workflows to backend and Web3 services. Users could move through these capabilities in the implemented interface.",
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
    context:
      "Hestiya Marketplace is a Web3 carbon-credit platform for discovering credits, trading, managing holdings, and retirement. The project needed a frontend that brought together conventional account and marketplace features with wallet connections and blockchain transactions. I owned the React frontend implementation, starting from supplied Figma designs.",
    developmentScope: "Frontend & integrations",
  },
  {
    slug: "gaming-platform",
    mockup: "/images/projects/gaming-platform.webp",
    name: "Gaming Platform",
    category: "Web platforms",
    subtitle: "A complete application, built from a frontend demo",
    summary:
      "A wallet-connected gaming product developed from a client’s v0 demo. I built frontend and backend features covering sign-in, gameplay, referrals, credits, and administrative workflows, and integrated the client-provided smart contract.",
    image: {
      src: "/images/projects/gaming-platform.webp",
      width: 1440,
      height: 811,
    },
    role: "Full-Stack Developer",
    team: "Weiblocks",
    platform: "Web",
    status: "Public link",
    keyTechnologies: ["Next.js", "MongoDB", "NextAuth"],
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
      "The client began with a frontend demo created in v0. To become a working product, it needed application data, authentication, wallet connections, gameplay, and the user and administrative workflows behind referrals and credits. I converted that starting point into a Next.js application and built both frontend and backend functionality.\n\nI implemented Google and email/password sign-in with NextAuth, MongoDB-backed application data, wallet integration, and the spin-wheel experience. The work also covered referral validation and rewards, bonuses, credit claims, account histories, and administrative controls for users, transfers, claims, referral percentages, prizes, and free-spin timing. I integrated a smart contract supplied by the client. The delivery turned a visual demo into connected full-stack functionality.",
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
        text: "Converted the client’s frontend demo into a working full-stack application with authentication, wallet interactions, gameplay, referrals, credits, and user/admin workflows. Smart-contract work covered integration with the client’s supplied contract.",
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
    context:
      "The client began with a frontend demo created in v0. To become a working product, it needed application data, authentication, wallet connections, gameplay, and the user and administrative workflows behind referrals and credits. I converted that starting point into a Next.js application and built both frontend and backend functionality.",
    implementation: {
      title: "Full-stack delivery, from demo to product",
      description:
        "I built the application frontend and backend. The client supplied the smart contract.",
      steps: [
        {
          title: "Frontend & backend",
          description:
            "Converted the v0 demo into a working Next.js application.",
        },
        {
          title: "Accounts & application data",
          description:
            "Implemented NextAuth Google/credentials authentication and MongoDB-backed features.",
        },
        {
          title: "Wallets & gameplay",
          description:
            "Integrated wallets and the client’s contract alongside spins, referrals, bonuses and credits.",
        },
        {
          title: "User & admin workflows",
          description:
            "Built history views, account management, approvals and configurable reward settings.",
        },
      ],
    },
    cardSubtitle: "Full-stack application · Frontend + backend",
    developmentScope: "Full-stack",
  },
  {
    slug: "development-solutions-group",
    mockup: "/images/projects/development-solutions-group.webp",
    name: "Development Solutions Group",
    category: "Websites",
    subtitle: "A clear digital presence for a corporate brand",
    summary:
      "A company website built around the client’s requested presentation. I delivered responsive Home, About, Projects, and Contact pages, including a validated contact interface, using React and TypeScript.",
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
    overview:
      "Development Solutions Group needed a company website that followed the client’s requested design and presented its business and projects. The scope was focused: responsive Home, About, Projects, and Contact interfaces with a consistent presentation across screen sizes.\n\nI built the frontend using React 19, TypeScript, and Tailwind CSS, following the supplied direction. For the contact interface, I used Formik and Yup to implement form validation. The delivery provided the requested company presentation and contact experience. The delivered pages covered the client’s requested company presentation and contact interface.",
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
        text: "Delivered the requested company presentation through responsive Home, About, Projects, and Contact pages, with a validated contact interface.",
      },
    ],
    productUrl: "https://development-solution-group.vercel.app/",
    context:
      "Development Solutions Group needed a company website that followed the client’s requested design and presented its business and projects. The scope was focused: responsive Home, About, Projects, and Contact interfaces with a consistent presentation across screen sizes.",
    developmentScope: "Frontend & integrations",
  },
  {
    role: "Full-Stack Developer · Mobile & APIs",
    team: "Sofrix",
    platform: "iOS + Android",
    status: "Private project",
    scope: [
      "iOS & Android interfaces from Figma",
      "Registration, OTP & profile completion",
      "Redux Toolkit & backend API integration",
      "Multilingual interfaces & location features",
      "Banners & file-based routing",
      "Backend & API contributions",
    ],
    slug: "get-foodies",
    name: "Get Foodies",
    category: "Mobile apps",
    subtitle: "A food delivery app for iOS and Android",
    summary:
      "An iOS and Android food application built from Figma designs. I built the mobile interface, contributed backend/API work, and connected onboarding, OTP verification, profile completion, multilingual and location-related features.",
    stack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "Redux Toolkit",
      "i18n",
      "File-based routing",
    ],
    overview:
      "Get Foodies is a company food application for iOS and Android, with onboarding, multilingual interfaces, and location-related features. The project started with Figma designs that needed to become a mobile interface connected to backend services. I built the application UI from scratch using React Native and Expo.\n\nMy work covered registration, OTP verification, profile completion, banner interfaces, Redux Toolkit state, and API integrations. I also implemented multilingual support, location-related features, and file-based routing. The delivery connected the described mobile interfaces and flows across iOS and Android. This was also my first React Native/Expo project, providing practical experience with mobile application structure and lifecycle behavior.\n\nAlongside the mobile interface and API integrations, I also contributed backend/API work.",
    contributions: [
      {
        title: "Mobile UI from Figma",
        description:
          "Built the React Native/Expo application from supplied Figma designs for iOS and Android, including onboarding, profile completion, and banner interfaces.",
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
      {
        title: "Backend & API contributions",
        description:
          "Contributed to backend/API work alongside the mobile interfaces and API integrations.",
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
        text: "Implemented the supplied mobile designs and connected registration, OTP, profile, multilingual, location, and banner features to the application’s state and backend services across iOS and Android.",
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
    context:
      "Get Foodies is a company food application for iOS and Android. I built the mobile UI from Figma with React Native and Expo, contributed backend/API work, and connected the application’s onboarding and other user flows.",
    developmentScope: "Full-stack",
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
      "A web interface for a client’s desktop printing workflow. I connected existing desktop APIs and displayed live job and printer updates, enabling browser-based operation while the desktop software handled printing.",
    stack: ["Onyx Thrive / desktop APIs", "Socket.io frontend listener"],
    overview:
      "Onyx desktop printing software connects to physical printers, accepts PDF jobs and copy quantities, and reports job and printer states. The client wanted different users to operate the workflow through a browser from different locations, rather than relying on a single computer’s interface. My role was to build and integrate the web frontend around the existing desktop application.\n\nWeb actions used the desktop application’s APIs, and a frontend Socket.io listener received updates for ready, queued, printing, failed, and printed jobs, plus online or offline printer status. The existing desktop software remained responsible for execution; I did not build a custom backend or Socket.io server. Work was carried out on the client’s laptop through remote/proxy access, so this is a private case study without public media.",
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
        text: "Enabled the client’s printing workflow to be operated and monitored through a browser. The interface displayed job progress and printer connectivity while the existing desktop application continued to execute print jobs.",
      },
    ],
    lessons: {
      text: "Learned to consume event-driven updates through a frontend Socket.io listener and represent the different stages of a physical printing workflow.",
    },
    context:
      "Onyx desktop printing software connects to physical printers, accepts PDF jobs and copy quantities, and reports job and printer states. The client wanted different users to operate the workflow through a browser from different locations, rather than relying on a single computer’s interface. My role was to build and integrate the web frontend around the existing desktop application.",
    implementation: {
      title: "Browser operation, desktop execution",
      description:
        "The web frontend integrated existing desktop APIs and their event source.",
      steps: [
        {
          title: "Web actions",
          description:
            "Connected browser controls to the desktop application’s APIs.",
        },
        {
          title: "Existing print system",
          description:
            "The desktop software accepted PDF/copy commands and executed printing.",
        },
        {
          title: "Status in the browser",
          description:
            "A frontend Socket.io listener displayed job stages and printer connectivity.",
        },
      ],
    },
    developmentScope: "Frontend & integrations",
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
      "A real-estate platform spanning 27+ connected repositories. As a junior engineer shadowing the CTO, I resolved bugs and translation tickets, coordinated dependent changes, and updated Jest tests and coverage checks.",
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
      "Keller Williams provided experience working within a real-estate platform made up of more than 27 interconnected React/Next.js repositories. These included applications and shared packages, such as table components, with translation support for up to 22 languages. I contributed as a Junior Software Engineer at Strategist HUB while shadowing the CTO.\n\nMy responsibility was to investigate assigned bugs and translation tickets, trace issues through parent and child repositories, and add required translation keys. I incorporated generated pull requests from the team’s existing translation tool, tested locally, and followed the dependency process: review and merge child changes, retest consuming applications, then progress parent changes. I also updated or added affected Jest tests to satisfy CI and coverage checks.",
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
        text: "Resolved assigned bugs and translation tickets, verified changes across dependent repositories, and updated affected Jest tests and coverage checks. The work supported the platform’s existing applications, shared packages, and multilingual interfaces.",
      },
    ],
    lessons: {
      text: "Gained practical exposure to microfrontends, shared packages, cross-repository debugging, translation workflows, dependency-aware pull requests, and Jest. The work developed patience and a systematic approach to finding issues across several layers of a large codebase.",
    },
    productUrl: "https://kw.com/",
    productLinkLabel: "Visit Keller Williams website",
    context:
      "Keller Williams provided experience working within a real-estate platform made up of more than 27 interconnected React/Next.js repositories. These included applications and shared packages, such as table components, with translation support for up to 22 languages. I contributed as a Junior Software Engineer at Strategist HUB while shadowing the CTO.",
    implementation: {
      title: "Working through repository dependencies",
      description:
        "An explanatory view of my ticket and translation workflow in the existing platform.",
      steps: [
        {
          title: "Trace the issue",
          description:
            "Investigated bugs and missing keys through parent/child repositories.",
        },
        {
          title: "Update & review",
          description:
            "Added i18next pairs and incorporated the team’s generated translation PRs.",
        },
        {
          title: "Verify dependants",
          description:
            "Progressed child merges, retested parents and updated affected Jest/coverage checks.",
        },
      ],
    },
    developmentScope: "Frontend & integrations",
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
      "Completed Shopify feature work across embedded and standalone workflows. I added mobile camera scanning and worked on product labels, PDF generation, Shopify data integrations, and scan/rescan behavior using React and Ruby on Rails.",
    stack: [
      "Ruby on Rails",
      "React",
      "Shopify GraphQL API",
      "JsBarcode",
      "WickedPDF",
      "PDF-merging tools",
    ],
    overview:
      "GP-Lite / Barcode Buddy supports Shopify picking, packing, barcode scanning, and product-label printing. The existing application was embedded-only, and the feature work needed mobile camera scanning and standalone workflows alongside that experience. I completed the described work as a freelance full-stack developer, contributing across React and Ruby on Rails.\n\nI implemented iOS and Android camera scanning with camera selection, zoom, torch controls, and permission handling. I also worked on configurable label sizes, product selection and quantities, Save/Cancel layout editing, barcode and PDF generation, and long-text handling. Shopify GraphQL integration covered product, variant, inventory-location, and metafield data, including missing-location fixes. The completed work preserved embedded use while adding standalone workflows and improving printing and scanning features.",
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
        text: "Completed combined embedded and standalone scanning workflows with mobile camera controls, alongside the described label-printing, Shopify data, and order scan/rescan improvements.",
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
    context:
      "GP-Lite / Barcode Buddy supports Shopify picking, packing, barcode scanning, and product-label printing. The existing application was embedded-only, and the feature work needed mobile camera scanning and standalone workflows alongside that experience. I completed the described work as a freelance full-stack developer, contributing across React and Ruby on Rails.",
    implementation: {
      title: "Embedded and standalone workflows",
      description:
        "Completed feature work spanning React, Rails and Shopify integrations.",
      steps: [
        {
          title: "Camera scanning",
          description:
            "iOS/Android camera selection, zoom, torch and permission handling.",
        },
        {
          title: "Shopify data",
          description:
            "GraphQL product, variant, inventory-location and metafield integrations.",
        },
        {
          title: "Print & rescan",
          description:
            "Configurable labels, barcode/PDF generation, scan tags and rescan improvements.",
        },
      ],
    },
    developmentScope: "Full-stack",
  },
];
