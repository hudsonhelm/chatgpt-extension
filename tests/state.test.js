import test from "node:test";
import assert from "node:assert/strict";
import { SelectionState } from "../src/state/selection-state.js";
import { OperationState } from "../src/state/operation-state.js";

test("selection snapshots explicit IDs and supports a contiguous range", () => {
  const state = new SelectionState();
  state.select("synthetic-chat-001");
  state.selectRange(["synthetic-chat-001", "synthetic-chat-002", "synthetic-chat-003"], "synthetic-chat-003");
  assert.deepEqual(state.snapshot(), ["synthetic-chat-001", "synthetic-chat-002", "synthetic-chat-003"]);
});
test("operation target scope is immutable after begin", () => {
  const source = ["synthetic-chat-001"];
  const state = new OperationState();
  const started = state.begin({ kind: "archive", targetIds: source });
  source.push("synthetic-chat-002");
  assert.deepEqual(started.targetIds, ["synthetic-chat-001"]);
});
