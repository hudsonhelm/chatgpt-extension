import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

test("manifest is Firefox-loadable in shape and references existing files", async () => {
  const root = new URL("../", import.meta.url);
  const manifest = JSON.parse(await readFile(new URL("manifest.json", root), "utf8"));
  assert.equal(manifest.manifest_version, 3);
  assert.deepEqual(manifest.content_scripts[0].matches, ["https://chatgpt.com/*"]);
  assert.deepEqual(manifest.permissions, ["storage"]);
  assert.ok(manifest.browser_specific_settings.gecko.id);
  assert.deepEqual(
    manifest.browser_specific_settings.gecko.data_collection_permissions.required,
    ["none"],
  );
  for (const script of manifest.content_scripts[0].js) await access(new URL(script, root));
  for (const stylesheet of manifest.content_scripts[0].css) await access(new URL(stylesheet, root));
  for (const resource of manifest.web_accessible_resources[0].resources) await access(new URL(resource, root));
});
