/*
 *   Topics: Array, Bit Manipulation
 *   Difficulty: Easy
 */

var singleNumber = function(arr) {
  let num = 0;
  for (let val of arr) {
    num ^= val;
  }
  return num;
};
