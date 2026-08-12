# Codex status

## Current state

Sellable MVP implementation and security hardening completed locally on August 11, 2026.

## Included

- Product and sales documentation.
- Codex scope rules.
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
- Deployment and QA instructions.

## Domain decision

- Main website: `yourfriendlydeveloper.com`.
- Calculator launch: `calculator.yourfriendlydeveloper.com`.
- No additional domain purchase.
- The main website repository remains untouched.

## Work completed in this Codex pass

- Replaced the preview framework version with stable Next.js 16.2.11.
- Added strict lead-payload validation and nine validation tests.
- Removed browser-supplied result values from the contractor submission.
- Added server-side calculator result generation.
- Added request content-type, byte-size, origin, timestamp, and no-store controls.
- Added Resend timeout, reply-to, form tags, and duplicate-delivery protection.
- Added shared calculator limits and blocked non-finite browser results.
- Improved form status accessibility and blocked repeat clicks while sending.
- Added a keyboard skip link, application icon, and GitHub Actions workflow.
- Updated privacy, security, QA, and deployment documentation.

## Validation completed locally

- `npm run test`: 18 tests pass.
- Formula behavior tests: pass.
- Lead-validation tests: pass.
- JavaScript syntax checks: pass.
- Temporary framework-stub TypeScript check: pass.
- JSON, CSS, and workflow syntax checks: pass.
- Secret and placeholder scan: no committed secret found.

## Repository publication status

The target repository is `raiderj77/trade-profit-tools`. The repository exists and is empty, but the connected GitHub integration rejected the first write with `Resource not accessible by integration`. The full project remains committed locally and packaged for direct Codex import. Granting the GitHub app access to this repository will allow the same source to be pushed without code changes.

## Environment limitation

The local execution environment cannot resolve the npm registry. It cannot install the Next.js packages or run the real lint, framework typecheck, and production build here.

The repository workflow installs dependencies, creates the initial lockfile, runs `npm run check`, and commits the generated lockfile after a successful first build.

## Remaining launch work

1. Grant the GitHub integration access to `trade-profit-tools` and push the local commit.
2. Confirm the GitHub Actions verification result.
3. Complete manual browser QA at the documented widths.
4. Add the real public contact email.
5. Add the Stripe Payment Link.
6. Verify the sender domain in Resend and add the API key.
7. Test both real email submissions.
8. Import the repository into Vercel.
9. Connect `calculator.yourfriendlydeveloper.com`.
10. Add a link from the main website after deployment.

## Inputs still required from Jason

- GitHub app access to the target repository.
- Published contact email.
- Receiving inbox for leads.
- Resend API key and verified sender.
- Stripe Payment Link.
- Vercel and DNS access for the calculator subdomain.
- Final logo only if the text mark is replaced.

## Work log

### August 11, 2026

Prepared the complete MVP, added server-side trust boundaries, expanded automated coverage, and prepared repository verification and deployment files.
