'use strict';

class Set {
  #values = {};
  size = 0;

  get values() {
    return Object.keys(this.#values);
  }

  toString() {
    return JSON.stringify(this.values);
  }

  add(value) {
    if (!this.#values.hasOwnProperty(value)) {
      this.#values[value] = null;
      this.size++;
    }
  }

  remove(value) {
    if (this.#values.hasOwnProperty(value)) {
      delete this.#values[value];
      this.size--;
    }
  }

  contains(value) {
    return this.#values.hasOwnProperty(value);
  }

  union(setA) {
    for (const element in setA.#values) {
      if (setA.#values.hasOwnProperty(element)) {
        this.add(element);
      }
    }
  }
}

module.exports = Set;
