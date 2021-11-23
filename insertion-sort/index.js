function insertionSort(arr) {
  /*
    InsertionSort(int[] arr)

    FOR i = 1 to arr.length

    int j <-- i - 1
    int temp <-- arr[i]

    WHILE j >= 0 AND temp < arr[j]
    arr[j + 1] <-- arr[j]
    j <-- j - 1

    arr[j + 1] <-- temp
  */

  for (let right = 1; right < arr.length; right++) {
    let left = right - 1;
    const temp = arr[right];

    while (left >= 0 && temp < arr[left]) {
      arr[left + 1] = arr[left];
      left -= 1;
    }

    arr[left + 1] = temp;
  }
}

module.exports = insertionSort;
