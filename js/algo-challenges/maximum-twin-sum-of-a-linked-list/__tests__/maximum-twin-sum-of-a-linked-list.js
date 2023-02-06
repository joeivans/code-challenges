const {pairSum} = require('../index');

describe('Sentence Similarity', function () {
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

  it(`[5, 4, 2, 1] => 6`, function () {
    let head = toList([5, 4, 2, 1]);
    expect(toArray(head)).toEqual([5, 4, 2, 1]);
    const result = pairSum(head);
    expect(result).toEqual(6);
    // expect(toArray(head)).toEqual([5, 4, 2, 1]);
  });

  it(`[4, 2, 2, 3] => 7`, function () {
    let head = toList([4, 2, 2, 3]);
    expect(toArray(head)).toEqual([4, 2, 2, 3]);
    const result = pairSum(head);
    expect(result).toEqual(7);
    // expect(toArray(head)).toEqual([4, 2, 2, 3]);
  });

  it(`[1, 100000] => 100001`, function () {
    let head = toList([1, 100000]);
    expect(toArray(head)).toEqual([1, 100000]);
    const result = pairSum(head);
    expect(result).toEqual(100001);
    // expect(toArray(head)).toEqual([1, 100000]);
  });

  it(`[1, 2, 3, 4, 5, 6] => 7`, function () {
    const result = pairSum(toList([1, 2, 3, 4, 5, 6]));
    expect(result).toEqual(7);
  });

  it(`[1, 2, 3, 6, 5, 4] => 9`, function () {
    const result = pairSum(toList([1, 2, 3, 6, 5, 4]));
    expect(result).toEqual(9);
  });
});
