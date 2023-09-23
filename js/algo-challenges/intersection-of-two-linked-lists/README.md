# 160. Intersection of Two Linked Lists
- Easy
- Apple
- Airbnb
- Microsoft

Given the heads of two singly linked-lists `headA` and `headB`, return the node
at which the two lists intersect. If the two linked lists have no intersection
at all, return `null`.

**Example 1:**
```
Input: listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
Output: 8

Explanation: The intersected node's value is 8 (note that this must not be 0 if
the two lists intersect).
From the head of A, it reads as [4,1,8,4,5].
From the head of B, it reads as [5,6,1,8,4,5].
There are 2 nodes before the intersected node in A; There are 3 nodes before the
intersected node in B.

- Note that the intersected node's value is not 1 because the nodes with value 1
in A and B (2nd node in A and 3rd node in B) are different node references. In
other words, they point to two different locations in memory, while the nodes
with value 8 in A and B (3rd node in A and 4th node in B) point to the same
location in memory.
```

**Example 2:**
```
Input: listA = [1,9,1,2,4], listB = [3,2,4]
Output: 2

Explanation: The intersected node's value is 2 (note that this must not be 0 if
the two lists intersect).
From the head of A, it reads as [1,9,1,2,4].
From the head of B, it reads as [3,2,4].
There are 3 nodes before the intersected node in A; There are 1 node before the
intersected node in B.
```

**Example 3:**
```
Input: listA = [2,6,4], listB = [1,5]
Output: No intersection

Explanation: From the head of A, it reads as [2,6,4].
From the head of B, it reads as [1,5].
The two lists do not intersect, so return null.
```

**Constraints:**
- The number of nodes of `listA` is in the `m`.
- The number of nodes of `listB` is in the `n`.
- `1 <= m, n <= 3 * 10^4`
- `1 <= Node.val <= 10^5`

**Follow up:** Could you write a solution that runs in `O(m + n)` time and use
only `O(1)` memory?

## Whiteboard
![Whiteboard Image 01][whiteboard-image-01]

<!-- Refs -->
[whiteboard-image-01]: whiteboard-01.jpg
