const STATUS_COPY = {
  available: "Foundation active. Visible history can be detected; destructive actions are disabled.",
  limited: "Sign in to ChatGPT to detect conversation history. Destructive actions are disabled.",
  unavailable: "ChatGPT integration unavailable on this page. Destructive actions are disabled.",
};

export function renderStatusPanel({ capabilities, diagnostics }) {
  let panel = document.getElementById("chatgpt-manager-status");
  if (!panel) {
    panel = document.createElement("section");
    panel.id = "chatgpt-manager-status";
    panel.setAttribute("aria-live", "polite");
    panel.innerHTML = `
      <strong>ChatGPT Manager</strong>
      <span data-role="message"></span>
      <details>
        <summary>Diagnostics</summary>
        <pre data-role="diagnostics"></pre>
      </details>
    `;
    document.documentElement.append(panel);
  }

  panel.dataset.status = capabilities.status;
  panel.querySelector('[data-role="message"]').textContent = STATUS_COPY[capabilities.status];
  panel.querySelector('[data-role="diagnostics"]').textContent = JSON.stringify(diagnostics, null, 2);
}
