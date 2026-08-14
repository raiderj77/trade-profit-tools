import type { Metadata } from "next";
import Link from "next/link";

import { LeadValueCalculator } from "@/components/LeadValueCalculator";
import { siteConfig } from "@/config/site";
import { leadFormsEnabled } from "@/lib/lead-delivery.mjs";

export const metadata: Metadata = {
  title: "Lead value calculator",
  robots: { index: false, follow: false },
};

export default function EmbedPage() {
  const formsEnabled = leadFormsEnabled(process.env);

  return (
    <main id="main-content" className="embed-page">
      <header className="embed-header">
        <div>
          <p className="eyebrow">
            Example for {siteConfig.demoAgency.shortName}
          </p>
          <h1>{siteConfig.product.name}</h1>
          <p className="embed-disclosure">
            This is a fictional agency example. Public-demo submissions go to{" "}
            {siteConfig.forms.recipientName}.{" "}
            <Link href="/privacy" target="_blank" rel="noreferrer">
              Privacy details
            </Link>
          </p>
        </div>
      </header>
      <LeadValueCalculator formsEnabled={formsEnabled} />
    </main>
  );
}
