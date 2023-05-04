const {DLListNode} = require('../../test-utilities/linked-lists');

class MyDoublyLinkedList {
  head;
  tail;
  length;

  constructor() {
    this.head = new DLListNode(-1);
    this.tail = new DLListNode(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.length = 0;
  }

  /**
   * @param {number} index
   * @return {DLListNode}
   */
  #getNode(index) {
    let curr = this.head.next;

    if (index < this.length / 2) {
      // first half
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
    } else {
      // second half
      curr = this.tail;
      for (let i = this.length; i > index; i--) {
        curr = curr.prev;
      }
    }

    return curr;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (this.length < 1) {
      return -1;
    }
    if (index < 0 || index >= this.length) {
      return -1;
    }

    return this.#getNode(index).val;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    if (this.length < 1) {
      const newNode = new DLListNode(val, this.tail, this.head);
      this.head.next = newNode;
      this.tail.prev = newNode;
      this.length++;
      return;
    }

    const newNode = new DLListNode(val, this.head.next, this.head);
    this.head.next = newNode;
    newNode.next.prev = newNode;
    this.length++;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    if (this.length < 1) {
      this.addAtHead(val);
      return;
    }

    const newNode = new DLListNode(val, this.tail, this.tail.prev);
    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
    this.length++;
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index === this.length) {
      this.addAtTail(val);
      return;
    }
    if (index < 0 || index > this.length) {
      return;
    }
    if (index < 1) {
      this.addAtHead(val);
      return;
    }

    const curr = this.#getNode(index);
    const newNode = new DLListNode(val, curr, curr.prev);
    curr.prev.next = newNode;
    curr.prev = newNode;

    this.length++;
  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return;
    }

    const curr = this.#getNode(index);
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
    this.length--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

module.exports = {
  MyDoublyLinkedList
};
