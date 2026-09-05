# ChatGPT Integration Research

**Version:** 1.0.0
**Last updated:** 2026-09-05
**Status:** Active; Milestone 0 baseline
**Owner:** Project owner

## Purpose

Record what can safely be established about the current ChatGPT web integration surface without treating private implementation details as a supported contract.

## Scope and Safety

The investigation was read-only. It inspected official OpenAI developer documentation and coarse DOM structure on signed-out and signed-in `https://chatgpt.com/` pages. It did not open conversation menus, invoke mutations, send messages, copy conversation content into fixtures, or retain personal titles and identifiers in project files.

## Findings

### Supported public API boundary

OpenAI's developer API contains a `Conversation` resource for state used with API Responses. That resource is created and addressed through API credentials; the documentation does not establish that it lists or manages the signed-in user's chats in the ChatGPT web product. V1 must not request an API key or confuse API conversations with ChatGPT product history.

No supported developer endpoint for bulk listing, archiving, deleting, or renaming the user's ChatGPT web chats was found in the official developer documentation reviewed on 2026-09-05. Any web-product endpoint discovered later must therefore be classified as private and unstable.

### Current web DOM observations

The signed-in desktop home surface exposed:

- an accessible navigation region labeled `Chat history`;
- a separate navigation rail labeled `Sidebar`;
- visible conversation anchors with relative paths shaped like `/c/{conversation-id}`;
- a new-chat control with `data-testid="create-new-chat-button"`; and
- per-row option controls whose test IDs were shaped like `history-item-{index}-options`.

The signed-out home surface still exposed a sidebar and new-chat control, but also exposed login controls and no conversation links. Therefore, sidebar presence alone cannot establish usable history access.

Class names, row indices, current counts, titles, and identifiers are not treated as stable selectors. Accessible labels, URL shape, and test IDs are layered observations, not guarantees.

### Private request surface

Authenticated same-origin private endpoints are a plausible later route for complete-history pagination and mutations, because the rendered sidebar alone is partial and dynamic. Their current request URLs, methods, headers, pagination semantics, and anti-CSRF behavior were not captured in Milestone 0. Guessing them or replaying mutations against a live account would violate the safety posture.

Before a private request adapter is implemented:

1. capture read request shapes without conversation content or credentials in saved artifacts;
2. document pagination and completeness invariants;
3. model errors, authentication expiry, and rate limiting;
4. create synthetic request/response contracts;
5. separate read and mutation capabilities; and
6. enable mutations only after explicit manual testing instructions and strong UI confirmation exist.

## Foundation Integration Strategy

The Milestone 0 adapter uses DOM evidence only to report `available`, `limited`, or `unavailable`. It reports a coarse visible-conversation count, never titles or IDs. A `MutationObserver` rechecks the surface because ChatGPT is a client-rendered application. All mutations remain false regardless of detected DOM.

Future adapter layers are expected to be:

1. **Page capability adapter** — host, authentication hints, shell, and visible-row discovery.
2. **History read adapter** — private paginated reads with explicit completeness state, after separate validation.
3. **Conversation mutation adapter** — rename/archive/delete, isolated from reads and disabled unless each capability is proven.
4. **Normalized model boundary** — converts unstable upstream shapes into stable local V1 records.

## Known Unknowns

- Private history endpoint shapes and whether they differ by account/workspace mode.
- Pagination ordering, archive visibility, branches, projects, pinned chats, and deleted-state reconciliation.
- Required request tokens and their lifetime.
- Rate limits and safe concurrency.
- Whether Firefox content-script same-origin requests require a page-context bridge for every operation.

## References

- [OpenAI API: Create a conversation](https://developers.openai.com/api/reference/python/resources/conversations/methods/create)
- [OpenAI API: Delete a conversation](https://developers.openai.com/api/reference/typescript/resources/conversations/methods/delete)
- [Mozilla: Content scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [`ArchitectureDecisions.md`](ArchitectureDecisions.md)

## Change Log

| Version | Date | Summary |
| --- | --- | --- |
| 1.0.0 | 2026-09-05 | Recorded the official API distinction, read-only live DOM observations, unknown private surface, and adapter strategy. |
