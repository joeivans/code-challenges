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
// O(n) Time | O(n) Space
//  n = number of nodes in head
//  Algorithm scales linearly with input list size.

  if (!head) {
    return;
  }

  printLinkedListInReverse(head.getNext());

  head.printValue();
};

module.exports = {
  printLinkedListInReverse
};
