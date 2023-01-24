const {mostWordsFound} = require('../index');

describe('Maximum Number of Words Found in Sentences', function () {

  it(`['alice and bob love leetcode', 'i think so too', 'this is great thanks very much'] => 6`,
    function () {
      const result = mostWordsFound([
        'alice and bob love leetcode',
        'i think so too',
        'this is great thanks very much']);

      expect(result).toBe(6);
    });

  it(`['please wait', 'continue to fight', 'continue to win'] => 3`, function () {
    const result = mostWordsFound(['please wait', 'continue to fight', 'continue to win']);

    expect(result).toBe(3);
  });
});
