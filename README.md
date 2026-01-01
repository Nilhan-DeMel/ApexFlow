# ApexFlow

> **Agent-Native Backend System** | Stateless Architecture | Supabase-Powered

---

<!-- SYSTEM INSTRUCTIONS FOR AI AGENTS -->
<!--
You are entering the ApexFlow repository.
Before making ANY changes, you MUST read:
1. /.context/rules.md (The Constitution)
2. /.context/system_persona.md (Your Identity)
3. /.context/architecture.md (The Map)
4. /.context/mission_queue.md (Your Next Task)

RULES:
- All code files MUST have @Meta blocks
- Files MUST be <100 lines
- Commits follow conventional format: feat|fix|chore|docs: message
- Check /.context/repair_log.md before fixing bugs
- Log your session in /.context/session_logs/ before exiting
-->

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
/src/backend/         # Stateless Node.js services
/.context/            # Agent Brain (rules, logs, queue)
/.github/workflows/   # CI/CD Gatekeepers
```

## Scripts

| Command                | Purpose                    |
| ---------------------- | -------------------------- |
| `npm run dev`          | Start dev server (nodemon) |
| `npm test`             | Run Jest tests             |
| `npm run scan:quality` | ESLint check               |
| `npm run scan:ripples` | Dependency graph           |

## Stack

- **Runtime:** Node.js + Express
- **Database:** Supabase
- **Validation:** Zod
- **Testing:** Jest
- **Linting:** ESLint + Prettier

## For Agents

Read `/.context/system_persona.md` to understand your role.
