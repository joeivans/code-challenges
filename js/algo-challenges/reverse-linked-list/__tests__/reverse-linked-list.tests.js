const {reverseList} = require('../index');

describe('Reverse Linked List', function () {
  /**
   * @param {number[]} arr
   * @return {ListNode}
   */
  function toList(arr) {
    const head = {next: null};

    let curr = head;
    for (const item of arr) {
      const newNode = {
        val: item,
        next: null
      };
      curr.next = newNode;
      curr = curr.next;
    }

    return head.next;
  }

  it(`[1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]`, function () {
    const result = reverseList(toList([1, 2, 3, 4, 5]));
    expect(result).toEqual(toList([5, 4, 3, 2, 1]));
  });

  it(`[1, 2] => [2, 1]`, function () {
    const result = reverseList(toList([1, 2]));
    expect(result).toEqual(toList([2, 1]));
  });

  it(`[] => []`, function () {
    const result = reverseList(toList([]));
    expect(result).toEqual(toList([]));
  });
});
