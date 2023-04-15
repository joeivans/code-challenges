/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
// O(1) Time | O(1) Space
//  Algorithm does not scale with input size.

  node.val = node.next.val;
  node.next = node.next.next;
};

module.exports = {
  deleteNode
};
