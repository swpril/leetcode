/*
 *   Topics: Tree, DFS
 *   Difficulty: Easy
 */

var diameterOfBinaryTree = function(root) {
  let MAX = 0;
  (function height(head) {
    if (!head) {
      return 0;
    }

    let left = height(head.left);
    let right = height(head.right);
    let current = left + right;
    MAX = Math.max(MAX, current);
    return Math.max(left, right) + 1;
  })(root);

  return MAX;
};
