/*
 *   Topics: Array, Hash table
 *   Difficulty: Easy
 */

var twoSum = function(arr, target) {
  const map = arr.reduce((acc, curr, index) => {
    acc[curr] = index;
    return acc;
  }, {});

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    const rem = target - arr[i];
    if (map.hasOwnProperty(rem) && i !== map[rem]) {
      res = [i, map[rem]];
      break;
    }
  }
  return res;
};
