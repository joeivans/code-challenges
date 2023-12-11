# 643. Maximum Average Subarray I
- Easy
- Facebook
- Google

You are given an integer array `nums` consisting of `n` elements, and an integer
`k`.

Find a contiguous subarray whose length is equal to `k` that has the maximum
average value and return this value. Any answer with a calculation error less
than `10^-5` will be accepted.

**Example 1:**
```
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
```

**Example 2:**
```
Input: nums = [5], k = 1
Output: 5.00000
```

**Constraints:**
- `n == nums.length`
- `1 <= k <= n <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## Whiteboard
Attempt 2:
![Whiteboard Image-02][whiteboard-image-02]

Attempt 1:
![Whiteboard Image-01][whiteboard-image-01]

<!-- Refs -->
[whiteboard-image-01]: whiteboard-01.jpg
[whiteboard-image-02]: whiteboard-02.jpg
