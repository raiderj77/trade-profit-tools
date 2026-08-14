export const DEFAULT_SITE_URL = "https://calculator.yourfriendlydeveloper.com";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;

  if (!configured) {
    return DEFAULT_SITE_URL;
  }

  try {
    return new URL(configured).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}
