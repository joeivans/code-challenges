'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * Root is first.
   * Right-most is last.
   * @param current
   * @param {function(*=): void} callbackWithValue
   */
  preOrder(current, callbackWithValue) {
    callbackWithValue(current.value);

    if (current.left) {
      this.preOrder(current.left, callbackWithValue);
    }

    if (current.right) {
      this.preOrder(current.right, callbackWithValue);
    }
  }

  /**
   * Left-most is first.
   * Right-most is last.
   * @param current
   * @param {function(*=): void} callbackWithValue
   */
  inOrder(current, callbackWithValue) {
    if (current.left) {
      this.inOrder(current.left, callbackWithValue);
    }

    callbackWithValue(current.value);

    if (current.right) {
      this.inOrder(current.right, callbackWithValue);
    }
  }

  /**
   * Left-most's right is first.
   * Root is last.
   * @param current
   * @param {function(*=): void} callbackWithValue
   */
  postOrder(current, callbackWithValue) {
    if (current.left) {
      this.postOrder(current.left, callbackWithValue);
    }
    if (current.right) {
      this.postOrder(current.right, callbackWithValue);
    }

    callbackWithValue(current.value);
  }
}

module.exports = {
  BinaryTree,
  Node
};