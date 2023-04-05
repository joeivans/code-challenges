const {deleteMiddle} = require('../index');

/**
 * @param {number[]} arr
 */
const toList = function (arr) {
  if (arr.length === 0) {
    return null;
  }

  const head = {};

  let next = head;
  let previous = head;
  for (const item of arr) {
    previous = next;
    next.val = item;
    next.next = {};

    next = next.next;
  }

  previous.next = null;

  return head;
};

const toArray = function (list) {
  if (!list) {
    return [];
  }

  const arr = [];

  while (list) {
    arr.push(list.val);
    list = list.next;
  }

  return arr;
};

describe('Delete the Middle Node of a Linked List', function () {
  it(`[1, 3, 4, 7, 1, 2, 6] => [1, 3, 4, 1, 2, 6]`, function () {
    const result = deleteMiddle(toList([1, 3, 4, 7, 1, 2, 6]));
    expect(toArray(result)).toEqual([1, 3, 4, 1, 2, 6]);
  });

  it(`[1, 2, 3, 4] => [1, 2, 4]`, function () {
    const result = deleteMiddle(toList([1, 2, 3, 4]));
    expect(toArray(result)).toEqual([1, 2, 4]);
  });

  it(`[2, 1] => [2]`, function () {
    const result = deleteMiddle(toList([2, 1]));
    expect(toArray(result)).toEqual([2]);
  });

  it(`[2] => []`, function () {
    const result = deleteMiddle(toList([2]));
    expect(toArray(result)).toEqual([]);
  });

  it(`[3, 2, 1] => [3, 1]`, function () {
    const result = deleteMiddle(toList([3, 2, 1]));
    expect(toArray(result)).toEqual([3, 1]);
  });
});
