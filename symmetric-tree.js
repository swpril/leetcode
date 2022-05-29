/*
 *   Topics: Tree, DFS, BFS
 *   Difficulty: Easy
 */

const isValid = (left, right) => {
  if (!left || !right) {
    return left === right;
  }

  return (
    left.val === right.val &&
    isValid(left.left, right.right) &&
    isValid(left.right, right.left)
  );
};
var isSymmetric = function(root) {
  if (!root) return true;
  return isValid(root.left, root.right);
};
