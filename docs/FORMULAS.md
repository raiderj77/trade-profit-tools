# Calculator formulas

## Inputs

- `websiteLeads`: Monthly website form leads.
- `phoneLeads`: Monthly inbound phone leads.
- `answerRate`: Percentage of inbound calls answered.
- `leadToAppointmentRate`: Percentage of workable leads that become appointments.
- `appointmentToSaleRate`: Percentage of appointments that become sales.
- `averageJobValue`: Average booked job revenue.
- `monthlyAdSpend`: Monthly advertising spend.
- `grossMargin`: Estimated gross margin before overhead.

All percentages use percentage points in the interface. For example, `55` means `0.55` in formulas.

## Normalization

- Negative counts and money values become zero.
- Percentage values are limited to 0 through 100.
- Lead counts are limited to 100,000 per input.
- Average job value is limited to $10,000,000.
- Monthly advertising spend is limited to $100,000,000.
- Division by zero returns zero.
- Improvement rates are limited to 100 percent.

## Base calculation

```text
totalRawLeads = websiteLeads + phoneLeads
answeredPhoneLeads = phoneLeads × answerRate
workableLeads = websiteLeads + answeredPhoneLeads
appointments = workableLeads × leadToAppointmentRate
sales = appointments × appointmentToSaleRate
estimatedRevenue = sales × averageJobValue
estimatedGrossProfit = estimatedRevenue × grossMargin
```

## Efficiency outputs

```text
currentCostPerLead = monthlyAdSpend ÷ totalRawLeads
revenuePerRawLead = estimatedRevenue ÷ totalRawLeads
breakEvenCostPerLead = estimatedGrossProfit ÷ totalRawLeads
estimatedROAS = estimatedRevenue ÷ monthlyAdSpend
```

`breakEvenCostPerLead` treats estimated gross profit as the maximum total lead-acquisition spend before overhead and other operating expenses. It is not a full net-profit calculation.

## Missed-call output

```text
unansweredCalls = phoneLeads × (1 - answerRate)
lostRevenueFromUnansweredCalls =
  unansweredCalls
  × leadToAppointmentRate
  × appointmentToSaleRate
  × averageJobValue
```

This assumes unanswered calls would convert at the same downstream rates as answered calls. Real outcomes depend on callbacks, voicemail, duplicate calls, spam, lead quality, and staffing.

## Five-point improvement output

The model adds five percentage points to:

- Answer rate.
- Lead-to-appointment rate.
- Appointment-to-sale rate.

Each improved rate is limited to 100 percent.

```text
improvedWorkableLeads =
  websiteLeads
  + phoneLeads × improvedAnswerRate

improvedRevenue =
  improvedWorkableLeads
  × improvedLeadToAppointmentRate
  × improvedAppointmentToSaleRate
  × averageJobValue

addedRevenueFromFivePointLift = improvedRevenue - estimatedRevenue
```

## Required disclaimer

Every calculator view must state:

"Planning estimate only. Results depend on attribution, lead quality, callback behavior, margins, capacity, pricing, and close rates. This calculator does not guarantee revenue or profit."
