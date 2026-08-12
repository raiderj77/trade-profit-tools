"use client";

import type { ChangeEvent } from "react";
import { useMemo, useState } from "react";

import { siteConfig } from "@/config/site";
import {
  INPUT_LIMITS,
  calculateLeadValue,
  type CalculatorInputs,
} from "@/lib/calculator.mjs";
import { formatCurrency, formatNumber, formatRoas } from "@/lib/format";

import { ContractorLeadForm } from "./ContractorLeadForm";

interface InputDefinition {
  key: keyof CalculatorInputs;
  label: string;
  help: string;
  min: number;
  max?: number;
  step: number;
  prefix?: string;
  suffix?: string;
}

const inputDefinitions: InputDefinition[] = [
  {
    key: "websiteLeads",
    label: "Monthly website leads",
    help: "Form submissions and qualified website inquiries.",
    min: 0,
    max: INPUT_LIMITS.websiteLeads,
    step: 1,
  },
  {
    key: "phoneLeads",
    label: "Monthly phone leads",
    help: "Inbound calls tied to marketing and referrals.",
    min: 0,
    max: INPUT_LIMITS.phoneLeads,
    step: 1,
  },
  {
    key: "answerRate",
    label: "Calls answered",
    help: "The percentage of inbound calls answered live.",
    min: 0,
    max: INPUT_LIMITS.answerRate,
    step: 1,
    suffix: "%",
  },
  {
    key: "leadToAppointmentRate",
    label: "Lead to appointment rate",
    help: "The percentage of workable leads that schedule.",
    min: 0,
    max: INPUT_LIMITS.leadToAppointmentRate,
    step: 1,
    suffix: "%",
  },
  {
    key: "appointmentToSaleRate",
    label: "Appointment to sale rate",
    help: "The percentage of appointments that become jobs.",
    min: 0,
    max: INPUT_LIMITS.appointmentToSaleRate,
    step: 1,
    suffix: "%",
  },
  {
    key: "averageJobValue",
    label: "Average job value",
    help: "Average booked revenue for one closed job.",
    min: 0,
    max: INPUT_LIMITS.averageJobValue,
    step: 100,
    prefix: "$",
  },
  {
    key: "monthlyAdSpend",
    label: "Monthly advertising spend",
    help: "Paid search, social ads, lead services, and related media.",
    min: 0,
    max: INPUT_LIMITS.monthlyAdSpend,
    step: 100,
    prefix: "$",
  },
  {
    key: "grossMargin",
    label: "Estimated gross margin",
    help: "Revenue remaining after direct job costs, before overhead.",
    min: 0,
    max: INPUT_LIMITS.grossMargin,
    step: 1,
    suffix: "%",
  },
];

const initialInputs: CalculatorInputs = {
  ...siteConfig.calculatorDefaults,
};

export function LeadValueCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>(initialInputs);
  const results = useMemo(() => calculateLeadValue(inputs), [inputs]);

  function updateInput(key: keyof CalculatorInputs, rawValue: string) {
    const parsed = rawValue === "" ? 0 : Number(rawValue);
    const normalized = Number.isFinite(parsed)
      ? Math.min(INPUT_LIMITS[key], Math.max(0, parsed))
      : 0;

    setInputs((current) => ({
      ...current,
      [key]: normalized,
    }));
  }

  const cards = [
    {
      label: "Estimated monthly booked revenue",
      value: formatCurrency(results.estimatedRevenue),
      detail: `${formatNumber(results.sales)} estimated jobs`,
      emphasis: true,
    },
    {
      label: "Estimated gross profit",
      value: formatCurrency(results.estimatedGrossProfit),
      detail: "Before overhead and taxes",
    },
    {
      label: "Revenue per raw lead",
      value: formatCurrency(results.revenuePerRawLead),
      detail: "Across website and phone leads",
    },
    {
      label: "Current cost per lead",
      value: formatCurrency(results.currentCostPerLead),
      detail: "Ad spend divided by raw leads",
    },
    {
      label: "Estimated break-even CPL",
      value: formatCurrency(results.breakEvenCostPerLead),
      detail: "Based on gross profit before overhead",
    },
    {
      label: "Revenue lost from unanswered calls",
      value: formatCurrency(results.lostRevenueFromUnansweredCalls),
      detail: "Uses current downstream conversion rates",
      warning: true,
    },
    {
      label: "Added revenue from a five-point lift",
      value: formatCurrency(results.addedRevenueFromFivePointLift),
      detail: "Five points at answer, appointment, and sale",
      emphasis: true,
    },
    {
      label: "Estimated return on ad spend",
      value: formatRoas(results.estimatedRoas),
      detail: "Booked revenue divided by ad spend",
    },
  ];

  return (
    <div className="calculator-shell">
      <section className="calculator-inputs" aria-labelledby="calculator-input-heading">
        <div className="section-heading compact">
          <p className="eyebrow">Your numbers</p>
          <h2 id="calculator-input-heading">Estimate the value of your current lead flow</h2>
          <p>Use monthly averages. Adjust any field to update the estimate.</p>
        </div>
        <div className="input-grid">
          {inputDefinitions.map((field) => {
            const inputId = `calculator-${field.key}`;
            const helpId = `${inputId}-help`;
            return (
              <div className="number-field" key={field.key}>
                <label className="field-label" htmlFor={inputId}>
                  {field.label}
                </label>
                <span className="input-affix-wrap">
                  {field.prefix ? <span className="input-affix prefix" aria-hidden="true">{field.prefix}</span> : null}
                  <input
                    id={inputId}
                    name={field.key}
                    type="number"
                    inputMode="decimal"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={inputs[field.key]}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      updateInput(field.key, event.target.value)
                    }
                    aria-describedby={helpId}
                  />
                  {field.suffix ? <span className="input-affix suffix" aria-hidden="true">{field.suffix}</span> : null}
                </span>
                <span className="field-help" id={helpId}>{field.help}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="calculator-results" aria-labelledby="calculator-results-heading">
        <div className="section-heading compact">
          <p className="eyebrow">Planning estimate</p>
          <h2 id="calculator-results-heading">Estimated output from the current lead flow</h2>
          <p aria-live="polite">
            Based on {formatNumber(results.totalRawLeads)} raw monthly leads and {formatNumber(results.workableLeads)} workable leads.
          </p>
        </div>
        <div className="results-grid">
          {cards.map((card) => (
            <article
              className={`result-card${card.emphasis ? " emphasis" : ""}${card.warning ? " warning" : ""}`}
              key={card.label}
            >
              <p>{card.label}</p>
              <strong>{card.value}</strong>
              <span>{card.detail}</span>
            </article>
          ))}
        </div>
        <details className="formula-details">
          <summary>How this estimate works</summary>
          <p>
            Website leads count as workable leads. Phone leads are adjusted by the answer rate. Workable leads then move through the appointment and sale rates. Gross margin is used for the break-even CPL estimate.
          </p>
          <p>
            The five-point scenario adds five percentage points to answer rate, lead-to-appointment rate, and appointment-to-sale rate, with each rate capped at 100 percent.
          </p>
        </details>
        <p className="disclaimer">
          Planning estimate only. Results depend on attribution, lead quality, callback behavior, margins, capacity, pricing, and close rates. This calculator does not guarantee revenue or profit.
        </p>
      </section>

      <ContractorLeadForm inputs={inputs} />
    </div>
  );
}
