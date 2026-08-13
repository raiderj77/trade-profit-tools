interface OriginCheckOptions {
  nodeEnv?: string;
  origin: string | null;
  siteUrl: string;
  vercelUrl?: string;
  projectProductionUrl?: string;
}

export function configuredOrigins(
  siteUrl: string,
  vercelUrl?: string,
  projectProductionUrl?: string,
): Set<string>;

export function originIsAllowed(options: OriginCheckOptions): boolean;
