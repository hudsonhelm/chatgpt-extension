import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { assessCapabilities } from "../src/core/capabilities.js";

async function fixture(name) {
  return JSON.parse(await readFile(new URL(`./fixtures/${name}`, import.meta.url), "utf8"));
}

test("supported signed-in surface enables only read detection", async () => {
  const result = assessCapabilities(await fixture("dom-supported.json"));
  assert.equal(result.status, "available");
  assert.equal(result.canReadVisibleHistory, true);
  assert.deepEqual(result.mutations, { archive: false, delete: false, rename: false });
});
test("signed-out surface is limited and safe", async () => {
  const result = assessCapabilities(await fixture("dom-signed-out.json"));
  assert.equal(result.status, "limited");
  assert.equal(result.reason, "sign-in-required");
  assert.equal(result.mutations.delete, false);
});

test("missing page shell fails visibly and closed", async () => {
  const result = assessCapabilities(await fixture("dom-unsupported.json"));
  assert.equal(result.status, "unavailable");
  assert.equal(result.reason, "page-shell-not-detected");
  assert.equal(result.canReadVisibleHistory, false);
});
