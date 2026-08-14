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

- The downloaded archive was verified as a readable Git repository. SHA-256: `ABC37CC3D0DFF2624BDCB7173901B677A742478EECC727FDF08C44D6CA52436A`.
- `git fsck --full`: pass.
- Reproducible clean install with the generated lockfile (`npm ci`): pass.
- `npm run check`: pass on Next.js 16.3.1.
- Automated tests: 26 pass.
- Strict TypeScript check: pass.
- ESLint with zero warnings: pass.
- Production build: pass; 15 application routes generated.
- `npm audit`: 0 known vulnerabilities.
- Desktop browser QA: all calculator, privacy, embed, Opportunity Lab, methodology, detail, and not-found routes pass.
- Responsive browser QA at 320, 375, 768, 1024, and 1440 CSS pixels: pass with no horizontal overflow.
- Calculator recomputation: pass.
- Lead-form validation and safe failure without Resend configuration: pass.
- Browser console: no errors or warnings during the final route pass.
- Robots, sitemap, canonical, and Open Graph URLs use the production calculator hostname rather than localhost.
- Source claims were rechecked against the linked primary or first-party sources; overstated Jobber and IRS wording was corrected.

## Hardening completed

- Updated Next.js and `eslint-config-next` from 16.2.11 to 16.3.1 to clear the dependency audit.
- Fixed render-time clock access and lint failures in both lead forms.
- Restored useful calculator navigation on narrow screens.
- Added a validated production URL helper with a safe production fallback.
- Reduced the GitHub Actions token to read-only and removed workflow self-commits.
- Added explicit owner-approval gates for deployment, publishing, outreach, payment, accounts, secrets, domains, DNS, pushes, and pull requests.
- Marked outreach and sales material as drafts rather than approved campaigns.

## GitHub state

- Repository: `raiderj77/trade-profit-tools`.
- Base commit: `0eec592`.
- Local feature branch: `agent/add-opportunity-lab`.
- The GitHub account and repository are visible through the connected integration.
- The connector content-write attempt returned HTTP 403.
- The local environment does not include the GitHub CLI, so this workspace has not pushed the branch.

## Remaining work

1. Confirm the launch architecture. The current recommendation is to keep the calculator in its separate project at `calculator.yourfriendlydeveloper.com` for the first release and link to it from the main site.
2. Review and approve the final local diff before any GitHub push or pull request.
3. Add the real public contact email.
4. Add the Stripe Payment Link.
5. Verify the sender domain in Resend and add the API key.
6. Run one successful end-to-end lead-delivery test after the Resend configuration is available.
7. After approval, publish the reviewed branch through the existing Vercel project. The calculator hostname is currently healthy, but the Opportunity Lab routes are not yet deployed and return 404.
8. Re-run the production checks after that release, including lead delivery and the Stripe path.
9. Add or verify the approved calculator link on the main Your Friendly Developer site.

## Inputs still required from Jason

- Published contact email.
- Receiving inbox for leads.
- Resend API key and verified sender.
- Stripe Payment Link.
- Approval for the reviewed GitHub and Vercel release; the existing calculator subdomain does not currently need a DNS change.
- Final logo only if the text mark is replaced.

## Work log

### August 13, 2026

Added Opportunity Lab V1, four source-backed briefs, scoring and tests, methodology, research safety rules, responsive pages, navigation, sitemap coverage, and updated project documentation.

Downloaded and independently verified the Codex-ready archive, installed real dependencies, generated the lockfile, cleared the security audit, fixed lint and browser defects, tightened CI and action gates, rechecked sources, and completed automated and browser QA. No push, pull request, deployment, DNS change, account configuration, outreach, publication, or payment action was performed.

### August 11, 2026

Prepared the calculator MVP, added server-side trust boundaries, expanded automated coverage, and prepared repository verification and deployment files.
