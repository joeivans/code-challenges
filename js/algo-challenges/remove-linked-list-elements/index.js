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
// O(n) Time | O(1) Space | n = nodes in head

  const sentinel = {next: head};

  let curr = sentinel;
  while (curr.next) {
    if (curr.next.val === val) {
      const next = curr.next.next;
      curr.next.next = null;
      curr.next = next;
    } else {
      curr = curr.next;
    }
  }

  return sentinel.next;
};

module.exports = {
  removeElements
};
