/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
// O(n) Time | O(1) Space
//  n = number of nodes in list
//  Algorithm scales linearly with list size.

  if (!head.next) {
    return null;
  }

  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  if (!fast) {
    head = slow.next;
  } else {
    slow.next = slow.next.next;
  }

  return head;
};

module.exports = {
  removeNthFromEnd
};
