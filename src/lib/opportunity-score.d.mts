export type OpportunityScoreKey =
  | "speedToPayment"
  | "buyerReachability"
  | "startupCost"
  | "grossMargin"
  | "lowContactFit"
  | "fulfillmentSimplicity"
  | "repeatRevenue"
  | "competitiveOpening"
  | "evidenceQuality"
  | "legalEthicalSafety";

export type OpportunityScores = Record<OpportunityScoreKey, number>;

export const OPPORTUNITY_SCORE_KEYS: readonly OpportunityScoreKey[];

export function validateOpportunityScores(
  scores: OpportunityScores,
): true;

export function calculateOpportunityScore(
  scores: OpportunityScores,
): number;

export function scoreBand(
  score: number,
): "build-now" | "validate-first" | "hold";
