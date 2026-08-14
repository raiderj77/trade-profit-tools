import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/config/urls";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/demo", "/privacy", "/opportunities/"],
        disallow: ["/api/", "/embed"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
