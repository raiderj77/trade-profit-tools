# Your Friendly Developer domain and brand plan

## Decision

Use the existing `yourfriendlydeveloper.com` domain and the Your Friendly Developer brand.

Do not create or buy a separate brand domain for the MVP.

## Recommended launch architecture

Deploy this repository as a separate Vercel project at:

`https://calculator.yourfriendlydeveloper.com`

Keep the current main website at:

`https://yourfriendlydeveloper.com`

This setup separates deployment risk. The calculator can launch even when the main website uses a different framework, host, or repository.

## Public routes

- Sales page: `https://calculator.yourfriendlydeveloper.com`
- Live white-label example: `https://calculator.yourfriendlydeveloper.com/demo`
- Iframe version: `https://calculator.yourfriendlydeveloper.com/embed`
- Privacy page: `https://calculator.yourfriendlydeveloper.com/privacy`

## Main-site integration

Add one clear link on the main Your Friendly Developer website:

Label: `Home-Service Agency Calculator`

Destination: `https://calculator.yourfriendlydeveloper.com`

Do not rebuild the current main website only to launch this offer.

## Same-domain route option

A later merge into `https://yourfriendlydeveloper.com/home-service-lead-calculator` is acceptable only after Codex has the current website repository and confirms its framework, routing, hosting, and deployment process.

Do not copy files blindly into an unknown codebase.

## DNS

1. Add `calculator.yourfriendlydeveloper.com` to the Vercel project.
2. Use the exact DNS record Vercel displays.
3. Add the record through the domain registrar or DNS provider.
4. Confirm HTTPS works before sending outreach.
5. Set `NEXT_PUBLIC_SITE_URL=https://calculator.yourfriendlydeveloper.com` in Vercel.

## Email

The public forms need a working receiving address and a verified sender.

Recommended pattern:

- Sender: `leads@yourfriendlydeveloper.com`
- Recipient: Jason's chosen business inbox

Do not publish an email address until the mailbox or forwarding rule exists.

## Branding rules

- Seller brand: Your Friendly Developer.
- Product name: Home-Service Lead Value Calculator.
- The demo agency stays fictional and is labeled as an example.
- Customer builds replace the fictional agency name, colors, contact details, and lead destination.
- Keep the seller site focused on this one paid offer during the proof period.
