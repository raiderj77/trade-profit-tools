import type { Metadata } from "next";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy information for the ${siteConfig.product.shortName}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="legal-page">
        <article className="container legal-content">
          <p className="eyebrow">Privacy</p>
          <h1>How this calculator handles information</h1>
          <p>
            This public demo collects information only when you submit a
            branded-preview request or calculator contact form.
          </p>

          <h2>Information submitted</h2>
          <p>
            The form may include your name, work email, company, optional phone
            number, optional website, and calculator inputs. The server
            recalculates the estimate before including the results in the email.
          </p>

          <h2>How information is used</h2>
          <p>
            Public-demo submissions are emailed to {siteConfig.business.name}
            so the team can respond. The submitter's email becomes the reply-to
            address for the message. A customer deployment replaces this
            destination with the purchasing agency's chosen email address.
          </p>

          <h2>Storage</h2>
          <p>
            The application does not use a database and does not store
            submissions. The receiving email provider and email delivery
            provider process the message under their own terms and retention
            settings.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            The MVP does not include analytics, advertising pixels, session
            recording, or tracking cookies.
          </p>

          <h2>Estimates</h2>
          <p>
            Calculator results are planning estimates. They do not guarantee
            revenue, profit, lead quality, or advertising performance.
          </p>

          {siteConfig.business.contactEmail ? (
            <>
              <h2>Contact</h2>
              <p>
                Send questions about this demo to{" "}
                <a href={`mailto:${siteConfig.business.contactEmail}`}>
                  {siteConfig.business.contactEmail}
                </a>
                .
              </p>
            </>
          ) : null}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
