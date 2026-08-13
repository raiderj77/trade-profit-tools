function emailDeliveryConfigured(environment) {
  return Boolean(
    environment.RESEND_API_KEY &&
      environment.LEAD_FROM_EMAIL &&
      environment.LEAD_TO_EMAIL,
  );
}

function demoSubmissionsAllowed(environment) {
  return (
    environment.NODE_ENV !== "production" &&
    environment.ALLOW_DEMO_SUBMISSIONS === "true"
  );
}

function leadFormsEnabled(environment) {
  return (
    emailDeliveryConfigured(environment) || demoSubmissionsAllowed(environment)
  );
}

export {
  demoSubmissionsAllowed,
  emailDeliveryConfigured,
  leadFormsEnabled,
};
