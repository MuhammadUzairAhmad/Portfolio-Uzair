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
        items: ["Node.js", "Express", "NestJS"],
      },
      {
        label: "APIs",
        items: ["REST", "GraphQL", "Next.js API routes"],
      },
      {
        label: "Authentication",
        items: ["NextAuth", "Clerk", "Passport.js", "JWT", "OAuth"],
      },
      {
        label: "Validation & email",
        items: ["Joi", "Nodemailer"],
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
        label: "State",
        items: ["Redux Toolkit"],
      },
      {
        label: "Localization",
        items: ["i18n", "i18next"],
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
        items: ["VS Code", "Cursor"],
      },
    ],
  },
  {
    id: "quality",
    title: "Testing & quality",
    description: "Checks that help keep changes dependable.",
    rows: [
      {
        label: "Testing",
        items: ["Jest", "React Testing Library"],
      },
      {
        label: "Code quality",
        items: ["ESLint", "Prettier"],
      },
      {
        label: "Type safety",
        items: ["TypeScript"],
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & commerce",
    description:
      "Tools connected to product workflows, documents, and commerce.",
    rows: [
      {
        label: "Product integrations",
        items: ["Plaid API", "jsPDF", "Tiptap", "i18next"],
      },
      {
        label: "Web3",
        items: ["Wagmi", "Wallet connectivity", "Smart contract integration"],
      },
      {
        label: "Commerce experience",
        items: ["Ruby on Rails", "Shopify embedded & standalone apps"],
      },
    ],
  },
];
