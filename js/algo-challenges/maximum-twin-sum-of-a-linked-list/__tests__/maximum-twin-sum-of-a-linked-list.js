const {pairSum} = require('../index');
const {toList} = require('../../../test-utilities/linked-lists');

describe('Sentence Similarity', function () {

  it(`[5, 4, 2, 1] => 6`, function () {
    const result = pairSum(toList([5, 4, 2, 1]));
    expect(result).toEqual(6);
  });

  it(`[4, 2, 2, 3] => 7`, function () {
    const result = pairSum(toList([4, 2, 2, 3]));
    expect(result).toEqual(7);
  });

  it(`[1, 100000] => 100001`, function () {
    const result = pairSum(toList([1, 100000]));
    expect(result).toEqual(100001);
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
