import {
  calculateOpportunityScore,
  scoreBand,
  type OpportunityScores,
} from "@/lib/opportunity-score.mjs";

export type OpportunityVerdict =
  | "build-now"
  | "validate-first"
  | "partner-required"
  | "hold";

export type OpportunitySource = {
  title: string;
  publisher: string;
  url: string;
  published: string;
  checked: string;
  sourceType: "Official source" | "Primary research" | "Security standard";
  supports: string;
};

export type Opportunity = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  verdict: OpportunityVerdict;
  verdictReason: string;
  updated: string;
  estimatedStartupCost: string;
  estimatedFirstPayment: string;
  contactLevel: "Low" | "Moderate" | "High";
  businessModel: string;
  scores: OpportunityScores;
  score: number;
  scoreBand: ReturnType<typeof scoreBand>;
  estimatedReadMinutes: number;
  tags: readonly string[];
  signal: readonly string[];
  whyNow: readonly string[];
  product: readonly string[];
  buyer: readonly string[];
  offer: readonly string[];
  validationPlan: readonly string[];
  proofGate: string;
  honestRedFlags: readonly string[];
  buildPath: readonly string[];
  sources: readonly OpportunitySource[];
};

export const scoreDimensions = [
  {
    key: "speedToPayment",
    label: "Speed to first payment",
    description: "How quickly a real buyer might pay after a focused validation test.",
  },
  {
    key: "buyerReachability",
    label: "Buyer reachability",
    description: "Whether a clear buyer list and direct contact path exist.",
  },
  {
    key: "startupCost",
    label: "Startup cost",
    description: "Higher scores mean lower cash required before validation.",
  },
  {
    key: "grossMargin",
    label: "Gross margin",
    description: "How much of each sale remains after direct delivery costs.",
  },
  {
    key: "lowContactFit",
    label: "Low-contact fit",
    description: "How well the offer sells and delivers through email and self-service steps.",
  },
  {
    key: "fulfillmentSimplicity",
    label: "Fulfillment simplicity",
    description: "How repeatable delivery is without custom support or constant judgment.",
  },
  {
    key: "repeatRevenue",
    label: "Repeat revenue",
    description: "Whether customers buy again, add locations, or pay recurring fees.",
  },
  {
    key: "competitiveOpening",
    label: "Competitive opening",
    description: "Whether a narrow position exists despite current alternatives.",
  },
  {
    key: "evidenceQuality",
    label: "Evidence quality",
    description: "How directly reliable sources support the problem and buyer behavior.",
  },
  {
    key: "legalEthicalSafety",
    label: "Legal and ethical safety",
    description: "Higher scores mean fewer regulatory, privacy, security, or trust risks.",
  },
] as const;

type OpportunityDraft = Omit<
  Opportunity,
  "score" | "scoreBand" | "estimatedReadMinutes"
>;

