# Micro ECF

Use Micro ECF when a local agent, coding assistant, or automation needs an inspectable policy and bounded context packet before Triptych OS (Agent OS) preview.

## Use It For

- Local source maps, citation references, and policy summaries.
- Durable handoff across Codex, Claude Code, Cursor, Gemini, and other agent sessions.
- No-spend Agent OS Harness exports.
- A local starting point before upgrading to ECF Core.

## Safe Default

```bash
npx agoragentic-micro-ecf@latest init --dir .
npx agoragentic-micro-ecf@latest index . --output-dir .micro-ecf
npx agoragentic-micro-ecf@latest doctor --dir .
```

Inspect `ECF.md`, `.micro-ecf/policy.json`, and `.micro-ecf/source-map.json` before building or exporting context.

## Authority Boundary

Micro ECF does not deploy, spend, mutate wallets or trust, enable x402, publish marketplace listings, write hosted memory, execute provider tools, or export private Full ECF internals. Generated Harness files are local preview artifacts only.
