# Implement Undo Functionality
- Learning

API:
- `insert(c : char) : void // appends char to text`
- `delete() : void // removes last char from text`
- `undo() : void // undoes the previous operation`

Implement the API with the following test harness:
- `performEditorActions(actions : string[][]) : string`

**Example 1:**
```
Input: actions = [['INSERT', 'a'], ['INSERT', 'b']]
Output: 'ab'
```

**Example 2:**
```
Input: actions = [['INSERT', 'a'], ['INSERT', 'b'], ['UNDO']]
Output: 'a'
```

**Example 3:**
```
Input: actions = [['INSERT', 'a'], ['UNDO']]
Output: ''
```

**Example 4:**
```
Input: actions = [['UNDO']]
Output: ''
```

**Example 5:**
```
Input: actions = [[]]
Output: ''
```

**Constraints:**
- `0 <= number of operations required <= 1000`
- All action arguments can be any ascii digit.

## Whiteboard
![Whiteboard Image][whiteboard-image]

<!-- Refs -->
[whiteboard-image]: whiteboard.jpg
