const {getIntersectionNode} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Intersection of Two Linked Lists', function () {
  it(`([4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5]) => [8, 4, 5]`, function () {
    const common = {
      val: 8,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    };
    const a = toList([4, 1]);
    const b = toList([5, 6, 1]);
    a.next = common;
    b.next = common;
    const result = getIntersectionNode(a, b);
    expect(result).toEqual(toList([8, 4, 5]));
  });

  it(`([1, 9, 1, 2, 4], [3, 2, 4]) => [2, 4]`, function () {
    const common = {
      val: 2,
      next: {
        val: 4,
        next: null
      }
    };
    const a = toList([1, 9, 1]);
    const b = toList([3]);
    a.next = common;
    b.next = common;
    const result = getIntersectionNode(a, b);
    expect(result).toEqual(toList([2, 4]));
  });

  it(`([2, 6, 4], [1, 5]) => null`, function () {
    const a = toList([2, 6, 4]);
    const b = toList([1, 5]);
    const result = getIntersectionNode(a, b);
    expect(result).toEqual(null);
  });
});
