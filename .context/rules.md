# ApexFlow Constitution & Technical Objectives

1. **Atomic Modularity:** Files must be <100 lines and follow Single Responsibility Principle.
2. **Semantic Metadata:** Every file must start with a @Meta block (@Intent, @Inputs, @Outputs, @Dependencies).
3. **State Persistence:** Context lives in /.context/ (e.g., active_mission.md), not chat history.
4. **Stateless Handover:** Git is the source of truth. Handovers happen via commits.
5. **Regression Prevention:** Check /.context/repair_log.md before fixing bugs.
6. **Isolation:** Secrets go in .env (git-ignored); templates in .env.example.
