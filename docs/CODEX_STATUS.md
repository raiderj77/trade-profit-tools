# Codex status

## Current state

The calculator is code-complete and live at `https://calculator.yourfriendlydeveloper.com` through its isolated Vercel project while payment and Resend remain unconfigured. The production build omits both public lead forms unless every required Resend delivery value is present, omits the deposit button while no Stripe Payment Link exists, and provides `jason@yourfriendlydeveloper.com` as the fallback. The current production release is on GitHub `main`, the latest deployment is Ready, and a narrowly scoped Vercel WAF rule protects the lead endpoint. Opportunity Lab is implemented on pull request 6 and is being reconciled with the current production branch before release.

## Opportunity Lab release, August 13, 2026

- Added the Opportunity Lab index, methodology, four original source-backed briefs, ten-dimension scoring, proof gates, red flags, staged build paths, navigation, and sitemap coverage.
- Rechecked the linked Invoca, Jobber, IRS, AdvanceTrack, NIST, and OWASP source claims; corrected overstated Jobber and IRS wording.
- Upgraded Next.js and `eslint-config-next` to 16.3.1 and cleared the dependency audit.
- Added a validated production URL helper so metadata, robots, sitemap, and Open Graph output cannot fall back to localhost.
- Restored useful navigation at 320 and 375 CSS pixels without horizontal overflow.
- Reduced GitHub Actions permissions to read-only and retained deterministic `npm ci` installation.
- Added explicit owner-approval gates for external publication, deployment, DNS, accounts, credentials, outreach, and payment actions.
- The downloaded archive passed `git fsck --full`; the clean `npm ci`, 26-test suite, strict TypeScript check, zero-warning ESLint run, 15-route production build, and local browser QA all passed before reconciliation with the newer production branch.
- Pull request: `https://github.com/raiderj77/trade-profit-tools/pull/6`.
- The Vercel preview check passed before GitHub identified that the branch needed the newer production commits merged into it.

## Local launch-hardening recheck, August 12, 2026

- Re-read `CODEX_START_HERE.md`, `AGENTS.md`, and every file in `docs/` before editing.
- Reconfirmed the canonical checkout, clean starting `main` branch, GitHub remote, public repository, Vercel identity, isolated project ID, framework preset, Node version, environment-variable names, and unattached calculator hostname without making an external change.
- Reinstalled dependencies with `npm ci --no-audit --no-fund` from the committed lockfile.
- Preserved the Next.js 16.3-generated agent-rules block in `AGENTS.md`; future code work must read the relevant bundled guide in `node_modules/next/dist/docs/`.
- Required an approved `Origin` on every production lead request instead of accepting a missing origin. The canonical calculator origin, current Vercel deployment origin, and generated Vercel project-production origin are supported.
- Added three unit tests for production, preview, generated-alias, and development origin behavior.
- Added an explicit delivery-availability gate. Production pages omit both lead
  forms until the Resend API key, verified sender, and recipient are all
  configured; local demo mode remains available outside production.
- Added a clear unavailable state that accepts no personal data and uses the
  configured public email as the fallback contact method.
- Marked both off-screen honeypot containers `inert` so their inputs cannot enter the accessibility tree or focus order.
- `npm run check`: pass after the changes; 28 tests, strict TypeScript, ESLint, and the Next.js 16.3.0 production build all pass.
- `npm audit --audit-level=high`: 0 vulnerabilities.
- `git diff --check`: pass.
- Rechecked `/`, `/demo`, `/embed`, and `/privacy` in a real browser at 320, 375, 768, 1024, and 1440 CSS pixels. Every route has one H1, no duplicate IDs, no unlabeled controls, no hidden-focus violation, and no horizontal overflow.
- Rechecked the documented live-UI formula case: $375 estimated revenue, $150 estimated gross profit, $5 current CPL, displayed $8 break-even CPL after rounding, $125 unanswered-call loss, displayed $94 five-point lift after rounding, and 3.75x ROAS.
- Rechecked both forms in local demo mode: success messages appeared and personal fields reset. Rechecked both with email delivery intentionally unconfigured: accessible error alerts appeared and user entries remained intact.
- Rechecked production API handling for missing and unapproved origins, invalid media type, invalid email, implausibly fast submission, honeypot, missing Resend configuration, and oversized payload. Expected statuses were 403, 403, 415, 400, 400, 200, 503, and 413; every response used `Cache-Control: no-store`.
- Rechecked production security headers and frame policy: `/`, `/demo`, and `/privacy` deny framing; `/embed` remains frameable; HSTS and `nosniff` remain present.
- Rechecked key text/background contrast pairs. Ratios range from 5.01:1 to 11.19:1, meeting the WCAG AA threshold for normal text.
- Reconfirmed that the generated Vercel alias and all four public routes return HTTP 200, the main Your Friendly Developer site remains HTTP 200, and `calculator.yourfriendlydeveloper.com` remains NXDOMAIN.
- Verified the safe production build contains zero lead forms on `/`, `/demo`,
  and `/embed`, while all eight calculator inputs remain usable on the demo and
  embed routes.
- Configured `NEXT_PUBLIC_CONTACT_EMAIL=jason@yourfriendlydeveloper.com` for
  Production in the isolated calculator project. No secret value was exposed.
- Activated Vercel WAF rule `rule_lead_form_rate_limit_T7IHy0` on only the
  calculator project: exact path `/api/leads`, method `POST`, fixed 60-second
  window, five requests per IP, deny when exceeded.
- Verified the active WAF rule is valid and returns a Vercel mitigation response
  after the threshold. No apex, `www`, nameserver, payment, email-delivery, or
  calculator-hostname change was made at this stage.

### Files published in this recheck

