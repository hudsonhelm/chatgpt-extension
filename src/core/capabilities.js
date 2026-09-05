export const FOUNDATION_MUTATIONS = Object.freeze({
  archive: false,
  delete: false,
  rename: false,
});

export function assessCapabilities(evidence) {
  const base = {
    status: "unavailable",
    reason: "unsupported-page",
    canReadVisibleHistory: false,
    mutations: FOUNDATION_MUTATIONS,
  };

  if (!evidence?.isChatGptHost) {
    return base;
  }

  if (!evidence.hasSidebar && !evidence.hasNewChatControl) {
    return { ...base, reason: "page-shell-not-detected" };
  }

  if (evidence.hasLoginControl) {
    return {
      ...base,
      status: "limited",
      reason: "sign-in-required",
    };
  }

  return {
    ...base,
    status: "available",
    reason: evidence.conversationLinkCount > 0
      ? "visible-history-detected"
      : "page-shell-detected",
    canReadVisibleHistory: true,
  };
}
