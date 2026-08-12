# Vercel deployment for Your Friendly Developer

## Recommended production addresses

- Main website: `https://yourfriendlydeveloper.com`
- Calculator project: `https://calculator.yourfriendlydeveloper.com`

The calculator should begin as a separate Vercel project. This prevents the MVP from breaking or depending on the current main website.

## Before deployment

1. Run `npm run check`.
2. Commit `package-lock.json`.
3. Push the repository to GitHub.
4. Import the repository into Vercel.

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

## Email setup

1. Add `yourfriendlydeveloper.com` as a sending domain in Resend.
2. Add the exact DNS records Resend provides.
3. Wait for domain verification.
4. Create or route the chosen sender address.
5. Set `LEAD_FROM_EMAIL` to the verified sender.
6. Set `LEAD_TO_EMAIL` to the inbox Jason checks.
7. Send test submissions from `/` and `/demo`.

## Subdomain setup

1. Add `calculator.yourfriendlydeveloper.com` in the Vercel project.
2. Use the exact DNS record Vercel displays.
3. Add the record through the current DNS provider.
4. Set `NEXT_PUBLIC_SITE_URL` to the full HTTPS origin.
5. Redeploy so the sitemap and metadata use the final origin.
6. Add a link from the main website to the calculator sales page.

## Existing-site route option

Do not merge this repository into the current main site unless Codex receives the current website repository and verifies the framework and deployment process.

When those files are available, Codex may assess a route such as:

`https://yourfriendlydeveloper.com/home-service-lead-calculator`

The separate subdomain remains the default launch path.

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

- Open all four public routes.
- Submit both forms.
- Confirm email delivery.
- Test the embed on a separate origin.
- Test mobile widths.
- Confirm the payment link.
- Confirm the Your Friendly Developer seller brand appears on the sales page.
- Confirm the demo agency is clearly labeled as fictional.
- Confirm no placeholder contact information remains.
