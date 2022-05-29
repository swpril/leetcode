/*
 *   Topics: Array, Dynamic Programming, Divide & Conquer
 *   Difficulty: Easy
 */

// Kadane's Algo
var maxSubArray = function(arr) {
  let sum = 0;
  let maxSum = -Infinity;

  for (let num of arr) {
    sum += num;
    maxSum = Math.max(sum, maxSum);

    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};
