const insertionSortFunc = require('./index');

describe('Insertion sort', () => {
  it('should sort array elements least-to-greatest', () => {
    const randomSorted = [8, 4, 23, 42, 16, 15];
    const reverseSorted = [20, 18, 12, 8, 5, -2];
    const fewUniques = [5, 12, 7, 5, 5, 7];
    const nearlySorted = [2, 3, 5, 7, 13, 11];

    insertionSortFunc(randomSorted);
    insertionSortFunc(reverseSorted);
    insertionSortFunc(fewUniques);
    insertionSortFunc(nearlySorted);

    expect(randomSorted).toEqual([4, 8, 15, 16, 23, 42]);
    expect(reverseSorted).toEqual([-2, 5, 8, 12, 18, 20]);
    expect(fewUniques).toEqual([5, 5, 5, 7, 7, 12]);
    expect(nearlySorted).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
