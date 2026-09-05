export function createDiagnosticReport({ evidence, capabilities, extensionVersion = "unknown" }) {
  return Object.freeze({
    schemaVersion: 1,
    extensionVersion,
    observedAt: new Date().toISOString(),
    page: {
      isChatGptHost: Boolean(evidence?.isChatGptHost),
      pathKind: evidence?.pathKind ?? "unknown",
    },
    surface: {
      hasSidebar: Boolean(evidence?.hasSidebar),
      hasNewChatControl: Boolean(evidence?.hasNewChatControl),
      hasLoginControl: Boolean(evidence?.hasLoginControl),
      conversationLinkCount: Number.isInteger(evidence?.conversationLinkCount)
        ? evidence.conversationLinkCount
        : 0,
    },
    capability: {
      status: capabilities?.status ?? "unavailable",
      reason: capabilities?.reason ?? "unknown",
      canReadVisibleHistory: Boolean(capabilities?.canReadVisibleHistory),
      mutationsEnabled: false,
    },
  });
}
