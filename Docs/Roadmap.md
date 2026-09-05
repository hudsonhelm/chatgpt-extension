# V1 Roadmap

**Version:** 1.0.0

**Last updated:** 2026-09-05

**Status:** Active; implementation not started

**Owner:** Project owner

## Purpose

Sequence the approved V1 requirements into small, testable milestones. This roadmap controls implementation order; it does not add features beyond `ProductRequirements.md`.

## V1 Outcome

The user can reliably find conversations, select an explicit working set—including from search results—rename, archive, delete, or export that set, and locally back up or restore extension settings.

## Milestone Summary

| Milestone | Outcome | Status |
| --- | --- | --- |
| 0 — Foundation | Loadable Firefox extension with isolated adapters, local storage, diagnostics, and test scaffolding | Planned |
| 1 — Safe visible-history management | Selection plus bulk archive and delete for loaded sidebar conversations | Planned |
| 2 — Complete history and search | Complete-history retrieval, local indexing, title/full-text/date search, and selection in results | Planned |
| 3 — Rename and export | Inline rename plus Markdown/JSON export for chats, selections, and search matches | Planned |
| 4 — Settings recovery and V1 hardening | Local settings backup/restore, resilience, performance, Firefox acceptance testing, and release readiness | Planned |

## Milestone 0 — Foundation

### Deliverables

- Firefox WebExtension manifest and minimal loadable extension.
- Clear separation among UI, selection/operation state, local persistence, and ChatGPT adapters.
- Capability detection and user-visible failure state when ChatGPT integration is unavailable.
- Synthetic conversation fixtures and an initial automated test setup.
- Privacy-safe diagnostics suitable for bug reports.
- Architecture decisions for extension stack, storage, integration approach, and test strategy.

### Exit Criteria

- The owner can load the extension temporarily in Firefox.
- The extension detects supported ChatGPT pages without modifying unrelated pages.
- Integration failure is visible and does not enable destructive controls.
- Core modules can be tested without a live personal conversation history.

## Milestone 1 — Safe Visible-History Management

### Deliverables

- Selection controls for loaded sidebar conversations.
- Individual, contiguous range, select-all-visible, and clear-selection behavior.
- Persistent selection count and unambiguous action scope.
- Bulk archive with bounded concurrency, progress, and per-item results.
- Bulk delete with strong confirmation and per-item results.
- Reconciliation of sidebar state after successful and partial operations.

### Exit Criteria

- The owner can select and archive multiple visible conversations reliably.
- Delete never begins before confirmation states the exact selected count.
- Partial failures identify affected conversations and do not imply complete success.
- Dynamically loaded sidebar rows do not duplicate controls or corrupt selection state.

## Milestone 2 — Complete History and Search

### Deliverables

- Paginated retrieval of all conversations available to the current session.
- Progress, cancellation where practical, and explicit complete/incomplete state.
- Normalized local conversation representation.
- Incremental local full-text index.
- Title search, full-message search, and date-range filtering.
- Matching snippets and source-message navigation where available.
- Individual, range, select-all-current-results, and clear selection within search results.
- Bulk archive and delete operating on explicitly selected search results.

### Exit Criteria

- Large histories are retrieved without relying on the currently rendered sidebar.
- The extension never claims complete search when retrieval completeness is unknown.
- Combined title/content/date queries produce repeatable results.
- Changing a query never silently broadens an existing bulk-action target set.
- Search and selection remain responsive at the owner's expected history size.

## Milestone 3 — Rename and Export

### Deliverables

- Inline rename from history and search-result views.
- Markdown and JSON serializers based on the normalized conversation model.
- Export of an individual conversation.
- Export of explicitly selected conversations.
- Export of matched search passages with query and source metadata.
- Progress and per-item failures for multi-conversation export.
- Stable filenames and documented export schemas.

### Exit Criteria

- Rename success appears consistently across active views.
- Rename failure preserves the proposed title and explains the failure.
- Exports preserve conversation identity, role, order, content, and available source metadata.
- Search-match exports identify the originating conversation and matched message.
- Large exports fail gracefully without freezing ChatGPT's typing interface.

## Milestone 4 — Settings Recovery and V1 Hardening

### Deliverables

- Versioned local settings-backup format.
- Backup download, restore preview or validation, and atomic application.
- Rejection of malformed or incompatible backups without changing current settings.
- Performance and long-history regression testing.
- Repair-path documentation for ChatGPT integration changes.
- Firefox installation and acceptance-test instructions.
- V1 release checklist and known-limitations record.

### Exit Criteria

- A valid backup restores compatible settings on a clean installation.
- An invalid backup leaves existing settings intact.
- Every approved V1 acceptance criterion has a recorded result.
- No unresolved defect can silently broaden destructive scope or conceal incomplete history.
- Documentation is sufficient for a new Codex task to diagnose and continue the project.

## Cross-Milestone Rules

- Destructive features remain disabled when required identifiers or capabilities are unavailable.
- Selection is always an explicit set of conversation IDs, not a query that can silently change later.
- Long-running work reports progress and distinguishes cancellation, failure, and partial success.
- Conversation content, indexes, and settings remain local in V1.
- UI work must avoid blocking ChatGPT's composer and critical rendering paths.
- Tests use synthetic or sanitized data; private conversation data is never committed.

## Future Consideration

A later version may optionally synchronize extension settings across devices. It is not part of this roadmap. It must not begin without project-owner approval and documented decisions for privacy, encryption, identity, conflicts, offline behavior, and key recovery.

## Change Control

- Reordering work within an approved milestone updates this roadmap.
- Adding or removing V1 product behavior first requires a change to `ProductRequirements.md`.
- A fundamental change to purpose, privacy posture, or project governance may also require a charter revision.

## Change Log

| Version | Date | Summary |
| --- | --- | --- |
| 1.0.0 | 2026-09-05 | Created the implementation roadmap for the approved V1 scope. |
