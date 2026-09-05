# ChatGPT Extension Project Index

**Document version:** 0.3.0  
**Last updated:** 2026-09-05  
**Status:** Active

## How to Use and Maintain This Index

This file is the stable entry point for the project. All active documents use descriptive, stable CamelCase filenames without version numbers so links remain valid as their contents evolve.

When adding, renaming, moving, or removing a project file:

1. Give each active document a descriptive CamelCase filename without a version number, using the form `DocumentName.md`.
2. Record the document's semantic version inside the document rather than in its active filename.
3. Add or update the file's entry in the appropriate folder index below.
4. Keep descriptions short and focused on the file's purpose.
5. Update this document's internal version and `Last updated` date when its structure or instructions materially change.

When replacing a document with a newer version:

1. Preserve the superseded file in `Archive` when its history may be useful.
2. If an archived file does not already have a version number, rename it before placing it in `Archive`.
3. Use the filename form `DocumentNameV1.2.3.ext` for archived files.
4. Record the archived file in the `Archive` contents index below.
5. Keep links elsewhere in the project pointed at the stable active filename.

Do not use `Archive` as a general dumping ground. Archive only superseded or retired project material that may still have historical value.

The folder structure beneath `Archive` should mirror the primary project structure, without recursively mirroring `Archive` itself:

- archived versions of project-root files belong directly in `Archive`;
- archived versions of files from `Docs` belong in `Archive/Docs`;
- when a new primary folder is created, create the corresponding folder beneath `Archive`; and
- preserve the original relative location whenever an archived file is moved into the archive structure.

All active documents use stable, unversioned filenames. Every archived snapshot must include the internal version of the snapshot in its filename.

## Folder Index

| Folder | Purpose |
| --- | --- |
| Project root | Stable project entry points and top-level configuration files. |
| `Docs` | Current planning, requirements, research, architecture, and testing documentation. |
| `Archive` | Superseded or retired versioned material retained for historical reference. |
| `Archive/Docs` | Archived material that originally belonged in `Docs`. |

Add new folders to this table when they are created. Also add a corresponding contents section below.

## Project Root Contents

| File | Purpose |
| --- | --- |
| `Index.md` | Stable master index and maintenance instructions for the project. |
| [`ProjectCharter.md`](ProjectCharter.md) | Stable guiding reference for the project's purpose, goals, principles, scope, and success measures. |

## Docs Contents

| File | Purpose |
| --- | --- |
| [`ProjectContext.md`](Docs/ProjectContext.md) | Durable project background, goals, constraints, roles, and working agreements. |
| [`ProductRequirements.md`](Docs/ProductRequirements.md) | Product scope, user needs, functional requirements, and acceptance criteria. |
| [`CompetitorResearch.md`](Docs/CompetitorResearch.md) | Structured research on comparable products, features, licenses, and lessons. |
| [`ArchitectureDecisions.md`](Docs/ArchitectureDecisions.md) | Record of technical decisions, alternatives, reasoning, and consequences. |
| [`TestingNotes.md`](Docs/TestingNotes.md) | Test procedures, environments, results, defects, and retest history. |

## Archive Contents

The root of `Archive` mirrors the project root for archived top-level files.

| File | Archived date | Replaced by | Reason retained |
| --- | --- | --- | --- |
| [`ProjectCharterV0.1.0.md`](Archive/ProjectCharterV0.1.0.md) | 2026-09-05 | [`ProjectCharter.md`](ProjectCharter.md) | Preserves the charter before source-control stewardship and repository-governance principles were added. |

## Archive/Docs Contents

`Archive/Docs` mirrors `Docs` and is currently empty.

When a file is added, replace the sentence above with a table using these columns:

| File | Archived date | Replaced by | Reason retained |
| --- | --- | --- | --- |
| `ExampleDocumentV0.1.0.md` | YYYY-MM-DD | `ExampleDocument.md` | Brief historical purpose. |
