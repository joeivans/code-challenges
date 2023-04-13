/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
// O(n) Time | O(1) Space
//  n = number of nodes in list head
//  Algorithm scales linearly with input list size.

  // guard clause - single node list
  //
  if (!head.next) {
    return true;
  }

  // find last node in first half of list
  //
  const slow = findLastNodeInFirstHalfOfList(head);

  // reverse second half of list
  //
  reverseSecondHalfOfList(slow);

  // iterate 2 pointers starting first half and starting second half
  // return false if pointer values don't match
  //
  let p1 = head;
  let p2 = slow.next;
  while (p1 !== slow.next) {
    if (p1.val !== p2.val) {
      return false;
    }

    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
};

const findLastNodeInFirstHalfOfList = function (head) {
  let slow = head;
  let fast = head.next;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const reverseSecondHalfOfList = function (lastNodeInFirstHalf) {
  let prev = lastNodeInFirstHalf;
  let curr = prev.next;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  lastNodeInFirstHalf.next = prev;
};

module.exports = {
  isPalindrome
};
