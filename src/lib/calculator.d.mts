export interface CalculatorInputs {
  websiteLeads: number;
  phoneLeads: number;
  answerRate: number;
  leadToAppointmentRate: number;
  appointmentToSaleRate: number;
  averageJobValue: number;
  monthlyAdSpend: number;
  grossMargin: number;
}

export interface CalculatorResults {
  totalRawLeads: number;
  workableLeads: number;
  appointments: number;
  sales: number;
  estimatedRevenue: number;
  estimatedGrossProfit: number;
  currentCostPerLead: number;
  revenuePerRawLead: number;
  breakEvenCostPerLead: number;
  lostRevenueFromUnansweredCalls: number;
  addedRevenueFromFivePointLift: number;
  estimatedRoas: number;
}

export const INPUT_LIMITS: Readonly<Record<keyof CalculatorInputs, number>>;
export const DEFAULT_INPUTS: Readonly<CalculatorInputs>;

export function calculateLeadValue(
  input: CalculatorInputs,
): CalculatorResults;
