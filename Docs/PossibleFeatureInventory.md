# Possible Feature Inventory

**Version:** 0.1.0

**Last updated:** 2026-09-05

**Status:** Exploratory; not approved scope

**Owner:** Project owner

## Purpose

Preserve a unified inventory of features observed in ChatGPT Pro Tools and comparable browser extensions for future review.

This document is not a roadmap, requirements document, backlog, or commitment to build any listed feature. A feature enters project scope only when the project owner explicitly selects it and it is added to the applicable requirements or milestone documentation. The active `ProjectCharter.md` and `ProductRequirements.md` take precedence over this inventory.

## Difficulty Scale

Difficulty is relative to a greenfield, Firefox-first implementation in this project. It includes integration fragility, privacy, safety, testing, and maintainability—not only happy-path coding effort.

| Rating | Meaning |
| --- | --- |
| 1/5 | Straightforward local UI or utility work |
| 2/5 | Easy feature with limited integration or local persistence |
| 3/5 | Moderate feature requiring meaningful state, integration, or edge-case handling |
| 4/5 | Hard feature with substantial data, rendering, reliability, or external-integration concerns |

Items assessed at 5/5 were intentionally removed from this review inventory. Of the 4/5 candidates, only complete-history retrieval, full-text message search, and high-quality export were retained for consideration.

## 1/5 — Straightforward

| Possible feature | Summary | Observed in |
| --- | --- | --- |
| Character, word, and sentence counter | Show live statistics for composer input or messages. | ChatGPT Pro Tools; AI Toolbox |
| Response-finished notification | Play an optional sound when generation finishes in another tab. | AI Toolbox; AI Workspace |
| Global scratchpad | Provide an autosaved note not tied to a conversation. | Superpower ChatGPT; ChatGPT Folders, Profiles & More |
| Collapse messages | Collapse individual messages or an entire conversation. | ChatGPT Pro Tools; AI Toolbox |
| Basic message statistics | Display length and related metadata beside messages. | ChatGPT Pro Tools |
| In-app release notes | Show extension changes following an update. | ChatGPT Pro Tools |
| Support and diagnostics | Provide troubleshooting details and privacy-safe diagnostics. | ChatGPT Pro Tools; YOLO for ChatGPT |

## 2/5 — Easy

| Possible feature | Summary | Observed in |
| --- | --- | --- |
| Chat notes | Attach an autosaved, resizable note to each conversation. | ChatGPT Pro Tools; Superpower ChatGPT |
| Manual tags | Add, edit, recolor, rename, and remove multiple tags per chat. | ChatGPT Pro Tools; AI Toolbox |
| Tag and date filters | Filter the sidebar or workspace using metadata. | ChatGPT Pro Tools |
| Prompt manager | Save, organize, search, and reuse prompt templates. | Most reviewed products |
| Prompt variables | Replace `{{variable}}` placeholders when using a template. | ChatGPT Pro Tools; Superpower ChatGPT; AI Toolbox |
| Community prompt library | Browse ready-made prompts by category. | ChatGPT Pro Tools; Superpower ChatGPT; AI Toolbox |
| Prompt history | Retain, search, favorite, and reuse submitted prompts. | Superpower ChatGPT; AI Workspace |
| Saved-message bookmarks | Save individual replies and return to their source. | ChatGPT Pro Tools; Superpower ChatGPT |
| Command palette | Launch chats, prompts, and extension actions by keyboard. | AI Toolbox; YOLO for ChatGPT |
| Custom keyboard shortcuts | Assign shortcuts to frequently used features. | AI Toolbox; YOLO for ChatGPT |
| Custom-instruction profiles | Save and switch among different instruction sets. | Superpower ChatGPT; EasyFolders |
| Sidebar date labels | Display dates beside conversations. | ChatGPT Pro Tools |
| Sticky sidebar controls | Keep filters accessible while scrolling. | ChatGPT Pro Tools |
| Local settings backup and restore | Export and import validated extension metadata. | ChatGPT Pro Tools; EasyFolders |
| Interface customization | Adjust colors, fonts, themes, and chat width. | AI Toolbox; AI Workspace |
| Hide already-filed chats | Remove organized conversations from the general recent list. | AI Toolbox |
| Ad-card hiding | Suppress sponsored cards in ChatGPT responses. | Superpower ChatGPT |
| Floating launcher | Keep extension tools independent of ChatGPT's sidebar. | AI Toolbox |

## 3/5 — Moderate

