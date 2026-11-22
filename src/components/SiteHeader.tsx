import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          href="/"
          aria-label={`${siteConfig.business.name} home`}
        >
          <Image src="/logo-mark.svg" alt="" width={38} height={38} unoptimized />
          <span>{siteConfig.business.name}</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/#package">Package</Link>
          <Link href="/demo">Live demo</Link>
          <Link href="/#preview">Branded preview</Link>
          <Link href="/opportunities">Opportunity Lab</Link>
        </nav>
      </div>
    </header>
  );
}
