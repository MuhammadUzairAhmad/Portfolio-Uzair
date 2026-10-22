// EDIT HERE: résumé skills plus documented experience from the old portfolio.
export const toolkitGroups = [
  {
    id: "frontend",
    title: "Frontend & UI",
    description: "Interfaces, state, forms, and styling.",
    rows: [
      {
        label: "Frameworks",
        items: ["React", "Next.js"],
      },
      {
        label: "Languages",
        items: ["TypeScript", "JavaScript", "HTML", "CSS"],
      },
      {
        label: "Styling",
        items: ["Tailwind CSS", "MUI", "Bootstrap", "Styled Components"],
      },
      {
        label: "State & data",
        items: ["Redux Toolkit", "Context API", "TanStack Query", "Zustand"],
      },
      {
        label: "Forms",
        items: ["React Hook Form", "Formik", "Yup"],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Application logic, access, and integrations.",
    rows: [
      {
        label: "Runtime",
        items: ["Node.js"],
      },
      {
        label: "Backend frameworks",
        items: ["Express.js", "NestJS", "NextJS"],
      },
      {
        label: "APIs",
        items: ["REST", "Third-party", "Next.js API routes"],
      },
      {
        label: "Authentication",
        items: ["NextAuth", "Clerk", "Passport.js", "JWT", "OAuth"],
      },
      {
        label: "Validation & email",
        items: ["Joi", "Yup", "Nodemailer"],
      },
      {
        label: "API documentation",
        items: ["Swagger UI"],
      },
    ],
  },
  {
    id: "data",
    title: "Databases & storage",
    description: "Data models, persistence, and file workflows.",
    rows: [
      {
        label: "Databases",
        items: ["MongoDB", "PostgreSQL", "MySQL"],
      },
      {
        label: "ORM / ODM",
        items: ["Prisma", "Mongoose"],
      },
      {
        label: "Storage & uploads",
        items: ["AWS S3", "Cloudinary", "Multer"],
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile & localization",
    description: "Cross-platform experiences and language support.",
    rows: [
      {
        label: "Platforms",
        items: ["React Native", "Expo", "Capacitor"],
      },
      {
        label: "Localization",
        items: ["i18next"],
      },
    ],
  },
  {
    id: "workflow",
    title: "Build & delivery",
    description: "The tools around development and handoff.",
    rows: [
      {
        label: "Version control",
        items: ["Git", "GitHub"],
      },
      {
        label: "Build tools",
        items: ["Vite", "Webpack", "Babel"],
      },
      {
        label: "Deployment",
        items: ["Vercel", "Netlify"],
      },
      {
        label: "Containers · basic setup",
        items: ["Docker", "Docker Compose"],
      },
      {
        label: "Editors",
        items: ["VS Code", "Cursor", "Codex", "Antigravity"],
      },
    ],
  },
  {
    id: "quality",
    title: "Testing & quality",
    description:
      "Maintainable code, practical solutions and dependable behavior.",
    rows: [
      {
        label: "Maintainability",
        items: ["Clear naming, focused functions and reusable components"],
      },
      {
        label: "Simple solutions",
        items: [
          "Build what is needed; avoid overengineering and premature abstractions",
        ],
      },
      {
        label: "Verification",
        items: ["Test important behavior and check complete user journeys"],
      },
      {
        label: "Testing tools",
        items: ["Jest", "React Testing Library"],
      },
      {
        label: "Supporting tools",
        items: ["TypeScript", "ESLint", "Prettier"],
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & product libraries",
    description:
      "Tools connected to product workflows, documents, and commerce.",
    rows: [
      {
        label: "External services",
        items: ["Plaid API", "Shopify GraphQL API"],
      },
      {
        label: "Documents & editing",
        items: ["jsPDF", "Tiptap"],
      },
      {
        label: "Web3",
        items: ["Wagmi", "Wallet connectivity", "Smart contract integration"],
      },
      {
        label: "Commerce experience",
        items: ["Shopify embedded & standalone apps"],
      },
    ],
  },
];
