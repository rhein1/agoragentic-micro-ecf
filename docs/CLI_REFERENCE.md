# Micro ECF CLI Reference

The `micro-ecf` CLI reads and writes local project artifacts. It does not deploy, publish, provision, spend, access wallets, settle x402, rank marketplace providers, or expose private Full ECF internals.

```bash
micro-ecf --help
```

Commands print JSON unless the reference below says otherwise. Relative paths are resolved from the current working directory.

## Setup And Inspection

| Command | Purpose | Main options |
|---|---|---|
| `micro-ecf explain` | Print the local-only product and authority boundary. | None |
| `micro-ecf plan` | Preview files and actions for an install without writing them. | `--dir`, `--output-dir`, `--force` |
| `micro-ecf install` | Initialize and build the local artifact set after explicit approval. | `--dir`, `--output-dir`, `--yes`, `--force`, `--max-files`, `--max-file-bytes`, `--base-url` |
| `micro-ecf init` | Write starter project files. Existing files are preserved unless forced. | `--dir`, `--force` |
| `micro-ecf scan` | Preview included and blocked local sources plus their counts without writing the artifact set. Generated artifacts are excluded internally but are not returned in the scan preview. | `--dir` or a positional path, `--policy`, `--max-files`, `--max-file-bytes` |
| `micro-ecf doctor` | Check required project and `.micro-ecf` artifacts, policy validity, and `ECF.md` lint results. | `--dir`, `--output-dir` |
| `micro-ecf lint [ECF.md]` | Validate required front matter and report recommended-section warnings. | Optional positional path |
| `micro-ecf diff <before> <after>` | Compare parsed `ECF.md` policy tokens. | Two required positional paths |
| `micro-ecf spec [--json]` | Print the ECF specification as Markdown or JSON. | `--json` |

`install` is intentionally approval-gated. Without `--yes`, it returns `ok: false`, `requires_approval: true`, and the proposed plan without writing the installation.

## Build, Export, And Search

| Command | Purpose | Main options |
|---|---|---|
| `micro-ecf index <path>` | Write `.micro-ecf/source-map.json` from allowed local sources. | `--policy`, `--output-dir`, `--max-files`, `--max-file-bytes` |
| `micro-ecf build-packet` | Build the context packet, policy summary, and deployment-preview artifacts from a policy and source map. | `--policy`, `--source-map`, `--output-dir` |
| `micro-ecf export --agent-os` | Write a Harness export for a later Agent OS preview. This is not deployment. | `--policy`, `--output`, `--output-dir`, `--base-url`, `--context-packet`, `--policy-summary`, `--source-map`, `--deployment-preview` |
| `micro-ecf search --query "..."` | Search the local source map and return bounded matches. | `--root`, `--query`, `--limit` |
| `micro-ecf validate-policy` | Parse and validate a local policy file. | `--policy` or a positional policy path |

The default indexing limits are 500 included files and 200,000 bytes per non-SQLite file. Files beyond those limits remain represented in `blocked` evidence with `max_files_limit_reached` or `max_file_bytes_exceeded` rather than being silently served.

## Resident Context And Work Memory

| Command | Purpose | Main options |
|---|---|---|
| `micro-ecf status` | Print resident local-artifact status; add `--write` to persist it. | `--dir`, `--output-dir`, `--write` |
| `micro-ecf context-pack [task]` | Build an IDE/session context-pack summary; add `--write` to persist it. | positional task or `--task`, `--dir`, `--output-dir`, `--write` |
| `micro-ecf resident status` | Alias for resident status. | `--dir`, `--output-dir`, `--write` |
| `micro-ecf resident refresh` | Write resident status, context pack, docs-sync plan, and handoff artifacts locally. | `--dir`, `--output-dir`, `--task` |
| `micro-ecf worklog begin` | Start local work memory. | `--goal`, `--dir`, `--output-dir` |
| `micro-ecf worklog checkpoint` | Record a local progress checkpoint. | `--summary` and optional work-memory fields |
| `micro-ecf worklog finish` | Close the local worklog with validation and handoff evidence. | `--summary`, `--commit`, `--tests`, and optional work-memory fields |
| `micro-ecf worklog status` | Print local worklog status. | `--dir`, `--output-dir` |
| `micro-ecf docs-sync plan` | Write `.micro-ecf/docs-sync-plan.json` without auto-editing documentation. | `--dir`, `--output-dir` |
| `micro-ecf handoff` | Build a next-session handoff; add `--write` to persist it. | `--dir`, `--output-dir`, `--write`, work-memory fields |

Work-memory fields accepted where relevant include `--id`/`--work-id`, `--decisions`, `--files`, `--validation`, `--tests`, `--unfinished`, `--next-prompt`, and `--commit`.

## Local MCP Configuration

| Command | Purpose | Main options |
|---|---|---|
| `micro-ecf mcp-config --target codex` | Preview a workspace-specific Codex MCP entry. `--write` writes local snippet/install artifacts; only `--install-codex` updates the requested Codex configuration. | `--dir`, `--output-dir`, `--target`, `--codex-home`, `--server-name`, `--write`, `--install-codex` |
| `micro-ecf serve-mcp` | Serve local artifacts over stdio. Its packet-build and Harness-export tools can write inside the configured artifact root. | `--root` |

The stdio server reserves stdout for protocol messages. Send logs to stderr, review every requested build/export output path, and restart the MCP client after changing an installed configuration. Harness export rejects paths that escape the configured artifact root.

## Side Effects At A Glance

- Read-only unless a write flag is supplied: `plan`, `scan`, `doctor`, `lint`, `diff`, `spec`, `search`, `validate-policy`, `status`, `context-pack`, `resident status`, MCP-config preview, worklog status, and handoff preview.
- Local writes: `init`, approved `install`, `index`, `build-packet`, `export`, explicit `--write` modes, worklog begin/checkpoint/finish, `resident refresh`, `docs-sync plan`, and handoff write.
- `mcp-config --write` writes local support artifacts; `--install-codex` is the mode that changes Codex configuration.
- `serve-mcp` is not wholly read-only: exposed packet-build and Harness-export tools can write within the configured artifact root.

## Exit Behavior

- Help and successfully completed commands exit `0`.
- A thrown error, unknown command, missing required `diff` path, invalid policy, or unsupported export mode prints an error object to stderr and exits `1`.
- `install` without `--yes` is a structured refusal, not a process error: it currently exits `0` with `ok: false` and `requires_approval: true`.
- `doctor`, `lint`, `status`/`resident status`, `context-pack`, and `resident refresh` can return `ok: false` while the process exits `0`. Automation must inspect the JSON `ok` field as well as the process exit code.

See [Troubleshooting](./TROUBLESHOOTING.md) for common failure states and [Post-install Verification](../POST_INSTALL.md) for the normal validation sequence.
