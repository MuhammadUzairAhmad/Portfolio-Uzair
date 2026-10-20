import type { MetadataRoute } from "next";
import { publication } from "@/lib/seo";
import { projects } from "@/content/projects";
import { tools } from "@/content/tools";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!publication.isPublic) return [];
  return [
    "",
    "/work",
    "/tools",
    "/about",
    "/contact",
    ...projects.map((p) => `/work/${p.slug}`),
    ...tools.map((p) => `/tools/${p.slug}`),
  ].map((path) => ({ url: `${publication.siteUrl}${path}` }));
}