const opportunityDrafts = [
  {
    slug: "white-label-missed-call-revenue-calculator",
    title: "White-label missed-call revenue calculator",
    summary:
      "A branded calculator that helps home-service agencies show contractor prospects what unanswered calls and weak conversion rates might be costing them.",
    category: "Lead generation",
    verdict: "build-now",
    verdictReason:
      "The buyer is easy to identify, the first version is already built, delivery is repeatable, and a deposit can be requested before custom work.",
    updated: "August 13, 2026",
    estimatedStartupCost: "$0 to $50",
    estimatedFirstPayment: "7 to 14 days",
    contactLevel: "Low",
    businessModel: "$1,000 fixed build with a $500 deposit",
    scores: {
      speedToPayment: 9,
      buyerReachability: 9,
      startupCost: 10,
      grossMargin: 9,
      lowContactFit: 8,
      fulfillmentSimplicity: 8,
      repeatRevenue: 6,
      competitiveOpening: 6,
      evidenceQuality: 9,
      legalEthicalSafety: 9,
    },
    tags: ["Home services", "Calculator", "Agency", "Cash first"],
    signal: [
      "Invoca's 2026 home-services benchmark uses data from a broader set of more than 70 million calls.",
      "Its published home-services benchmarks report a 52% person-answer rate, a 38% lead rate among answered digital-marketing calls, and a 45% conversion rate among those leads.",
      "Jobber's 2026 report says more than 70% of customers expect a same-day response and more than half expect a response within one hour.",
    ],
    whyNow: [
      "Marketing agencies need a concrete way to discuss lead quality, call handling, and conversion with contractor prospects.",
      "A calculator turns a general marketing claim into a prospect-specific estimate without promising an outcome.",
      "The service can start as a fixed custom build instead of a full software platform.",
    ],
    product: [
      "Agency-branded lead-value and missed-call calculator.",
      "Contractor lead capture and email delivery.",
      "Standalone page or iframe embed.",
      "Source code, installation help, and one revision.",
    ],
    buyer: [
      "Small marketing agencies serving plumbing, HVAC, roofing, electrical, landscaping, and remodeling companies.",
      "Agency owners, founders, growth leads, and client strategy directors.",
    ],
    offer: [
      "$1,000 total price.",
      "$500 deposit before custom work.",
      "Five-business-day delivery.",
      "No monthly platform fee.",
    ],
    validationPlan: [
      "Choose 40 agencies with visible home-service clients.",
      "Send 10 personal emails per weekday with a 45-second branded preview offer.",
      "Ask interested agencies for the $500 deposit before changing the demo for them.",
      "Do not add dashboards, accounts, subscriptions, or extra calculator types during the test.",
    ],
    proofGate:
      "Continue after two interested replies by day 7 or one paid deposit by day 14. Change the list or message if the gate is missed.",
    honestRedFlags: [
      "Interactive calculators already exist, so the sales message must focus on niche positioning, ownership, and installation.",
      "The output is an estimate, not a promise of revenue or lead growth.",
      "The offer still depends on consistent, personalized outreach to secure the first customers.",
    ],
    buildPath: [
      "Use the existing calculator as the live proof asset.",
      "Close one agency before building a second calculator.",
      "Turn repeated customer requests into the next template only after paid demand appears.",
    ],
    sources: [
      {
        title: "The Invoca Home Services Lead Conversion Benchmarks Report 2026",
        publisher: "Invoca",
        url: "https://www.invoca.com/reports/the-invoca-home-services-lead-conversion-benchmarks-report-2026",
        published: "July 2026",
        checked: "August 13, 2026",
        sourceType: "Primary research",
        supports:
          "Call-volume methodology and published home-services answer, lead, and conversion benchmarks.",
      },
      {
        title: "2026 Home Service Trends Report",
        publisher: "Jobber",
        url: "https://www.getjobber.com/home-service-trends-report/",
        published: "2026",
        checked: "August 13, 2026",
        sourceType: "Primary research",
        supports:
          "Customer response expectations, quote performance, and operational behavior among home-service businesses.",
      },
    ],
  },
  {
    slug: "open-quote-recovery-calculator",
    title: "Open-quote recovery calculator",
    summary:
      "A white-label tool that estimates the value sitting in unanswered home-service quotes and gives the contractor a simple follow-up plan.",
    category: "Sales operations",
    verdict: "validate-first",
    verdictReason:
      "The problem is supported, the audience overlaps with the current agency list, and the offer is cheap to test. Existing field-service platforms make differentiation the main risk.",
    updated: "August 13, 2026",
    estimatedStartupCost: "$0 to $50 for validation",
    estimatedFirstPayment: "14 to 30 days",
    contactLevel: "Low",
    businessModel: "$750 fixed build or a paid add-on",
    scores: {
      speedToPayment: 8,
      buyerReachability: 9,
      startupCost: 10,
      grossMargin: 9,
      lowContactFit: 8,
      fulfillmentSimplicity: 7,
      repeatRevenue: 7,
      competitiveOpening: 5,
      evidenceQuality: 8,
      legalEthicalSafety: 8,
    },
    tags: ["Home services", "Quotes", "Calculator", "Follow-up"],
    signal: [
      "Jobber's 2026 report says 69% of surveyed home-service professionals win more than half of the jobs they quote.",
      "The same report links faster response and structured follow-up with stronger operations, while showing uneven performance across business maturity levels.",
      "Jobber already offers automated quote follow-ups, which confirms demand but also proves the space has established competition.",
    ],
    whyNow: [
      "Contractors often pay to create demand, then lose visibility after an estimate is sent.",
      "Agencies can use an open-quote calculator as a sales asset for conversion and follow-up services.",
      "The idea reuses the same buyer list and calculator code as the first offer.",
    ],
    product: [
      "Inputs for open quote count, average quote value, current close rate, gross margin, and quote age.",
      "Outputs for open pipeline value, scenario-based gross profit, and follow-up priority.",
      "Three editable email follow-up templates.",
      "Agency branding, lead capture, and iframe installation.",
    ],
    buyer: [
      "Home-service marketing agencies that sell lead generation, CRM setup, or sales-process improvement.",
      "Contractor consultants and fractional marketing teams with multiple trade clients.",
    ],
    offer: [
      "Proposed $750 fixed build after validation.",
      "Sell as an add-on to the lead-value calculator or as a separate agency sales asset.",
      "Keep automated texting and direct CRM integrations outside the first version.",
    ],
    validationPlan: [
      "Create one result-screen mockup, not a working application.",
      "Add one question to the existing agency outreach: Do your contractor clients struggle to follow up on open quotes?",
      "Show the mockup only to agencies that answer yes.",
      "Request a deposit before building formulas, forms, or templates.",
    ],
    proofGate:
      "Build only after five agencies describe the problem in their own words or one agency pays a deposit. Do not treat polite interest as validation.",
    honestRedFlags: [
      "Jobber and other field-service platforms already include quote tracking and follow-up features.",
      "A calculator alone will not fix a contractor's sales process.",
      "Automated SMS introduces consent and messaging-compliance work, so it stays outside the first version.",
    ],
    buildPath: [
      "Validate with a static mockup and the current agency list.",
      "Reuse the existing calculator shell only after a deposit.",
      "Position the product as an agency sales tool, not a replacement for field-service software.",
    ],
    sources: [
      {
        title: "2026 Home Service Trends Report",
        publisher: "Jobber",
        url: "https://www.getjobber.com/home-service-trends-report/",
        published: "2026",
        checked: "August 13, 2026",
        sourceType: "Primary research",
        supports:
          "Quote win-rate, response-time, pricing, and automation findings from a survey of 1,050 U.S. home-service owners.",
      },
      {
        title: "Automations",
        publisher: "Jobber Help Center",
        url: "https://help.getjobber.com/en/articles/automations/",
        published: "Updated 2026",
        checked: "August 13, 2026",
        sourceType: "Official source",
        supports:
          "Existing quote-tracking, reminder, and automated follow-up capabilities that establish both demand and competitive risk.",
      },
    ],
  },
  {
    slug: "one-person-s-corp-clarity-desk",
    title: "Monthly clarity desk for one-person S corporations",
    summary:
      "A bookkeeping operations service where software sorts transactions, a qualified human reviews exceptions, and the owner receives one concise monthly action page.",
    category: "Financial operations",
    verdict: "partner-required",
    verdictReason:
      "The recurring need is credible, but financial data, tax-sensitive guidance, integrations, and judgment make this a poor solo first offer without a qualified accounting partner.",
    updated: "August 13, 2026",
    estimatedStartupCost: "$500+ before secure delivery",
    estimatedFirstPayment: "30 to 60 days",
    contactLevel: "High",
    businessModel: "Paid setup plus proposed monthly service",
    scores: {
      speedToPayment: 5,
      buyerReachability: 7,
      startupCost: 4,
      grossMargin: 7,
      lowContactFit: 3,
      fulfillmentSimplicity: 3,
      repeatRevenue: 9,
      competitiveOpening: 4,
      evidenceQuality: 8,
      legalEthicalSafety: 2,
    },
    tags: ["S corporations", "Bookkeeping", "Recurring", "Partner required"],
    signal: [
      "IRS filing statistics report 5,266,702 S-corporation returns for tax year 2022.",
      "AdvanceTrack's 2026 Accounting Talent Index reports that 73% of surveyed accounting firms are turning away potential clients because of talent shortages.",
      "The same survey reports that only 16% are actively investing in AI, which points to an operations gap but does not prove demand for this exact product.",
    ],
    whyNow: [
      "Small-business owners want a clearer monthly answer than a stack of categorized transactions.",
      "Accounting firms report capacity pressure and are exploring technology and outside delivery models.",
      "The recurring nature of bookkeeping creates stronger retention than a one-time calculator build.",
    ],
    product: [
      "Connection to accounting software and approved financial accounts.",
      "Automated transaction suggestions with an exception queue.",
      "Qualified human review before any owner-facing guidance.",
      "One monthly page covering cash position, tax reserve input from the professional, owner-pay input, and one action item.",
    ],
    buyer: [
      "Qualified bookkeeping or accounting firms that already serve one-person S corporations.",
      "The professional firm, not the business owner, should be the first buyer for a white-label operations layer.",
    ],
    offer: [
      "Start with a paid workflow audit for an accounting partner.",
      "Do not sell direct tax or payroll judgment without qualified professional oversight.",
      "Do not connect live financial accounts during an unpaid test.",
    ],
    validationPlan: [
      "Find 20 small accounting firms that publicly describe S-corporation or client-accounting services.",
      "Email a one-page workflow concept focused on exception handling and client communication.",
      "Ask whether the firm would pay for a secure workflow audit before discussing software.",
      "Proceed only with a qualified partner who owns the professional judgment and client relationship.",
    ],
    proofGate:
      "Stop unless one qualified firm pays for a workflow audit and agrees in writing to own all accounting and tax judgments.",
    honestRedFlags: [
      "This service touches sensitive financial data and requires stronger security, contracts, access controls, and incident procedures.",
      "Tax reserve and owner-pay guidance can cross into professional judgment.",
      "QuickBooks, Xero, banks, payroll providers, and existing bookkeeping firms create a crowded integration and service environment.",
      "Ongoing exception review creates more human workload than the calculator business.",
    ],
    buildPath: [
      "Treat this as a partner-led service, not a direct-to-owner AI bookkeeping product.",
      "Sell a workflow audit before any software build.",
      "Require professional review, least-privilege access, audit logs, and a documented data-retention policy.",
    ],
    sources: [
      {
        title: "Statistics of Income: Corporation Returns, Tax Year 2022",
        publisher: "Internal Revenue Service",
        url: "https://www.irs.gov/pub/irs-pdf/p5108.pdf",
        published: "Revised September 2025",
        checked: "August 13, 2026",
        sourceType: "Official source",
        supports:
          "The reported count of 5,266,702 S-corporation returns for tax year 2022.",
      },
      {
        title: "2026 Global Accounting Talent Index",
        publisher: "AdvanceTrack",
        url: "https://www.advancetrack.com/talent/",
        published: "2026",
        checked: "August 13, 2026",
        sourceType: "Primary research",
        supports:
          "Reported accounting-firm capacity pressure, turned-away work, technology exploration, and current AI adoption.",
      },
    ],
  },
  {
    slug: "reversible-action-gateway-for-ai-agents",
    title: "Reversible-action gateway for AI agents",
    summary:
      "A policy layer that classifies agent actions, previews side effects, requires approval for high-impact steps, logs each decision, and exposes rollback hooks where the connected service supports them.",
    category: "Agent security",
    verdict: "hold",
    verdictReason:
      "The problem is real and growing, but the first product would carry high security liability, slow enterprise sales, difficult integrations, and a much larger build than the current cash-first project allows.",
    updated: "August 13, 2026",
    estimatedStartupCost: "$5,000+ for a credible prototype",
    estimatedFirstPayment: "60 to 180 days",
    contactLevel: "Moderate",
    businessModel: "Security review, integration fee, and recurring platform access",
    scores: {
      speedToPayment: 3,
      buyerReachability: 4,
      startupCost: 3,
      grossMargin: 8,
      lowContactFit: 6,
      fulfillmentSimplicity: 2,
      repeatRevenue: 9,
      competitiveOpening: 5,
      evidenceQuality: 8,
      legalEthicalSafety: 3,
    },
    tags: ["AI agents", "Security", "Authorization", "Hold"],
    signal: [
      "NIST launched an AI Agent Standards Initiative in 2026 with security, identity, authorization, and trusted interoperability as core areas.",
      "OWASP's agentic-security guidance calls for action-level least privilege, human review, immutable audit trails, dry runs, and reversible transactions for state-changing actions.",
      "The trend supports a real infrastructure need, but it does not prove that a small buyer will pay a new vendor before standards and buying patterns settle.",
    ],
    whyNow: [
      "Agents are moving from drafting text to taking actions across external systems.",
      "Authorization designed for a human account does not automatically provide safe limits for autonomous action chains.",
      "Products need clear approval, audit, and recovery behavior before users trust higher-impact automation.",
    ],
    product: [
      "Registry of permitted agent identities and tools.",
      "Action classes for read-only, reversible, approval-gated, and irreversible operations.",
      "Preflight preview with explicit human approval for high-impact actions.",
      "Immutable action log and service-specific rollback adapters.",
    ],
    buyer: [
      "Companies deploying agents that modify customer, booking, financial, identity, or infrastructure records.",
      "Security and platform teams, not individual consumers, would control the buying process.",
    ],
    offer: [
      "Do not build a platform first.",
      "A safer entry would be a paid agent-action threat-model review delivered with an experienced security partner.",
      "Keep the idea in research until a specific design partner funds one narrow integration.",
    ],
    validationPlan: [
      "Interview or email 20 teams that publicly ship action-taking agents.",
      "Ask for one recent workflow where approval, audit, authorization, or rollback caused a launch delay.",
      "Offer a paid threat-model review for one workflow, not software access.",
      "Proceed only when a design partner funds a narrow proof of concept and accepts shared security responsibilities.",
    ],
    proofGate:
      "Hold the software build until one design partner pays for the review and commits engineering time to a single integration.",
    honestRedFlags: [
      "A mistake in a security control product can create more harm than the original agent workflow.",
      "Every connected service has different permissions, side effects, and rollback support.",
      "Enterprise security sales are slower and more relationship-heavy than the current agency-calculator offer.",
      "Standards and protocols are still developing.",
    ],
    buildPath: [
      "Track NIST and OWASP guidance.",
      "Develop a review checklist and action-classification schema before any code.",
      "Revisit only after a paid design partner names a narrow action flow and required integration.",
    ],
    sources: [
      {
        title: "AI Agent Standards Initiative",
        publisher: "National Institute of Standards and Technology",
        url: "https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative",
        published: "Updated April 20, 2026",
        checked: "August 13, 2026",
        sourceType: "Official source",
        supports:
          "The emerging need for secure, trusted, interoperable agent identity, authorization, and evaluation standards.",
      },
      {
        title: "Agentic AI: Catastrophic Cross-System Impact via Excessive Agency",
        publisher: "OWASP Foundation",
        url: "https://cornucopia.owasp.org/cards/AAIK",
        published: "Updated July 2026",
        checked: "August 13, 2026",
        sourceType: "Security standard",
        supports:
          "Action-level least privilege, human review, dry-run modes, reversible transactions, audit trails, and reversibility classification.",
      },
    ],
  },
] satisfies readonly OpportunityDraft[];

