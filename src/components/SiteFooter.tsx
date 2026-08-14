import Link from "next/link";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>{siteConfig.business.name}</strong>
          <p>{siteConfig.business.description}</p>
        </div>
        <div className="footer-links">
          <Link href="/opportunities">Opportunity Lab</Link>
          <Link href="/privacy">Privacy</Link>
          <a href={siteConfig.business.mainSiteUrl}>Main website</a>
          {siteConfig.business.contactEmail ? (
            <a href={`mailto:${siteConfig.business.contactEmail}`}>Contact</a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