- `AGENTS.md`
- `src/app/api/leads/route.ts`
- `src/app/demo/page.tsx`
- `src/app/embed/page.tsx`
- `src/app/page.tsx`
- `src/app/privacy/page.tsx`
- `src/components/AgencyPreviewForm.tsx`
- `src/components/ContractorLeadForm.tsx`
- `src/components/LeadFormUnavailable.tsx`
- `src/components/LeadValueCalculator.tsx`
- `src/lib/lead-delivery.mjs`
- `src/lib/lead-delivery.d.mts`
- `src/lib/lead-delivery.test.mjs`
- `src/lib/lead-request.mjs`
- `src/lib/lead-request.d.mts`
- `src/lib/lead-request.test.mjs`
- `docs/SECURITY_PRIVACY.md`
- `docs/CODEX_STATUS.md`
- `README.md`

### Exact remaining release inputs and actions

1. Separately obtain the final Stripe Payment Link. Until then, the deposit
   button remains omitted.
2. Separately obtain Resend access: verified `yourfriendlydeveloper.com`
   sending domain, server-side API key, verified `LEAD_FROM_EMAIL`, and receiving
   `LEAD_TO_EMAIL`.
3. After Resend configuration, redeploy and run a real delivery test from each
   public form before enabling form-based lead capture.

The calculator code is release-ready for an honest public technical launch with
email as the only contact path. Payment and form-based lead capture remain
separate post-launch blockers.

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
- Configured `NEXT_PUBLIC_CONTACT_EMAIL=jason@yourfriendlydeveloper.com` for
  Production after owner authorization. `NEXT_PUBLIC_PAYMENT_LINK`,
  `RESEND_API_KEY`, `LEAD_FROM_EMAIL`, and `LEAD_TO_EMAIL` remain unset;
  `ALLOW_DEMO_SUBMISSIONS` remains unset in Vercel.
- The first deployment attempt did not publish because the new project initially used Vercel's generic framework preset and expected a `public` output directory. Changed only the project preset to Next.js, then rebuilt successfully.
- Verified ready preview deployment `dpl_BLVx8Bm7Xbi32HBsTnLuarTTmyUr` and ready staged production deployment `dpl_3ejDJ6gKZuLy4j5Y5PzFAesXVDgJ`.
- Verified the staged deployment returns HTTP 200 for `/`, `/demo`, `/embed`, `/privacy`, `/robots.txt`, `/sitemap.xml`, and `/icon`.
- Verified `/`, `/demo`, and `/privacy` retain frame denial while `/embed` remains frameable on Vercel.
- Verified the staged lead API intentionally returns HTTP 503 with `Cache-Control: no-store` while Resend is unconfigured; no fake or undeliverable success is shown.
- The manual preview and staged-production deployment URLs remain team-authenticated under the existing deployment-protection setting.
- The Git-connected `main` branch now deploys automatically. The generated project alias `https://trade-profit-tools.vercel.app` returns HTTP 200 for every public route listed above and retains the verified page/embed security-header split.
- The generated alias is a technical preview only: a valid form request returns the intentional HTTP 503 with `Cache-Control: no-store` until Resend is configured. It is not linked from the main site or advertised as the live calculator.
- Merged safe-launch pull request 3 after GitHub Actions and Vercel checks passed; GitHub `main` is at `139ec91`.
- Verified Ready production deployment `dpl_HHKYr59o36auXN1jeKChQNTWYWH7` at `https://trade-profit-tools.vercel.app` and the generated project-production alias.
- Verified the live production home and demo routes, calculator recalculation, absence of inactive lead/payment controls, and the direct fallback link to `jason@yourfriendlydeveloper.com`.
- Attached only `calculator.yourfriendlydeveloper.com` to the isolated `trade-profit-tools` project.
- Added only `A calculator 76.76.21.21` in Namecheap. The apex, `www`, MX, SPF, DKIM, DMARC, and nameservers were left unchanged.
- Verified the authoritative Namecheap nameserver, Cloudflare DNS, and Google DNS all return `76.76.21.21` for the calculator hostname.
- Verified HTTPS and HTTP 200 responses for `/`, `/demo`, `/embed`, `/privacy`, `/robots.txt`, `/sitemap.xml`, and `/icon` on the custom hostname. The non-embed pages deny framing, `/embed` remains frameable, and every route returns HSTS.
- Verified the custom-domain production pages expose no inactive lead forms, provide the confirmed email fallback, and use the calculator hostname as their canonical URL.
- Verified the custom-domain API rejects missing and wrong origins with 403, rejects the wrong media type with 415, returns generic no-store success for a honeypot request, and is denied by the project WAF after the configured threshold.
- The exact isolated project, environment, Git, domain, and deployment sequence is documented in `docs/DEPLOYMENT.md`.
- No calculator hostname, DNS record, apex route, `www` route, or nameserver was changed.

## Remaining commercial-launch items

1. Provide the Stripe Payment Link.
2. Verify `yourfriendlydeveloper.com` as a Resend sender domain and provide the API key, verified `LEAD_FROM_EMAIL`, and receiving `LEAD_TO_EMAIL`.
3. Run real delivery tests for both public forms after Resend configuration.
4. Replace the text mark only if a final logo is supplied.

## Accepted residual controls

- The MVP intentionally has no database, analytics, tracking cookies, or CAPTCHA.
- The active Vercel WAF rule provides a distributed first layer in addition to
  the application honeypot, timing checks, validation, origin checks, request
  limits, and Resend idempotency. These controls reduce abuse but do not prove a
  submitter is human.

## Next smallest task

Add payment and Resend only when their real values are available, then redeploy
and verify both form deliveries before enabling those controls.
