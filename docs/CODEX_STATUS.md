# Codex status

## Current state

The MVP is code-complete, locally QA-verified, published on GitHub `main`, and verified by GitHub Actions as of August 12, 2026. Its separate Vercel project, Git connection, safe public URL settings, preview, and production build are ready. The generated Vercel project alias is a working technical preview, but public launch remains blocked on the owner-supplied email, payment, and Resend settings, successful real delivery tests, and the final calculator-only hostname/DNS assignment.

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
- Regenerated the lockfile with the workflow's npm 10 toolchain after reproducing and fixing its transitive Sharp dependency mismatch.
- Updated the official checkout and Node setup actions to their current Node 24-based major versions, removing the runner deprecation annotation.

## Automated verification

- `npm install --no-audit --no-fund`: pass; lockfile created.
- `npm run check`: pass on Node 24.11.1 and npm 11.6.2.
  - Unit tests: 22 pass, 0 fail.
  - TypeScript: pass with strict checking.
  - ESLint: pass with no warnings or errors.
  - Next.js 16.3.0 production build: pass.
- `npx npm@10.9.3 ci --no-audit --no-fund` and the full `npm run check`: pass with the GitHub runner's npm major.
- `npm ci --no-audit --no-fund`: pass again with npm 11.6.2 using the same corrected lockfile.
- Full and production-only `npm audit --audit-level=high`: 0 vulnerabilities.
- `git diff --check`: pass.
- Production routes generated successfully: `/`, `/demo`, `/embed`, `/privacy`, `/api/leads`, `/robots.txt`, `/sitemap.xml`, and `/icon`.
- GitHub Actions `Verify MVP` run `31568817020`: pass on application commit `f35bafa8311fce683f34a3d7b68acbe7c4622f69`. Subsequent documentation-only publication checks also passed.

## Repository publication verified

- Public repository: `https://github.com/raiderj77/trade-profit-tools`.
- Default branch: `main`.
- Before this deployment record was added, local `HEAD`, local `origin/main`, and the GitHub API commit matched at application commit `f35bafa8311fce683f34a3d7b68acbe7c4622f69`.
- Compared every tracked path against GitHub's recursive tree: 51 local files, 51 GitHub files, and 0 differences.
- The repository changed from empty to populated, and the clean GitHub runner completed install, tests, generated route types, strict TypeScript, ESLint, and the production build.

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
- The live main website remains healthy: the apex returns HTTP 200 and `www` redirects to it with HTTP 308.
- Calculator preparation did not change the main website project, apex, `www`, DNS records, or nameservers.

## Vercel deployment preparation

- Vercel CLI 50.40.0 is authenticated as `raiderj77-3751` under team `jasons-projects-534f08bb`.
- Created the isolated `trade-profit-tools` project (`prj_ORwhwNbR9jODceU1P5rJoGyuPamF`) without attaching any custom hostname.
- Linked only the canonical calculator checkout through ignored local `.vercel` metadata.
- Connected only `https://github.com/raiderj77/trade-profit-tools.git`; the Vercel production branch is `main`.
- Configured `NEXT_PUBLIC_SITE_URL=https://calculator.yourfriendlydeveloper.com` and `NEXT_PUBLIC_MAIN_SITE_URL=https://yourfriendlydeveloper.com` for Preview and Production.
- Left `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_PAYMENT_LINK`, `RESEND_API_KEY`, `LEAD_FROM_EMAIL`, and `LEAD_TO_EMAIL` unset because real owner-confirmed values are not available. `ALLOW_DEMO_SUBMISSIONS` remains unset in Vercel.
- The first deployment attempt did not publish because the new project initially used Vercel's generic framework preset and expected a `public` output directory. Changed only the project preset to Next.js, then rebuilt successfully.
- Verified ready preview deployment `dpl_BLVx8Bm7Xbi32HBsTnLuarTTmyUr` and ready staged production deployment `dpl_3ejDJ6gKZuLy4j5Y5PzFAesXVDgJ`.
- Verified the staged deployment returns HTTP 200 for `/`, `/demo`, `/embed`, `/privacy`, `/robots.txt`, `/sitemap.xml`, and `/icon`.
- Verified `/`, `/demo`, and `/privacy` retain frame denial while `/embed` remains frameable on Vercel.
- Verified the staged lead API intentionally returns HTTP 503 with `Cache-Control: no-store` while Resend is unconfigured; no fake or undeliverable success is shown.
- The manual preview and staged-production deployment URLs remain team-authenticated under the existing deployment-protection setting.
- The Git-connected `main` branch now deploys automatically. The generated project alias `https://trade-profit-tools.vercel.app` returns HTTP 200 for every public route listed above and retains the verified page/embed security-header split.
- The generated alias is a technical preview only: a valid form request returns the intentional HTTP 503 with `Cache-Control: no-store` until Resend is configured. It is not linked from the main site or advertised as the live calculator.
- Live DNS still shows `calculator.yourfriendlydeveloper.com` as NXDOMAIN. The calculator hostname is not assigned to any project.
- Vercel reported the calculator subdomain would require `A calculator.yourfriendlydeveloper.com 76.76.21.21` after it is attached to the new calculator project.
- The exact isolated project, environment, Git, domain, and deployment sequence is documented in `docs/DEPLOYMENT.md`.
- No calculator hostname, DNS record, apex route, `www` route, or nameserver was changed.

## Remaining launch items

1. Provide the real public contact email.
2. Provide the Stripe Payment Link.
3. Verify `yourfriendlydeveloper.com` as a Resend sender domain and provide the API key, verified `LEAD_FROM_EMAIL`, and receiving `LEAD_TO_EMAIL`.
4. Run real delivery tests for both public forms after Resend configuration.
5. After delivery works, attach only `calculator.yourfriendlydeveloper.com` and add only its required DNS record. Do not alter the apex, `www`, or nameservers.
6. Add `NEXT_PUBLIC_CALCULATOR_URL=https://calculator.yourfriendlydeveloper.com` to the main-site Vercel project only after the live calculator passes final browser and form checks.
7. Replace the text mark only if a final logo is supplied.

## Accepted residual controls

- The MVP intentionally has no database, analytics, tracking cookies, rate limiter, or CAPTCHA.
- The current honeypot, timing checks, validation, origin checks, and Resend idempotency reduce abuse but do not prevent all automated submissions. Add Turnstile or edge rate limiting only if real traffic demonstrates a need.

## Next smallest task

Obtain the real public email, Stripe Payment Link, and verified Resend values. Add them to Preview and Production, redeploy, and confirm both forms deliver before assigning the calculator hostname or changing DNS.
