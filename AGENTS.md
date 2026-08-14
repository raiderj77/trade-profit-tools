# Codex operating instructions

## Mission

Ship and maintain two connected assets under Your Friendly Developer:

1. A sellable white-label home-service lead calculator.
2. A manually curated Opportunity Lab that turns sourced signals into small paid tests.

The first commercial goal remains one $500 calculator deposit. Opportunity Lab must support trust and lead generation without replacing direct outreach or turning into a large software platform.

## Brand and domain

- Seller: Your Friendly Developer.
- Main website: `https://yourfriendlydeveloper.com`.
- Application deployment: `https://calculator.yourfriendlydeveloper.com`.
- Opportunity Lab route: `/opportunities`.
- Do not purchase or propose another domain for this phase.
- Do not alter the existing main website unless its repository is supplied and an explicit integration task is given.

## Read first

1. `CODEX_START_HERE.md`
2. `docs/DOMAIN_AND_BRAND.md`
3. `docs/PRODUCT_BRIEF.md`
4. `docs/OPPORTUNITY_LAB.md`
5. `docs/OPPORTUNITY_AGENT_PIPELINE.md`
6. `docs/FORMULAS.md`
7. `docs/CODEX_TASKS.md`
8. `docs/SECURITY_PRIVACY.md`

## Required scope

Build and maintain:

- A Your Friendly Developer sales page for agency owners.
- A branded contractor-facing calculator demo.
- A compact embed route.
- A lead form that emails submissions through Resend.
- One-file white-label configuration.
- Clear formulas and assumptions.
- Accessible, responsive pages.
- An Opportunity Lab index, detail pages, methodology page, score module, and source-backed data.

## Do not add without a new explicit task

- User accounts.
- A database.
- A customer dashboard.
- Subscriptions.
- AI chat or automatic idea generation.
- Autonomous publishing.
- A live scraper or crawling service.
- A CMS.
- Agency self-service onboarding.
- Analytics or session recording.
- Multiple calculator templates.
- Automated cold email.
- A new product domain.
- Paid membership for the Lab.
- Newsletter infrastructure.

## External action gates

Local verification and reversible code changes are allowed. Do not push, open a pull request, deploy, change domains or DNS, configure accounts or secrets, publish Opportunity Lab pages, send outreach, request payment, or activate pricing without Jason's explicit approval for that action.

## Calculator rules

- Never promise guaranteed revenue, leads, profit, or return on ad spend.
- Label all outputs as estimates.
- Keep money formulas in `src/lib/calculator.mjs`.
- Update `docs/FORMULAS.md` whenever formula behavior changes.
- Keep seller, product, demo-agency, and customer-facing brand values in `src/config/site.ts`.
- Keep secrets server-side. Never expose Resend keys in client code.
- Collect only the fields needed for follow-up.
- Do not persist submissions in the application.
- Preserve the `/embed` route for iframe use.

## Opportunity Lab rules

- Publish original wording. Do not copy another publisher's newsletter, graphics, page structure, or paid research.
- Support every material factual claim with a linked source.
- Record published and checked dates.
- Prefer government data, standards bodies, original surveys, official documentation, and first-party research.
- Label pricing, positioning, and revenue scenarios as assumptions unless a source supports them.
- Keep red flags and stop rules visible.
- Treat the score as a decision filter, not a probability or forecast.
- Do not publish agent-generated research without human review.
- Do not present legal, tax, accounting, medical, investment, or security guidance as an unqualified product.
- Add or update scoring tests when score behavior changes.

## Engineering rules

- Prefer the smallest reliable change.
- Do not refactor unrelated code.
- Keep components readable and focused.
- Use semantic HTML and keyboard-friendly controls.
- Add or update tests for formula, validation, or scoring changes.
- Run `npm run check` before declaring work complete.
- Fix errors rather than weakening TypeScript, lint, tests, or source standards.
- Do not add a dependency when platform APIs solve the task cleanly.

## Completion report

After each assigned task, update `docs/CODEX_STATUS.md` with:

- Work completed.
- Files changed.
- Commands run.
- Test and build results.
- Source-review status for new briefs.
- Remaining blockers.
- The next smallest task.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
