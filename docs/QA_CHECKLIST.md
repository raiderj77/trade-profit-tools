# Manual QA checklist

## Sales page

- Header links work.
- Hero copy explains the offer in one screen.
- Demo button opens `/demo`.
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

## Privacy

- Contact email is correct.
- Agency name is correct.
- Data-use description matches production behavior.
- No analytics or cookies are claimed when none exist.

## Technical

- No console errors.
- No failed network requests during normal use.
- Test, typecheck, lint, and build pass.
- Production environment variables exist.
- Resend sender is verified.
- Production form email arrives.
- Production rejects an unapproved browser origin.
- API responses use `Cache-Control: no-store`.
- GitHub Actions verification passes on the published commit.
