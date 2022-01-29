'use strict';

const search = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left + 1 < right) {
    let mid = (left + right) / 2;

    if (arr[mid] === target) return mid;
    else if (target < arr[mid]) right = mid;
    else left = mid;
  }

  if (arr[left] === target) return left;

  return -1;
};

module.exports = {
  search
};
