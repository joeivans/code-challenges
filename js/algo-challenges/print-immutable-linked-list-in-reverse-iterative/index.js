/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
const printLinkedListInReverse = function (head) {
// O(n^2) Time | O(1) Space
//  n = number of nodes in head
//  Algorithm scales quadratically with input list size.

  const len = getListLength(head);

  for (let i = len; i > 0; i--) {
    const targetNode = getNodeAtIndex(head, i);

    targetNode.printValue();
  }
};

const getListLength = function (head) {
  let length = 0;

  while (head) {
    length++;

    head = head.getNext();
  }

  return length;
};

const getNodeAtIndex = function (head, index) {
  for (let i = 1; i < index; i++) {
    head = head.getNext();
  }

  return head;
};

module.exports = {
  printLinkedListInReverse
};
