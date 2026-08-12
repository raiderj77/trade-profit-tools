# Your Friendly Developer Home-Service Lead Calculator

A cash-first, white-label calculator sold by Your Friendly Developer to small marketing agencies serving plumbers, HVAC companies, roofers, electricians, landscapers, remodelers, and related home-service businesses.

The calculator estimates:

- Current monthly booked revenue.
- Gross profit before overhead.
- Revenue per raw lead.
- Current cost per lead.
- Break-even cost per lead.
- Revenue lost from unanswered calls.
- Added monthly revenue from a five-point improvement in three conversion steps.
- Estimated return on ad spend.

## Brand and domain plan

Use the domain you already own. Do not buy another domain for this offer.

Recommended launch setup:

- Main brand website: `https://yourfriendlydeveloper.com`
- Standalone calculator offer: `https://calculator.yourfriendlydeveloper.com`
- Live demo: `https://calculator.yourfriendlydeveloper.com/demo`
- Embeddable calculator: `https://calculator.yourfriendlydeveloper.com/embed`

The subdomain keeps the calculator project separate from the current website code. It also avoids risking the existing site during the MVP launch. If the current website repository is available later, the offer can be merged into a route on the main domain.

## Product model

The commercial offer is a custom-branded installation sold for $1,000.

- $500 deposit.
- $500 after installation.
- Five-business-day delivery.
- One revision.
- Source-code ownership for the buyer.
- No monthly platform fee.

This repository is intentionally not a multi-tenant SaaS product.

## Local setup

```bash
cp .env.example .env.local
npm ci
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
- `/privacy` privacy statement.
- `/api/leads` validated server-side form endpoint. Contractor results are recalculated on the server before email delivery.

## Checks

The current suite includes 22 unit tests covering formulas, input limits, lead validation, email number formatting, and delivery idempotency.

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

Push the repository to GitHub and import it into a separate Vercel project. The committed lockfile and included GitHub Actions workflow use `npm ci` and run the full check command. Add the environment variables in the Vercel project settings. Connect only `calculator.yourfriendlydeveloper.com` using the exact DNS record Vercel supplies; leave the apex website and `www` unchanged. See `docs/DOMAIN_AND_BRAND.md` and `docs/DEPLOYMENT.md`.

## Project direction

Read `AGENTS.md` before assigning work to Codex. The source of truth for scope and acceptance criteria lives in `docs/`.
