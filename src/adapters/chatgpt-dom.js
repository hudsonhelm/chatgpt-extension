import { assessCapabilities } from "../core/capabilities.js";

const CHATGPT_HOSTS = new Set(["chatgpt.com", "www.chatgpt.com"]);

function classifyPath(pathname) {
  if (pathname === "/" || pathname === "") return "home";
  if (/^\/c\/[^/]+/.test(pathname)) return "conversation";
  if (pathname.startsWith("/auth/")) return "authentication";
  return "other";
}

export function collectDomEvidence(documentRef, locationRef) {
  const query = (selector) => Boolean(documentRef?.querySelector?.(selector));
  const queryAll = (selector) => documentRef?.querySelectorAll?.(selector) ?? [];
  const hostname = String(locationRef?.hostname ?? "").toLowerCase();

  return Object.freeze({
    isChatGptHost: CHATGPT_HOSTS.has(hostname),
    pathKind: classifyPath(String(locationRef?.pathname ?? "")),
    hasSidebar: query('nav[aria-label="Chat history" i], nav[aria-label="Sidebar" i], aside, [data-testid*="sidebar" i]'),
    hasNewChatControl: query('[data-testid="create-new-chat-button"], a[href="/"][aria-label*="new chat" i], button[aria-label*="new chat" i]'),
    hasLoginControl: query('a[href*="/auth/login"], button[data-testid*="login" i]'),
    conversationLinkCount: queryAll('a[href^="/c/"]').length,
  });
}

export function inspectChatGptDom(documentRef = document, locationRef = location) {
  const evidence = collectDomEvidence(documentRef, locationRef);
  return { evidence, capabilities: assessCapabilities(evidence) };
}

export function observeChatGptSurface(onChange, documentRef = document, locationRef = location) {
  let previousKey = "";

  const inspect = () => {
    const result = inspectChatGptDom(documentRef, locationRef);
    const key = JSON.stringify(result);
    if (key !== previousKey) {
      previousKey = key;
      onChange(result);
    }
  };

  inspect();
  const observer = new MutationObserver(inspect);
  observer.observe(documentRef.documentElement, { childList: true, subtree: true });

  return () => observer.disconnect();
}
