import type { Metadata } from "next";
import Link from "next/link";

import { OpportunityCard } from "@/components/OpportunityCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { opportunities } from "@/data/opportunities";

export const metadata: Metadata = {
  title: "Opportunity Lab",
  description:
    "Sourced trends turned into scored, testable business offers with honest red flags and 72-hour validation plans.",
};

const principles = [
  {
    title: "Evidence before enthusiasm",
    text: "Material claims link to the source, show when the source was checked, and separate facts from assumptions.",
  },
  {
    title: "Sell before building",
    text: "Every brief ends with a small paid test, a deposit request, and a stop rule before a full product build.",
  },
  {
    title: "Red flags stay visible",
    text: "Competition, support burden, regulation, security, and founder-fit problems appear beside the upside.",
  },
];

export default function OpportunitiesPage() {
  const buildNowCount = opportunities.filter(
    (opportunity) => opportunity.verdict === "build-now",
  ).length;
  const sourceCount = opportunities.reduce(
    (total, opportunity) => total + opportunity.sources.length,
    0,
  );

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="opportunity-hero">
          <div className="container opportunity-hero-grid">
            <div className="opportunity-hero-copy">
              <p className="eyebrow">Opportunity Lab</p>
              <h1>Sourced trends turned into small, testable offers.</h1>
              <p className="hero-lede">
                Each brief shows the signal, buyer, product, pricing path,
                evidence, honest red flags, and a 72-hour validation test. The
                goal is a paid decision before a large build.
              </p>
              <div className="button-row">
                <a className="button button-primary" href="#briefs">
                  Browse the briefs
                </a>
                <Link
                  className="button button-secondary"
                  href="/opportunities/methodology"
                >
                  See the scoring method
                </Link>
              </div>
            </div>

            <aside className="trend-lens-card" aria-label="Opportunity lens">
              <p className="eyebrow">Trend lens</p>
              <h2>Budget. Deadline. Visibility.</h2>
              <p>
                Premium service ideas get stronger when the buyer has money,
                the problem has a fixed date, and the result is visible to other
                people.
              </p>
              <div className="trend-lens-divider" />
              <p>
                This lab adds two more tests: Can the buyer be reached directly,
                and can the work be delivered without constant calls or custom
                support?
              </p>
            </aside>
          </div>
        </section>

        <section className="opportunity-stats" aria-label="Lab summary">
          <div className="container opportunity-stats-grid">
            <div>
              <strong>{opportunities.length}</strong>
              <span>researched briefs</span>
            </div>
            <div>
              <strong>{sourceCount}</strong>
              <span>linked sources</span>
            </div>
            <div>
              <strong>{buildNowCount}</strong>
              <span>build-now verdict</span>
            </div>
            <div>
              <strong>10</strong>
              <span>score dimensions</span>
            </div>
          </div>
        </section>

        <section className="section" id="briefs">
          <div className="container">
            <div className="section-heading opportunity-index-heading">
              <p className="eyebrow">Current briefs</p>
              <h2>Good signals do not all become good projects.</h2>
              <p>
                The same process can approve a narrow cash-first offer, delay an
                adjacent idea, require a qualified partner, or stop a costly
                build.
              </p>
            </div>

            <div className="opportunity-grid">
              {opportunities.map((opportunity) => (
                <OpportunityCard
                  opportunity={opportunity}
                  key={opportunity.slug}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Operating rules</p>
              <h2>Research that leads to a decision.</h2>
            </div>
            <div className="principle-grid">
              {principles.map((principle) => (
                <article className="principle-card" key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container opportunity-cta">
            <div>
              <p className="eyebrow">From brief to build</p>
              <h2>Start with the smallest paid proof.</h2>
              <p>
                Your Friendly Developer turns selected opportunities into a
                mockup, calculator, landing page, or narrow workflow. A large
                platform comes later, after buyers pay.
              </p>
            </div>
            <Link className="button button-primary" href="/#preview">
              Request a build preview
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
