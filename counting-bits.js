/*
 *   Topics: DP, Bit manipulation
 *   Difficulty: Easy
 */

var countBits = function(n) {
  const res = [0];
  for (let i = 1; i <= n; i++) {
    res[i] = res[i & (i - 1)] + 1;
  }
  return res;
};
