import assert from "node:assert/strict";
import test from "node:test";

import { configuredOrigins, originIsAllowed } from "./lead-request.mjs";

test("normalizes configured production and preview origins", () => {
  assert.deepEqual(
    [
      ...configuredOrigins(
        "https://calculator.example.com/path",
        "preview.vercel.app",
        "calculator-project.vercel.app",
      ),
    ],
    [
      "https://calculator.example.com",
      "https://preview.vercel.app",
      "https://calculator-project.vercel.app",
    ],
  );
});

test("requires an approved Origin in production", () => {
  const options = {
    nodeEnv: "production",
    siteUrl: "https://calculator.example.com",
    vercelUrl: "preview.vercel.app",
    projectProductionUrl: "calculator-project.vercel.app",
  };

  assert.equal(originIsAllowed({ ...options, origin: null }), false);
  assert.equal(
    originIsAllowed({ ...options, origin: "https://attacker.example" }),
    false,
  );
  assert.equal(
    originIsAllowed({ ...options, origin: "https://calculator.example.com" }),
    true,
  );
  assert.equal(
    originIsAllowed({ ...options, origin: "https://preview.vercel.app" }),
    true,
  );
  assert.equal(
    originIsAllowed({
      ...options,
      origin: "https://calculator-project.vercel.app",
    }),
    true,
  );
});

test("allows local non-production requests without an Origin", () => {
  assert.equal(
    originIsAllowed({
      nodeEnv: "development",
      origin: null,
      siteUrl: "https://calculator.example.com",
    }),
    true,
  );
});
