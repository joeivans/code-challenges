/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
// O(n) Time | O(1) Space
//  n = head.length
//  Algorithm scales linearly with input list length.

  let a = null;
  let b = head;
  while (b) {
    const c = b.next;
    b.next = a;
    a = b;
    b = c;
  }

  return a;
};

module.exports = {
  reverseList
};
