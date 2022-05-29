/*
 *   Topics: Hash Table, Two Pointers, Linked List
 *   Difficulty: Easy
 */

var getIntersectionNode = function(headA, headB) {
  let current = headA;
  let temp = null;
  while (current) {
    current.val = current.val * -1;
    current = current.next;
  }
  current = headB;
  while (current) {
    if (current.val < 0) {
      temp = current;
      break;
    }
    current = current.next;
  }

  current = headA;
  while (current) {
    current.val = current.val * -1;
    current = current.next;
  }

  return temp;
};
