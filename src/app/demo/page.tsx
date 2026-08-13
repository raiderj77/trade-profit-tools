import type { Metadata } from "next";
import Link from "next/link";

import { LeadValueCalculator } from "@/components/LeadValueCalculator";
import { siteConfig } from "@/config/site";
import { leadFormsEnabled } from "@/lib/lead-delivery.mjs";

export const metadata: Metadata = {
  title: "Live calculator demo",
  description:
    "Estimate lead value, missed-call revenue, break-even CPL, and conversion upside.",
};

export default function DemoPage() {
  const formsEnabled = leadFormsEnabled(process.env);

  return (
    <main id="main-content" className="demo-page">
      <div className="demo-owner-bar">
        <div className="container demo-owner-inner">
          <span>White-label example by {siteConfig.business.name}</span>
          <Link href="/#preview">Request one for your agency</Link>
        </div>
      </div>
      <header className="demo-header">
        <div className="container demo-header-inner">
          <Link className="brand" href="/demo">
            <span className="brand-mark" aria-hidden="true">
              {siteConfig.demoAgency.mark}
            </span>
            <span>{siteConfig.demoAgency.shortName}</span>
          </Link>
          <Link className="text-link" href="/#preview">
            Get this calculator
          </Link>
        </div>
      </header>
      <section className="demo-hero">
        <div className="container narrow centered">
          <p className="eyebrow">Free planning tool</p>
          <h1>What are your home-service leads worth?</h1>
          <p>
            Estimate monthly booked revenue, missed-call loss, break-even cost
            per lead, and the impact of small conversion improvements.
          </p>
        </div>
      </section>
      <section className="container calculator-wrap">
        <LeadValueCalculator formsEnabled={formsEnabled} />
      </section>
      <footer className="demo-footer">
        <div className="container demo-footer-inner">
          <p>Example calculator branded for {siteConfig.demoAgency.name}.</p>
          <Link href="/privacy">Privacy</Link>
        </div>
      </footer>
    </main>
  );
}
