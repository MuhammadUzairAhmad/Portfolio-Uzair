import type { MetadataRoute } from "next";
import { publication } from "@/lib/seo";
export default function robots(): MetadataRoute.Robots {
  return publication.isPublic
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${publication.siteUrl}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
