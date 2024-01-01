# Insert Value at List Position K
- Easy

Given the `head` of a linked list, a `value`, and `k` position, insert `value`
to the list at position `k` and return the modified list as `head`.

**Example 1:**
```
Input: head = ['a','b','c'], value = 'q', k = 2
Output: ['a','b','q','c']
Explanation: Kth position is 2, which pushes 'c' forward.
```

**Example 2:**
```
Input: head = ['a'], value = 'q', k = 0
Output: ['q','a']
```

**Example 3:**
```
Input: head = ['a'], value = 'q', k = 1
Output: ['a','q']
```

**Example 4:**
```
Input: head = null, value = 'q', k = 1
Output: ['q']
```

**Constraints:**
- `value` is not `null`.
- `1 <= k <= 10^4`

## Whiteboard
Attempt 1:
![Whiteboard Image 01][whiteboard-image-01]

<!-- Refs -->
[whiteboard-image-01]: whiteboard-01.jpg
