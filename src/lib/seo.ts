import type { Metadata } from "next";
import { publicationState } from "./publication";
export const publication = publicationState(process.env);
if (process.env.PORTFOLIO_PUBLIC === "true" && !publication.isPublic) {
  throw new Error(
    `Publication checks failed:\n${publication.issues.join("\n")}`,
  );
}
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: publication.isPublic ? { canonical: path } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      ...(publication.isPublic ? { url: path } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
