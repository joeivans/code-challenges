const {dailyTemperatures} = require('../index');

describe('Daily Temperatures', function () {

  it(`[73, 74, 75, 71, 69, 72, 76, 73] => [1, 1, 4, 2, 1, 1, 0, 0]`, function () {
    const result = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
    expect(result).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  it(`[30, 40, 50, 60] => [1, 1, 1, 0]`, function () {
    const result = dailyTemperatures([30, 40, 50, 60]);
    expect(result).toEqual([1, 1, 1, 0]);
  });

  it(`[30, 60, 90] => [1, 1, 0]`, function () {
    const result = dailyTemperatures([30, 60, 90]);
    expect(result).toEqual([1, 1, 0]);
  });
});
