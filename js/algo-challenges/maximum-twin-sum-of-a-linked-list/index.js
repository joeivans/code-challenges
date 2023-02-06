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
const pairSum = function (head) {
  /*
   * O(n) Time | O(1) Space
   *  n = list length
   *  Algorithm scales linearly with input list length.
   */

  let max = 0;

  let reversedMiddle = reverse(getMiddleNode(head));

  while (reversedMiddle) {
    const aValue = head.val;
    const bValue = reversedMiddle.val;

    if (aValue + bValue > max) {
      max = aValue + bValue;
    }

    head = head.next;
    reversedMiddle = reversedMiddle.next;
  }

  return max;

  function getMiddleNode(head) {
    let middle = head;
    let end = head;

    while (end && end.next) {
      middle = middle.next;
      end = end.next.next;
    }

    return middle;
  }

  function reverse(head) {
    let a = null;
    let b = head;
    while (b) {
      // a     b  c
      // null  1->2->null
      //       a  b  c
      // null<-1  2->null
      //          a  bc
      // null<-1<-2  null
      const c = b.next;
      b.next = a;
      a = b;
      b = c;
    }

    return a;
  }
};

module.exports = {
  pairSum
};
