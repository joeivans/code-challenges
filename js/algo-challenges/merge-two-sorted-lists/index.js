/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
// O(m) Time | O(m) Space
//  m = number of nodes in list1 + list2
//  Algorithm scales linearly with input list sizes.

  const list3 = {
    next: null
  };

  let a = list1;
  let b = list2;
  let c = list3;

  while (a && b) {
    if (a.val < b.val) {
      c.next = a;
      a = a.next;
    } else {
      c.next = b;
      b = b.next;
    }

    c = c.next;
  }

  c.next = a || b;

  return list3.next;
};

module.exports = {
  mergeTwoLists
};
