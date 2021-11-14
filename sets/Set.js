'use strict';

class Set {
  set = {};
  size = 0;

  add(value) {
    if (!this.set.hasOwnProperty(value)) {
      this.set[value] = value;
      this.size++;
    }
  }

  remove(value) {
    if (this.set.hasOwnProperty(value)) {
      delete this.set[value];
      this.size--;
    }
  }
}

module.exports = Set;
