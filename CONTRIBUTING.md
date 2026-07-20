# Contributing

Micro ECF contributions should improve local-first context governance without pulling private platform internals into the public repo.

Good contributions:

- schema improvements
- local examples
- deterministic tests
- provider-wrapping contracts
- documentation clarity
- policy and provenance modeling

Do not contribute:

- customer data
- secrets
- private connector code
- hosted Agent OS internals
- Full ECF enterprise runtime internals
- settlement, trust-ranking, or fraud-scoring logic
- SOC 2 or audit claims

## Contribution Workflow

1. Use Node.js 18 or later and choose one bounded change: schema, local example, provider contract, deterministic behavior, or documentation.
2. Read the relevant source, schema, tests, and public boundary docs before editing.
3. Use local fixtures and temporary directories. Never add real secrets, customer material, wallet data, or hosted credentials.
4. Add or update a deterministic test for behavior changes. A test must run without network access or paid services.
5. Update the README, [CLI reference](./docs/CLI_REFERENCE.md), [glossary](./docs/GLOSSARY.md), or [troubleshooting guide](./docs/TROUBLESHOOTING.md) when a public contract changes.
6. For provider work, follow [Provider Wrapping](./PROVIDER_WRAPPING.md) and keep retrieval owned by the provider while Micro ECF owns the local policy envelope.

CLI changes must update `--help`, the [CLI reference](./docs/CLI_REFERENCE.md), relevant workflow docs, and tests. Schema changes must update the schema, fixtures, examples, and validation tests that consume the changed contract.

Before opening a pull request, run:

```bash
npm run docs:check
npm test
npm run check
npm pack --dry-run
```

Include the exact commands and results in the pull request. Explain new files, changed schemas or CLI output, local-only assumptions, and any intentionally unsupported behavior. A contribution is ready when the focused tests pass, the full checks pass, the package contains the intended public files, and the docs make no hosted-runtime, wallet, settlement, marketplace, or private Full ECF claim.

By contributing, you agree that public Micro ECF stays bounded to open local-first context governance.
