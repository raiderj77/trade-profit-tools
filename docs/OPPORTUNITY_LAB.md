# Opportunity Lab

## Purpose

Opportunity Lab turns current market signals into small business tests that Your Friendly Developer can build or validate.

It is not a generic idea database and it does not promise that a scored idea will succeed. It exists to answer four practical questions:

1. Is the problem supported by credible evidence?
2. Is there a reachable buyer with a reason to pay now?
3. What is the smallest paid test?
4. What should stop the build?

## Role in the business

The calculator service remains the primary cash offer.

Opportunity Lab supports the business by:

- Showing how Your Friendly Developer evaluates problems before building.
- Creating original, source-backed pages that can attract agency owners and small-business buyers.
- Producing new calculator, landing-page, and workflow concepts only after a validation gate.
- Giving outreach prospects useful research instead of generic sales copy.

The Lab must not delay direct outreach or the first calculator sale.

## Public routes

- `/opportunities` brief index.
- `/opportunities/[slug]` individual opportunity brief.
- `/opportunities/methodology` scoring, source, and publication rules.

## Brief structure

Every published brief includes:

- A clear title and one-sentence summary.
- The signal and why it matters now.
- A defined buyer.
- A narrow product or service.
- A starting offer and pricing assumption.
- A 72-hour validation plan.
- A payment-based proof gate.
- Honest red flags.
- A staged build path.
- A 100-point score.
- Linked sources with published and checked dates.

## Verdicts

- `Build now`: enough evidence and founder fit exist to run the paid test immediately.
- `Validate first`: the signal is credible, but differentiation or buyer behavior still needs proof.
- `Partner required`: the opportunity depends on licensed, regulated, security, or specialist judgment outside the current business.
- `Hold`: risk, cost, sales friction, or weak fit outweighs the current evidence.

A human reviewer may override the score when regulation, safety, privacy, security, or professional licensing creates a material risk.

## Scoring model

Each dimension receives a whole-number score from 1 to 10:

- Speed to first payment.
- Buyer reachability.
- Startup cost.
- Gross margin.
- Low-contact fit.
- Fulfillment simplicity.
- Repeat revenue.
- Competitive opening.
- Evidence quality.
- Legal and ethical safety.

Score bands:

- 80 to 100: build now.
- 65 to 79: validate first.
- 10 to 64: hold unless a qualified partner changes the risk profile.

The score is a decision filter. It is not a success probability, market forecast, or investment rating.

## Source rules

- Prefer government data, standards bodies, original surveys, official product documentation, and first-party research.
- Link every material factual claim to the source that supports it.
- Record the publication date and the date the source was checked.
- Separate facts from inferences and testing assumptions.
- Do not fabricate market size, customer counts, growth rates, testimonials, competitors, prices, or revenue forecasts.
- Do not copy another publisher's newsletter, article structure, wording, graphics, or paid research.
- Paraphrase source findings and keep quotations short when a quotation is necessary.
- Remove or revise a claim when its source no longer supports it.

## V1 publishing workflow

V1 is manually curated in `src/data/opportunities.ts`.

1. Research a candidate signal.
2. Save the strongest primary sources.
3. Write the skeptical case before the offer.
4. Score all ten dimensions.
5. Define a 72-hour validation test and stop rule.
6. Review every claim and link.
7. Add the brief to the data file.
8. Run tests, typecheck, lint, build, and manual page QA.
9. Publish only after human review.

## V1 non-goals

- No autonomous publishing.
- No live scraping service.
- No user accounts or saved ideas.
- No AI chat interface.
- No personalized investment, tax, legal, accounting, medical, or security advice.
- No paid membership or idea marketplace.
- No daily newsletter infrastructure.
- No claim that a score predicts revenue.

## Conversion path

Each brief should point to one relevant next step:

- Request a branded preview.
- Request a small paid proof build.
- Open the current calculator demo.
- Join a future email list only after consent, delivery, and unsubscribe systems exist.

Do not add a newsletter form until the email provider, consent language, privacy text, and unsubscribe flow are ready.
