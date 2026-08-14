# Your Friendly Developer domain and brand plan

## Decision

Use the existing `yourfriendlydeveloper.com` domain and Your Friendly Developer brand.

Do not create or buy a separate brand domain for this phase.

## Recommended launch architecture

Deploy this repository as a separate Vercel project at:

`https://calculator.yourfriendlydeveloper.com`

Keep the current main website at:

`https://yourfriendlydeveloper.com`

This setup separates deployment risk. The application can launch even when the main website uses a different framework, host, or repository.

## Public routes

- Sales page: `https://calculator.yourfriendlydeveloper.com`
- Live white-label example: `https://calculator.yourfriendlydeveloper.com/demo`
- Iframe version: `https://calculator.yourfriendlydeveloper.com/embed`
- Opportunity Lab: `https://calculator.yourfriendlydeveloper.com/opportunities`
- Lab methodology: `https://calculator.yourfriendlydeveloper.com/opportunities/methodology`
- Privacy page: `https://calculator.yourfriendlydeveloper.com/privacy`

## Main-site integration

Add one clear link on the main Your Friendly Developer website after deployment:

Label: `Home-Service Agency Calculator`

Destination: `https://calculator.yourfriendlydeveloper.com`

A second link may point to Opportunity Lab after several briefs are reviewed and published.

Do not rebuild the current main website only to launch this repository.

## Optional Lab alias

After the primary domain works, an optional subdomain may redirect visitors to the Lab:

`https://lab.yourfriendlydeveloper.com` to `https://calculator.yourfriendlydeveloper.com/opportunities`

This alias is optional. Do not block the calculator launch on it. Use the domain and redirect controls provided by Vercel or the current DNS provider. Do not add host-routing code unless the redirect settings cannot meet the requirement.

## Same-domain route option

A later merge into routes such as these is acceptable only after Codex has the current website repository and confirms its framework, routing, hosting, and deployment process:

- `https://yourfriendlydeveloper.com/home-service-lead-calculator`
- `https://yourfriendlydeveloper.com/opportunities`

Do not copy files blindly into an unknown codebase.

## DNS

1. Add `calculator.yourfriendlydeveloper.com` to the Vercel project.
2. Use the exact DNS record Vercel displays.
3. Add the record through the domain registrar or DNS provider.
4. Confirm HTTPS works before sending outreach.
5. Set `NEXT_PUBLIC_SITE_URL=https://calculator.yourfriendlydeveloper.com` in Vercel.
6. Rebuild so metadata, structured data, robots, and sitemap use the final origin.

## Email

The public forms need a working receiving address and a verified sender.

Recommended pattern:

- Sender: `leads@yourfriendlydeveloper.com`
- Recipient: Jason's chosen business inbox

Do not publish an email address until the mailbox or forwarding rule exists.

Opportunity Lab does not collect newsletter signups in V1.

## Branding rules

- Seller brand: Your Friendly Developer.
- Paid product: Home-Service Lead Value Calculator.
- Research section: Opportunity Lab.
- The demo agency stays fictional and is labeled as an example.
- Customer builds replace the fictional agency name, colors, contact details, and lead destination.
- Opportunity briefs use original wording and visible sources.
- Keep the seller site focused on the calculator sale during the proof period.