function estimateReadingMinutes(opportunity: OpportunityDraft) {
  const sourceText = opportunity.sources.flatMap((source) => [
    source.title,
    source.publisher,
    source.supports,
  ]);
  const words = [
    opportunity.title,
    opportunity.summary,
    opportunity.verdictReason,
    opportunity.businessModel,
    ...opportunity.signal,
    ...opportunity.whyNow,
    ...opportunity.product,
    ...opportunity.buyer,
    ...opportunity.offer,
    ...opportunity.validationPlan,
    opportunity.proofGate,
    ...opportunity.honestRedFlags,
    ...opportunity.buildPath,
    ...sourceText,
  ]
    .join(" ")
    .trim()
    .split(/\s+/).length;

  return Math.max(1, Math.ceil(words / 220));
}

export const opportunities: readonly Opportunity[] = opportunityDrafts.map(
  (opportunity) => {
    const score = calculateOpportunityScore(opportunity.scores);

    return {
      ...opportunity,
      score,
      scoreBand: scoreBand(score),
      estimatedReadMinutes: estimateReadingMinutes(opportunity),
    };
  },
);

export function getOpportunity(slug: string) {
  return opportunities.find((opportunity) => opportunity.slug === slug);
}

export const featuredOpportunities = opportunities.slice(0, 3);

export const verdictLabels: Record<OpportunityVerdict, string> = {
  "build-now": "Build now",
  "validate-first": "Validate first",
  "partner-required": "Partner required",
  hold: "Hold",
};
