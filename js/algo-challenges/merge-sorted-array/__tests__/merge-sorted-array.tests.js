const {merge} = require('../index');

describe('Merge Sorted Array', function () {
  /*
  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  Output: [1,2,2,3,5,6]
   */
  it(`([1,2,3,0,0,0], 3, [2,5,6], 3) => [1,2,2,3,5,6]`, function () {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const result = merge(nums1, 3, [2, 5, 6], 3);
    expect(result).toEqual(undefined);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  /*
  Input: nums1 = [1], m = 1, nums2 = [], n = 0
  Output: [1]
  */
  it(`([1], 1, [], 0) => [1]`, function () {
    const nums1 = [1];
    const result = merge(nums1, 1, [], 0);
    expect(result).toEqual(undefined);
    expect(nums1).toEqual([1]);
  });


  /*
  Input: nums1 = [0], m = 0, nums2 = [1], n = 1
  Output: [1]
   */
  it(`([0], 0, [1], 1) => [1]`, function () {
    const nums1 = [0];
    const result = merge(nums1, 0, [1], 1);
    expect(result).toEqual(undefined);
    expect(nums1).toEqual([1]);
  });
});
