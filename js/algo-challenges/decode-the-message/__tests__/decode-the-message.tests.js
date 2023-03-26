const {decodeMessage} = require('../index');

describe('Decode the Message', function () {
  it(`('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv')
    => 'this is a secret'`, function () {
    const result = decodeMessage(
      'the quick brown fox jumps over the lazy dog',
      'vkbs bs t suepuv');
    expect(result).toEqual('this is a secret');
  });

  it(`('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb')
    => 'the five boxing wizards jump quickly'`, function () {
    const result = decodeMessage(
      'eljuxhpwnyrdgtqkviszcfmabo',
      'zwx hnfx lqantp mnoeius ycgk vcnjrdb');
    expect(result).toEqual('the five boxing wizards jump quickly');
  });
});
