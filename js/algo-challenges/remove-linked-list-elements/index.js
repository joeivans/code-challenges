/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
// O(n) Time | O(1) Space
//  n = number of nodes in list head
//  Algorithm scales linearly with input list size.

  const sentinel = {
    next: head
  };

  let curr = sentinel;
  while (curr) {
    while (curr.next && curr.next.val === val) {
      curr.next = curr.next.next;
    }

    curr = curr.next;
  }

  return sentinel.next;
};

module.exports = {
  removeElements
};
