'use strict';

const {PairwiseDelta} = require('../index');

describe('Pairwise Delta', function () {
  let pairwiseDelta;

  beforeEach(() => {
    pairwiseDelta = new PairwiseDelta();
  });

  test('max delta of [1, 2, 3, 5] should return 2', function () {
    const result = pairwiseDelta.getMaxDelta([1, 2, 3, 5]);
    expect(result).toBe(2);
  });

  test('sum delta of [1, 2, 3, 5] should return 4', function () {
    const result = pairwiseDelta.getSumDelta([1, 2, 3, 5]);
    expect(result).toBe(4);
  });
});