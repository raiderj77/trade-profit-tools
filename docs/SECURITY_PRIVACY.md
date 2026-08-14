# Security and privacy

## Data collected by forms

Contractor result form:

- Name.
- Work email.
- Company.
- Optional phone.
- Calculator inputs.
- Source page path.

Agency preview form:

- Name.
- Work email.
- Agency name.
- Optional website URL.
- Optional home-service niches.
- Source page path.

The browser does not submit trusted result values. The server validates the calculator inputs, recalculates the estimate, and includes those server-generated results in the email.

## Opportunity Lab data

Opportunity Lab V1 is static public content stored in the repository.

It does not:

- Create visitor profiles.
- Save searches or ideas.
- Collect newsletter subscriptions.
- Run analytics, advertising pixels, session recording, or cookies.
- Automatically scrape or publish third-party content.

Source links send visitors to external sites governed by those sites' terms and privacy policies.

## Form data handling

- The application does not use a database.
- The application does not store submissions.
- The server sends submissions to the configured agency inbox through Resend.
- The submitter's validated email address is used as the message reply-to address.
- The agency's email provider and Resend process the message under their own terms.
- No analytics, advertising pixel, session recording, or cookies ship in the MVP.

## Implemented form controls

- Validate required fields, email format, URL protocol, timestamp, and calculator values on the server.
- Recalculate every contractor result on the server rather than trusting browser output.
- Require JSON requests.
- Limit both declared and measured request size to 30 KB.
- Limit text length and remove control characters.
- Ignore unexpected calculator fields and reject oversized top-level payloads.
- Require an approved browser origin in production. The canonical calculator
  origin, the current Vercel deployment origin, and the generated Vercel
  project-production origin are allowed.
- Reject implausibly fast, stale, or future-dated submissions.
- Use a hidden honeypot field.
- Use a Resend idempotency key to reduce duplicate email delivery.
- Apply a 10-second email API timeout.
- Keep API keys server-side.
- Return generic service errors to users.
- Return `Cache-Control: no-store` from the form endpoint.
- Do not log payloads.
- Use a verified sender domain.
- Use HTTPS in production.

## Opportunity research controls

- Prefer read-only research actions.
- Do not publish agent output automatically.
- Do not bypass logins, paywalls, site restrictions, rate limits, or robots rules.
- Do not collect sensitive personal data for prospect lists or briefs.
- Do not copy another publisher's protected text, graphics, or paid research.
- Record source URLs and checked dates.
- Keep legal, tax, accounting, financial, medical, and security risks visible.
- Require human review before publication.
- Remove or correct unsupported claims.

## Iframe note

The `/embed` route is intended for external agency websites. Do not add a global frame-deny header without preserving this route.

Before a high-traffic launch, restrict `frame-ancestors` to approved customer domains or deploy a separate customer instance.

## Provider rate limiting

The isolated Vercel calculator project applies a fixed-window WAF rule to
`POST /api/leads`: five requests per 60 seconds per source IP, followed by a
deny response. This distributed limit complements the application controls.

Do not add CAPTCHA or another challenge unless real traffic shows the current
controls are insufficient.

## Future agent-action boundary

An opportunity research agent does not need authority to book, cancel, purchase, enroll, delete, or change third-party records.

Any future action-taking system requires:

- Explicit authorization.
- Least privilege.
- A human-readable preview.
- An audit trail.
- Service-specific confirmation.
- A reversal plan when reversal exists.
- A clear warning when an action is irreversible.

## Retention statement

The app itself retains no form submissions. The receiving agency controls retention inside its email system. Resend also processes the sent message under its service terms. The final privacy statement must name the real agency and contact email.
