const {ListNode} = require('../../../test-utilities/linked-lists');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const removeLinkedListTail = function (head) {
// O(n) Time | O(1) Space
//  n = number of nodes in head
//  Algorithm scales linearly with input list size.

  const sentinel = new ListNode(null, head);

  let curr = sentinel;

  while (curr.next && curr.next.next) {
    curr = curr.next;
  }

  if (curr.next) {
    curr.next = curr.next.next;
  }

  return sentinel.next;
};

module.exports = {
  removeLinkedListTail
};
