# Insertion Sort

The goal of insertion sort is to sort an array.

## Pseudocode

``` pseudocode
InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

## Algorithm

## Test Case Inputs and Expected Outputs

| Test Description | Test Case Input | Expected Output |
|-----|-----|-----|
| Random sorted | [8,4,23,42,16,15] | [4, 8, 15, 16, 23, 42] |
| Reverse sorted | [20,18,12,8,5,-2] | [-2, 5, 8, 12, 18, 20] |
| Few uniques | [5,12,7,5,5,7] | [5, 5, 5, 7, 7, 12] |
| Nearly sorted | [2,3,5,7,13,11] | [2, 3, 5, 7, 11, 13] |
