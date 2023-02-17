const {reverseOnlyLetters} = require('../index');

describe('Reverse Only Letters', function () {
  it(`'ab-cd' => 'dc-ba'`, function () {
    const result = reverseOnlyLetters('ab-cd');
    expect(result).toEqual('dc-ba');
  });

  it(`'Test1ng-Leet=code-Q!' => 'Qedo1ct-eeLg=ntse-T!'`, function () {
    const result = reverseOnlyLetters('Test1ng-Leet=code-Q!');
    expect(result).toEqual('Qedo1ct-eeLg=ntse-T!');
  });
});
