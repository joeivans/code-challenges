/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const deleteNodes = function (head, m, n) {
// O(n) Time | O(1) Space
//  n = number of nodes in head
//  Algorithm scales linearly with list size.

  let curr = head;
  while (curr) {
    for (let skip = 0; skip < m - 1 && curr && curr.next; skip++) {
      curr = curr.next;
    }

    for (let rem = 0; rem < n && curr && curr.next; rem++) {
      curr.next = curr.next.next;
    }

    curr = curr.next;
  }

  return head;
};

module.exports = {
  deleteNodes
};
