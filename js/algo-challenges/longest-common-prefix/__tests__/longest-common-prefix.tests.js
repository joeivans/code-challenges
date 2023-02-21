const {longestCommonPrefix} = require('../index');

describe('Longest Common Prefix', function () {
  it(`['flower', 'flow', 'flight'] => 'fl'`, function () {
    const result = longestCommonPrefix(['flower', 'flow', 'flight']);
    expect(result).toEqual('fl');
  });

  it(`['dog', 'racecar', 'car'] => ''`, function () {
    const result = longestCommonPrefix(['dog', 'racecar', 'car']);
    expect(result).toEqual('');
  });

  it(`[''] => ''`, function () {
    const result = longestCommonPrefix(['']);
    expect(result).toEqual('');
  });

  it(`['helloworld'] => 'helloworld'`, function () {
    const result = longestCommonPrefix(['helloworld']);
    expect(result).toEqual('helloworld');
  });

  it(`['helloworld', 'hellscape'] => 'hell'`, function () {
    const result = longestCommonPrefix(['helloworld', 'hellscape']);
    expect(result).toEqual('hell');
  });

  it(`['helloworld', 'helloworld', 'helloworld'] => 'helloworld'`, function () {
    const result = longestCommonPrefix(['helloworld', 'helloworld', 'helloworld']);
    expect(result).toEqual('helloworld');
  });
});
