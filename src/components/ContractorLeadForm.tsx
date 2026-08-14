"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";

import type { CalculatorInputs } from "@/lib/calculator.mjs";
import { siteConfig } from "@/config/site";

import { LeadFormUnavailable } from "./LeadFormUnavailable";

interface ContractorLeadFormProps {
  enabled: boolean;
  inputs: CalculatorInputs;
}

interface FormState {
  status: "idle" | "sending" | "success" | "error";
  message: string;
}

export function ContractorLeadForm({
  enabled,
  inputs,
}: ContractorLeadFormProps) {
  const startedAt = useRef(0);
  const [state, setState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "sending", message: "Sending your estimate..." });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intent: "contractor-results",
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          phone: formData.get("phone"),
          websiteUrl: "",
          niches: "",
          source: window.location.pathname,
          consent: formData.get("consent") === "on",
          website: formData.get("website"),
          startedAt: startedAt.current,
          metrics: inputs,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
      };
      if (!response.ok) {
        throw new Error(data.message ?? "The estimate did not send.");
      }

      form.reset();
      startedAt.current = Date.now();
      setState({
        status: "success",
        message: data.message ?? "Your estimate was sent.",
      });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "The estimate did not send. Please try again.",
      });
    }
  }

  if (!enabled) {
    return <LeadFormUnavailable />;
  }

  return (
    <form
      className="lead-form result-lead-form"
      onSubmit={handleSubmit}
      aria-busy={state.status === "sending"}
    >
      <div>
        <p className="eyebrow">Next step</p>
        <h3>Review the estimate with {siteConfig.forms.recipientName}</h3>
        <p>
          Send the numbers to {siteConfig.forms.recipientName}, who will review
          the assumptions and identify the first conversion gap to test.
        </p>
      </div>
      <div className="form-grid">
        <label>
          Your name
          <input
            name="name"
            type="text"
            autoComplete="name"
            maxLength={120}
            required
          />
        </label>
        <label>
          Work email
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={200}
            required
          />
        </label>
        <label>
          Company
          <input
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={160}
            required
          />
        </label>
        <label>
          Phone, optional
          <input name="phone" type="tel" autoComplete="tel" maxLength={60} />
        </label>
      </div>
      <label className="honeypot" inert>
        Leave this field empty
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="checkbox-row">
        <input name="consent" type="checkbox" required />
        <span>I agree to receive a reply about this estimate.</span>
      </label>
      <button
        className="button button-primary"
        type="submit"
        disabled={state.status === "sending"}
      >
        {state.status === "sending" ? "Sending..." : "Send my estimate"}
      </button>
      <p
        className={`form-message ${state.status}`}
        role={state.status === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {state.message}
      </p>
    </form>
  );
}
