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
// O(n) Time | O(1) Space | n = nodes in head

  let curr = head;

  while (curr?.next) {
    if (curr.val === curr.next.val) {
      const next = curr.next.next;
      curr.next.next = null;
      curr.next = next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};

module.exports = {
  deleteDuplicates
};
