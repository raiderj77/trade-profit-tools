import { siteConfig } from "@/config/site";
import { calculateLeadValue } from "@/lib/calculator.mjs";
import { createSubmissionKey, formatNumberRecord } from "@/lib/lead-email.mjs";
import { validateLeadPayload } from "@/lib/lead-validation.mjs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_REQUEST_BYTES = 30_000;
const MIN_COMPLETION_MS = 1_500;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1_000;
const MAX_FUTURE_SKEW_MS = 60_000;
const RESEND_TIMEOUT_MS = 10_000;

function json(message: string, status = 200) {
  return Response.json(
    { message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

function configuredOrigins(): Set<string> {
  const origins = new Set<string>();
  const configuredSiteUrl = siteConfig.deployment.siteUrl;
  const vercelUrl = process.env.VERCEL_URL;

  for (const value of [
    configuredSiteUrl,
    vercelUrl ? `https://${vercelUrl}` : "",
  ]) {
    if (!value) {
      continue;
    }

    try {
      origins.add(new URL(value).origin);
    } catch {
      // A malformed environment variable should not crash the form route.
    }
  }

  return origins;
}

function originIsAllowed(request: Request): boolean {
  if (process.env.NODE_ENV !== "production") {
    return true;
  }

  const origin = request.headers.get("origin");
  if (!origin) {
    return true;
  }

  const allowed = configuredOrigins();
  return allowed.has(origin);
}

export async function POST(request: Request) {
  if (!originIsAllowed(request)) {
    return json("This form request came from an unapproved site.", 403);
  }

  const contentType = request.headers.get("content-type") ?? "";
  const mediaType = contentType.split(";", 1)[0].trim().toLowerCase();
  if (mediaType !== "application/json") {
    return json("Invalid submission format.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return json("The submission is too large.", 413);
  }

  let bodyText: string;
  try {
    bodyText = await request.text();
  } catch {
    return json("Invalid submission.", 400);
  }

  if (new TextEncoder().encode(bodyText).byteLength > MAX_REQUEST_BYTES) {
    return json("The submission is too large.", 413);
  }

  let rawPayload: unknown;
  try {
    rawPayload = JSON.parse(bodyText);
  } catch {
    return json("Invalid submission.", 400);
  }

  if (
    typeof rawPayload === "object" &&
    rawPayload !== null &&
    !Array.isArray(rawPayload) &&
    typeof (rawPayload as Record<string, unknown>).website === "string" &&
    (rawPayload as Record<string, string>).website.trim()
  ) {
    return json("Thanks. Your request was received.");
  }

  const validation = validateLeadPayload(rawPayload);
  if (!validation.ok) {
    return json(validation.error, 400);
  }

  const lead = validation.data;

  if (lead.honeypot) {
    return json("Thanks. Your request was received.");
  }

  const now = Date.now();
  const elapsed = now - lead.startedAt;
  if (
    elapsed < MIN_COMPLETION_MS ||
    elapsed > MAX_FORM_AGE_MS ||
    lead.startedAt > now + MAX_FUTURE_SKEW_MS
  ) {
    return json("Please review the form and submit it again.", 400);
  }

  const results =
    lead.intent === "contractor-results"
      ? calculateLeadValue(lead.metrics)
      : {};

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL;

  if (!apiKey || !from || !to) {
    const allowDemo =
      process.env.NODE_ENV !== "production" &&
      process.env.ALLOW_DEMO_SUBMISSIONS === "true";

    if (allowDemo) {
      return json("Demo submission accepted. Configure Resend to deliver email.");
    }

    return json("Form delivery is temporarily unavailable.", 503);
  }

  const subject =
    lead.intent === "agency-preview"
      ? `Branded calculator preview request from ${lead.company}`
      : `Calculator lead from ${lead.company}`;

  const text = [
    `Form: ${lead.intent}`,
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Website: ${lead.websiteUrl || "Not provided"}`,
    `Niches: ${lead.niches || "Not provided"}`,
    `Source: ${lead.source || "Unknown"}`,
    "",
    "Calculator inputs",
    formatNumberRecord(lead.metrics),
    "",
    "Server-calculated results",
    formatNumberRecord(results),
  ].join("\n");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": createSubmissionKey(lead),
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        reply_to: lead.email,
        tags: [{ name: "form_type", value: lead.intent }],
      }),
      signal: AbortSignal.timeout(RESEND_TIMEOUT_MS),
    });

    if (!resendResponse.ok) {
      return json("The email service did not accept the submission.", 502);
    }

    const successMessage =
      lead.intent === "agency-preview"
        ? "Thanks. Your preview request was sent."
        : "Thanks. Your estimate was sent.";

    return json(successMessage);
  } catch {
    return json("The email service is unavailable. Please try again.", 502);
  }
}
