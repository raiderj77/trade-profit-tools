# Ordered Codex tasks

## Task 1, establish a clean baseline

Acceptance criteria:

- Dependencies install.
- `package-lock.json` exists.
- `npm run test` passes.
- `npm run typecheck` passes.
- `npm run lint` passes.
- `npm run build` passes.

## Task 2, verify formula behavior

Test cases:

- Default inputs return finite, non-negative outputs.
- Zero leads return zero for every per-lead output.
- A 100 percent answer rate returns zero lost revenue from unanswered calls.
- All zero conversion rates return zero revenue.
- Rates above 100 are limited to 100.
- Negative values are treated as zero.
- Five-point lift never produces a negative value.
- Extreme finite values remain finite after input caps.

Acceptance criteria:

- Tests cover all cases.
- Code matches `docs/FORMULAS.md`.
- Labels do not overstate precision.

## Task 3, verify forms

Acceptance criteria:

- Required fields are enforced in the browser and on the server.
- Invalid email addresses fail server validation.
- Payload size is limited.
- Honeypot submissions receive a generic success response without sending email.
- Submissions under the minimum completion time fail.
- Missing production email configuration returns a useful error.
- Development demo mode does not run in production.
- No secret appears in client JavaScript.
- No lead data is written to logs or storage.
- Contractor results are recalculated on the server.
- Repeated delivery attempts reuse a Resend idempotency key.

## Task 4, verify Opportunity Lab data

Acceptance criteria:

- Every opportunity has a unique slug.
- Every score dimension is a whole number from 1 to 10.
- The displayed total matches the score module.
- Every material factual claim has a working source.
- Published and checked dates appear.
- The source supports the wording used.
- Assumptions are labeled as assumptions.
- Every brief includes honest red flags and a payment-based proof gate.
- Regulated or security-sensitive ideas do not receive an unqualified build recommendation.
- No copy reproduces another publisher's newsletter or paid research.

## Task 5, accessibility and responsive QA

Acceptance criteria:

- Every input has a visible label.
- Error and success messages use `aria-live`.
- Keyboard navigation works.
- Focus indicators remain visible.
- Color contrast is readable.
- Layout works at 320, 375, 768, 1024, and 1440 pixels.
- No horizontal scroll.
- Reduced-motion preferences are respected.
- Opportunity score meters expose accessible values.
- Source links and verdict badges remain readable on small screens.

## Task 6, deployment readiness

Acceptance criteria:

- Seller brand is Your Friendly Developer.
- Production target is `calculator.yourfriendlydeveloper.com`.
- The main `yourfriendlydeveloper.com` site remains untouched unless its repository is supplied.
- Environment variables are documented.
- Vercel build succeeds.
- Sitemap uses the production URL.
- Metadata contains no fictional contact details after final configuration.
- `/embed` works inside a basic iframe test page.
- Form email includes source page, submitted values, and calculated results.
- Opportunity index, methodology, and detail routes render as static public pages.

## Task 7, final sales readiness

Acceptance criteria:

- Price is $1,000 with a $500 deposit.
- Delivery promise is five business days.
- Package contents match `docs/PRODUCT_BRIEF.md`.
- No page promises guaranteed business results.
- The branded-preview request takes less than one minute to complete.
- The live demo reaches the first result without creating an account.
- Opportunity Lab points visitors toward a small paid proof, not a large platform build.
