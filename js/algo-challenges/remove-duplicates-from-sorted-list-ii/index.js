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
const deleteDuplicates = function (head) {
// O(n) Time | O(1) Space
//  n = head length
//  Algorithm scales linearly with input list size.

  const sentinel = {next: head};

  let pre = sentinel;
  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }

      pre.next = head.next;
    } else {
      pre = pre.next;
    }

    head = head.next;
  }

  return sentinel.next;
};

module.exports = {
  deleteDuplicates
};
