# Project Context

**Version:** 1.0.0

**Last updated:** 2026-09-05

**Status:** Active

**Owner:** Project owner

## Purpose

Maintain the durable background needed for a new contributor or Codex task to understand the project without relying on another chat's history.

## Project Summary

This project is a personal, Firefox-first browser extension for managing a large ChatGPT conversation history. V1 will retrieve and search the available history, support selection within ordinary and search-result views, perform safe bulk archive and delete operations, rename chats inline, export conversations and search matches, and back up or restore extension settings locally.

## Problem Statement

ChatGPT's standard interface is inefficient for selecting and managing many conversations. Older material is difficult to retrieve by message content or date, search results do not form a bulk-action workspace, destructive operations lack an efficient multi-select workflow, and individual or matched content is cumbersome to preserve outside ChatGPT.

Existing extensions demonstrate useful approaches but may introduce subscription costs, cloud dependencies, privacy concerns, excessive scope, unsupported browsers, or uncertain maintenance and licensing. This project favors a focused, private, maintainable implementation.

## Primary Goal

Deliver a reliable V1 workflow for finding, selecting, renaming, archiving, deleting, and exporting ChatGPT conversations while keeping extension-owned state local and making destructive scope and partial failures clear.

## Approved V1 Scope

### Included

- Complete-history retrieval with visible completeness status.
- Search by title and full message content, combined with date filtering.
- Individual, range, all-current-results, and clear-selection behavior.
- Multi-selection and bulk actions directly from search results.
- Bulk archive and strongly confirmed bulk delete.
- Inline chat rename.
- Markdown and JSON export for individual chats and selections.
- Export of matched search passages with source metadata.
- Local settings backup and restore.
- Progress and partial-failure reporting.

### Excluded or Deferred

- Notes, tags, highlights, labels, folders, and workspaces.
- Prompt tools, AI features, audio, and media galleries.
- PDF and DOCX export.
- Telemetry, analytics, billing, and external accounts.
- Cloud synchronization and other third-party services.
- Automatic destructive cleanup.
- Support for managing non-ChatGPT services.

Optional settings-only cloud synchronization may be considered in a future version, but it requires a separate privacy and architecture decision and is not approved V1 scope.

## Users and Roles

- **Project owner:** Defines product behavior and priorities, approves material scope and privacy decisions, and performs real-account acceptance testing.
- **Codex:** Researches, implements, documents, runs available automated checks, and provides concrete testing instructions.
- **Initial user:** The project owner. Commercial distribution and multi-user administration are not V1 goals.

## Constraints

- Firefox is the primary browser for V1.
- ChatGPT has no stable public API for personal conversation management; page structure and private endpoints may change.
- Extension-owned settings, normalized data, indexes, and temporary operation state remain local.
- No credentials or private conversation data belong in source control or test fixtures.
- Destructive operations require explicit scope, strong confirmation, and transparent final results.
- Competitor behavior may inform design, but source may be reused only when licensing is verified and compatible.

## Working Agreements

- `ProductRequirements.md` is the authority for committed V1 scope.
- `Roadmap.md` defines implementation order, not additional product scope.
- `PossibleFeatureInventory.md` is exploratory and creates no commitment.
- Fundamental scope, privacy, licensing, or destructive-operation decisions require project-owner approval.
- Work should be divided into small, testable milestones with reviewable commits.
- The private Git repository is the authoritative project record.

## Current Project State

- The project charter and documentation conventions are established.
- Competitor capabilities have been surveyed at a high level.
- The V1 feature set has been selected and recorded in product requirements.
- No extension implementation exists yet.
- The immediate next step is Milestone 0: choose and document the extension foundation, integration boundaries, local storage approach, and test strategy.

## Important References

- [`../ProjectCharter.md`](../ProjectCharter.md) — guiding purpose, principles, and governance.
- [`ProductRequirements.md`](ProductRequirements.md) — approved V1 scope and acceptance criteria.
- [`Roadmap.md`](Roadmap.md) — implementation milestones and dependencies.
- [`PossibleFeatureInventory.md`](PossibleFeatureInventory.md) — non-committal feature research inventory.
- [`ArchitectureDecisions.md`](ArchitectureDecisions.md) — technical decisions as they are made.
- [`TestingNotes.md`](TestingNotes.md) — test procedures and results.

## Open Questions

- What extension stack and build process offer the best balance of simplicity and maintainability?
- Which ChatGPT data-access paths are currently reliable enough for V1?
- How should conversations and search data be normalized and indexed locally?
- What selection semantics should apply when filters change?
- What synthetic fixtures and manual tests are required before destructive operations are enabled?

## Change Log

| Version | Date | Summary |
| --- | --- | --- |
| 1.0.0 | 2026-09-05 | Replaced the template with the approved V1 scope, constraints, working agreements, current state, and immediate next step. |
| 0.1.0 | 2026-09-05 | Created initial template. |
