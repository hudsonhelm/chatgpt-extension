import { observeChatGptSurface } from "../adapters/chatgpt-dom.js";
import { createDiagnosticReport } from "../core/diagnostics.js";
import { renderStatusPanel } from "../ui/status-panel.js";

const extensionApi = globalThis.browser ?? globalThis.chrome;
const manifest = extensionApi.runtime.getManifest();

observeChatGptSurface(({ evidence, capabilities }) => {
  const diagnostics = createDiagnosticReport({
    evidence,
    capabilities,
    extensionVersion: manifest.version,
  });
  renderStatusPanel({ capabilities, diagnostics });
});
