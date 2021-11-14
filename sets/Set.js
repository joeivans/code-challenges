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

  contains(value) {
    return this.set.hasOwnProperty(value);
  }
}

module.exports = Set;
