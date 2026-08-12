import { INPUT_LIMITS } from "./calculator.mjs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_TEXT = 300;
const MAX_URL = 500;
const MAX_BODY_KEYS = 24;

function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanText(value, max = MAX_TEXT) {
  return typeof value === "string"
    ? value.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, max)
    : "";
}

function cleanWebsiteUrl(value) {
  const text = cleanText(value, MAX_URL);
  if (!text) {
    return { ok: true, value: "" };
  }

  try {
    const url = new URL(text);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return { ok: false, value: "" };
    }

    return { ok: true, value: url.toString().slice(0, MAX_URL) };
  } catch {
    return { ok: false, value: "" };
  }
}

function cleanCalculatorInputs(value) {
  if (!isRecord(value)) {
    return null;
  }

  const output = {};

  for (const [key, maximum] of Object.entries(INPUT_LIMITS)) {
    if (!Object.hasOwn(value, key)) {
      return null;
    }

    const number = Number(value[key]);
    if (!Number.isFinite(number)) {
      return null;
    }

    output[key] = Math.min(maximum, Math.max(0, number));
  }

  return output;
}

function validateLeadPayload(value) {
  if (!isRecord(value) || Object.keys(value).length > MAX_BODY_KEYS) {
    return { ok: false, error: "Invalid submission." };
  }

  const intent = cleanText(value.intent, 40);
  if (intent !== "agency-preview" && intent !== "contractor-results") {
    return { ok: false, error: "Invalid form type." };
  }

  const name = cleanText(value.name, 120);
  const email = cleanText(value.email, 200).toLowerCase();
  const company = cleanText(value.company, 160);
  const phone = cleanText(value.phone, 60);
  const websiteUrlResult = cleanWebsiteUrl(value.websiteUrl);
  const niches = cleanText(value.niches, 300);
  const source = cleanText(value.source, 200);
  const consent = value.consent === true;
  const honeypot = cleanText(value.website, 200);
  const startedAt = Number(value.startedAt);

  if (!name || !company || !EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Enter a valid name, work email, and company." };
  }

  if (!websiteUrlResult.ok) {
    return {
      ok: false,
      error: "Enter a valid website address beginning with http or https.",
    };
  }

  if (!consent) {
    return { ok: false, error: "Consent is required." };
  }

  if (!Number.isFinite(startedAt) || startedAt <= 0) {
    return { ok: false, error: "Invalid submission time." };
  }

  const common = {
    name,
    email,
    company,
    phone,
    websiteUrl: websiteUrlResult.value,
    niches,
    source,
    consent,
    honeypot,
    startedAt,
  };

  if (intent === "agency-preview") {
    return {
      ok: true,
      data: {
        ...common,
        intent,
        metrics: {},
      },
    };
  }

  const metrics = cleanCalculatorInputs(value.metrics);
  if (!metrics) {
    return { ok: false, error: "Calculator values are missing or invalid." };
  }

  return {
    ok: true,
    data: {
      ...common,
      intent,
      metrics,
    },
  };
}

export { validateLeadPayload };
