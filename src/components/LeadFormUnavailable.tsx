import { siteConfig } from "@/config/site";

export function LeadFormUnavailable() {
  const contactEmail = siteConfig.business.contactEmail;

  return (
    <div className="lead-form form-unavailable" role="status">
      <p className="eyebrow">Secure delivery setup</p>
      <h3>Online submissions are temporarily unavailable.</h3>
      <p>
        The calculator works, but this site will not accept contact details
        until its secure email delivery is verified.
      </p>
      {contactEmail ? (
        <a className="button button-primary" href={`mailto:${contactEmail}`}>
          Email {siteConfig.business.name}
        </a>
      ) : null}
    </div>
  );
}
