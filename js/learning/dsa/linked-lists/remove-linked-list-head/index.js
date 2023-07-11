const {ListNode} = require('../../../../test-utilities/linked-lists');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const removeLinkedListHead = function (head) {
// O(n) Time | O(1) Space
//  n = number of nodes in head
//  Algorithm scales linearly with input list size.

  if (!head) {
    return null;
  }

  return head?.next;
};

module.exports = {
  removeLinkedListHead
};
