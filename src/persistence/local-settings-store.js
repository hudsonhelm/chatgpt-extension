export const DEFAULT_SETTINGS = Object.freeze({
  schemaVersion: 1,
  showDiagnostics: false,
});

export class LocalSettingsStore {
  constructor(storageArea) {
    if (!storageArea?.get || !storageArea?.set) {
      throw new TypeError("A WebExtension storage area is required.");
    }
    this.storageArea = storageArea;
  }

  async read() {
    const stored = await this.storageArea.get("settings");
    return { ...DEFAULT_SETTINGS, ...(stored.settings ?? {}) };
  }

  async write(nextSettings) {
    const settings = { ...DEFAULT_SETTINGS, ...nextSettings, schemaVersion: 1 };
    await this.storageArea.set({ settings });
    return settings;
  }
}
