export const siteConfig = {
  deployment: {
    siteUrl:
      process.env.NEXT_PUBLIC_SITE_URL ??
      "https://calculator.yourfriendlydeveloper.com",
  },
  business: {
    name: "Your Friendly Developer",
    shortName: "YFD",
    mainSiteUrl:
      process.env.NEXT_PUBLIC_MAIN_SITE_URL ?? "https://yourfriendlydeveloper.com",
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  },
  product: {
    name: "Home-Service Lead Value Calculator",
    shortName: "Lead Value Calculator",
    description:
      "A custom white-label lead value calculator for marketing agencies serving home-service businesses.",
  },
  demoAgency: {
    name: "Summit Home Service Marketing",
    shortName: "Summit Growth",
    mark: "SG",
    tagline: "Turn lead-flow numbers into a clear growth conversation.",
  },
  forms: {
    recipientName: "Your Friendly Developer",
  },
  offer: {
    totalPrice: 1000,
    deposit: 500,
    deliveryBusinessDays: 5,
    revisions: 1,
  },
  brand: {
    primary: "#155eef",
    primaryDark: "#0b3a91",
    accent: "#f4b740",
    ink: "#172033",
    muted: "#5e6b82",
    surface: "#ffffff",
    canvas: "#f4f7fb",
  },
  calculatorDefaults: {
    websiteLeads: 40,
    phoneLeads: 60,
    answerRate: 72,
    leadToAppointmentRate: 55,
    appointmentToSaleRate: 45,
    averageJobValue: 1800,
    monthlyAdSpend: 5000,
    grossMargin: 40,
  },
  niches: [
    "Plumbing",
    "HVAC",
    "Roofing",
    "Electrical",
    "Landscaping",
    "Remodeling",
  ],
} as const;
