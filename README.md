# ApexFlow

An agent-native backend engineering lab for stateless handoffs, enforceable repository policy, and a small Express/Supabase service core.

ApexFlow explores what changes when a repository—not a chat transcript—becomes the durable operating context for AI-assisted development. The codebase pairs a deliberately compact Node.js backend with a versioned `.context` control plane covering architecture, mission queues, repair history, agent identity, session logs, and non-negotiable engineering rules.

## What makes it interesting

- **Repository-native agent memory:** missions, decisions, system persona, repair notes, and handoffs are committed as inspectable artifacts.
- **Enforceable modularity:** source files carry semantic `@Meta` contracts and stay intentionally small and single-purpose.
- **Stateless service boundary:** an Express entry point exposes health and example API routes; Supabase authentication is isolated behind a dedicated adapter.
- **Defensive middleware:** Helmet, CORS, environment-driven configuration, and structured logging establish a practical backend baseline.
- **Automated guardrails:** Jest coverage, ESLint, Prettier, circular-dependency checks, dependency visualization, conventional commits, and secret scanning run through the Gatekeeper workflow.
- **Ripple visibility:** Dependency Cruiser and Madge make architectural coupling and cycles visible before changes are merged.

## Current architecture

```text
.context/                durable agent control plane
    |
    v
src/backend/server.js    Express composition root
    |-- health + example route
    |-- Helmet / CORS / logging
    +-- Supabase client + auth service (isolated adapter)
```

| Area | Responsibility |
| --- | --- |
| `.context` | Constitution, architecture, mission queue, persona, repair log, and handoff records |
| `src/backend/server.js` | HTTP composition root and middleware |
| `src/backend/auth_service.js` | Supabase sign-up/sign-in boundary |
| `src/backend/supabaseClient.js` | Environment-driven Supabase client construction |
| `src/backend/utils` | Structured logging utility |
| `.github/workflows/gatekeeper.yml` | CI quality and security gates |

## Run locally

```bash
npm ci
copy .env.example .env
npm run dev
```

Supply development Supabase values in `.env`; never commit provider credentials.

## Verification

```bash
npm run scan:quality
npm run prettier:check
npm test
npm run scan:circular
```

The employer-release baseline passes ESLint, Prettier, and the current Jest suite at 100% coverage for the implemented example route. The production dependency audit is clean after refreshing affected transitive packages.

## Scope

ApexFlow is an engineering and governance prototype, not a finished SaaS backend. The current runtime surface is intentionally small: the auth adapter exists, while profile APIs, request validation, centralized error handling, and the frontend remain visible items in [`.context/mission_queue.md`](.context/mission_queue.md). Its portfolio value is the combination of working code, explicit boundaries, and auditable agent-development discipline—not an inflated feature count.

Agents should read [`.context/rules.md`](.context/rules.md), [`.context/system_persona.md`](.context/system_persona.md), [`.context/architecture.md`](.context/architecture.md), and [`.context/mission_queue.md`](.context/mission_queue.md) before making changes.
