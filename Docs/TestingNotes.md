# Testing Notes

**Version:** 1.1.0
**Last updated:** 2026-09-05  
**Status:** Active
**Owner:** Project owner

## Purpose

Record repeatable test procedures, environments, results, defects, and retest outcomes for each project milestone.

## Test Environment

| Item | Value |
| --- | --- |
| Date and time | 2026-09-05 13:54 America/New_York |
| Operating system | Windows (exact version not recorded) |
| Browser | Chrome for read-only surface inspection; Firefox 155.0.1 for primary acceptance |
| Extension version | 0.0.1 |
| ChatGPT interface state | Signed-out and signed-in home surfaces inspected without opening or modifying conversations |
| Installation method | Node tests plus temporary Firefox installation through `about:debugging` |

## Preconditions

- Node.js 20 or newer for automated tests.
- Synthetic files under `tests/fixtures`; never substitute an account export.
- For Firefox manual testing, use a signed-in test state or the owner's account only for passive detection.
- Do not open row menus or test archive, delete, or rename during Milestone 0.

## Test Cases

| ID | Area | Procedure | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- | --- |
| TC-001 | Manifest | Run `npm test`. | Manifest parses, targets only ChatGPT HTTPS pages, requests only storage, and references existing files. | Passed in automated run; see TR-001. | Pass |
| TC-002 | Capability | Run `npm test` against supported, signed-out, and unsupported synthetic observations. | Supported enables read detection only; signed-out is limited; missing shell fails closed. | Passed in automated run; see TR-001. | Pass |
| TC-003 | Diagnostics | Run `npm test`. | Report contains allowlisted counts/state and excludes ignored private title/ID fields. | Passed in automated run; see TR-001. | Pass |
| TC-004 | State | Run `npm test`. | Range selection uses explicit IDs and operation targets cannot grow when the source array changes. | Passed in automated run; see TR-001. | Pass |
| TC-005 | Live surface observation | Inspect signed-out and signed-in ChatGPT home DOM without invoking actions. | Adapter signals have current evidence and no content is saved. | Sidebar/chat-history labels, `/c/` link shape, new-chat test ID, and signed-out distinction observed. | Pass |
| TC-006 | Firefox temporary load | Follow `README.md`, then visit signed-in ChatGPT. | Extension loads; status panel appears; available state is visible; no destructive controls exist. | Firefox displayed the foundation-active status and privacy-safe diagnostics with 30 visible links; `mutationsEnabled` remained false. | Pass |

## Test Run Summary

| Test run | Date | Build or version | Passed | Failed | Blocked | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| TR-001 | 2026-09-05 | 0.0.1 | 4 | 0 | 0 | Eight automated Node tests passed across four foundation areas. |
| TR-002 | 2026-09-05 | 0.0.1 | 2 | 0 | 0 | Read-only live-surface observation and Firefox temporary-load acceptance passed. |

## Defects

| ID | Summary | Severity | Reproduction status | Related test | Current status |
| --- | --- | --- | --- | --- | --- |
| — | No defects recorded. | — | — | — | — |

## Defect Detail Template

### BUG-001: Defect Summary

**Environment:** <!-- Relevant environment -->  
**Severity:** <!-- Severity -->  
**Status:** Open

#### Steps to Reproduce

1. <!-- Step -->
2. <!-- Step -->

#### Expected Result

<!-- Expected behavior. -->

#### Actual Result

<!-- Observed behavior. -->

#### Evidence

<!-- Link screenshots, console messages, logs, or recordings. Remove secrets first. -->

#### Retest History

| Date | Version | Result | Notes |
| --- | --- | --- | --- |
| YYYY-MM-DD | <!-- Version --> | <!-- Pass/fail --> | <!-- Notes --> |

## General Observations

Chrome read-only inspection showed that the signed-in surface includes both `Sidebar` and `Chat history` navigation labels. Firefox 155.0.1 then loaded the same scaffold and reported the signed-in surface as available with mutations disabled.

## Change Log

| Version | Date | Summary |
| --- | --- | --- |
| 1.1.0 | 2026-09-05 | Recorded successful Firefox 155.0.1 temporary-load acceptance and completed the Milestone 0 test record. |
| 1.0.0 | 2026-09-05 | Added Milestone 0 automated cases, read-only live observations, results, and pending Firefox load check. |
| 0.1.0 | 2026-09-05 | Created initial template. |
