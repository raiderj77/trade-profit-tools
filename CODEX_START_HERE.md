# Start here in Codex

Use the prompt below after cloning or opening this repository in Codex.

## Initial Codex prompt

Read `AGENTS.md` and every file in `docs/` before changing code.

Your goal is to verify the calculator MVP and the Opportunity Lab without turning either into a SaaS platform.

Work in this order:

1. Install dependencies and create the lockfile.
2. Run `npm run test`, `npm run typecheck`, `npm run lint`, and `npm run build`.
3. Fix every failure without disabling checks.
4. Run the app and manually verify `/`, `/demo`, `/embed`, `/privacy`, `/opportunities`, `/opportunities/methodology`, and every opportunity detail page at mobile and desktop widths.
5. Verify calculator outputs against `docs/FORMULAS.md`.
6. Verify both forms handle success, missing configuration, invalid input, fast bot submissions, and the honeypot field.
7. Confirm the seller brand is Your Friendly Developer and the fictional agency is clearly presented as an example.
8. Confirm all customer white-label changes remain controlled through `src/config/site.ts` or documented environment variables.
9. Verify every opportunity score, verdict, source link, checked date, red flag, and 72-hour proof gate.
10. Confirm Opportunity Lab copy is original and does not reproduce another publisher's newsletter or research.
11. Prepare Vercel deployment for `calculator.yourfriendlydeveloper.com` without altering the current main website.
12. Improve only defects, accessibility, security, responsiveness, source accuracy, or clarity found during verification.
13. Do not add authentication, a database, dashboards, subscriptions, analytics, autonomous agents, live scraping, a newsletter system, or new calculator types.
14. Record results in `docs/CODEX_STATUS.md`.

Stop when the application passes all checks and the manual QA list. Report anything requiring Jason, including DNS access, a working contact email, Resend key, verified sender, payment link, source correction, or final logo.
