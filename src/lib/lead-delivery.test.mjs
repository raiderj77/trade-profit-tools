import assert from "node:assert/strict";
import test from "node:test";

import {
  demoSubmissionsAllowed,
  emailDeliveryConfigured,
  leadFormsEnabled,
} from "./lead-delivery.mjs";

test("requires every Resend delivery value", () => {
  const complete = {
    RESEND_API_KEY: "test-key",
    LEAD_FROM_EMAIL: "sender@example.com",
    LEAD_TO_EMAIL: "recipient@example.com",
  };

  assert.equal(emailDeliveryConfigured(complete), true);

  for (const key of Object.keys(complete)) {
    assert.equal(
      emailDeliveryConfigured({ ...complete, [key]: "" }),
      false,
      `${key} should be required`,
    );
  }
});

test("allows demo submissions only outside production", () => {
  assert.equal(
    demoSubmissionsAllowed({
      NODE_ENV: "development",
      ALLOW_DEMO_SUBMISSIONS: "true",
    }),
    true,
  );
  assert.equal(
    demoSubmissionsAllowed({
      NODE_ENV: "production",
      ALLOW_DEMO_SUBMISSIONS: "true",
    }),
    false,
  );
});

test("disables public forms until real delivery is configured", () => {
  assert.equal(leadFormsEnabled({ NODE_ENV: "production" }), false);
  assert.equal(
    leadFormsEnabled({
      NODE_ENV: "production",
      RESEND_API_KEY: "test-key",
      LEAD_FROM_EMAIL: "sender@example.com",
      LEAD_TO_EMAIL: "recipient@example.com",
    }),
    true,
  );
});
