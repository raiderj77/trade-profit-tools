import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/config/urls";

import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.product.name} | ${siteConfig.business.name}`,
    template: `%s | ${siteConfig.business.name}`,
  },
  description: siteConfig.product.description,
  openGraph: {
    title: `${siteConfig.product.name} | ${siteConfig.business.name}`,
    description: siteConfig.product.description,
    type: "website",
    url: siteUrl,
    siteName: siteConfig.business.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const brandVariables = {
    "--brand": siteConfig.brand.primary,
    "--brand-dark": siteConfig.brand.primaryDark,
    "--accent": siteConfig.brand.accent,
    "--ink": siteConfig.brand.ink,
    "--muted": siteConfig.brand.muted,
    "--surface": siteConfig.brand.surface,
    "--canvas": siteConfig.brand.canvas,
  } as CSSProperties;

  return (
    <html lang="en">
      <body style={brandVariables}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
