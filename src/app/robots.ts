import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = siteConfig.deployment.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/demo", "/privacy"],
        disallow: ["/api/", "/embed"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
