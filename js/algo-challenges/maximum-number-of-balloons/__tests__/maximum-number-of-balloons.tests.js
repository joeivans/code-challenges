const {maxNumberOfBalloons} = require('../index');

describe('Maximum Number of Balloons', function () {

  it(`'nlaebolko' => 1`, function () {
    const result = maxNumberOfBalloons('nlaebolko');
    expect(result).toEqual(1);
  });

  it(`'loonbalxballpoon' => 2`, function () {
    const result = maxNumberOfBalloons('loonbalxballpoon');
    expect(result).toEqual(2);
  });

  it(`'leetcode' => 0`, function () {
    const result = maxNumberOfBalloons('leetcode');
    expect(result).toEqual(0);
  });

});
