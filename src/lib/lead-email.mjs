import { createHash } from "node:crypto";

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

function labelForKey(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (character) => character.toUpperCase());
}

function formatNumberRecord(values) {
  const entries = Object.entries(values);
  if (entries.length === 0) {
    return "None";
  }

  return entries
    .map(([key, value]) => `${labelForKey(key)}: ${NUMBER_FORMATTER.format(value)}`)
    .join("\n");
}

function createSubmissionKey(lead) {
  const digest = createHash("sha256")
    .update(JSON.stringify(lead))
    .digest("hex");

  return `lead-${digest}`;
}

export { createSubmissionKey, formatNumberRecord };
