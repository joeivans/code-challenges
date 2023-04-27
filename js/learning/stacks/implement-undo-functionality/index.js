class TextEditor {
  constructor() {
    this.opStack = [];
    this.opMap = new Map([
      ['INSERT', this.insert],
      ['DELETE', this.delete],
      ['UNDO', this.undo]
    ]);
  }

  delete() {
    this.opStack.pop();
  }

  insert(c) {
    this.opStack.push(c);
  }

  undo() {
    this.opStack.pop();
  }

  performEditorActions(actions) {
    for (const [op, arg] of actions) {
      if (op && arg) {
        this.opMap.get(op).bind(this)(arg);
      } else if (op) {
        this.opMap.get(op).bind(this)();
      }
    }

    return this.opStack.join('');
  }
}

module.exports = {
  TextEditor
};
