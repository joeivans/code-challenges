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
const deleteDuplicatesUnsorted = function (head) {
// O(n) Time | O(n) Space | n = nodes in head

  const sentinel = {next: head};
  const map = new Map();

  let prev = sentinel;
  let curr = sentinel.next;

  while (curr) {
    map.set(
      curr.val,
      map.get(curr.val) + 1 || 1
    );

    curr = curr.next;
  }

  curr = sentinel.next;

  while (curr) {
    if (map.get(curr.val) > 1) {
      prev.next = curr.next;
      curr.next = null;
      curr = prev.next;
    } else {
      prev = prev.next;
      curr = curr.next;
    }
  }

  return sentinel.next;
};

module.exports = {
  deleteDuplicatesUnsorted
};
