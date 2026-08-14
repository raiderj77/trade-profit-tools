# Opportunity agent pipeline

## Status

This is a future operating workflow, not an autonomous production system.

Agents may help collect, summarize, challenge, and format research. A person must approve the evidence, verdict, copy, and publication.

## Roles

### Scout

Collects candidate signals from:

- Government releases.
- Standards bodies.
- Original industry surveys.
- Official product updates.
- Public licensing or business registries when their terms permit it.
- Credible reporting that links to primary evidence.

Output:

- Signal summary.
- Source URL.
- Publisher.
- Published date.
- Checked date.
- Exact claim supported.

### Evidence checker

Verifies:

- The source loads.
- The cited claim appears in the source.
- The date and scope are accurate.
- A percentage is not presented without its denominator or sample context.
- A company claim is not presented as an independent market fact.

### Skeptic

Looks for:

- Existing products and substitutes.
- Buyer support burden.
- Slow or relationship-heavy sales.
- Privacy, security, regulatory, licensing, and ethical risk.
- Weak founder fit.
- Hidden fulfillment work.
- Reasons the buyer might ignore the offer.

### Offer designer

Produces the smallest testable offer:

- One buyer.
- One painful outcome.
- One delivery format.
- One price hypothesis.
- One payment request.
- One limited scope.

### Validator

Creates a 72-hour test:

- Exact prospect source.
- Number of prospects.
- Outreach message.
- Payment or deposit request.
- Follow-up timing.
- Continue, change, or stop threshold.

### Human editor

Approves:

- Source quality.
- Factual accuracy.
- Original wording.
- Risk labels.
- Score and verdict.
- Brand fit.
- Publication.

## Safety boundaries

Agents must not:

- Publish without human approval.
- Book, cancel, purchase, enroll, remove, or modify third-party records as part of idea research.
- Bypass a login, paywall, robots rule, rate limit, or site restriction.
- Collect sensitive personal data.
- Send bulk outreach without an approved list, message, domain, and unsubscribe process.
- Treat inferred professional advice as a product feature.
- Hide a weak source behind confident language.

Research actions should be read-only whenever possible. Any future external action requires clear authorization, a preview, an audit trail, and a reversal plan when reversal exists.

## Suggested draft schema

Each agent-produced draft should contain:

```text
slug
title
summary
category
candidate verdict
signal claims
source records
buyer
offer
validation plan
proof gate
red flags
score dimensions
open questions
human review status
```

## Publication gate

A brief is ready only when:

- Every material claim has a working source.
- The source supports the wording used.
- Assumptions are labeled.
- A skeptical case is visible.
- A payment-based validation test exists.
- The idea does not depend on unqualified professional judgment.
- A person approves the final page.

## Future automation gate

Do not build an automated research platform until manual briefs produce at least one of these outcomes:

- A paid build request tied to a brief.
- A qualified buyer reply tied to a brief.
- Repeat organic traffic to several briefs.
- A clear request for ongoing opportunity research.

Until then, the data file and human review process are enough.
