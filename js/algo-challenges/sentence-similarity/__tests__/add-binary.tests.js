const {areSentencesSimilar} = require('../index');

describe('Sentence Similarity', function () {
  it(`(['great', 'acting', 'skills'],
      ['fine', 'drama', 'talent'],
      [['great', 'fine'], ['drama', 'acting'], ['skills', 'talent']]) => true`, function () {
    const result = areSentencesSimilar(
      ['great', 'acting', 'skills'],
      ['fine', 'drama', 'talent'],
      [['great', 'fine'], ['drama', 'acting'], ['skills', 'talent']]);
    expect(result).toEqual(true);
  });

  it(`(['great'],
      ['great'],
      []) => true`, function () {
    const result = areSentencesSimilar(
      ['great'],
      ['great'],
      []);
    expect(result).toEqual(true);
  });

  it(`(['great'],
      ['doubleplus', 'good'],
      [['great', 'doubleplus']]) => false`, function () {
    const result = areSentencesSimilar(
      ['great'],
      ['doubleplus', 'good'],
      [['great', 'doubleplus']]);
    expect(result).toEqual(false);
  });

  it(`(['a', 'c'],
      ['b', 'e'],
      [['a', 'b'], ['c', 'd'], ['e', 'c']]) => true`, function () {
    const result = areSentencesSimilar(
      ['a', 'c'],
      ['b', 'e'],
      [['a', 'b'], ['c', 'd'], ['e', 'c']]);
    expect(result).toEqual(true);
  });
});
