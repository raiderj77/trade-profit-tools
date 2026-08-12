import type { Metadata } from "next";

import { LeadValueCalculator } from "@/components/LeadValueCalculator";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Lead value calculator",
  robots: { index: false, follow: false },
};

export default function EmbedPage() {
  return (
    <main id="main-content" className="embed-page">
      <header className="embed-header">
        <div>
          <p className="eyebrow">{siteConfig.demoAgency.shortName}</p>
          <h1>Home-service lead value calculator</h1>
        </div>
      </header>
      <LeadValueCalculator />
    </main>
  );
}
