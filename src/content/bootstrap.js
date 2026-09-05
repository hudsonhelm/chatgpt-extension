(function bootstrap() {
  const extensionApi = globalThis.browser ?? globalThis.chrome;

  if (!extensionApi?.runtime?.getURL) {
    return;
  }

  import(extensionApi.runtime.getURL("src/content/main.js")).catch(() => {
    const host = document.createElement("div");
    host.id = "chatgpt-manager-status";
    host.setAttribute("role", "status");
    host.textContent = "ChatGPT Manager unavailable: the extension foundation failed to start. Destructive actions are disabled.";
    document.documentElement.append(host);
  });
})();
