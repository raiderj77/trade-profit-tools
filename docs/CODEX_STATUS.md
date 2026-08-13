# Codex status

## Current state

The calculator MVP and Opportunity Lab V1 are implemented locally on branch `agent/add-opportunity-lab` as of August 13, 2026.

## Included

### Calculator

- Next.js App Router application.
- Your Friendly Developer seller branding.
- Existing-domain and subdomain deployment plan.
- Agency sales page.
- Contractor calculator demo.
- Compact iframe route.
- Formula module and tests.
- Agency preview and contractor lead forms.
- Server-side input validation and result recalculation.
- Resend delivery with reply-to, timeout, and idempotency controls.
- Privacy page.
- Security headers.
- GitHub Actions verification workflow.

### Opportunity Lab

- Opportunity index.
- Four original starter briefs.
- Static detail pages.
- Methodology page.
- Ten-dimension scoring module.
- Eight scoring tests.
- Build-now, validate-first, partner-required, and hold verdicts.
- Source records with publication and checked dates.
- 72-hour validation tests and payment proof gates.
- Honest red flags and staged build paths.
- Homepage preview, header link, footer link, sitemap entries, and responsive styles.
- Human-review and agent-safety documentation.

## Positioning decision

- The calculator remains the cash offer.
- Opportunity Lab is the trust and research layer.
- No IdeaBrowser copy, graphics, protected content, or paid research is included.
- No autonomous publishing, live scraping, newsletter system, AI chat, account system, or database is included.

## Validation completed locally

- `npm run test`: 26 tests pass.
- Formula behavior tests: pass.
- Lead-validation tests: pass.
- Opportunity-score tests: pass.
- TypeScript parser check: pass for all TypeScript and TSX files.
- Temporary framework-stub strict TypeScript check: pass.
- Opportunity data strict TypeScript check: pass.
- CSS parse check: pass.

## Full framework checks still required

The workspace timed out while installing npm dependencies. The real framework checks remain pending:

- `npm run typecheck` with installed Next.js, React, and Node types.
- `npm run lint`.
- `npm run build`.
- Browser QA.

Do not report these checks as passed until Codex or GitHub Actions runs them with installed dependencies.

## GitHub state

- Repository: `raiderj77/trade-profit-tools`.
- Base commit: `0eec592`.
- Local feature branch: `agent/add-opportunity-lab`.
- The GitHub account and repository are visible through the connected integration.
- The connector content-write attempt returned HTTP 403.
- The local environment does not include the GitHub CLI, so this workspace has not pushed the branch.

## Remaining work

1. Install dependencies in Codex or a network-enabled environment.
2. Run `npm run check` and fix any real framework failures.
3. Recheck every live source link and source wording.
4. Complete browser QA for all calculator and Lab routes.
5. Commit and push `agent/add-opportunity-lab`.
6. Open a draft pull request into `main`.
7. Add the real public contact email.
8. Add the Stripe Payment Link.
9. Verify the sender domain in Resend and add the API key.
10. Import the repository into Vercel.
11. Connect `calculator.yourfriendlydeveloper.com`.

## Inputs still required from Jason

- Published contact email.
- Receiving inbox for leads.
- Resend API key and verified sender.
- Stripe Payment Link.
- Vercel and DNS access for the calculator subdomain.
- Final logo only if the text mark is replaced.

## Work log

### August 13, 2026

Added Opportunity Lab V1, four source-backed briefs, scoring and tests, methodology, research safety rules, responsive pages, navigation, sitemap coverage, and updated project documentation.

### August 11, 2026

Prepared the calculator MVP, added server-side trust boundaries, expanded automated coverage, and prepared repository verification and deployment files.
