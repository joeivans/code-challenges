const {longestOnes} = require('../index');

describe('Max Consecutive Ones III', function () {

  it(`([1,1,1,0,0,0,1,1,1,1,0], 2) => 6`, function () {
    const result = longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2);
    expect(result).toEqual(6);
  });

  /*
  Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
  Output: 10
   */
  it(`([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3) => 10`, function () {
    const result = longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3);
    expect(result).toEqual(10);
  });

});
