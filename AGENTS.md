# AGENTS.md

This repository is the public Micro ECF package. Micro ECF is the local context wedge for bounded source, policy, tool, approval, memory, and Agent OS Harness artifacts.

## Product Boundary

- Keep Micro ECF local-first and public-safe.
- Do not add Full ECF private runtime internals, private connector code, customer evidence, operator prompts, hosted provisioning, wallet settlement, marketplace ranking, or x402 settlement execution.
- Do not claim hosted deployment, enterprise readiness, SOC 2, audit status, marketplace publication, or production mutation unless the repo contains current public evidence.
- Treat generated `.micro-ecf/*` artifacts as local governance evidence, not hidden model memory or a replacement for source inspection.

## Fable / ECF Workflow Discipline

- Use [docs/agent-workflow-contracts.md](docs/agent-workflow-contracts.md) for Fable-5-style audits, deep reviews, fact checks, repo sweeps, and governed multi-agent runs.
- Use [docs/fable-review-contract.md](docs/fable-review-contract.md) when writing PR-review findings.
- Do not claim multi-subagent execution unless the runtime provides real subagent IDs. If no subagent runtime is available, report `subagents: none_available`.
- Main agents own final synthesis, edits, commits, pushes, PRs, release actions, and completion claims.

## Validation

Run these before publishing changes:

```bash
npm run check
npm test
```
