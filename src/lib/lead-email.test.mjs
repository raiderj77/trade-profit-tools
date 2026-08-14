import assert from "node:assert/strict";
import test from "node:test";

import { createSubmissionKey, formatNumberRecord } from "./lead-email.mjs";

const lead = {
  intent: "contractor-results",
  name: "Jamie Owner",
  email: "jamie@example.com",
  company: "Example Plumbing",
  phone: "",
  websiteUrl: "",
  niches: "",
  source: "/demo",
  consent: true,
  honeypot: "",
  startedAt: 1_786_510_000_000,
  metrics: { websiteLeads: 40, phoneLeads: 60 },
};

test("formats lead email numbers without floating-point artifacts", () => {
  const text = formatNumberRecord({
    workableLeads: 83.19999999999999,
    lostRevenueFromUnansweredCalls: 7484.400000000002,
  });

  assert.equal(
    text,
    "Workable Leads: 83.2\nLost Revenue From Unanswered Calls: 7,484.4",
  );
});

test("uses the same idempotency key only for the same normalized lead", () => {
  assert.equal(createSubmissionKey(lead), createSubmissionKey({ ...lead }));
  assert.notEqual(
    createSubmissionKey(lead),
    createSubmissionKey({
      ...lead,
      metrics: { ...lead.metrics, websiteLeads: 41 },
    }),
  );
});
