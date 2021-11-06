'use strict';

class Node {
  constructor(value, k = 0) {
    this.value = value;
    this.children = new Array(k);
  }
}

class KaryTree {
  constructor(k) {
    this.k = k;
    this.root = null;
  }

  breadthFirst(root) {
    //
  }
}

module.exports = {
  Node,
  KaryTree
};