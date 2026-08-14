import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/config/urls";
import { opportunities } from "@/data/opportunities";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/demo`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/opportunities`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/opportunities/methodology`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...opportunities.map((opportunity) => ({
      url: `${siteUrl}/opportunities/${opportunity.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${siteUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
