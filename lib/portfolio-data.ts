export type PortfolioProject = {
  title: string;
  description: string;
  status: string;
  year: string;
  href: string;
  image: string;
  external?: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Barcelona Digital Nomads",
    description:
      "Live AI-assisted WhatsApp moderation with deterministic rules, whitelisting, enforcement logs, and operator alerts.",
    status: "AI services client · Live operations",
    year: "2026",
    href: "#case-bdn",
    image: "/portfolio/jonas-speaking.jpg",
  },
  {
    title: "Bridge 48",
    description:
      "Revenue operations connecting HubSpot, WhatsApp, Stripe, SimplyBook, campaign state, and human handoff.",
    status: "Paid client · Production automation",
    year: "2026",
    href: "#case-bridge",
    image: "/portfolio/bridge-48.jpg",
  },
  {
    title: "Shaping Success Stories",
    description:
      "A conversational CV intake agent and custom Supabase CRM spanning documents, notifications, and account operations.",
    status: "Client system · AI intake and CRM",
    year: "2026",
    href: "#case-shaping",
    image: "/portfolio/shaping-success.svg",
  },
  {
    title: "TestMyAgent.pro",
    description:
      "An independently built platform for testing AI-agent prompts through scenarios, scorecards, risk checks, and readiness feedback.",
    status: "Independent product · Public",
    year: "2026",
    href: "https://testmyagent.pro",
    image: "/portfolio/testmyagent.png",
    external: true,
  },
  {
    title: "FounderOS",
    description:
      "A private command centre for operating a one-person company across tasks, communication, finances, relationships, and agents.",
    status: "Private product · Production service",
    year: "2026",
    href: "#case-products",
    image: "/portfolio/founderos.svg",
  },
  {
    title: "Network OS",
    description:
      "A relationship CRM with an authenticated API and local MCP bridge for authorised AI-agent access.",
    status: "Internal product · Relationship intelligence",
    year: "2026",
    href: "#case-products",
    image: "/portfolio/network-os.svg",
  },
  {
    title: "Vest Self",
    description:
      "A native mobile accountability MVP with adaptive planning, progress tracking, structured check-ins, and a protected AI boundary.",
    status: "Startup product · Co-builder",
    year: "2026",
    href: "#case-products",
    image: "/portfolio/vest-self.png",
  },
  {
    title: "Time Energy",
    description:
      "A five-reader platform with deterministic calculations, protected provider boundaries, validation gates, and HTTPS staging.",
    status: "Client platform · Verified staging",
    year: "2026",
    href: "#case-products",
    image: "/portfolio/time-energy.svg",
  },
];

