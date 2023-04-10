/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function(head, left, right) {
/*
 * O(n) Time | O(1) Space
 *  n = input list length
 *  Algorithm scales linearly with input list size.
 */

  const sentinel = { next: head };

  let before = sentinel;
  for (let i = 1; i < left; i++) {
    before = before.next;
  }

  let previous = before;
  let current = before.next;
  for (let i = left; i <= right; i++) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  before.next.next = current;
  before.next = previous;

  return sentinel.next;
};

module.exports = {
  reverseBetween
};
