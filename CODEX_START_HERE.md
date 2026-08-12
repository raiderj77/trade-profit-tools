# Start here in Codex

Paste the prompt below into the Codex project after uploading or cloning this repository.

## Initial Codex prompt

Read `AGENTS.md` and every file in `docs/` before changing code.

Your goal is to finish and verify the MVP under the existing Your Friendly Developer brand without expanding scope.

Work in this order:

1. Install dependencies and create the lockfile.
2. Run `npm run test`, `npm run typecheck`, `npm run lint`, and `npm run build`.
3. Fix every failure without disabling checks.
4. Run the app and manually verify `/`, `/demo`, `/embed`, and `/privacy` at mobile and desktop widths.
5. Verify calculator outputs against `docs/FORMULAS.md`.
6. Verify both forms handle success, missing configuration, invalid input, fast bot submissions, and the honeypot field.
7. Confirm the seller brand is Your Friendly Developer and the fictional agency is clearly presented as an example.
8. Confirm all customer white-label changes remain controlled through `src/config/site.ts` or documented environment variables.
9. Prepare Vercel deployment for `calculator.yourfriendlydeveloper.com` without altering the current main website.
10. Improve only defects, accessibility, security, responsiveness, or clarity found during verification.
11. Do not add authentication, a database, a dashboard, subscriptions, analytics, AI, or new calculator types.
12. Record results in `docs/CODEX_STATUS.md`.

Stop when the MVP passes all checks and the manual QA list. Report anything requiring Jason, including DNS access, a working contact email, Resend key, verified sender, payment link, or final logo.
