/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
// O(n) Time | O(1) Space
//  n = number of nodes in head
//  Algorithm scales linearly with input list size.

  let cycleNode = getCycleNodeOrNull(head);

  if (!cycleNode) {
    return null;
  }

  while (head !== cycleNode) {
    head = head.next;
    cycleNode = cycleNode.next;
  }

  return head;
};

const getCycleNodeOrNull = function (head) {
  // if fast == slow, the pointers have cycled.
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    head = head.next;

    if (head === fast) {
      return head;
    }
  }

  return null;
};

module.exports = {
  detectCycle
};
