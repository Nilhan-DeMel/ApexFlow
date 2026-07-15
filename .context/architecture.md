# ApexFlow architecture map

## Implemented runtime

- **Composition root:** `src/backend/server.js`
- **HTTP layer:** Express with Helmet, CORS, JSON health response, and an example route
- **Authentication adapter:** `src/backend/auth_service.js`
- **Provider client:** `src/backend/supabaseClient.js`
- **Operational utility:** `src/backend/utils/logger.js`
- **Test surface:** `src/backend/hello.test.js`

## Agent control plane

The `.context` directory is the durable handoff layer for repository rules, architecture, missions, agent identity, repair history, and session evidence. Workers read these files before changing runtime code; architectural changes update them in the same branch.

## Planned boundaries

The frontend, user-profile API, validation layer, and centralized error middleware are roadmap items rather than implemented modules. Their priority and dependencies live in `mission_queue.md`.
