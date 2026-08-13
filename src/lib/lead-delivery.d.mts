type Environment = Record<string, string | undefined>;

export function emailDeliveryConfigured(environment: Environment): boolean;
export function demoSubmissionsAllowed(environment: Environment): boolean;
export function leadFormsEnabled(environment: Environment): boolean;
