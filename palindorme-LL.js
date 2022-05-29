/*
 *   Topics: Linked List, Two Pointers, Recursion
 *   Difficulty: Easy
 */

var isPalindrome = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  let temp = prev;
  let temp2 = head;

  while (temp) {
    if (temp.val !== temp2.val) {
      return false;
    }
    temp = temp.next;
    temp2 = temp2.next;
  }

  return true;
};