export const caseStudies = [
  {
    id: "case-bdn",
    index: "01",
    eyebrow: "Barcelona Digital Nomads · Live community operations",
    title: "Moderation that acts fast without giving AI unchecked authority.",
    summary:
      "A 22-node WhatsApp moderation system combining deterministic invite-link rules, an approved-member whitelist, AI classification, automatic enforcement, incident logging, and team alerts.",
    contribution:
      "I designed and built the complete workflow across WAHA, n8n, OpenAI, Airtable, and email—then added session monitoring so the system cannot fail silently.",
    proof: [
      "Separates group messages from irrelevant WhatsApp events before classification.",
      "Deletes prohibited messages and removes offenders only after policy and whitelist checks.",
      "Records allowed, flagged, deleted, and removed-member outcomes for operators.",
    ],
    stack: ["n8n", "WAHA", "OpenAI", "Airtable", "Gmail"],
    image: "/portfolio/jonas-speaking.jpg",
  },
  {
    id: "case-bridge",
    index: "02",
    eyebrow: "Bridge 48 · Revenue operations",
    title:
      "One commercial system across CRM, conversations, booking, and payment.",
    summary:
      "Connected operations across HubSpot, SuperChat and WhatsApp, Stripe, SimplyBook, campaign enrolment, payment events, and project handoff.",
    contribution:
      "I built the orchestration, duplicate-safe updates, state checks, retry paths, failure alerts, and human-handoff rules that keep automated nurturing from overrunning a live conversation.",
    proof: [
      "Inbound replies pause automated nurturing so a person can take priority.",
      "Stripe events synchronise contacts, deals, and project stages.",
      "Critical updates are read back and checked instead of assuming success.",
    ],
    stack: ["n8n", "HubSpot", "SuperChat", "Stripe", "SimplyBook"],
    image: "/portfolio/bridge-48.jpg",
  },
  {
    id: "case-shaping",
    index: "03",
    eyebrow: "Shaping Success Stories · AI intake and custom CRM",
    title:
      "A conversation becomes structured candidate data and real operations.",
    summary:
      "A 43-node system that guides CV intake, retains conversational context, creates Supabase records, generates files, routes Outlook notifications, and supports controlled account lifecycle actions.",
    contribution:
      "I built the AI intake logic, memory, validation, routing code, CRM records, document-processing workflow, notifications, and client-facing structured responses.",
    proof: [
      "Separates new and returning users and retrieves existing records when appropriate.",
      "Turns unstructured answers into validated, structured CRM data.",
      "Routes files, records, and notifications through distinct operational outcomes.",
    ],
    stack: ["n8n", "OpenAI", "Supabase", "Outlook", "JavaScript"],
    image: "/portfolio/shaping-success.svg",
  },
] as const;

export const capabilities = [
  {
    title: "Customer conversations",
    text: "WhatsApp, Instagram, web chat, voice intake, qualification, booking, follow-up, and human handoff.",
  },
  {
    title: "Operational automation",
    text: "CRM state, lead routing, payments, calendars, forms, alerts, back-office synchronisation, and delivery handoff.",
  },
  {
    title: "Full-stack products",
    text: "Next.js, React, Expo, TypeScript APIs, structured data, authentication boundaries, testing, and deployment.",
  },
  {
    title: "AI system design",
    text: "Retrieval, tool use, structured output, validation, approval gates, cost-aware routing, monitoring, and escalation.",
  },
] as const;

export const processSteps = [
  "Map the real workflow and ownership.",
  "Choose deterministic, AI, and human boundaries.",
  "Build the connected operating system.",
  "Add retries, validation, audit trails, and alerts.",
  "Test real scenarios before calling it production-ready.",
  "Document the handoff so the system remains maintainable.",
] as const;

export type DraftTestimonial = {
  text: string;
  name: string;
  role: string;
  initials: string;
};

export const draftTestimonials: DraftTestimonial[] = [
  {
    text: "Jonas took a workflow spread across messages, spreadsheets, and manual checks and turned it into one system the team could actually operate.",
    name: "Draft client quote",
    role: "Replace with approved Bridge 48 testimonial",
    initials: "D1",
  },
  {
    text: "He did not stop at a convincing demo. He tested the failure paths, documented the handoff, and made the operational state visible.",
    name: "Draft delivery quote",
    role: "Replace with approved client testimonial",
    initials: "D2",
  },
  {
    text: "You saved me from hiring someone else. Now I can focus on delivering quality products to my clients.",
    name: "Approval required",
    role: "Candidate quote attributed to The Woofing Oven",
    initials: "AR",
  },
  {
    text: "The value was not another AI tool. It was connecting the customer conversation to the CRM, the next action, and the human team.",
    name: "Draft operator quote",
    role: "Replace before publication",
    initials: "D3",
  },
  {
    text: "Jonas understood both the business process and the implementation details, which meant fewer assumptions were lost between strategy and delivery.",
    name: "Draft founder quote",
    role: "Replace before publication",
    initials: "D4",
  },
  {
    text: "The system was built with clear boundaries: AI where context mattered, rules where consistency mattered, and people where judgment mattered.",
    name: "Draft technical quote",
    role: "Replace before publication",
    initials: "D5",
  },
];
