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
const swapPairs = function (head) {
// O(n) Time | O(1) Space
//  n = head.length
//  Algorithm scales linearly with input list size.

  const dummy = {next: head};

  let a = dummy;
  while (a.next && a.next.next) {
    const b = a.next;
    const c = a.next.next;
    const d = c.next;

    a.next = c;
    c.next = b;
    b.next = d;

    a = b;
  }

  return dummy.next;
};

module.exports = {
  swapPairs
};
