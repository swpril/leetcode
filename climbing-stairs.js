/*
 *   Topics: Math, DP, Memoization
 *   Difficulty: Easy
 */

var climbStairs = function(n) {
  if (n <= 3) {
    return n;
  }

  let a = 1;
  let b = 2;
  let res = a + b;

  for (let i = 3; i < n; i++) {
    a = b;
    b = res;
    res = a + b;
  }
  return res;
};
