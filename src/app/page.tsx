import Link from "next/link";

import { AgencyPreviewForm } from "@/components/AgencyPreviewForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";
import { calculateLeadValue } from "@/lib/calculator.mjs";
import { formatCurrency } from "@/lib/format";

const deliverables = [
  "Agency branding and copy",
  "Lead-value and missed-call calculator",
  "Contractor lead capture",
  "Email delivery to your team",
  "Standalone page or iframe embed",
  "Source code and one revision",
];

const steps = [
  {
    number: "01",
    title: "Send your brand details",
    text: "Provide your logo, colors, main contractor niche, lead email, and website details.",
  },
  {
    number: "02",
    title: "Receive the branded build",
    text: `Your calculator is prepared within ${siteConfig.offer.deliveryBusinessDays} business days.`,
  },
  {
    number: "03",
    title: "Install and start using it",
    text: "Add it as a page, landing-page section, or iframe on your agency website.",
  },
];

export default function HomePage() {
  const paymentLink = process.env.NEXT_PUBLIC_PAYMENT_LINK;
  const exampleResults = calculateLeadValue({ ...siteConfig.calculatorDefaults });

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">A custom sales tool from {siteConfig.business.name}</p>
              <h1>Give contractor prospects a financial reason to contact your agency.</h1>
              <p className="hero-lede">
                Add a white-label calculator that estimates lead value, missed-call revenue, break-even CPL, and conversion upside. Your team receives the completed prospect form. {siteConfig.business.name} handles the custom build and installation.
              </p>
              <div className="button-row">
                <Link className="button button-primary" href="/demo">
                  Open the live demo
                </Link>
                <a className="button button-secondary" href="#preview">
                  Request a branded preview
                </a>
              </div>
              <ul className="proof-row" aria-label="Offer highlights">
                <li>{siteConfig.offer.deliveryBusinessDays}-business-day delivery</li>
                <li>No monthly platform fee</li>
                <li>Source code included</li>
              </ul>
            </div>
            <aside className="hero-card" aria-label="Calculator preview summary">
              <p className="eyebrow">Example prospect result</p>
              <div className="hero-metric">
                <span>Revenue lost from unanswered calls</span>
                <strong>{formatCurrency(exampleResults.lostRevenueFromUnansweredCalls)}</strong>
              </div>
              <div className="mini-metrics">
                <div>
                  <span>Break-even CPL</span>
                  <strong>{formatCurrency(exampleResults.breakEvenCostPerLead)}</strong>
                </div>
                <div>
                  <span>Five-point lift</span>
                  <strong>{formatCurrency(exampleResults.addedRevenueFromFivePointLift)}</strong>
                </div>
              </div>
              <p className="small-print">Illustrative estimate using fictional inputs.</p>
            </aside>
          </div>
        </section>

        <section className="section" id="package">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">The package</p>
              <h2>One focused sales tool. Branded and installed.</h2>
              <p>
                Replace a generic contact form with a useful estimate your sales team discusses with contractor prospects.
              </p>
            </div>
            <div className="check-card">
              <ul className="check-list">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Simple delivery</p>
              <h2>From brand details to installed calculator</h2>
            </div>
            <div className="steps-grid">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container demo-callout">
            <div>
              <p className="eyebrow">Live contractor experience</p>
              <h2>Test the calculator before you request a build.</h2>
              <p>
                Change the lead volume, answer rate, close rates, job value, ad spend, and margin. The estimate updates immediately.
              </p>
            </div>
            <Link className="button button-primary" href="/demo">
              Try the full calculator
            </Link>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container price-grid">
            <div>
              <p className="eyebrow light">Founding package</p>
              <h2>A fixed build, not another monthly software bill.</h2>
              <p>
                Pay half to begin. Pay the balance after installation and the included revision.
              </p>
            </div>
            <div className="price-card">
              <span>Total price</span>
              <strong>{formatCurrency(siteConfig.offer.totalPrice)}</strong>
              <p>{formatCurrency(siteConfig.offer.deposit)} deposit to begin</p>
              {paymentLink ? (
                <a className="button button-accent" href={paymentLink} target="_blank" rel="noreferrer">
                  Pay the deposit
                </a>
              ) : (
                <a className="button button-accent" href="#preview">
                  Request the branded preview
                </a>
              )}
              <small>
                Includes {siteConfig.offer.revisions} revision and delivery within {siteConfig.offer.deliveryBusinessDays} business days.
              </small>
            </div>
          </div>
        </section>

        <section className="section" id="preview">
          <div className="container form-section">
            <div className="section-heading">
              <p className="eyebrow">Branded preview</p>
              <h2>See the calculator with your agency name.</h2>
              <p>
                Send your agency details. The first response will include the next step for a short branded preview.
              </p>
            </div>
            <AgencyPreviewForm />
          </div>
        </section>

        <section className="section section-tinted">
          <div className="container faq-grid">
            <div className="section-heading">
              <p className="eyebrow">Questions</p>
              <h2>What the package includes</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>Is this a subscription?</summary>
                <p>No. The founding package is a fixed custom build with no monthly platform fee.</p>
              </details>
              <details>
                <summary>Does it guarantee more leads or revenue?</summary>
                <p>No. It provides a planning estimate and a stronger conversation starter. Results depend on the agency, contractor, market, and input quality.</p>
              </details>
              <details>
                <summary>How does my agency receive leads?</summary>
                <p>The calculator sends the completed contact form, input values, and estimated results to your chosen email address.</p>
              </details>
              <details>
                <summary>Will it match my website?</summary>
                <p>Yes. The build includes your agency name, colors, messaging, contact details, and one revision.</p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
