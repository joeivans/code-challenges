const {ListNode} = require('../../../../test-utilities/linked-lists');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const removeLinkedListTail = function (head) {
// O(n) Time | O(1) Space
//  n = number of nodes in head
//  Algorithm scales linearly with input list size.

  if (!head || !head.next) {
    return null;
  }

  let curr = head;

  while (curr.next.next) {
    curr = curr.next;
  }

  curr.next = curr.next.next;

  return head;
};

module.exports = {
  removeLinkedListTail
};
