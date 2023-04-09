/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function (head) {
// O(n) Time | O(1) Space
//  n = number of nodes in list head
//  Algorithm scales linearly with input list size.

  let decimal = 0;
  const base = 2;

  while (head) {
    decimal = decimal * base + head.val;
    head = head.next;
  }

  return decimal;
};

module.exports = {
  getDecimalValue
};
