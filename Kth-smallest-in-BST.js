/*
 *   Topics: Tree, DFS, BFS, BST
 *   Difficulty: Medium
 */

var kthSmallest = function(root, k) {
  const arr = [];

  (function inOrder(head, count = 0) {
    if (!!head) {
      inOrder(head.left);
      arr.push(head.val);
      inOrder(head.right);
    }
  })(root);

  return arr[k - 1];
};
