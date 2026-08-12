# Codex operating instructions

## Mission

Ship one sellable white-label calculator under the existing Your Friendly Developer brand for small marketing agencies serving home-service businesses.

The first commercial goal is one $500 deposit. Product expansion comes after a paid customer requests it.

## Brand and domain

- Seller: Your Friendly Developer.
- Main website: `https://yourfriendlydeveloper.com`.
- Recommended calculator deployment: `https://calculator.yourfriendlydeveloper.com`.
- Do not purchase or propose another domain for this MVP.
- Do not alter the existing main website unless its repository is supplied and an explicit integration task is given.

## Read first

1. `CODEX_START_HERE.md`
2. `docs/DOMAIN_AND_BRAND.md`
3. `docs/PRODUCT_BRIEF.md`
4. `docs/FORMULAS.md`
5. `docs/CODEX_TASKS.md`
6. `docs/SECURITY_PRIVACY.md`

## Non-negotiable scope

Build and maintain:

- A Your Friendly Developer sales page for agency owners.
- A branded contractor-facing calculator demo.
- A compact embed route.
- A lead form that emails submissions through Resend.
- One-file white-label configuration.
- Clear formulas and assumptions.
- Accessible, responsive pages.

Do not add:

- User accounts.
- A database.
- A dashboard.
- Subscriptions.
- AI features.
- A CMS.
- Agency self-service onboarding.
- Analytics or session recording.
- Multiple calculator templates.
- Automated cold email.
- A new product domain.

## Product rules

- Never promise guaranteed revenue, leads, profit, or return on ad spend.
- Label all outputs as estimates.
- Keep money formulas in `src/lib/calculator.mjs`.
- Update `docs/FORMULAS.md` whenever formula behavior changes.
- Keep seller, product, demo-agency, and customer-facing brand values in `src/config/site.ts`.
- Keep secrets server-side. Never expose Resend keys in client code.
- Collect only the fields needed for follow-up.
- Do not persist submissions in the application.
- Preserve the `/embed` route for iframe use.

## Engineering rules

- Prefer the smallest reliable change.
- Do not refactor unrelated code.
- Keep components readable and focused.
- Use semantic HTML and keyboard-friendly controls.
- Add or update tests for formula changes.
- Run `npm run check` before declaring work complete.
- Fix errors rather than weakening TypeScript, lint, or tests.
- Do not add a dependency when platform APIs solve the task cleanly.

## Completion report

After each assigned task, update `docs/CODEX_STATUS.md` with:

- Work completed.
- Files changed.
- Commands run.
- Test and build results.
- Remaining blockers.
- The next smallest task.
