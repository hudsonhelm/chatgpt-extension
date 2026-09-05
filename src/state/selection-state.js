export class SelectionState {
  #ids = new Set();
  #anchor = null;

  get size() {
    return this.#ids.size;
  }

  has(id) {
    return this.#ids.has(id);
  }

  snapshot() {
    return Object.freeze([...this.#ids]);
  }

  select(id) {
    this.#ids.add(id);
    this.#anchor = id;
  }

  toggle(id) {
    if (this.#ids.has(id)) this.#ids.delete(id);
    else this.#ids.add(id);
    this.#anchor = id;
  }

  selectRange(orderedIds, targetId) {
    const anchorIndex = orderedIds.indexOf(this.#anchor);
    const targetIndex = orderedIds.indexOf(targetId);
    if (anchorIndex < 0 || targetIndex < 0) {
      this.select(targetId);
      return;
    }
    const [start, end] = anchorIndex <= targetIndex
      ? [anchorIndex, targetIndex]
      : [targetIndex, anchorIndex];
    for (const id of orderedIds.slice(start, end + 1)) this.#ids.add(id);
  }

  selectAll(ids) {
    for (const id of ids) this.#ids.add(id);
  }

  clear() {
    this.#ids.clear();
    this.#anchor = null;
  }
}
