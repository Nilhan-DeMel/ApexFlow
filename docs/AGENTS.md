# ApexFlow Agent Manual

> **For AI Consumption Only.** This document governs autonomous agent behavior.

---

## 🎯 The Prime Directive

**"Statelessness is key. Leave no trace but the code."**

- Context lives in `/.context/`, not in memory.
- Git is the single source of truth.
- Every session must end with a clean handoff.

---

## ⚡ Essential Commands

| Command | Purpose |
|---------|---------|
| `npm test` | Run tests with coverage |
| `npm run scan:circular` | Detect circular dependencies |
| `npm run scan:quality` | Run ESLint |
| `npm run prettier:check` | Verify formatting |
| `npm run scan:ripples` | Generate dependency graph |

---

## 🐙 Git Rules (Non-Negotiable)

1. **No Direct Pushes to Main:** All features go through branches (`feat/`, `fix/`).
2. **Squash Merges Only:** Keep history clean and atomic.
3. **Conventional Commits:** `type(scope): subject` format enforced by Commitlint.
4. **Safe Sync:** Always `git pull --rebase origin main` before pushing.

---

## 📋 Handoff Protocol

1. Push branch to remote.
2. Update `/.context/mission_queue.md` with "Ready for Merge: [Branch Name]".
3. Log session in `/.context/session_logs/`.

---

**Managed by Antigravity** | 2026-01-01T21:45:52+05:30