| Possible feature | Summary | Observed in |
| --- | --- | --- |
| Multi-selection interface | Support individual, range, select-all-visible, and clear selection. | ChatGPT Pro Tools |
| Bulk archive | Archive selected conversations with progress and failure reporting. | ChatGPT Pro Tools; comparable managers |
| Bulk delete with confirmation | Safely delete selected chats with strong confirmation. | ChatGPT Pro Tools; comparable managers |
| Bulk pin and unpin | Change native ChatGPT pin state for multiple items. | ChatGPT Pro Tools |
| Bulk move to project or folder | Move selected chats through a searchable destination picker. | ChatGPT Pro Tools; comparable managers |
| Bulk categorization | Apply organizational changes to a selection. | ChatGPT Pro Tools; AI Workspace |
| Inline chat rename | Rename conversations without opening them. | ChatGPT Pro Tools |
| Unified pinned items | Present pinned chats, projects, group chats, and GPTs together. | ChatGPT Pro Tools |
| Markdown, TXT, and JSON export | Export complete conversations in portable formats. | ChatGPT Pro Tools; comparable managers |
| Batch and project export | Export multiple conversations or an entire project. | ChatGPT Pro Tools; AI Toolbox |
| Selective-message export | Export chosen messages instead of the entire conversation. | ChatGPT Pro Tools; Superpower ChatGPT |
| Structured ZIP export | Preserve project or folder structure in an archive. | AI Toolbox |
| Obsidian-friendly Markdown | Include YAML metadata, dates, model, and source URL. | AI Toolbox |
| Export search matches | Export only passages returned by a search. | AI Toolbox |
| Rich-text conversation copy | Copy HTML and plain-text representations together. | ChatGPT Pro Tools |
| Download conversation images as ZIP | Collect uploaded and generated images into one archive. | ChatGPT Pro Tools |
| Message timestamps | Display dates for individual messages. | ChatGPT Pro Tools; AI Toolbox |
| Highlight annotations | Attach notes to highlighted passages. | Superpower ChatGPT |
| Message labels | Apply short colored labels such as "decision" or "action." | AI Toolbox |
| Nested local folders | Organize conversations in a draggable hierarchy. | Superpower ChatGPT; AI Toolbox; EasyFolders; AI Workspace |
| Folder customization | Add colors, icons, counts, sorting, and favorites. | AI Toolbox; EasyFolders |
| Automatic Custom GPT grouping | Group conversations according to their originating GPT. | Superpower ChatGPT; EasyFolders |
| Isolated local workspaces | Separate personal, client, and project views. | AI Workspace |
| Conversation outline | Build a navigable outline of prompts and replies. | AI Workspace |
| Conversation minimap | Show position and structure within a long chat. | Superpower ChatGPT |
| Local encrypted vault or backup | Encrypt local extension metadata or backup files. | AI Workspace |
| Enhanced printing | Print clean conversations using selectable templates. | Superpower ChatGPT |
| Progress and activity indicators | Show status for bulk operations, indexing, and exports. | ChatGPT Pro Tools; AI Toolbox |
| Accessible keyboard navigation | Support focus management, screen readers, and keyboard control. | AI Toolbox |

## 4/5 — Retained Advanced Candidates

| Review priority | Possible feature | Summary | Observed in |
| --- | --- | --- | --- |
| 1 | Complete-history retrieval | Reliably discover and paginate through every conversation, including histories too large for the visible sidebar. | ChatGPT Pro Tools; AI Toolbox |
| 2 | Full-text message search | Maintain a local incremental index, show matching snippets, and jump to the matching message. | ChatGPT Pro Tools; AI Toolbox |
| 3 | High-quality export | Produce dependable Markdown first, with optional polished PDF and DOCX output preserving code, tables, citations, images, and math. | ChatGPT Pro Tools; Superpower ChatGPT; AI Toolbox |

## Products Reviewed

- [ChatGPT Pro Tools](https://gptprotools.com/features/)
- [Superpower ChatGPT](https://spchatgpt.com/features/)
- [AI Toolbox](https://www.ai-toolbox.co/chatgpt-toolbox)
- [AI Workspace](https://www.getaiworkspace.com/)
- [EasyFolders](https://www.easyfolders.online/)
- [ChatGPT Folders, Profiles & More](https://addons.mozilla.org/en-US/firefox/addon/chatgpt-folders-profiles-more/)
- [YOLO for ChatGPT](https://github.com/kartikkabadi/chatgpt-yolo)

## Review and Promotion Process

When reviewing this inventory:

1. Remove candidates that do not serve a demonstrated personal need.
2. Identify dependencies and combine closely related candidates where appropriate.
3. Select only a small set for the next roadmap proposal.
4. Record approved behavior and acceptance criteria in `ProductRequirements.md`.
5. Revise the charter only if a selection changes the project's fundamental scope, privacy position, or guiding principles.

## Change Log

| Version | Date | Summary |
| --- | --- | --- |
| 0.1.0 | 2026-09-05 | Created the exploratory, non-committal inventory from competitor research and retained only three 4/5 candidates. |
