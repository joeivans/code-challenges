const {findMaxConsecutiveOnes} = require('../index');

describe('Max Consecutive Ones II', function () {

  it(`[1,0,1,1,0] => 4`, function () {
    const result = findMaxConsecutiveOnes([1,0,1,1,0]);
    expect(result).toEqual(4);
  });

  it(`[1,0,1,1,0,1] => 4`, function () {
    const result = findMaxConsecutiveOnes([1,0,1,1,0,1]);
    expect(result).toEqual(4);
  });

});
