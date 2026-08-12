# Security and privacy

## Data collected

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

## Data handling

- The application does not use a database.
- The application does not store submissions.
- The server sends submissions to the configured agency inbox through Resend.
- The submitter's validated email address is used as the message reply-to address.
- The agency's email provider and Resend process the message under their own terms.
- No analytics, advertising pixel, session recording, or cookies ship in the MVP.

## Implemented controls

- Validate required fields, email format, URL protocol, timestamp, and calculator values on the server.
- Recalculate every contractor result on the server rather than trusting browser output.
- Require JSON requests.
- Limit both declared and measured request size to 30 KB.
- Limit text length and remove control characters.
- Ignore unexpected calculator fields and reject oversized top-level payloads.
- Reject unapproved browser origins in production when an origin header is present.
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

## Iframe note

The `/embed` route is intended for external agency websites. Do not add a global frame-deny header without preserving this route.

Before a high-traffic launch, restrict `frame-ancestors` to approved customer domains or deploy a separate customer instance.

## Future anti-spam option

Add Cloudflare Turnstile or an edge rate limit only after real submission traffic shows the current controls are insufficient. Do not add either before there is evidence of abuse.

## Retention statement

The app itself retains nothing. The receiving agency controls retention inside its email system. Resend also processes the sent message under its service terms. The final privacy statement must name the real agency and contact email.
