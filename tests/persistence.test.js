import test from "node:test";
import assert from "node:assert/strict";
import { LocalSettingsStore } from "../src/persistence/local-settings-store.js";

test("settings storage applies defaults and writes a versioned local value", async () => {
  const memory = {};
  const area = {
    async get(key) { return { [key]: memory[key] }; },
    async set(values) { Object.assign(memory, values); },
  };
  const store = new LocalSettingsStore(area);

  assert.deepEqual(await store.read(), { schemaVersion: 1, showDiagnostics: false });
  assert.deepEqual(await store.write({ showDiagnostics: true }), { schemaVersion: 1, showDiagnostics: true });
  assert.deepEqual(memory.settings, { schemaVersion: 1, showDiagnostics: true });
});
