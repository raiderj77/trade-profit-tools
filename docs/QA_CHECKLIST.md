# Manual QA checklist

## Sales page

- Header links work.
- Hero copy explains the offer in one screen.
- Demo button opens `/demo`.
- Opportunity Lab link opens `/opportunities`.
- Price shows $1,000 total and $500 deposit.
- Five-business-day delivery appears.
- Payment button appears only when a payment link exists.
- Preview request form works.
- FAQ answers match the product brief.

## Calculator

- Default values look realistic.
- Every field accepts keyboard input.
- The skip link reaches the main content.
- Empty fields do not produce `NaN` or `Infinity`.
- Percentages remain between 0 and 100.
- Negative values do not create negative results.
- Large finite inputs stop at the documented caps.
- Results update immediately.
- Currency formatting is readable.
- ROAS displays as a ratio.
- Formula explanation opens and closes.
- Disclaimer stays visible.

## Contractor lead form

- Name, email, and company are required.
- Phone is optional.
- Consent is required.
- Success state clears personal fields.
- Failure state preserves entered fields.
- Double submission is blocked while sending.
- Email contains validated metrics and server-calculated results.
- Replying to the notification targets the submitter's work email.
- Repeating the same request does not create a duplicate Resend delivery within the idempotency window.

## Embed

- Opens with no sales-page navigation.
- Fits at 320 pixels wide.
- Fits inside an iframe without horizontal scrolling.
- Form submission works inside the iframe.

## Opportunity Lab index

- Four reviewed briefs appear.
- Verdict badges match the data.
- Scores, startup assumptions, and first-payment assumptions display.
- Cards remain readable at 320, 375, 768, 1024, and 1440 pixels.
- Homepage preview links to the full Lab.
- The methodology link works.

## Opportunity detail pages

- Every configured slug renders.
- Unknown slugs return the not-found page.
- Score total matches the ten dimensions.
- Score meters expose accessible minimum, maximum, and current values.
- Signal, why now, buyer, offer, validation test, proof gate, red flags, and build path appear.
- Every source card shows publisher, source type, published date, and checked date.
- Every source link opens the intended first-party or standards source.
- Structured data uses the production origin after deployment.
- Disclaimer separates research from professional advice.

## Opportunity methodology

- Score thresholds match the scoring module.
- Human review and no-auto-publish rules appear.
- Source policy forbids fabricated evidence.
- Validation rules distinguish interest, evidence, and payment proof.

## Privacy

- Contact email is correct.
- Agency name is correct.
- Data-use description matches production behavior.
- No analytics or cookies are claimed when none exist.
- Opportunity Lab does not claim to collect newsletter subscriptions.

## Technical

- No console errors.
- No failed network requests during normal use.
- Test, typecheck, lint, and build pass.
- Production environment variables exist.
- Resend sender is verified.
- Production form email arrives.
- Production rejects an unapproved browser origin.
- API responses use `Cache-Control: no-store`.
- Sitemap includes all public Lab pages.
- Robots rules block `/api/` and `/embed` while allowing the Lab.
- GitHub Actions verification passes on the published commit.
