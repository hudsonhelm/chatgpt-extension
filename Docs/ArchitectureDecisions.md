# Architecture Decisions

**Version:** 1.0.0
**Last updated:** 2026-09-05  
**Status:** Active
**Owner:** Project owner

## Purpose

Preserve important technical decisions and their reasoning so future work does not depend on chat history or repeat settled investigations.

## How to Use This Record

Create one decision entry for each choice that materially affects implementation, maintenance, privacy, compatibility, or testing. Do not rewrite accepted historical decisions; mark them superseded and link to the replacing decision.

## Decision Index

| ID | Title | Status | Date | Supersedes |
| --- | --- | --- | --- | --- |
| ADR-001 | Firefox-first Manifest V3 with dependency-free JavaScript | Accepted | 2026-09-05 | None |
| ADR-002 | Replaceable, capability-gated ChatGPT adapters | Accepted | 2026-09-05 | None |
| ADR-003 | Tiered local persistence | Accepted | 2026-09-05 | None |
| ADR-004 | Pure-core tests with synthetic fixtures | Accepted | 2026-09-05 | None |
| ADR-005 | Privacy-safe diagnostics by construction | Accepted | 2026-09-05 | None |

## Decisions

### ADR-001: Firefox-first Manifest V3 with dependency-free JavaScript

**Status:** Accepted
**Date:** 2026-09-05
**Decision owners:** Project owner and Codex
**Supersedes:** None

#### Context

Milestone 0 needs a loadable Firefox extension, maintainable integration boundaries, and a reasonable Chromium path. A framework and bundler would add supply-chain and build complexity before V1 interaction patterns are proven.

#### Options Considered

1. **Plain JavaScript WebExtension** — Small load surface, no build required, easy temporary loading; requires disciplined module boundaries and hand-authored UI.
2. **TypeScript plus bundler** — Stronger static checks and broad library access; adds toolchain ownership and generated artifacts.
3. **UI framework** — Convenient component model; premature for the small Milestone 0 surface.

#### Decision

Use Manifest V3 and browser-native JavaScript modules with no runtime dependencies. A classic content bootstrap dynamically imports the module composition root. Firefox is primary; APIs are accessed through `browser ?? chrome` when practical.

#### Reasoning

This is the smallest inspectable foundation that can be loaded directly from the repository. Manifest V3 preserves the current cross-browser direction, while the Firefox-specific ID, Firefox 140 minimum, and explicit `data_collection_permissions: none` declaration make temporary and future packaged validation explicit.

#### Consequences

**Positive:** direct temporary loading, small attack surface, no remote code, deterministic tests.

**Negative or limiting:** fewer compile-time guarantees; a build step may be justified if later UI or indexing complexity grows.

#### Validation and Follow-Up

Validate manifest references automatically and load temporarily in current Firefox. Revisit before adding a UI framework, complex worker build, or distribution pipeline.

#### References

- [`../manifest.json`](../manifest.json)
- [Mozilla: Anatomy of an extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Mozilla: Manifest V3 migration guide](https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/)
- [Mozilla: Firefox built-in consent for data collection](https://extensionworkshop.com/documentation/develop/firefox-builtin-data-consent/)

### ADR-002: Replaceable, capability-gated ChatGPT adapters

**Status:** Accepted
**Date:** 2026-09-05
**Decision owners:** Project owner and Codex
**Supersedes:** None

#### Context

OpenAI does not document a supported API for managing the user's ChatGPT web conversation history. The public API `Conversation` resource belongs to API-created response state and must not be assumed to represent chats in the ChatGPT product. The web DOM and any authenticated private endpoints can change without notice.

#### Decision

All ChatGPT-specific observations and future requests live behind adapters. The first adapter observes only coarse DOM evidence. Capability assessment is separate pure logic, and every archive/delete/rename capability is hard-coded false in Milestone 0. Future private-request adapters require captured request-shape research, failure handling, and synthetic contract tests before being connected to UI actions.

#### Consequences

Selectors and request shapes can be replaced without changing selection, operation, persistence, or UI state. A changed page fails visibly and closed. DOM-only visible history cannot establish full-history completeness.

#### Validation and Follow-Up

Test signed-in, signed-out, and unsupported evidence. Revalidate the live surface at each milestone and before any destructive feature is enabled.

#### References

- [`ChatGPTIntegrationResearch.md`](ChatGPTIntegrationResearch.md)
- [`../src/adapters/chatgpt-dom.js`](../src/adapters/chatgpt-dom.js)
- [OpenAI API: Create a conversation](https://developers.openai.com/api/reference/python/resources/conversations/methods/create)

### ADR-003: Tiered local persistence

**Status:** Accepted
**Date:** 2026-09-05
**Decision owners:** Project owner and Codex
**Supersedes:** None

#### Context

Settings are small JSON values. Normalized conversations and a full-text index may become much larger and need indexed, transactional access. Active selections and operation snapshots must never silently turn into dynamic queries.

#### Decision

Use `storage.local` for versioned extension settings. Reserve IndexedDB for normalized conversation records, retrieval metadata, and search indexes in Milestone 2. Keep active selection and in-flight operation state in memory initially, always snapshotting explicit conversation IDs when an operation begins. Do not use cloud sync in V1.

#### Consequences

Data remains local and storage responsibilities stay clear. IndexedDB schema and migration details remain a Milestone 2 decision. Browser profile removal can still remove local data, so V1 settings backup remains necessary.

#### References

- [`../src/persistence/local-settings-store.js`](../src/persistence/local-settings-store.js)
- [Mozilla: WebExtension storage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage)

### ADR-004: Pure-core tests with synthetic fixtures

**Status:** Accepted
**Date:** 2026-09-05
**Decision owners:** Project owner and Codex
**Supersedes:** None

#### Decision

Use Node's built-in test runner for pure capability, state, diagnostics, and manifest checks. Store only invented identifiers, titles, dates, and message content. Add browser-level tests later for adapter composition; keep live-account destructive acceptance manual and disabled until its milestone.

#### Consequences

The initial suite installs nothing and cannot leak account data. It does not prove Firefox rendering or live ChatGPT compatibility, so temporary-load testing remains an exit criterion.

### ADR-005: Privacy-safe diagnostics by construction

**Status:** Accepted
**Date:** 2026-09-05
**Decision owners:** Project owner and Codex
**Supersedes:** None

#### Decision

Diagnostic reports use an allowlist: extension version, timestamp, coarse path kind, capability state, boolean surface signals, and aggregate link counts. They exclude URLs, query strings, conversation IDs, titles, message text, cookies, headers, tokens, and raw DOM.

#### Consequences

Reports are useful for detecting selector breakage without becoming conversation-data exports. Additional fields require an explicit privacy review.

## Change Log

| Version | Date | Summary |
| --- | --- | --- |
| 1.0.0 | 2026-09-05 | Recorded the Milestone 0 stack, adapter, persistence, test, and diagnostic decisions. |
| 0.1.0 | 2026-09-05 | Created initial template. |
