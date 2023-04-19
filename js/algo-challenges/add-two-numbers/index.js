/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
// O(n) Time | O(n) Space
//  n = max(l1.size, l2.size)
//  Algorithm scales linearly with the larger input list size.

  const sentinelResult = {
    next: null
  };
  let remainder = 0;

  let currSentinel = sentinelResult;
  while (l1 && l2) {
    let sum = l1.val + l2.val + remainder;
    if (sum > 9) {
      remainder = 1;
      sum -= 10;
    } else {
      remainder = 0;
    }
    currSentinel.next = {
      val: sum,
      next: null
    };
    //
    //
    l1 = l1.next;
    l2 = l2.next;
    currSentinel = currSentinel.next;
  }

  while (l1) {
    let sum = l1.val + remainder;
    if (sum > 9) {
      remainder = 1;
      sum -= 10;
    } else {
      remainder = 0;
    }
    currSentinel.next = {
      val: sum,
      next: null
    };
    //
    //
    l1 = l1.next;
    currSentinel = currSentinel.next;
  }

  while (l2) {
    let sum = l2.val + remainder;
    if (sum > 9) {
      remainder = 1;
      sum -= 10;
    } else {
      remainder = 0;
    }
    currSentinel.next = {
      val: sum,
      next: null
    };
    //
    //
    l2 = l2.next;
    currSentinel = currSentinel.next;
  }

  if (remainder > 0) {
    currSentinel.next = {
      val: remainder,
      next: null
    };
  }

  return sentinelResult.next;
};

module.exports = {
  addTwoNumbers
};
