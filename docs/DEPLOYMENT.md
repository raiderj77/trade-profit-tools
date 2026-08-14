# Vercel deployment for Your Friendly Developer

## Recommended production addresses

- Main website: `https://yourfriendlydeveloper.com`
- Application: `https://calculator.yourfriendlydeveloper.com`
- Opportunity Lab: `https://calculator.yourfriendlydeveloper.com/opportunities`

The application should begin as a separate Vercel project. This prevents it from breaking or depending on the current main website.

## Before deployment

1. Run `npm run check`.
2. Commit `package-lock.json`.
3. Push the repository to GitHub.
4. Confirm GitHub Actions passes.
5. Import the repository into Vercel.

## Environment variables

Add these to Preview and Production where appropriate:

```text
NEXT_PUBLIC_SITE_URL=https://calculator.yourfriendlydeveloper.com
NEXT_PUBLIC_MAIN_SITE_URL=https://yourfriendlydeveloper.com
NEXT_PUBLIC_CONTACT_EMAIL
NEXT_PUBLIC_PAYMENT_LINK
RESEND_API_KEY
LEAD_FROM_EMAIL
LEAD_TO_EMAIL
ALLOW_DEMO_SUBMISSIONS
```

Use `ALLOW_DEMO_SUBMISSIONS=true` only for local development. Remove it or set it to `false` in Production.

Production pages automatically omit both lead forms until `RESEND_API_KEY`,
`LEAD_FROM_EMAIL`, and `LEAD_TO_EMAIL` are all present. The calculator remains
usable and the configured public contact email is shown as the fallback. A
missing Stripe Payment Link similarly omits the deposit button.

## Email setup

1. Add `yourfriendlydeveloper.com` as a sending domain in Resend.
2. Add the exact DNS records Resend provides.
3. Wait for domain verification.
4. Create or route the chosen sender address.
5. Set `LEAD_FROM_EMAIL` to the verified sender.
6. Set `LEAD_TO_EMAIL` to the inbox Jason checks.
7. Send test submissions from `/` and `/demo`.

Opportunity Lab does not need an email provider unless a consent-based digest is added later.

## Subdomain setup

1. Add `calculator.yourfriendlydeveloper.com` in the Vercel project.
2. Use the exact DNS record Vercel displays.
3. Add the record through the current DNS provider.
4. Set `NEXT_PUBLIC_SITE_URL` to the full HTTPS origin.
5. Redeploy so the sitemap, structured data, and metadata use the final origin.
6. Add a link from the main website after production QA passes.

## Optional Lab alias

After the main application works, optionally redirect:

`lab.yourfriendlydeveloper.com` to `https://calculator.yourfriendlydeveloper.com/opportunities`

Do this through Vercel or DNS-provider redirect settings when available. Do not add application complexity for an optional alias.

## Verified Vercel preparation state

Read-only inspection on August 11, 2026 found:

- Vercel CLI 50.40.0 authenticated as `raiderj77-3751`.
- Team: `jasons-projects-534f08bb`.
- No existing Vercel project named `trade-profit-tools`.
- The apex and `www` already point into Vercel infrastructure through external DNS.
- `calculator.yourfriendlydeveloper.com` is currently unconfigured.
- The apex serving project was not identifiable from the current team's visible project list.

Treat project creation, Git connection, environment changes, deployments, hostname assignment, and DNS edits as separate external writes. Do not run them as part of a read-only preparation pass.

After `main` is pushed and verified, the isolated CLI sequence is:

```powershell
# External write: create only the calculator project.
vercel project add trade-profit-tools --scope jasons-projects-534f08bb

# Local ignored metadata only: link this checkout.
vercel link --yes `
  --team jasons-projects-534f08bb `
  --project trade-profit-tools

# External write and deploy-capable: connect only this GitHub repository.
vercel git connect https://github.com/raiderj77/trade-profit-tools.git `
  --scope jasons-projects-534f08bb
```

Add confirmed public environment values to Production and Preview:

```powershell
vercel env add NEXT_PUBLIC_SITE_URL production `
  --value "https://calculator.yourfriendlydeveloper.com" --yes
vercel env add NEXT_PUBLIC_SITE_URL preview `
  --value "https://calculator.yourfriendlydeveloper.com" --yes
vercel env add NEXT_PUBLIC_MAIN_SITE_URL production `
  --value "https://yourfriendlydeveloper.com" --yes
vercel env add NEXT_PUBLIC_MAIN_SITE_URL preview `
  --value "https://yourfriendlydeveloper.com" --yes
```

Add `NEXT_PUBLIC_CONTACT_EMAIL` and `NEXT_PUBLIC_PAYMENT_LINK` only after their real public values are confirmed. Add `RESEND_API_KEY` interactively with `--sensitive`; do not place it in command history. Add verified `LEAD_FROM_EMAIL` and `LEAD_TO_EMAIL` values. Leave `ALLOW_DEMO_SUBMISSIONS` unset or false in Production.

For the first production verification, deploy without assigning the custom hostname:

```powershell
vercel deploy --prod --skip-domain `
  --scope jasons-projects-534f08bb
```

Verify the generated Vercel URL before any hostname operation. Then, with explicit authorization, attach only the calculator subdomain:

```powershell
vercel domains add calculator.yourfriendlydeveloper.com trade-profit-tools `
  --scope jasons-projects-534f08bb
```

Do not use `--force`. Vercel's current read-only inspection recommended this external DNS record after attachment:

```text
A calculator.yourfriendlydeveloper.com 76.76.21.21
```

Leave the apex A record, `www` CNAME, and nameservers unchanged.

## Existing-site route option

Do not merge this repository into the current main site unless Codex receives the current website repository and verifies the framework and deployment process.

The separate application subdomain remains the default launch path.

## Embed code

Use this for the public demo after deployment:

```html
<iframe
  src="https://calculator.yourfriendlydeveloper.com/embed"
  title="Home-service lead value calculator"
  width="100%"
  height="1600"
  loading="lazy"
  style="border:0;max-width:100%;"
></iframe>
```

Adjust the height after testing on the customer website.

## Post-deployment test

- Open `/`, `/demo`, `/embed`, `/privacy`, `/opportunities`, and `/opportunities/methodology`.
- Open every opportunity detail page.
- Confirm every source link opens the intended source.
- Submit both forms.
- Confirm email delivery.
- Test the embed on a separate origin.
- Test mobile widths.
- Confirm the payment link.
- Confirm the Your Friendly Developer seller brand appears on the sales page.
- Confirm the demo agency is clearly labeled as fictional.
- Confirm no placeholder contact information remains.
- Confirm the sitemap contains all opportunity pages.
- Confirm no draft or unreviewed opportunity appears in production.
