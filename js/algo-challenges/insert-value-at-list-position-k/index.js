const {ListNode} = require('../../test-utilities/linked-lists');
/**
 * @param {ListNode} head
 * @param {any} value
 * @param {number} k
 * @return {ListNode}
 */
const insertAt = function (head, value, k) {
  // O(n) Time | O(1) Space | n = nodes in head

  // guards
  if (!head) {
    return new ListNode(value);
  }

  const sentinel = new ListNode(null, head);

  let node = sentinel;
  for (let i = 0; i < k && node.next; i++) {
    node = node.next;
  }

  node.next = new ListNode(value, node.next);

  return sentinel.next;
};

module.exports = {
  insertAt
};
