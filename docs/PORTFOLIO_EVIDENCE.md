# Portfolio evidence register

Last reviewed: 2026-08-15

This file records the evidence behind the public portfolio copy. It is intentionally sanitized: no credentials, private customer data, raw workflow payloads, or commercially sensitive configuration belong here.

## Claim standard

- **Verified**: supported by source code, an operational handoff/closeout, a public source, or a fresh test/build.
- **Qualified**: true within a stated boundary, such as staging, prototype, internal product, or work in progress.
- **Excluded**: not public because the evidence is too weak, the result is confidential, or the wording would overstate the work.

## Published claims

| Portfolio claim | Status | Evidence | Public wording boundary |
|---|---|---|---|
| Bridge 48 uses connected n8n workflows across HubSpot, SuperChat, Stripe, and SimplyBook | Verified client delivery | `My Brain/02 Clients/Bridge 48/Systems and Automations.md`; `My Brain/02 Clients/Bridge 48/2026-08-07 DJ Nurturing Automation Handoff.md`; inspected n8n workflow implementations | Describe the architecture and reliability controls, not private volumes, conversion rates, IDs, or credentials. |
| The Bridge 48 automation has retries, dry-run paths, state checks, human-conversation pause logic, and read-back verification | Verified client delivery | Bridge 48 handoff note and inspected workflow definitions | Do not call the entire client organization fully automated. |
| Time Energy is a five-reader responsive platform with deterministic calculation logic and a protected provider boundary | Verified staging build | `My Brain/02 Clients/Time Energy/2026-08-07 Phase 1 Closeout.md`; project source reviewed during audit | Explicitly label it as a staging build, not a finished production launch. |
| Time Energy's latest recorded gate had 31/31 backend tests and two successful production builds | Verified historical test gate | 2026-08-07 Phase 1 closeout | Say "at the latest verification gate" so the result is not represented as a live, permanent status. |
| Vest Self is a native Expo/React Native MVP with a TypeScript API, validation, event logging, and SQLite persistence | Qualified startup product | `/home/errr/Documents/Projects/Vest Self/mvp`; repository documentation; current typechecks passed for root and mobile packages | Label Jonas as co-builder and the product as an MVP. Do not imply public launch, adoption, or outcomes. |
| AI credentials in Vest Self stay server-side | Verified architecture | Vest Self API and mobile source inspection | Architectural claim only; not a general security certification. |
| FounderOS is a working private operator system | Verified private production system | `/home/errr/Projects/founder-os-jonas`; live system setup; fresh `npm test`, `npm run typecheck`, and `npm run build` | Keep it framed as Jonas's private internal product. Do not expose screens or data without a separate privacy review. |
| FounderOS has tested Next.js and SQLite architecture | Verified | Fresh run on 2026-08-15: 113 test files and 980 tests passed; typecheck and production build passed | May be stated only as the latest verification result, not as customer adoption or a permanent quality guarantee. |
| Network OS is a relationship CRM with an authenticated REST API and local MCP bridge | Verified product implementation | GitHub repository `themosthappypiano/Networking-app`; source and README; fresh MCP test/build | Describe capability, not user adoption. |
| Network OS fails honestly when connectors are unavailable | Verified implementation principle | Network OS connector handling and current source review | Avoid claiming universal reliability. |
| Jonas provides AI services to Barcelona Digital Nomads and built its WhatsApp moderation system | Verified client implementation | Inspected 22-node n8n implementation; `My Brain/04 Projects/Barcelona Digital Nomads/Overview.md`; user-confirmed client relationship | Describe the moderation policy, routing, logs, alerts, and session monitoring without exposing workflow IDs, credentials, private messages, or bypass details. |
| Jonas has worked with Barcelona Digital Nomads on AI Circle talks and in-person community activity | Verified community work | `My Brain/04 Projects/Barcelona Digital Nomads/Overview.md`; public BDN calendar; BDN LinkedIn speaker post; AI Circle public page | Present community leadership separately from the AI-services implementation. |
| Shaping Success Stories uses a 43-node conversational CV intake and custom Supabase-backed CRM | Verified client implementation | Inspected workflow structure and local project records | Describe architecture and operational outcomes, not applicant records, workflow IDs, credentials, or private documents. |
| TestMyAgent.pro is Jonas's independently built AI-agent prompt-testing platform | Verified public product | https://testmyagent.pro; `My Brain/04 Projects/TestMyAgent/Overview.md` | Describe product capabilities, not adoption or outcome metrics. |
| Barcelona Digital Nomads is Barcelona's biggest digital nomad community and lists 7,100+ members | Verified public self-description | https://www.barcelonadigitalnomads.com/ and https://luma.com/barcelonadigitalnomads | Attribute the statement to BDN and its public calendar rather than presenting it as an independently audited market statistic. |
| BDN publicly featured Jonas as founder of Oleo and as a speaker on making money with AI | Verified public feature | https://www.linkedin.com/posts/barcelona-digital-nomads_activity-7469337635438694400-xSN3 | Use the direct public feature link. |
| Jonas works across customer conversations, operational automation, full-stack products, and AI system design | Verified capability summary | Client handoffs, n8n workflows, inspected repositories, FounderOS, Network OS, Vest Self, and Time Energy | Capability summary, not a claim that every individual engagement used every capability. |

## Public proof links used on the page

- Barcelona Digital Nomads: https://www.barcelonadigitalnomads.com/
- Barcelona Digital Nomads calendar: https://luma.com/barcelonadigitalnomads
- BDN speaker feature: https://www.linkedin.com/posts/barcelona-digital-nomads_activity-7469337635438694400-xSN3
- AI Circle: https://www.skool.com/ai-circle/about
- GitHub: https://github.com/themosthappypiano
- LinkedIn: https://www.linkedin.com/in/jonas-alfonso/

## Claims intentionally excluded

- Unsupported revenue generated, conversion uplift, hours saved, lead volume, or ROI figures.
- "Enterprise-grade," "fully autonomous," "industry-leading," or similar broad superiority claims.
- Production status for Time Energy or Vest Self.
- Client names or implementations that lack a clear public/disclosure boundary.
- Raw n8n workflow exports, IDs, credentials, webhook URLs, database IDs, personal contact data, or customer records.
- Any claim about the commercial terms of the Barcelona Digital Nomads AI-services relationship.
- Old portfolio copy that presented service promises as if they were completed case-study outcomes.

## Temporary testimonial safeguard

The local redesign currently contains visibly marked draft testimonial cards solely to validate the selected 21st.dev marquee layout. They are not approved client quotations and must be replaced or removed before deployment. The candidate The Woofing Oven wording also remains approval-required.

## Verification run for this portfolio branch

Working branch: `portfolio-validated`

- `npm audit`: 0 vulnerabilities after upgrading to Next.js 16.3.1 and React 19.2.4.
- `npm run lint`: completed with no errors; seven pre-existing hook-dependency warnings remain in `components/ui/terminal.tsx`.
- `npm run build`: passed under Next.js 16.3.1.
- `git diff --check`: passed.
- Local HTTP smoke check: returned 200.
- Browser review: work cards, remaining cards after scroll, community proof block, capability cards, navigation anchors, and availability strip rendered without clipping or overlap on desktop.

## Before publishing

1. Jonas reviews client-name disclosure and wording.
2. Confirm the calendar/LinkedIn/Skool links still resolve.
3. Deploy only after explicit approval.
4. Re-run audit, lint, and build from a clean checkout.
