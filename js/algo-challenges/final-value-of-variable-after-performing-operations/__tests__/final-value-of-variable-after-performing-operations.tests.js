'use strict';

const {finalValueAfterOperations} = require('../index');

describe('Final Value After Operations', function () {

  it(`['--X', 'X++', 'X++'] => 1`, function () {
    const result = finalValueAfterOperations(['--X', 'X++', 'X++']);

    expect(result).toBe(1);
  });

  it(`['++X', '++X', 'X++'] => 3`, function () {
    const result = finalValueAfterOperations(['++X', '++X', 'X++']);

    expect(result).toBe(3);
  });

  it(`['X++', '++X', '--X', 'X--'] => 0`, function () {
    const result = finalValueAfterOperations(['X++', '++X', '--X', 'X--']);

    expect(result).toBe(0);
  });

});
