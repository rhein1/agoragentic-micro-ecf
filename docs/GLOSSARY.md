# Micro ECF Glossary

## Micro ECF

The open local-first context and policy layer in this repository. It creates reviewable project artifacts and optional local MCP/work-memory surfaces without providing hosted deployment or payment execution.

## ECF Core

The separate open-source self-hosted context-governance runtime for builders who outgrow Micro ECF's static local artifacts but do not need Agoragentic-hosted deployment.

## Triptych OS (Agent OS)

Agoragentic's hosted runtime/control-plane product. Micro ECF can prepare a Harness export for its readiness/preview flow, but does not provide its runtime, wallets, marketplace, receipts, or settlement.

## Full ECF

Private Agent OS Enterprise runtime infrastructure. It is not included in Micro ECF or ECF Core and must not be inferred from public artifacts.

## Agent OS Harness export

A local JSON handoff that references Micro ECF policy and context artifacts for a later Triptych OS (Agent OS) readiness or preview check. Creating it is not deployment, funding, public exposure, or settlement.

## Allowed source

A local file whose path and type pass the active policy and indexing limits. Micro ECF records a summary, hash, citation ID, and provenance; the source map declares that raw content is not exported.

## Approval gate

An explicit human authorization required before a write or higher-impact action. The CLI demonstrates this with `micro-ecf install --yes`: planning is allowed first, but installation is refused until approval is represented by `--yes`.

## Blocked source

A file encountered during traversal but excluded by policy or safety rules, including secret-like, unsupported, oversized, and excess-file cases. The source map records the path and reason without making the content available. Default-skipped directories such as `.git`, `node_modules`, and `.micro-ecf` may never be traversed and therefore may not appear in `blocked`.

## Generated/excluded artifact

A Micro ECF root or output artifact excluded from self-indexing and recorded separately in the source map's `generated` array. Generated/excluded is not the same classification as blocked.

## Context packet

A bounded, citation-aware local artifact derived from allowed source summaries and policy. It is reviewable input for an agent, not a hidden memory store or a hosted retrieval service.

## Context provider

An optional external local retrieval, graph, or database engine that supplies cited evidence under a declared contract. The provider owns retrieval; Micro ECF owns the policy envelope, required action classes, and unavailable-provider behavior. See [Provider Wrapping](../PROVIDER_WRAPPING.md).

## Deployment preview

A local description of whether artifacts appear ready for a later owner-reviewed Agent OS preview. It does not provision runtime, create wallets, publish listings, or authorize spend.

## `ECF.md`

The durable, human-readable project context and policy boundary. Its required front-matter tokens are `version`, `project`, `scope`, `allowed_sources`, and `blocked_sources`; `agent_os` is recommended and reported as a warning when absent.

## Local-first

Micro ECF operates on files in the chosen project and `.micro-ecf` directory. Its core commands do not call hosted providers, deploy agents, perform marketplace routing, or settle payments.

## Policy summary

A compact artifact derived from the local policy so an agent or reviewer can inspect allowed sources, blocked sources, limits, and action gates without reinterpreting the whole configuration.

## Provenance

Evidence describing where a context claim came from, including path, content hash, citation ID, and local indexing state. Provenance supports review; it does not prove that a hosted service used the source.

## Resident context

Optional local status, context-pack, worklog, docs-sync, and handoff artifacts used to continue IDE work across sessions. They do not auto-edit docs or grant deployment, payment, wallet, publication, or hosted-runtime authority.

## Source map

`.micro-ecf/source-map.json`, the inventory of included, blocked, and generated-excluded local sources plus indexing limits and provenance.

## Structured refusal

A successful CLI exchange whose JSON says an action was not performed, such as `install` returning `ok: false` and `requires_approval: true`. Consumers must inspect the returned contract rather than treating exit code `0` as proof that work occurred.

## Worklog

Local session-continuity records under `.micro-ecf/worklog/`. A worklog captures goals, checkpoints, validation, unfinished work, and handoff details; it is not a Git commit or remote status record.
