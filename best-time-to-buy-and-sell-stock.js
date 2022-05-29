/*
 *   Topics: Array, DP
 *   Difficulty: Easy
 */

var maxProfit = function(prices) {
  let res = 0;
  let currMax = -Infinity;

  for (let i = prices.length - 1; i >= 1; i--) {
    currMax = Math.max(prices[i], currMax);
    if (currMax - prices[i - 1] > res) {
      res = currMax - prices[i - 1];
    }
  }

  return res;
};
