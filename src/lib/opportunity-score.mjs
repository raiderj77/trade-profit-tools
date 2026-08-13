export const OPPORTUNITY_SCORE_KEYS = Object.freeze([
  "speedToPayment",
  "buyerReachability",
  "startupCost",
  "grossMargin",
  "lowContactFit",
  "fulfillmentSimplicity",
  "repeatRevenue",
  "competitiveOpening",
  "evidenceQuality",
  "legalEthicalSafety",
]);

export function validateOpportunityScores(scores) {
  if (!scores || typeof scores !== "object" || Array.isArray(scores)) {
    throw new TypeError("Opportunity scores must be an object.");
  }

  for (const key of OPPORTUNITY_SCORE_KEYS) {
    const value = scores[key];

    if (!Number.isFinite(value) || !Number.isInteger(value)) {
      throw new TypeError(`${key} must be a whole number.`);
    }

    if (value < 1 || value > 10) {
      throw new RangeError(`${key} must be between 1 and 10.`);
    }
  }

  return true;
}

export function calculateOpportunityScore(scores) {
  validateOpportunityScores(scores);

  const total = OPPORTUNITY_SCORE_KEYS.reduce(
    (sum, key) => sum + scores[key],
    0,
  );

  return total;
}

export function scoreBand(score) {
  if (!Number.isFinite(score) || score < 10 || score > 100) {
    throw new RangeError("Opportunity score must be between 10 and 100.");
  }

  if (score >= 80) {
    return "build-now";
  }

  if (score >= 65) {
    return "validate-first";
  }

  return "hold";
}
