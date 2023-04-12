/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
// O(m + n) Time | O(1) Space
//  m = headA.size
//  n = headB.size
//  Algorithm scales linearly with input list sizes.

  let currA = headA;
  let currB = headB;

  // currA == currB when null
  // currA == currB when ref equality
  //  which is required by problem statement
  while (currA !== currB) {
    currA = currA !== null ? currA.next : headB;
    currB = currB !== null ? currB.next : headA;
  }

  return currA;
};

module.exports = {
  getIntersectionNode
};
