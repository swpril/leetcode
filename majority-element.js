/*
 *   Topics: Array, Hash Table, Divide & Conquer, Sorting, Counting
 *   Difficulty: Easy
 */

// Moore's Voting Algo
var majorityElement = function(arr) {
  let count = 0;
  let ele = 0;
  for (let val of arr) {
    if (!count) {
      ele = val;
    }

    count = ele === val ? count + 1 : count - 1;
  }

  return ele;
};
