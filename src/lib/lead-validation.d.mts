import type { CalculatorInputs } from "./calculator.mjs";

export type LeadIntent = "agency-preview" | "contractor-results";

interface CommonLeadPayload {
  name: string;
  email: string;
  company: string;
  phone: string;
  websiteUrl: string;
  niches: string;
  source: string;
  consent: true;
  honeypot: string;
  startedAt: number;
}

export interface AgencyPreviewLeadPayload extends CommonLeadPayload {
  intent: "agency-preview";
  metrics: Record<string, never>;
}

export interface ContractorResultsLeadPayload extends CommonLeadPayload {
  intent: "contractor-results";
  metrics: CalculatorInputs;
}

export type ValidLeadPayload =
  | AgencyPreviewLeadPayload
  | ContractorResultsLeadPayload;

export function validateLeadPayload(
  value: unknown,
):
  | { ok: true; data: ValidLeadPayload }
  | { ok: false; error: string };
