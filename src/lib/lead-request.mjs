function configuredOrigins(siteUrl, vercelUrl = "", projectProductionUrl = "") {
  const origins = new Set();

  for (const value of [
    siteUrl,
    vercelUrl ? `https://${vercelUrl}` : "",
    projectProductionUrl ? `https://${projectProductionUrl}` : "",
  ]) {
    if (!value) {
      continue;
    }

    try {
      origins.add(new URL(value).origin);
    } catch {
      // A malformed environment variable should not crash the form route.
    }
  }

  return origins;
}

function originIsAllowed({
  nodeEnv,
  origin,
  siteUrl,
  vercelUrl = "",
  projectProductionUrl = "",
}) {
  if (nodeEnv !== "production") {
    return true;
  }

  if (!origin) {
    return false;
  }

  return configuredOrigins(siteUrl, vercelUrl, projectProductionUrl).has(
    origin,
  );
}

export { configuredOrigins, originIsAllowed };
