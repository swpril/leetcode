/*
 *   Topics: String, Stack
 *   Difficulty: Easy
 */

var isValid = function(s) {
  const stack = [];

  const CO = '{';
  const CC = '}';
  const PO = '(';
  const PC = ')';
  const SO = '[';
  const SC = ']';

  for (let char of s) {
    if (char === CO || char === PO || char === SO) {
      stack.push(char);
    } else if (
      (char === CC && stack[stack.length - 1] !== CO) ||
      (char === PC && stack[stack.length - 1] !== PO) ||
      (char === SC && stack[stack.length - 1] !== SO)
    ) {
      return false;
    } else if (
      (char === CC && stack[stack.length - 1] === CO) ||
      (char === SC && stack[stack.length - 1] === SO) ||
      (char === PC && stack[stack.length - 1] === PO)
    ) {
      stack.pop();
    }
  }
  return !stack.length;
};
