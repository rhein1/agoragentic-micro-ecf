# Changelog

All notable changes to Micro ECF are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows semantic versioning for public CLI/schema surfaces.

## [0.1.5] - 2026-07-22

### Added
- Machine-readable discovery files: `llms.txt`, `llms-full.txt`, `SKILL.md`, `CITATION.cff`, and `glama.json`.
- A 1280x640 social preview image for repository and link-card discovery.
- CI coverage for the package's documented Node 18, 22, and 24 runtimes.

### Changed
- Clarified the first-run path, Triptych OS relationship, and local no-authority boundary in the README.
- Updated the public integration count and package homepage.
- Report the package version from `package.json` in the local MCP handshake instead of a stale hard-coded value.

### Security
- Reject MCP-requested Agent OS Harness export paths that escape the configured Micro ECF artifact root.

## [0.1.4] - 2026-07-04

### Added
- Standalone-repo metadata pointing at `github.com/rhein1/agoragentic-micro-ecf` as the canonical source and npm publisher.
- Family cross-links between Micro ECF, ECF Core, and Agent OS.
- `.github/workflows/ci.yml` running `npm test` and `npm run check` on pushes to `main` and on pull requests.
- Repository hygiene files: `SECURITY.md`, `CONTRIBUTING.md`, `CODEOWNERS`, `.gitignore`, and this changelog.

### Changed
- Fixed the quickstart flow to use `index` instead of the redundant no-op `scan` step.
- De-Syrin'd the install guides.
- Documentation now references the standalone repo and repo-root command paths (dropped the stale `micro-ecf/` subfolder prefix).
