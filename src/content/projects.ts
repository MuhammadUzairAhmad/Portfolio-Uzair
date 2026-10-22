import type { PortfolioProject } from "../types/content.ts";
// Owner-confirmed scope; concise detail copy preserves attribution, media and access boundaries.
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
      "Rendering & performance fixes",
      "API requests & caching",
      "Figma interface updates",
      "Reusable components & validation",
      "Backend/API contributions",
      "Dynamic ticket PDFs",
    ],
    overview:
      "Bitlux supports the work behind private-jet bookings, bringing trip requests, operational screens, and ticket documents into a web application. I contributed to an existing product where performance issues, inconsistent data rendering, and changing interface designs needed attention alongside new feature work.\n\nMy responsibility was to investigate those problems and improve the affected interfaces and integrations. I introduced TanStack Query for API requests and caching, added validation and toast feedback, updated screens to new Figma designs, and refactored components. I also integrated backend APIs and generated dynamic ticket PDFs with jsPDF. The work resolved identified issues and improved the maintainability of the application; the product itself continues to evolve.\n\nMy scope also included backend/API contributions within the existing application.",
    ownership: {
      label: "Existing product · Team contribution",
      summary:
        "Contributed to an existing Sofrix product through assigned improvements and feature work across the frontend and backend/APIs. The work shown here is my contribution within the wider product team.",
    },
    contributions: [
      {
        title: "Rendering & data handling",
        description:
          "Investigated rendering and performance issues and introduced TanStack Query for API requests and server-data caching.",
      },
      {
        title: "Interface improvements",
        description:
          "Updated screens from Figma, added validation and toast feedback, and refactored reusable components.",
      },
      {
        title: "APIs & ticket documents",
        description:
          "Contributed backend/API work, integrated services and generated dynamic ticket PDFs with jsPDF.",
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
        topic: "Documents",
        choice: "Generate ticket PDFs using jsPDF",
        reason: "Build dynamic documents from ticket information.",
      },
    ],
    results: [
      {
        text: "Resolved identified rendering issues, improved API handling and validation, and delivered updated interfaces and dynamic ticket documents.",
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
    projectStatus: "Ongoing product",
    context:
      "Bitlux is a private-jet booking and operations platform. It brings booking requests, quote management, operational workflows and ticket documents into a connected experience.",
    developmentScope: "Full-stack",
    detailSummary: "Private-jet booking and ticketing operations.",
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
      "Marketplace listings & user flows",
      "Backend/API work & integrations",
      "Approval & decline workflows",
      "GPS discovery & Plaid integration",
      "Capacitor fixes & deployment support",
      "Web/mobile flow verification",
    ],
    overview:
      "Linxx connects marketplace listings with ambassador and shopper workflows across web and mobile. Its features include job discovery, GPS-related functionality, approvals, and a Plaid integration. My work focused on connecting these interfaces to backend services and making the affected user journeys work from beginning to end.\n\nI integrated APIs, updated screens, investigated bugs, and tested the connected flows. On mobile, I worked through issues specific to the Capacitor integration while supporting deployment. My contributions also included approval and decline flows, GPS features, and Plaid integration. After the changes, I verified the affected workflows across web and mobile. The ongoing product provided practical experience improving connected features across two delivery environments.\n\nMy responsibilities also included backend/API work, in addition to frontend integration and mobile debugging.",
    ownership: {
      label: "Web & mobile · Team contribution",
      summary:
        "Worked within the Sofrix team on an existing marketplace across web, mobile and backend/API flows. My scope included feature updates, integration work, debugging and support for the Capacitor mobile delivery.",
    },
    contributions: [
      {
        title: "Marketplace features & APIs",
        description:
          "Contributed frontend and backend/API work for marketplace listings, approval/decline workflows, GPS discovery and Plaid integration.",
      },
      {
        title: "Mobile fixes & delivery",
        description:
          "Investigated Capacitor-specific issues, fixed mobile behavior and supported deployment.",
      },
      {
        title: "End-to-end verification",
        description:
          "Tested affected web and mobile journeys to verify the connected flows.",
      },
    ],
    problem: {
      text: "The frontend needed backend API integration and working end-to-end flows. The mobile application also had issues associated with its Capacitor integration.",
    },
    solution: {
      text: "I worked through the connected frontend and API flows and tested behavior across the web application and its Capacitor-based mobile experience.",
    },
    decisions: [],
    results: [
      {
        text: "Connected and verified affected marketplace journeys, resolved web/mobile issues and supported the Capacitor mobile delivery.",
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
      "Linxx is an ambassador marketplace spanning web and mobile. It connects marketplace listings and discovery with the approval workflows used to manage brand ambassador programs.",
    developmentScope: "Full-stack",
    detailSummary:
      "A marketplace connecting listings, ambassadors and shoppers across web and mobile.",
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
      "Candidate, recruiter & admin dashboards",
      "Reusable components & form validation",
      "Authentication implementation",
      "Backend API integration",
      "Redux Toolkit & TanStack Query",
      "Senior-guided backend API creation",
    ],
    overview:
      "SkillMatch brings candidate profiles, job workflows, assessments, and recruitment dashboards into one platform. Candidates and hiring teams need connected interfaces to move between account details, opportunities, and administrative tasks. I contributed from day one, working within the development team on frontend features, integrations and backend APIs.\n\nMy contributions included responsive UI, dashboards, form validation, shared components, and backend API integration. I used Redux Toolkit, Tailwind CSS, and TanStack Query as part of frontend delivery, and also created APIs under senior guidance. This was my first professional project, with responsibilities spanning substantial frontend implementation and supported backend contributions. I delivered these application features as part of the wider team.",
    ownership: {
      label: "From day one · Team contribution",
      summary:
        "Contributed from the start as part of the Netixsol development team. My work covered frontend delivery, authentication and API integration, alongside backend API creation under senior developer guidance.",
    },
    contributions: [
      {
        title: "Screens & shared components",
        description:
          "Built responsive candidate, recruiter and admin interfaces with form validation and reusable components.",
      },
      {
        title: "Authentication & connected state",
        description:
          "Implemented authentication, integrated APIs and worked with Redux Toolkit and TanStack Query.",
      },
      {
        title: "Backend APIs",
        description:
          "Created APIs under senior developer guidance alongside frontend delivery.",
      },
    ],
    problem: {
      text: "The platform needed responsive frontend interfaces, validation, reusable components, authentication, and integration with backend services.",
    },
    solution: {
      text: "I worked within the team's frontend and backend patterns, using shared components, state management, API integration, and validation to build connected application features.",
    },
    decisions: [],
    results: [
      {
        text: "Delivered connected screens, dashboard features and authentication, and contributed backend APIs as part of the wider team.",
      },
    ],
    productUrl: "https://www.skillmatch.tech/",
    context:
      "SkillMatch is a recruitment and assessment product for candidates, recruiters and administrators. It brings profiles, job workflows, assessments and recruitment dashboards together to support the hiring process.",
    developmentScope: "Full-stack",
    involvement: "Contributed from day one",
    detailSummary:
      "A recruitment and assessment product connecting candidates and hiring teams.",
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
      "Clerk sign-in, sign-up & OTP",
      "Existing Python API integration",
      "Listing filters, cart & P2P transactions",
      "Wallets, holdings & credit retirement",
      "PDF transaction receipts",
    ],
    overview:
      "Hestiya Marketplace is a Web3 carbon-credit platform for discovering credits, trading, managing holdings, and retirement. The project needed a frontend that brought together conventional account and marketplace features with wallet connections and blockchain transactions. I owned the React frontend implementation, starting from supplied Figma designs.\n\nI collaborated with the developer building the Python backend to understand its APIs and connect the interface. I integrated Clerk sign-in and sign-up, worked on wallet and smart-contract interactions with Wagmi and Reown AppKit, and delivered listing filters, cart interactions, P2P transactions, holdings, retirement, OTP verification, and PDF receipts. This connected the marketplace experience to its supporting services while keeping backend authorship with the other developer.",
    ownership: {
      label: "Project scope · Frontend delivery",
      summary:
        "My company role covered full-stack work; on Hestiya, I was responsible for the frontend and its integrations. I worked from supplied Figma designs and collaborated with another engineer who built the Python backend.",
    },
    contributions: [
      {
        title: "Marketplace frontend",
        description:
          "Built responsive React screens from Figma, including listing filters, cart, P2P transactions and holdings.",
      },
      {
        title: "Accounts & API integration",
        description:
          "Integrated Clerk sign-in, sign-up and OTP, and worked with the backend developer to connect their existing Python APIs.",
      },
      {
        title: "Wallets & credit workflows",
        description:
          "Connected wallets and smart-contract interactions with Wagmi and Reown AppKit, including carbon-credit retirement and PDF transaction receipts.",
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
        topic: "Web3 connections",
        choice: "Wagmi and Reown AppKit",
        reason: "Connect wallets and smart-contract transaction flows.",
      },
    ],
    results: [
      {
        text: "Delivered a connected marketplace frontend spanning discovery, account access, transactions, holdings and carbon-credit retirement.",
      },
    ],
    productUrl: "https://marketplace.hestiya.com/",
    walkthroughs: [
      {
        label: "Hestiya walkthrough",
        url: "https://www.loom.com/share/46665cdffcbf4862a7d0fdd3b43ec15d",
        provider: "Loom",
      },
    ],
    context:
      "Hestiya is a Web3 carbon-credit marketplace for discovering and trading credits, managing holdings and retiring credits. Its user experience connects account access and marketplace workflows with wallets and blockchain transactions.",
    developmentScope: "Frontend & integrations",
    detailSummary:
      "A carbon-credit marketplace for discovery, trading, holdings and retirement.",
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
      "Google & email/password authentication",
      "Wallet & client-provided contract integration",
      "Spin-wheel gameplay & reward history",
      "Referrals, bonuses & credit claims",
      "User management & claim approvals",
      "Referral, prize & free-spin settings",
    ],
    overview:
      "The client began with a frontend demo created in v0. To become a working product, it needed application data, authentication, wallet connections, gameplay, and the user and administrative workflows behind referrals and credits. I converted that starting point into a Next.js application and built both frontend and backend functionality.\n\nI implemented Google and email/password sign-in with NextAuth, MongoDB-backed application data, wallet integration, and the spin-wheel experience. The work also covered referral validation and rewards, bonuses, credit claims, account histories, and administrative controls for users, transfers, claims, referral percentages, prizes, and free-spin timing. I integrated a smart contract supplied by the client. The delivery turned a visual demo into connected full-stack functionality.",
    ownership: {
      label: "Client demo → Full-stack delivery",
      summary:
        "Started from the client’s v0 frontend demo and built the connected application’s frontend, backend and data workflows. The client supplied the smart contract; my responsibility was integrating it into the product.",
    },
    contributions: [
      {
        title: "Full-stack delivery",
        description:
          "Turned the client’s v0 demo into a connected Next.js frontend and backend with MongoDB application data.",
      },
      {
        title: "Accounts & gameplay",
        description:
          "Implemented Google and email/password sign-in, wallet connectivity and spin-wheel gameplay. Integrated the client-provided smart contract.",
      },
      {
        title: "Referrals & rewards",
        description:
          "Built referral validation, bonuses, credit claims and user reward histories.",
      },
      {
        title: "Administration",
        description:
          "Added user editing and account controls, claim/transfer approvals, and settings for referral percentages, prizes and free-spin timing.",
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
    ],
    results: [
      {
        text: "Turned the frontend demo into a working full-stack application with connected accounts, gameplay, referrals, credits and administrative workflows.",
      },
    ],
    productUrl: "https://gaming-platform-frontend-eight.vercel.app/",
    walkthroughs: [
      {
        label: "Gaming Platform walkthrough",
        url: "https://www.loom.com/share/6da67165fe7d42be84fdd0f9fa4829ea",
        provider: "Loom",
      },
    ],
    context:
      "A wallet-connected gaming product with spin-wheel gameplay, referrals, bonuses and credit claims. Users can manage their accounts and rewards, while administrators manage users, claims and reward settings.",
    cardSubtitle: "Full-stack application · Frontend + backend",
    developmentScope: "Full-stack",
    detailSummary:
      "A wallet-connected gaming application with user and admin workflows.",
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
    role: "Frontend Developer",
    team: "Sofrix",
    platform: "Web",
    status: "Public link",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Formik", "Yup"],
    scope: [
      "Responsive company pages",
      "Client-requested visual presentation",
      "Formik & Yup contact validation",
    ],
    overview:
      "Development Solutions Group needed a company website that followed the client’s requested design and presented its business and projects. The scope was focused: responsive Home, About, Projects, and Contact interfaces with a consistent presentation across screen sizes.\n\nI built the frontend using React 19, TypeScript, and Tailwind CSS, following the supplied direction. For the contact interface, I used Formik and Yup to implement form validation. The delivery provided the requested company presentation and contact experience. The delivered pages covered the client’s requested company presentation and contact interface.",
    ownership: {
      label: "Project scope · Frontend delivery",
      summary:
        "My company role covered full-stack work; this project focused on frontend delivery. I built the company website from the client’s requested design and implemented the contact-form interface and validation.",
    },
    contributions: [
      {
        title: "Company pages",
        description:
          "Built responsive Home, About, Projects and Contact pages from the client’s design with React, TypeScript and Tailwind CSS.",
      },
      {
        title: "Contact experience",
        description:
          "Implemented contact-form validation with Formik and Yup, alongside consistent spacing and presentation across screen sizes.",
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
        text: "Delivered the requested company website with responsive page layouts and a validated contact interface.",
      },
    ],
    productUrl: "https://development-solution-group.vercel.app/",
    context:
      "Development Solutions Group’s company website presents its business and projects through Home, About and Projects pages, with a Contact interface for enquiries.",
    developmentScope: "Frontend & integrations",
    detailSummary:
      "A responsive company website built to the client’s requested presentation.",
  },
  {
    role: "Full-Stack Developer · Web & Mobile",
    team: "Sofrix",
    platform: "Web + iOS + Android",
    status: "Private project",
    scope: [
      "iOS & Android screens from Figma",
      "Registration, OTP & profile completion",
      "Web UI & product-listing backend",
      "Dynamic banners & discounts",
      "Account & theme settings",
      "Redux Toolkit & file-based routing",
      "Multilingual & location-related features",
    ],
    slug: "get-foodies",
    name: "Get Foodies",
    category: "Web & mobile",
    subtitle: "Food delivery across web and mobile",
    summary:
      "A food application across web, iOS and Android. I built mobile and web interfaces, contributed backend features for product listings, dynamic banners, discounts and settings, and connected mobile onboarding and multilingual flows.",
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
      "Get Foodies is a food application with web, iOS and Android experiences. It includes product listings, dynamic banners, discounts, account and theme settings, plus mobile onboarding, multilingual interfaces and location-related features.\n\nI built mobile interfaces from Figma with React Native and Expo, connected registration, OTP verification and profile completion, and implemented Redux Toolkit state and file-based routing. I also built web application UI and backend features for product listings, dynamic banners, discounts, account settings and theme settings using the project's Node.js/Express backend.",
    ownership: {
      label: "Web & mobile · Full-stack contribution",
      summary:
        "Worked at Sofrix on mobile interfaces from supplied Figma designs, plus web UI and backend features. My contribution spanned the customer-facing screens and the product, promotion and settings services described below.",
    },
    contributions: [
      {
        title: "Mobile interfaces",
        description:
          "Built iOS and Android screens from Figma and connected registration, OTP verification, profile completion and banner interfaces.",
      },
      {
        title: "Web UI & backend features",
        description:
          "Built web application interfaces and backend features for product listings, dynamic banners, discounts, account settings and theme settings.",
      },
      {
        title: "State & localization",
        description:
          "Implemented Redux Toolkit state, multilingual interfaces, location-related features and file-based routing.",
      },
    ],
    decisions: [],
    problem: {
      text: "Build connected food-application experiences across web, iOS and Android, including product listings, promotional content and account settings.",
    },
    solution: {
      text: "Used React Native and Expo with file-based routing. I learned mobile development principles and application lifecycle behavior while implementing the project. AI-assisted learning helped me understand the unfamiliar stack and move through implementation faster.",
    },
    results: [
      {
        text: "Delivered web interfaces and backend features for listings, banners, discounts and settings, alongside connected onboarding, profile, multilingual and location-related mobile flows.",
      },
    ],
    walkthroughs: [
      {
        label: "Get Foodies walkthrough",
        url: "https://www.loom.com/share/e0b16509dc234de2bd5298a0a78859b2",
        provider: "Loom",
      },
    ],
    context:
      "Get Foodies is a food application for web, iOS and Android. It combines product listings, dynamic banners and discounts with account and theme settings; its mobile experience also includes onboarding, multilingual interfaces and location-related features.",
    developmentScope: "Full-stack",
    detailSummary:
      "A food application with web, iOS and Android experiences, product listings, discounts and account settings.",
    developmentWorkflow:
      "I used AI-assisted learning alongside implementation to understand React Native, Expo and mobile application lifecycle behavior.",
  },
  {
    role: "Frontend Developer",
    team: "Sofrix",
    platform: "Web",
    status: "Private project",
    scope: [
      "Browser controls for existing desktop APIs",
      "PDF jobs & copy-quantity commands",
      "Frontend Socket.io event listener",
      "Ready, queued & printing states",
      "Failed & printed job updates",
      "Printer online/offline status",
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
    ownership: {
      label: "Existing system · Frontend integration",
      summary:
        "My scope was the browser interface, existing API integration and a frontend Socket.io listener. The existing desktop application and its APIs handled print execution; I did not create or modify the backend APIs.",
    },
    contributions: [
      {
        title: "Browser-based printing",
        description:
          "Built web controls that used existing desktop APIs to submit PDF print jobs and copy quantities. The desktop application handled printer execution.",
      },
      {
        title: "Live job & printer status",
        description:
          "Integrated a frontend Socket.io listener for ready, queued, printing, failed and printed states, plus printer online/offline updates.",
      },
    ],
    problem: {
      text: "Provide browser-based operation so different users could work from different locations instead of depending on one computer's interface.",
    },
    solution: {
      text: "The web application consumed existing desktop APIs for actions and listened for status events through Socket.io. The observed workflow included ready, queued, printing, failed, and printed job states, together with printer online/offline status.",
    },
    decisions: [],
    results: [
      {
        text: "Enabled browser-based operation and monitoring while the existing desktop application continued to execute print jobs.",
      },
    ],
    context:
      "The client wanted users in different locations to operate printing workflows through a browser. The existing desktop application accepted PDF jobs and copy quantities and remained responsible for printer execution.",
    implementation: {
      title: "Browser operation, desktop execution",
      description:
        "Browser controls use existing desktop APIs; a frontend listener displays the resulting status events.",
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
    detailSummary:
      "Browser-based operation and monitoring for an existing desktop printing system.",
  },
  {
    role: "Junior Software Engineer",
    team: "Strategist HUB",
    platform: "Web",
    status: "Public link",
    scope: [
      "Cross-repository bug investigation",
      "i18next translation key/value updates",
      "Generated translation PR integration",
      "Child/parent merge coordination",
      "Jest regression & CI coverage checks",
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
      "Keller Williams’ public real-estate platform helps people explore homes to buy or rent and connect with local agents. Its wider technology ecosystem supports agents and customer relationships across the property journey.\n\nAt Strategist HUB, I contributed as a Junior Software Engineer shadowing the CTO across more than 27 connected React/Next.js repositories, including applications and shared packages. I worked on assigned bugs, i18next translation workflows supporting up to 22 languages, dependent repository changes, Jest tests and CI coverage checks.",
    ownership: {
      label: "Existing platform · Junior team contribution",
      summary:
        "Worked as a Junior Software Engineer at Strategist HUB while shadowing the CTO. I handled assigned bug and translation tickets within the existing multi-repository platform and followed the team’s review, merge and testing workflows.",
    },
    contributions: [
      {
        title: "Ticket investigation",
        description:
          "Traced assigned bugs through 27+ connected React/Next.js repositories and shared packages.",
      },
      {
        title: "Translation updates",
        description:
          "Added i18next key/value pairs for translation workflows supporting up to 22 languages and incorporated generated translation pull requests from the team’s existing tooling.",
      },
      {
        title: "Dependent changes & tests",
        description:
          "Coordinated child-repository merges, retested parent applications and updated affected Jest tests and CI coverage checks.",
      },
    ],
    problem: {
      text: "Bugs and translation changes could involve code in several dependent repositories. A small UI change or missing translation key could require tracing through parent and child repositories, coordinating merges, and retesting the consuming applications.",
    },
    solution: {
      text: "Worked within the existing microfrontend/shared-package structure, used i18next translation keys and the team's translation tooling, debugged across repository boundaries, and maintained Jest tests and coverage checks.",
    },
    decisions: [],
    results: [
      {
        text: "Resolved assigned bugs and translation tickets, verified dependent applications and maintained affected tests and coverage checks.",
      },
    ],
    productUrl: "https://kw.com/",
    productLinkLabel: "Visit Keller Williams website",
    context:
      "Keller Williams’ public real-estate platform helps people explore homes to buy or rent and connect with local agents. Its wider technology ecosystem supports agents and customer relationships across the property journey.",
    implementation: {
      title: "Working through repository dependencies",
      description:
        "Trace the dependency, progress child changes and verify consuming applications.",
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
    detailSummary:
      "A real-estate platform connecting property search, local agents and customer experiences.",
  },
  {
    role: "Freelance Full-Stack Developer",
    team: "Client project",
    platform: "Web",
    status: "Public link",
    scope: [
      "iOS/Android camera scanning & controls",
      "Embedded-to-browser scanning launch",
      "Configurable product-label sizes",
      "Product search, selection & quantities",
      "Quantity-on-hand edits & location fallback",
      "Save/Cancel layouts & long-text handling",
      "Barcode/PDF generation & rescan handling",
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
      "GP-Lite / Barcode Buddy supports Shopify picking, packing, barcode scanning, and product-label printing. The existing application was embedded-only. Its iframe restricted the media permissions needed for camera scanning in this implementation. I added a button opening the application outside the iframe so users could grant camera access and scan successfully while retaining embedded workflows. I completed the described work as a freelance full-stack developer, contributing across React and Ruby on Rails.\n\nI implemented iOS and Android camera scanning with camera selection, zoom, torch controls, and permission handling. I also worked on configurable label sizes, product selection and quantities, Save/Cancel layout editing, barcode and PDF generation, and long-text handling. Shopify GraphQL integration covered product, variant, inventory-location, and metafield data, including missing-location fixes. The completed work preserved embedded use while adding standalone workflows and improving printing and scanning features.",
    ownership: {
      label: "Existing app · Freelance feature delivery",
      summary:
        "Completed scoped feature work across React and Ruby on Rails in an existing client application. My responsibility was extending scanning, labels and Shopify-data workflows while preserving the embedded app experience.",
    },
    contributions: [
      {
        title: "Mobile camera scanning",
        description:
          "Implemented iOS/Android camera scanning with camera selection, zoom, torch controls and permission handling.",
      },
      {
        title: "Combined app experience",
        description:
          "Added a button to open scanning in a standalone browser context while preserving the existing embedded Shopify experience.",
      },
      {
        title: "Product labels & PDFs",
        description:
          "Built configurable label sizes, product search/selection and quantities, Save/Cancel editing and long-text handling across React and Rails. Connected barcode and PDF generation.",
      },
      {
        title: "Inventory & scan handling",
        description:
          "Integrated Shopify product, variant, inventory-location and metafield data. Worked on quantity-on-hand edits, missing-location fallback, scan tags and rescan behavior.",
      },
    ],
    results: [
      {
        text: "Enabled successful camera scanning in a standalone browser context while preserving the embedded app, and completed the described label-printing and Shopify-data improvements.",
      },
    ],
    highlightChallenge: true,
    problem: {
      text: "The existing application was embedded-only. In this implementation, the Shopify iframe restricted the camera/media permissions needed for mobile barcode scanning, so the scanning workflow could not run successfully inside that embedded context.",
    },
    solution: {
      text: "Kept the embedded app and added an in-app button that opened the application in a standalone browser context. Users could grant camera access there and complete barcode scanning successfully. This combined approach preserved embedded workflows without converting the entire app to standalone mode.",
    },
    decisions: [
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
      "GP-Lite / Barcode Buddy helps Shopify merchants with picking, packing, barcode scanning and product-label printing. It connects product and inventory information to scanning and printable-label workflows.",
    developmentScope: "Full-stack",
    detailSummary:
      "Shopify picking, packing, barcode scanning and product-label printing.",
  },
];
