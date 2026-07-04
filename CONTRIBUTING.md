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

Before opening a pull request, run:

```bash
npm test
npm run check
```

By contributing, you agree that public Micro ECF stays bounded to open local-first context governance.
