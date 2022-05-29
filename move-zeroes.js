/*
 *   Topics: Array, Two Pointers
 *   Difficulty: Easy
 */

var moveZeroes = function(arr) {
  let curr = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      [arr[curr], arr[i]] = [arr[i], arr[curr]];
      curr++;
    }
  }

  return arr;
};
