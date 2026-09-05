# ChatGPT Conversation Manager

A privacy-focused, Firefox-first browser extension for managing large ChatGPT conversation histories. The planned V1 provides complete-history retrieval, full-text and date search, multi-selection—including within search results—safe bulk archive and delete, inline chat renaming, Markdown/JSON export, and local settings backup and restore.

Milestone 0 establishes the extension foundation. The current build is deliberately read-only: it detects the ChatGPT page surface, shows a privacy-safe status panel, and keeps every conversation mutation capability disabled. The project prioritizes local data storage, transparent destructive actions, maintainable ChatGPT integration boundaries, and clear reporting of incomplete results or partial failures. No telemetry, external account, or cloud service is planned for V1.

## Load temporarily in Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Select **Load Temporary Add-on**.
3. Choose `manifest.json` from this project directory.
4. Open `https://chatgpt.com/`.
5. Confirm the small **ChatGPT Manager** status panel appears at the lower right.

Temporary extensions are removed when Firefox restarts. Reload the extension from `about:debugging` after source or manifest changes.

## Automated checks

With Node.js 20 or newer:

```powershell
npm test
```

The checks use synthetic fixtures only. They never connect to ChatGPT or operate on a live conversation.

## Safety state

- No archive, delete, rename, retrieval, or export request is implemented.
- No credential, cookie, token, title, message text, or conversation identifier is logged.
- The Firefox manifest declares that the extension collects or transmits no data.
- The extension runs only on `https://chatgpt.com/*`.
- Extension-owned settings use Firefox `storage.local`; future conversation/index data is reserved for IndexedDB.

See [`Docs/ArchitectureDecisions.md`](Docs/ArchitectureDecisions.md), [`Docs/ChatGPTIntegrationResearch.md`](Docs/ChatGPTIntegrationResearch.md), and [`Docs/TestingNotes.md`](Docs/TestingNotes.md) for the foundation record.
