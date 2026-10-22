export type Narrative = { text: string; demo?: boolean };
export type Decision = {
  topic: string;
  choice: string;
  reason: string;
  demo?: boolean;
};
export type ProjectMedia =
  | {
      kind: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
      caption: string;
    }
  | {
      kind: "video";
      src: string;
      width: number;
      height: number;
      caption: string;
      poster?: string;
      captions?: { src: string; language: string; label: string };
      transcript?: string;
    };
export type PortfolioProject = {
  slug: string;
  name: string;
  category:
    | "Web platforms"
    | "Web & mobile"
    | "Mobile apps"
    | "Web3"
    | "Websites"
    | "Tools";
  subtitle: string;
  cardSubtitle?: string;
  summary: string;
  detailSummary?: string;
  mockup?: string;
  image?: { src: string; width: number; height: number };
  featured?: boolean;
  media?: ProjectMedia[];
  role: string;
  developmentScope?: "Full-stack" | "Frontend & integrations";
  involvement?: string;
  team: string;
  platform: string;
  status: "Public link" | "Private project" | "Preview";
  stack: string[];
  stackVerified?: boolean;
  developmentWorkflow?: string;
  keyTechnologies?: string[];
  scope: string[];
  overview: string;
  context?: string;
  implementation?: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  contributions: { title: string; description: string }[];
  highlightChallenge?: boolean;
  problem: Narrative;
  solution: Narrative;
  decisions: Decision[];
  results: Narrative[];
  lessons?: Narrative;
  productUrl?: string;
  productLinkLabel?: string;
  projectStatus?: "Ongoing product" | "Completed feature work";
  walkthroughs?: { label: string; url: string; provider: "Loom" }[];
  illustration?: "type" | "globe" | "blog";
};
