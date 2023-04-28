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
const reverseList = function(head) {
// O(n) Time | O(n) Space
//  n = number of nodes in list
//  Algorithm scales linearly with input list size.

  // base case
  if (!head || !head.next) {
    return head;
  }

  // recursive case
  // - stack to penultimate node and save it
  // - its next needs to be this node
  // - this node's next needs to be cleared, null
  // - head of new list is the ultimate node
  const result = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return result;
};

module.exports = {
  reverseList
};
