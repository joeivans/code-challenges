const {reverseWords} = require('../index');

describe('Reverse Words in a String III', function () {
  it(`'Let\'s take LeetCode contest' => 's\'teL ekat edoCteeL tsetnoc'`, function () {
    const result = reverseWords('Let\'s take LeetCode contest');
    expect(result).toEqual('s\'teL ekat edoCteeL tsetnoc');
  });

  it(`'God Ding' => 'doG gniD'`, function () {
    const result = reverseWords('God Ding');
    expect(result).toEqual('doG gniD');
  });
});
