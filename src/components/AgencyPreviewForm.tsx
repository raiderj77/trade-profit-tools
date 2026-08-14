"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { LeadFormUnavailable } from "./LeadFormUnavailable";

interface FormState {
  status: "idle" | "sending" | "success" | "error";
  message: string;
}

const initialState: FormState = { status: "idle", message: "" };

interface AgencyPreviewFormProps {
  enabled: boolean;
}

export function AgencyPreviewForm({ enabled }: AgencyPreviewFormProps) {
  const startedAt = useRef(0);
  const [state, setState] = useState<FormState>(initialState);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "sending", message: "Sending your request..." });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intent: "agency-preview",
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          websiteUrl: formData.get("websiteUrl"),
          niches: formData.get("niches"),
          phone: "",
          source: window.location.pathname,
          consent: formData.get("consent") === "on",
          website: formData.get("website"),
          startedAt: startedAt.current,
          metrics: {},
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
      };
      if (!response.ok) {
        throw new Error(data.message ?? "The request did not send.");
      }

      form.reset();
      startedAt.current = Date.now();
      setState({
        status: "success",
        message: data.message ?? "Your request was sent.",
      });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "The request did not send. Please try again.",
      });
    }
  }

  if (!enabled) {
    return <LeadFormUnavailable />;
  }

  return (
    <form
      className="lead-form"
      onSubmit={handleSubmit}
      aria-busy={state.status === "sending"}
    >
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
          Agency name
          <input
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={160}
            required
          />
        </label>
        <label>
          Agency website
          <input
            name="websiteUrl"
            type="url"
            inputMode="url"
            placeholder="https://"
            maxLength={500}
          />
        </label>
      </div>
      <label>
        Home-service niches you serve
        <input
          name="niches"
          type="text"
          placeholder="Plumbing, HVAC, roofing"
          maxLength={300}
        />
      </label>
      <label className="honeypot" inert>
        Leave this field empty
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="checkbox-row">
        <input name="consent" type="checkbox" required />
        <span>I agree to receive a reply about the calculator.</span>
      </label>
      <button
        className="button button-primary"
        type="submit"
        disabled={state.status === "sending"}
      >
        {state.status === "sending"
          ? "Sending..."
          : "Request my branded preview"}
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
