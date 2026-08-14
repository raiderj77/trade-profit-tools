import assert from "node:assert/strict";
import test from "node:test";

import { INPUT_LIMITS } from "./calculator.mjs";
import { validateLeadPayload } from "./lead-validation.mjs";

const metrics = {
  websiteLeads: 40,
  phoneLeads: 60,
  answerRate: 72,
  leadToAppointmentRate: 55,
  appointmentToSaleRate: 45,
  averageJobValue: 1800,
  monthlyAdSpend: 5000,
  grossMargin: 40,
};

const base = {
  name: "Jamie Owner",
  email: "Jamie@Example.com",
  company: "Example Agency",
  phone: "555-555-1212",
  websiteUrl: "https://example.com",
  niches: "Plumbing",
  source: "/demo",
  consent: true,
  website: "",
  startedAt: Date.now() - 5_000,
};

test("accepts and normalizes a valid agency preview request", () => {
  const result = validateLeadPayload({
    ...base,
    intent: "agency-preview",
    metrics: { ignored: 1 },
  });

  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.email, "jamie@example.com");
    assert.equal(result.data.websiteUrl, "https://example.com/");
    assert.deepEqual(result.data.metrics, {});
  }
});

test("rejects an invalid email address", () => {
  const result = validateLeadPayload({
    ...base,
    email: "not-an-email",
    intent: "agency-preview",
  });

  assert.equal(result.ok, false);
});

test("rejects a non-http website address", () => {
  const result = validateLeadPayload({
    ...base,
    websiteUrl: "javascript:alert(1)",
    intent: "agency-preview",
  });

  assert.equal(result.ok, false);
});

test("requires consent", () => {
  const result = validateLeadPayload({
    ...base,
    consent: false,
    intent: "agency-preview",
  });

  assert.equal(result.ok, false);
});

test("requires every calculator input for contractor results", () => {
  const incompleteMetrics = { ...metrics };
  delete incompleteMetrics.grossMargin;
  const result = validateLeadPayload({
    ...base,
    intent: "contractor-results",
    metrics: incompleteMetrics,
  });

  assert.equal(result.ok, false);
});

test("clamps contractor values and ignores unknown metric keys", () => {
  const result = validateLeadPayload({
    ...base,
    intent: "contractor-results",
    metrics: {
      ...metrics,
      websiteLeads: -10,
      averageJobValue: Number.MAX_VALUE,
      ignored: 99,
    },
  });

  assert.equal(result.ok, true);
  if (result.ok && result.data.intent === "contractor-results") {
    assert.equal(result.data.metrics.websiteLeads, 0);
    assert.equal(
      result.data.metrics.averageJobValue,
      INPUT_LIMITS.averageJobValue,
    );
    assert.equal(Object.hasOwn(result.data.metrics, "ignored"), false);
  }
});

test("rejects non-finite calculator values", () => {
  const result = validateLeadPayload({
    ...base,
    intent: "contractor-results",
    metrics: { ...metrics, monthlyAdSpend: Number.POSITIVE_INFINITY },
  });

  assert.equal(result.ok, false);
});

test("removes control characters from submitted text", () => {
  const result = validateLeadPayload({
    ...base,
    intent: "agency-preview",
    name: "Jamie\nOwner",
    company: "Example\tAgency",
  });

  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.name, "Jamie Owner");
    assert.equal(result.data.company, "Example Agency");
  }
});

test("rejects an oversized top-level payload shape", () => {
  const extra = Object.fromEntries(
    Array.from({ length: 30 }, (_, index) => [`extra${index}`, index]),
  );

  const result = validateLeadPayload({
    ...base,
    ...extra,
    intent: "agency-preview",
  });

  assert.equal(result.ok, false);
});
