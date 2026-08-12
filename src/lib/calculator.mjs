const INPUT_LIMITS = Object.freeze({
  websiteLeads: 100_000,
  phoneLeads: 100_000,
  answerRate: 100,
  leadToAppointmentRate: 100,
  appointmentToSaleRate: 100,
  averageJobValue: 10_000_000,
  monthlyAdSpend: 100_000_000,
  grossMargin: 100,
});

const DEFAULT_INPUTS = Object.freeze({
  websiteLeads: 40,
  phoneLeads: 60,
  answerRate: 72,
  leadToAppointmentRate: 55,
  appointmentToSaleRate: 45,
  averageJobValue: 1800,
  monthlyAdSpend: 5000,
  grossMargin: 40,
});

function boundedNumber(value, maximum) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return 0;
  }

  return Math.min(maximum, Math.max(0, number));
}

function percentage(value) {
  return boundedNumber(value, 100) / 100;
}

function safeDivide(numerator, denominator) {
  return denominator > 0 ? numerator / denominator : 0;
}

function calculateLeadValue(input) {
  const websiteLeads = boundedNumber(
    input.websiteLeads,
    INPUT_LIMITS.websiteLeads,
  );
  const phoneLeads = boundedNumber(input.phoneLeads, INPUT_LIMITS.phoneLeads);
  const answerRate = percentage(input.answerRate);
  const leadToAppointmentRate = percentage(input.leadToAppointmentRate);
  const appointmentToSaleRate = percentage(input.appointmentToSaleRate);
  const averageJobValue = boundedNumber(
    input.averageJobValue,
    INPUT_LIMITS.averageJobValue,
  );
  const monthlyAdSpend = boundedNumber(
    input.monthlyAdSpend,
    INPUT_LIMITS.monthlyAdSpend,
  );
  const grossMargin = percentage(input.grossMargin);

  const totalRawLeads = websiteLeads + phoneLeads;
  const answeredPhoneLeads = phoneLeads * answerRate;
  const workableLeads = websiteLeads + answeredPhoneLeads;
  const appointments = workableLeads * leadToAppointmentRate;
  const sales = appointments * appointmentToSaleRate;
  const estimatedRevenue = sales * averageJobValue;
  const estimatedGrossProfit = estimatedRevenue * grossMargin;

  const currentCostPerLead = safeDivide(monthlyAdSpend, totalRawLeads);
  const revenuePerRawLead = safeDivide(estimatedRevenue, totalRawLeads);
  const breakEvenCostPerLead = safeDivide(
    estimatedGrossProfit,
    totalRawLeads,
  );
  const estimatedRoas = safeDivide(estimatedRevenue, monthlyAdSpend);

  const unansweredCalls = phoneLeads * (1 - answerRate);
  const lostRevenueFromUnansweredCalls =
    unansweredCalls *
    leadToAppointmentRate *
    appointmentToSaleRate *
    averageJobValue;

  const improvedAnswerRate = Math.min(1, answerRate + 0.05);
  const improvedLeadToAppointmentRate = Math.min(
    1,
    leadToAppointmentRate + 0.05,
  );
  const improvedAppointmentToSaleRate = Math.min(
    1,
    appointmentToSaleRate + 0.05,
  );

  const improvedWorkableLeads =
    websiteLeads + phoneLeads * improvedAnswerRate;
  const improvedRevenue =
    improvedWorkableLeads *
    improvedLeadToAppointmentRate *
    improvedAppointmentToSaleRate *
    averageJobValue;

  const addedRevenueFromFivePointLift = Math.max(
    0,
    improvedRevenue - estimatedRevenue,
  );

  return {
    totalRawLeads,
    workableLeads,
    appointments,
    sales,
    estimatedRevenue,
    estimatedGrossProfit,
    currentCostPerLead,
    revenuePerRawLead,
    breakEvenCostPerLead,
    lostRevenueFromUnansweredCalls,
    addedRevenueFromFivePointLift,
    estimatedRoas,
  };
}

export { DEFAULT_INPUTS, INPUT_LIMITS, calculateLeadValue };
