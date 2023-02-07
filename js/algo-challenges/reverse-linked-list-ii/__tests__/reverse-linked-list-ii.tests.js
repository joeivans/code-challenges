const {reverseBetween} = require('../index');

describe('Reverse Linked List II', function () {
  /**
   * @param {number[]} arr
   * @return {ListNode}
   */
  function toList(arr) {
    const head = {next: null};

    let curr = head;
    for (const val of arr) {
      const newNode = {val, next: null};
      curr.next = newNode;
      curr = newNode;
    }

    return head.next;
  }

  function toArray(listHead) {
    const arr = [];

    let curr = listHead;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }

    return arr;
  }

  it(`([1, 2, 3, 4, 5]), 2, 4) => [1, 4, 3, 2, 5]`, function () {
    const result = reverseBetween(toList([1, 2, 3, 4, 5]), 2, 4);
    expect(result).toEqual(toList([1, 4, 3, 2, 5]));
  });

  it(`([5]), 1, 1) => [5]`, function () {
    const result = reverseBetween(toList([5]), 1, 1);
    expect(result).toEqual(toList([5]));
  });

  it(`([1, 2, 3, 4, 5]), 1, 5) => [5, 4, 3, 2, 1]`, function () {
    const result = reverseBetween(toList([1, 2, 3, 4, 5]), 1, 5);
    expect(result).toEqual(toList([5, 4, 3, 2, 1]));
  });
});
