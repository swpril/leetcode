/*
 *   Topics: Tree, DFS, BFS, Binary Tree
 *   Difficulty: Easy
 */

var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  const max = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  return max;
};
