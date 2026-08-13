# Your Friendly Developer

This repository contains two connected assets under the Your Friendly Developer brand:

1. A cash-first, white-label lead-value calculator sold to small marketing agencies serving home-service companies.
2. Opportunity Lab, a source-backed research section that turns market signals into scored offers and 72-hour validation tests.

The calculator remains the primary paid offer. Opportunity Lab supports trust, outreach, and future product selection. It must not delay the first sale.

## Home-service calculator

The calculator estimates:

- Current monthly booked revenue.
- Gross profit before overhead.
- Revenue per raw lead.
- Current cost per lead.
- Break-even cost per lead.
- Revenue lost from unanswered calls.
- Added monthly revenue from a five-point improvement in three conversion steps.
- Estimated return on ad spend.

Commercial package:

- $1,000 total.
- $500 deposit.
- $500 after installation.
- Five-business-day delivery.
- One revision.
- Source-code ownership for the buyer.
- No monthly platform fee.

This repository is intentionally not a multi-tenant SaaS product.

## Opportunity Lab

Opportunity Lab publishes original briefs with:

- A sourced market signal.
- A defined buyer and narrow offer.
- A 100-point decision score.
- A 72-hour paid validation test.
- A proof gate.
- Honest red flags.
- A staged build path.
- Linked sources and checked dates.

V1 is manually curated in `src/data/opportunities.ts`. Agents may assist research later, but no agent output publishes without human review.

Read:

- `docs/OPPORTUNITY_LAB.md`
- `docs/OPPORTUNITY_AGENT_PIPELINE.md`

## Brand and domain plan

Use the domain already owned. Do not buy another domain for this project.

Launch setup:

- Main brand website: `https://yourfriendlydeveloper.com`
- This application: `https://calculator.yourfriendlydeveloper.com`
- Live calculator demo: `https://calculator.yourfriendlydeveloper.com/demo`
- Embeddable calculator: `https://calculator.yourfriendlydeveloper.com/embed`
- Opportunity Lab: `https://calculator.yourfriendlydeveloper.com/opportunities`

A later `lab.yourfriendlydeveloper.com` redirect or a move to the main website is optional after the current deployment works. Do not change the existing main website without its repository and an explicit task.

## Local setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

## Required configuration

Edit `src/config/site.ts` for seller branding, fictional demo-agency branding, offer text, colors, and default calculator values.

Set these environment variables for email delivery:

```text
RESEND_API_KEY
LEAD_FROM_EMAIL
LEAD_TO_EMAIL
```

The sender address must use a domain verified in Resend.

Public settings:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_MAIN_SITE_URL
NEXT_PUBLIC_CONTACT_EMAIL
NEXT_PUBLIC_PAYMENT_LINK
```

## Routes

- `/` Your Friendly Developer sales page.
- `/demo` contractor-facing white-label example.
- `/embed` compact iframe version.
- `/opportunities` Opportunity Lab index.
- `/opportunities/[slug]` sourced opportunity brief.
- `/opportunities/methodology` scoring and source policy.
- `/privacy` privacy statement.
- `/api/leads` validated server-side form endpoint. Contractor results are recalculated on the server before email delivery.

## Checks

The current suite includes 26 unit tests covering formulas, input limits, lead validation, and opportunity scoring.

```bash
npm run test
npm run typecheck
npm run lint
npm run build
```

Run all checks with:

```bash
npm run check
```

## Deploy

Push the repository to GitHub and import it into Vercel. Add the documented environment variables. Connect `calculator.yourfriendlydeveloper.com` using the exact DNS records Vercel supplies.

Read:

- `docs/DOMAIN_AND_BRAND.md`
- `docs/DEPLOYMENT.md`
- `docs/QA_CHECKLIST.md`

## Project direction

Read `AGENTS.md` before assigning work to Codex. The source of truth for scope, research standards, and acceptance criteria lives in `docs/`.
