import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { scoreDimensions } from "@/data/opportunities";

export const metadata: Metadata = {
  title: "Opportunity Lab Methodology",
  description:
    "The source policy, scoring model, agent-assisted research workflow, and validation rules used by the Your Friendly Developer Opportunity Lab.",
};

const workflow = [
  {
    number: "01",
    title: "Scout",
    text: "Collect candidate signals from official data, original research, public product changes, and credible industry reports.",
  },
  {
    number: "02",
    title: "Evidence",
    text: "Trace every material number to a working source and record the publication and checked dates.",
  },
  {
    number: "03",
    title: "Skeptic",
    text: "Find current alternatives, support burden, security risk, regulation, weak assumptions, and reasons to stop.",
  },
  {
    number: "04",
    title: "Offer",
    text: "Turn the signal into the smallest service, calculator, landing page, or workflow a buyer might pay for.",
  },
  {
    number: "05",
    title: "Validator",
    text: "Create a 72-hour test with an exact buyer list, payment request, follow-up, and continue or stop threshold.",
  },
  {
    number: "06",
    title: "Human review",
    text: "A person checks the claims, judgment, tone, red flags, and final verdict before anything is published.",
  },
];

const sourceRules = [
  "Prefer government data, standards bodies, original surveys, official product documentation, and first-party reports.",
  "Link every material factual claim to the source that supports it.",
  "Record when the source was published and when it was last checked.",
  "Label proposed pricing, market positioning, and revenue scenarios as assumptions unless direct evidence supports them.",
  "Do not invent market size, customer counts, growth rates, testimonials, competitors, or revenue forecasts.",
  "Do not publish automatically. Agent output remains a research draft until a human reviews it.",
];

export default function MethodologyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="methodology-hero">
          <div className="container narrow">
            <p className="eyebrow">Opportunity Lab methodology</p>
            <h1>A scoring system for deciding what deserves a test.</h1>
            <p className="hero-lede">
              The score organizes evidence and tradeoffs. It does not predict
              success. A paid validation result matters more than a high score.
            </p>
            <Link className="button button-secondary" href="/opportunities">
              Return to the briefs
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">100-point score</p>
              <h2>Ten dimensions, each scored from 1 to 10.</h2>
              <p>
                Eighty or higher earns a build-now recommendation. Scores from
                65 to 79 require validation first. Lower scores normally stay on
                hold. A regulatory or security concern can override the total.
              </p>
            </div>

            <div className="methodology-grid">
              {scoreDimensions.map((dimension, index) => (
                <article className="methodology-card" key={dimension.key}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{dimension.label}</h3>
                  <p>{dimension.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow light">Agent-assisted workflow</p>
              <h2>Agents collect and challenge. A human publishes.</h2>
              <p>
                The workflow uses separate roles so one optimistic model does
                not research, judge, and approve its own idea.
              </p>
            </div>

            <div className="workflow-grid">
              {workflow.map((step) => (
                <article className="workflow-card" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container methodology-policy-grid">
            <div className="section-heading">
              <p className="eyebrow">Source policy</p>
              <h2>No fabricated evidence.</h2>
              <p>
                A useful idea report shows what is known, what is inferred, and
                what still needs a buyer test.
              </p>
            </div>
            <ul className="policy-list">
              {sourceRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-tinted">
          <div className="container proof-rules">
            <div className="section-heading">
              <p className="eyebrow">Validation rules</p>
              <h2>Payment outranks attention.</h2>
            </div>
            <div className="proof-rule-grid">
              <article>
                <strong>Interest</strong>
                <p>A click, like, open, compliment, or waitlist signup.</p>
              </article>
              <article>
                <strong>Evidence</strong>
                <p>A buyer explains the problem in specific terms.</p>
              </article>
              <article>
                <strong>Proof</strong>
                <p>A buyer pays, signs a paid pilot, or funds a deposit.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
