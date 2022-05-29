/*
 *   Topics: Linked List, Two Pointers, Hash Table
 *   Difficulty: Easy
 */

var hasCycle = function(head) {
  let slow = head;
  let fast = head;
  let isBreak = false;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      isBreak = true;
      break;
    }
  }

  return isBreak;
};
