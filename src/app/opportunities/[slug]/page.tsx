import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { OpportunityScorecard } from "@/components/OpportunityScorecard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getSiteUrl } from "@/config/urls";
import {
  getOpportunity,
  opportunities,
  verdictLabels,
} from "@/data/opportunities";

export function generateStaticParams() {
  return opportunities.map((opportunity) => ({
    slug: opportunity.slug,
  }));
}

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>): Promise<Metadata> {
  const { slug } = await params;
  const opportunity = getOpportunity(slug);

  if (!opportunity) {
    return {};
  }

  return {
    title: opportunity.title,
    description: opportunity.summary,
  };
}

function ListSection({
  title,
  items,
}: Readonly<{ title: string; items: readonly string[] }>) {
  return (
    <section className="brief-list-section">
      <h2>{title}</h2>
      <ul className="brief-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function OpportunityDetailPage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const opportunity = getOpportunity(slug);

  if (!opportunity) {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opportunity.title,
    description: opportunity.summary,
    dateModified: "2026-08-13",
    author: {
      "@type": "Organization",
      name: "Your Friendly Developer",
    },
    mainEntityOfPage: `${siteUrl}/opportunities/${opportunity.slug}`,
  };

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="brief-hero">
          <div className="container brief-hero-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/opportunities">Opportunity Lab</Link>
              <span aria-hidden="true">/</span>
              <span>{opportunity.category}</span>
              <span aria-hidden="true">•</span>
              <span>{opportunity.estimatedReadMinutes} min read</span>
            </nav>

            <div className="brief-title-row">
              <div>
                <p className="eyebrow">{opportunity.category}</p>
                <h1>{opportunity.title}</h1>
                <p className="brief-summary">{opportunity.summary}</p>
              </div>
              <div className="brief-score-tile">
                <span>Opportunity score</span>
                <strong>{opportunity.score}</strong>
                <small>out of 100</small>
              </div>
            </div>

            <div className="brief-facts">
              <div>
                <span>Verdict</span>
                <strong
                  className={`verdict-badge verdict-${opportunity.verdict}`}
                >
                  {verdictLabels[opportunity.verdict]}
                </strong>
              </div>
              <div>
                <span>Startup</span>
                <strong>{opportunity.estimatedStartupCost}</strong>
              </div>
              <div>
                <span>First payment</span>
                <strong>{opportunity.estimatedFirstPayment}</strong>
              </div>
              <div>
                <span>Contact level</span>
                <strong>{opportunity.contactLevel}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section brief-body-section">
          <div className="container brief-layout">
            <article className="brief-main">
              <section className="verdict-callout">
                <p className="eyebrow">Why this verdict</p>
                <p>{opportunity.verdictReason}</p>
              </section>

              <div className="brief-two-column">
                <ListSection title="The signal" items={opportunity.signal} />
                <ListSection title="Why now" items={opportunity.whyNow} />
              </div>

              <div className="brief-two-column">
                <ListSection title="The product" items={opportunity.product} />
                <ListSection title="The buyer" items={opportunity.buyer} />
              </div>

              <ListSection title="The offer" items={opportunity.offer} />

              <section className="validation-section">
                <p className="eyebrow">72-hour validation test</p>
                <h2>Prove payment interest before a larger build.</h2>
                <ol className="validation-steps">
                  {opportunity.validationPlan.map((step, index) => (
                    <li key={step}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
                <div className="proof-gate">
                  <strong>Proof gate</strong>
                  <p>{opportunity.proofGate}</p>
                </div>
              </section>

              <section className="red-flag-section">
                <p className="eyebrow">Honest red flags</p>
                <h2>Reasons this idea might fail.</h2>
                <ul className="red-flag-list">
                  {opportunity.honestRedFlags.map((risk) => (
                    <li key={risk}>{risk}</li>
                  ))}
                </ul>
              </section>

              <ListSection title="Build path" items={opportunity.buildPath} />

              <section className="source-section">
                <div className="source-heading">
                  <div>
                    <p className="eyebrow">Evidence</p>
                    <h2>Sources checked for this brief</h2>
                  </div>
                  <Link
                    className="text-link"
                    href="/opportunities/methodology"
                  >
                    Read the source policy
                  </Link>
                </div>
                <div className="source-list">
                  {opportunity.sources.map((source) => (
                    <article className="source-card" key={source.url}>
                      <div>
                        <span>{source.sourceType}</span>
                        <h3>{source.title}</h3>
                        <p>{source.publisher}</p>
                      </div>
                      <p>{source.supports}</p>
                      <dl>
                        <div>
                          <dt>Published</dt>
                          <dd>{source.published}</dd>
                        </div>
                        <div>
                          <dt>Checked</dt>
                          <dd>{source.checked}</dd>
                        </div>
                      </dl>
                      <a href={source.url} target="_blank" rel="noreferrer">
                        Open source
                      </a>
                    </article>
                  ))}
                </div>
                <p className="research-disclaimer">
                  This brief is business research, not legal, tax, accounting,
                  financial, or security advice. Proposed prices and validation
                  thresholds are testing assumptions unless a source says
                  otherwise.
                </p>
              </section>
            </article>

            <aside className="brief-sidebar">
              <div className="brief-sidebar-card">
                <p className="eyebrow">Business model</p>
                <p>{opportunity.businessModel}</p>
              </div>
              <div className="brief-sidebar-card">
                <p className="eyebrow">Tags</p>
                <div className="tag-row">
                  {opportunity.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="brief-sidebar-card">
                <p className="eyebrow">Last reviewed</p>
                <p>{opportunity.updated}</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-tinted">
          <div className="container">
            <OpportunityScorecard opportunity={opportunity} />
          </div>
        </section>

        <section className="section">
          <div className="container opportunity-cta">
            <div>
              <p className="eyebrow">Build the paid proof</p>
              <h2>Start smaller than the final product.</h2>
              <p>
                A mockup, calculator, landing page, or narrow workflow is enough
                to ask for payment. The full platform waits for evidence.
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
