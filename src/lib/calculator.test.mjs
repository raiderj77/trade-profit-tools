import assert from "node:assert/strict";
import test from "node:test";

import { DEFAULT_INPUTS, calculateLeadValue } from "./calculator.mjs";

test("default inputs return finite, non-negative outputs", () => {
  const result = calculateLeadValue(DEFAULT_INPUTS);

  for (const [key, value] of Object.entries(result)) {
    assert.equal(Number.isFinite(value), true, `${key} should be finite`);
    assert.equal(value >= 0, true, `${key} should be non-negative`);
  }
});

test("zero leads avoid division errors", () => {
  const result = calculateLeadValue({
    ...DEFAULT_INPUTS,
    websiteLeads: 0,
    phoneLeads: 0,
  });

  assert.equal(result.currentCostPerLead, 0);
  assert.equal(result.revenuePerRawLead, 0);
  assert.equal(result.breakEvenCostPerLead, 0);
  assert.equal(result.estimatedRevenue, 0);
});

test("a perfect answer rate removes missed-call revenue loss", () => {
  const result = calculateLeadValue({
    ...DEFAULT_INPUTS,
    answerRate: 100,
  });

  assert.equal(result.lostRevenueFromUnansweredCalls, 0);
});

test("zero conversion rates return zero revenue", () => {
  const result = calculateLeadValue({
    ...DEFAULT_INPUTS,
    leadToAppointmentRate: 0,
    appointmentToSaleRate: 0,
  });

  assert.equal(result.estimatedRevenue, 0);
  assert.equal(result.estimatedGrossProfit, 0);
});

test("percentages above 100 are capped", () => {
  const capped = calculateLeadValue({
    ...DEFAULT_INPUTS,
    answerRate: 100,
    leadToAppointmentRate: 100,
    appointmentToSaleRate: 100,
    grossMargin: 100,
  });

  const over = calculateLeadValue({
    ...DEFAULT_INPUTS,
    answerRate: 500,
    leadToAppointmentRate: 500,
    appointmentToSaleRate: 500,
    grossMargin: 500,
  });

  assert.deepEqual(over, capped);
});

test("negative values are treated as zero", () => {
  const result = calculateLeadValue({
    ...DEFAULT_INPUTS,
    websiteLeads: -20,
    phoneLeads: -10,
    averageJobValue: -100,
    monthlyAdSpend: -500,
  });

  assert.equal(result.totalRawLeads, 0);
  assert.equal(result.estimatedRevenue, 0);
  assert.equal(result.estimatedRoas, 0);
});

test("five-point lift is never negative", () => {
  const result = calculateLeadValue({
    ...DEFAULT_INPUTS,
    answerRate: 100,
    leadToAppointmentRate: 100,
    appointmentToSaleRate: 100,
  });

  assert.equal(result.addedRevenueFromFivePointLift, 0);
});

test("known values match the documented formulas", () => {
  const result = calculateLeadValue({
    websiteLeads: 10,
    phoneLeads: 10,
    answerRate: 50,
    leadToAppointmentRate: 50,
    appointmentToSaleRate: 50,
    averageJobValue: 100,
    monthlyAdSpend: 100,
    grossMargin: 40,
  });

  assert.equal(result.totalRawLeads, 20);
  assert.equal(result.workableLeads, 15);
  assert.equal(result.appointments, 7.5);
  assert.equal(result.sales, 3.75);
  assert.equal(result.estimatedRevenue, 375);
  assert.equal(result.estimatedGrossProfit, 150);
  assert.equal(result.currentCostPerLead, 5);
  assert.equal(result.revenuePerRawLead, 18.75);
  assert.equal(result.breakEvenCostPerLead, 7.5);
  assert.equal(result.lostRevenueFromUnansweredCalls, 125);
  assert.ok(
    Math.abs(result.addedRevenueFromFivePointLift - 93.875) <
      Number.EPSILON * 512,
  );
  assert.equal(result.estimatedRoas, 3.75);
});

test("extreme finite inputs are capped and outputs remain finite", () => {
  const result = calculateLeadValue({
    websiteLeads: Number.MAX_VALUE,
    phoneLeads: Number.MAX_VALUE,
    answerRate: Number.MAX_VALUE,
    leadToAppointmentRate: Number.MAX_VALUE,
    appointmentToSaleRate: Number.MAX_VALUE,
    averageJobValue: Number.MAX_VALUE,
    monthlyAdSpend: Number.MAX_VALUE,
    grossMargin: Number.MAX_VALUE,
  });

  for (const value of Object.values(result)) {
    assert.equal(Number.isFinite(value), true);
    assert.equal(value >= 0, true);
  }
});
