import assert from "node:assert/strict";
import test from "node:test";

import {
  calculateOpportunityScore,
  scoreBand,
  validateOpportunityScores,
} from "./opportunity-score.mjs";

const strongScores = {
  speedToPayment: 9,
  buyerReachability: 9,
  startupCost: 10,
  grossMargin: 9,
  lowContactFit: 8,
  fulfillmentSimplicity: 8,
  repeatRevenue: 6,
  competitiveOpening: 6,
  evidenceQuality: 9,
  legalEthicalSafety: 9,
};

test("calculates a 100-point opportunity score", () => {
  assert.equal(calculateOpportunityScore(strongScores), 83);
});

test("accepts every score at the lower boundary", () => {
  const scores = Object.fromEntries(
    Object.keys(strongScores).map((key) => [key, 1]),
  );

  assert.equal(validateOpportunityScores(scores), true);
  assert.equal(calculateOpportunityScore(scores), 10);
});

test("accepts every score at the upper boundary", () => {
  const scores = Object.fromEntries(
    Object.keys(strongScores).map((key) => [key, 10]),
  );

  assert.equal(validateOpportunityScores(scores), true);
  assert.equal(calculateOpportunityScore(scores), 100);
});

test("rejects missing score dimensions", () => {
  const { legalEthicalSafety: _removed, ...incompleteScores } = strongScores;

  assert.throws(
    () => calculateOpportunityScore(incompleteScores),
    /legalEthicalSafety must be a whole number/,
  );
});

test("rejects decimal scores", () => {
  assert.throws(
    () =>
      calculateOpportunityScore({
        ...strongScores,
        grossMargin: 8.5,
      }),
    /grossMargin must be a whole number/,
  );
});

test("rejects scores outside the one-to-ten range", () => {
  assert.throws(
    () =>
      calculateOpportunityScore({
        ...strongScores,
        startupCost: 11,
      }),
    /startupCost must be between 1 and 10/,
  );
});

test("maps scores to build, validate, and hold bands", () => {
  assert.equal(scoreBand(80), "build-now");
  assert.equal(scoreBand(79), "validate-first");
  assert.equal(scoreBand(65), "validate-first");
  assert.equal(scoreBand(64), "hold");
});

test("rejects an invalid total score", () => {
  assert.throws(() => scoreBand(101), /between 10 and 100/);
});
