const TERMINAL = new Set(["succeeded", "failed", "cancelled", "partial"]);

export class OperationState {
  constructor() {
    this.current = null;
  }

  begin({ kind, targetIds }) {
    if (this.current && !TERMINAL.has(this.current.status)) {
      throw new Error("An operation is already active.");
    }
    this.current = {
      kind,
      targetIds: Object.freeze([...targetIds]),
      status: "running",
      completed: 0,
      failures: [],
    };
    return this.snapshot();
  }

  finish(status, failures = []) {
    if (!this.current || !TERMINAL.has(status)) {
      throw new Error("Invalid operation transition.");
    }
    this.current = {
      ...this.current,
      status,
      completed: this.current.targetIds.length - failures.length,
      failures: [...failures],
    };
    return this.snapshot();
  }

  snapshot() {
    return this.current ? structuredClone(this.current) : null;
  }
}
