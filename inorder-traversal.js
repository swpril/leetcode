/*
 *   Topics: Tree, DFS, Stack, Binary Tree
 *   Difficulty: Easy
 */

var inOrderTraversal = function(root) {
  const res = [];
  (function inOrder(parent) {
    if (parent) {
      inOrder(parent.left);
      res.push(parent.val);
      inOrder(parent.right);
    }
  })(root);

  return res;
};
