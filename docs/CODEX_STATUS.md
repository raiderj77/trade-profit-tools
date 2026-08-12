# Codex status

## Current state

The MVP is code-complete and locally QA-verified on `main` as of August 11, 2026. Launch remains blocked on the owner-supplied email, payment, and Resend settings plus separately authorized Vercel and DNS work. The calculator remains a separate project from the existing Your Friendly Developer website.

## Work completed in this pass

- Read `CODEX_START_HERE.md`, `AGENTS.md`, and every file in `docs/` before changing the project.
- Located and used the canonical checkout at `C:\Users\jason\Desktop\YFD\your-friendly-developer-codex-ready\trade-profit-tools`; the Codex-opened Documents folder was an unrelated empty Git repository and was left untouched.
- Installed dependencies and generated `package-lock.json`.
- Upgraded Next.js and `eslint-config-next` from 16.2.11 to 16.3.0 to remove the current PostCSS and Sharp production-dependency advisories.
- Fixed React purity lint failures by starting both anti-bot form timers after mount.
- Fixed JSX lint errors and removed the remaining test warning.
- Rejected non-number JSON calculator values and non-number submission timestamps instead of coercing strings, booleans, arrays, or `null`.
- Made honeypot submissions return a generic success before detailed payload validation and email delivery.
- Required the exact `application/json` media type and preserved the declared and measured 30 KB request limits.
- Kept contractor results server-calculated and added readable number formatting to notification emails.
- Strengthened Resend idempotency keys so any normalized lead-body change produces a different key.
- Added `Cache-Control: no-store`, origin enforcement, timeout handling, generic service errors, and existing validation checks to the verified API behavior.
- Added HSTS and non-embed clickjacking protection while preserving `/embed` for external iframes.
- Moved the audited seller, product, demo-mark, form-recipient, and brand-effect values into `src/config/site.ts` or documented public environment variables.
- Replaced the hardcoded SVG icon with a config-driven application icon.
- Explicitly labeled the fictional demo in `/embed`, named the real public-demo recipient, and linked to privacy details.
- Updated the privacy disclosure to include optional niches and the source page.
- Improved calculator accessible names by separating labels, affixes, and descriptions.
- Replaced the low-contrast focus outline with a high-contrast double-ring focus indicator.
- Removed the forced 320-pixel body minimum and allowed extreme result values to wrap without clipping.
- Reduced GitHub Actions permissions to read-only and made dependency installation deterministic with `npm ci`.

## Automated verification

- `npm install --no-audit --no-fund`: pass; lockfile created.
- `npm run check`: pass on Node 24.11.1 and npm 11.6.2.
  - Unit tests: 22 pass, 0 fail.
  - TypeScript: pass with strict checking.
  - ESLint: pass with no warnings or errors.
  - Next.js 16.3.0 production build: pass.
- `npm audit --omit=dev --audit-level=high`: 0 vulnerabilities.
- `git diff --check`: pass.
- Production routes generated successfully: `/`, `/demo`, `/embed`, `/privacy`, `/api/leads`, `/robots.txt`, `/sitemap.xml`, and `/icon`.

## Manual browser and API verification

- Verified `/`, `/demo`, `/embed`, and `/privacy` at 320, 375, 768, 1024, and 1440 CSS pixels.
- Every route had no horizontal page overflow at every required width.
- Extreme documented calculator inputs rendered at 320 pixels without clipped result values.
- Verified the documented known-value formula case in the live UI: $375 revenue, $150 gross profit, $5 current CPL, displayed $8 break-even CPL after currency rounding, $125 unanswered-call loss, displayed $94 five-point lift after currency rounding, and 3.75x ROAS.
- Verified all visible inputs have labels, result sections have accessible names, form messages use live regions, reduced-motion CSS is present, and the high-contrast keyboard focus ring is visible.
- Verified the skip link and formula disclosure are keyboard-focusable.
- Verified a clean production browser console with no errors or warnings.
- Verified both the agency preview form and contractor result form in local demo mode; each returned the expected success message and reset personal fields.
- Verified the contractor form from `/embed` inside a separate-origin 320-pixel iframe; it submitted successfully and reset its fields.
- Verified API responses for valid demo success, invalid email, invalid calculator types, implausibly fast submission, filled honeypot, invalid media type, oversized body, missing production email configuration, and unapproved production origin.
- Verified tested API responses use `Cache-Control: no-store`.
- Verified generated sitemap and robots URLs use `https://calculator.yourfriendlydeveloper.com`, never localhost.
- Verified `/`, `/demo`, and `/privacy` deny framing; `/embed` remains frameable.

## Brand and domain boundary

- Seller: Your Friendly Developer.
- Calculator target: `https://calculator.yourfriendlydeveloper.com`.
- Main website: `https://yourfriendlydeveloper.com`.
- The existing main website repository, Vercel project, apex record, `www` record, and nameservers were not changed.

## Vercel preparation completed read-only

- Vercel CLI 50.40.0 is authenticated as `raiderj77-3751` under team `jasons-projects-534f08bb`.
- The team currently has no `trade-profit-tools` Vercel project.
- `yourfriendlydeveloper.com` is registered to the team but uses external DNS; the serving apex project could not be identified from the visible team project list.
- Live DNS showed the apex at `76.76.21.21`, `www` at `cname.vercel-dns.com`, and `calculator.yourfriendlydeveloper.com` unconfigured.
- Vercel reported the calculator subdomain would require `A calculator.yourfriendlydeveloper.com 76.76.21.21` after it is attached to the new calculator project.
- The exact isolated project, environment, Git, domain, and deployment sequence is documented in `docs/DEPLOYMENT.md`.
- No Vercel project, Git connection, deployment, environment variable, hostname, DNS record, apex route, `www` route, or nameserver was changed in this pass.

## Remaining launch items

1. Confirm the pushed `main` commit and its GitHub Actions result.
2. Provide the real public contact email.
3. Provide the Stripe Payment Link.
4. Verify `yourfriendlydeveloper.com` as a Resend sender domain and provide the API key, verified `LEAD_FROM_EMAIL`, and receiving `LEAD_TO_EMAIL`.
5. Run real delivery tests for both public forms after Resend configuration.
6. With explicit deployment authorization, create and link the separate `trade-profit-tools` Vercel project, connect the GitHub repository, and add the confirmed environment variables.
7. Deploy to a generated Vercel URL and verify it before assigning a custom hostname.
8. With explicit domain and DNS authorization, attach only `calculator.yourfriendlydeveloper.com` and add only its required DNS record. Do not alter the apex, `www`, or nameservers.
9. Add a link from the existing main website only after the calculator is live and a separate main-site change is authorized.
10. Replace the text mark only if a final logo is supplied.

## Accepted residual controls

- The MVP intentionally has no database, analytics, tracking cookies, rate limiter, or CAPTCHA.
- The current honeypot, timing checks, validation, origin checks, and Resend idempotency reduce abuse but do not prevent all automated submissions. Add Turnstile or edge rate limiting only if real traffic demonstrates a need.

## Next smallest task

After `main` and its verification workflow are confirmed on GitHub, obtain the real email, payment, and Resend values. Then create a separate Vercel project and verify a generated deployment URL before making any custom-domain or DNS change.
