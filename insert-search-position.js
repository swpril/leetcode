/*
 *   Topics: Array, Binary Search
 *   Difficulty: Easy
 */

const binarySearch = (arr, lo, hi, target) => {
  if (target < arr[0]) {
    return 0;
  } else if (target > arr[arr.length - 1]) {
    return arr.length;
  }
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (arr[mid] > target) {
      hi = mid - 1;
    } else if (arr[mid] < target) {
      lo = mid + 1;
    }
    if (arr[mid] < target && target < arr[mid + 1]) {
      return mid + 1;
    }
  }
  return -1;
};

var searchInsert = function(arr, target) {
  return binarySearch(arr, 0, arr.length - 1, target);
};
