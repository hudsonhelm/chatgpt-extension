import test from "node:test";
import assert from "node:assert/strict";
import { createDiagnosticReport } from "../src/core/diagnostics.js";

test("diagnostics contain counts and capability state but no private content", () => {
  const report = createDiagnosticReport({
    evidence: {
      isChatGptHost: true,
      pathKind: "conversation",
      hasSidebar: true,
      hasNewChatControl: true,
      hasLoginControl: false,
      conversationLinkCount: 12,
      ignoredTitle: "private title",
      ignoredId: "private-id",
    },
    capabilities: { status: "available", reason: "visible-history-detected", canReadVisibleHistory: true },
    extensionVersion: "0.0.1",
  });
  const serialized = JSON.stringify(report);
  assert.equal(serialized.includes("private title"), false);
  assert.equal(serialized.includes("private-id"), false);
  assert.equal(report.surface.conversationLinkCount, 12);
  assert.equal(report.capability.mutationsEnabled, false);
});
