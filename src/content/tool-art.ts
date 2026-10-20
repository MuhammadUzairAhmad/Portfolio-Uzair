import type { PortfolioProject } from "../types/content.ts";
// EDIT HERE: decorative tool artwork; these are illustrations, not product screenshots.
export const toolArtwork: Record<
  NonNullable<PortfolioProject["illustration"]>,
  { src: string; width: number; height: number }
> = {
  type: {
    src: "/images/tools/typespark-preview-v2.webp",
    width: 900,
    height: 675,
  },
  globe: {
    src: "/images/tools/globepick-preview-v2.webp",
    width: 900,
    height: 675,
  },
  blog: {
    src: "/images/tools/blogsite-preview-v2.webp",
    width: 900,
    height: 675,
  },
};
