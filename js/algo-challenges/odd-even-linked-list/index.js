/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function (head) {
// O(n) Time | O(1) Space | n = nodes in head

  if (!head) {
    return head;
  }

  // ensure head is not null or assign is NPE
  const evenHead = head.next;

  let odd = head;
  let even = head.next;

  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};

module.exports = {
  oddEvenList
};
