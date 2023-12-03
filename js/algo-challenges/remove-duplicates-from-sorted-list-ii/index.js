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

  const sentinel = {next: head};

  let prev = sentinel;
  let curr = sentinel.next;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      while (curr.next && curr.val === curr.next.val) {
        const next = curr.next.next;
        curr.next.next = null;
        curr.next = next;
      }

      curr = curr.next;
      prev.next.next = null;
      prev.next = curr;
    } else {
      prev = prev.next;
      curr = curr.next;
    }
  }

  return sentinel.next;
};

module.exports = {
  deleteDuplicates
};
