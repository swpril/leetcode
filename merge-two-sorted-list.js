/*
 *   Topics: Linked List, Recursion
 *   Difficulty: Easy
 */

var mergeTwoLists = function(list1, list2) {
  if (!list1 || !list2) {
    return list1 ?? list2;
  }

  let current = list1.val <= list2.val ? list1 : list2;
  const result = current;

  list1 = list1 === current ? list1.next : list1;
  list2 = list2 === current ? list2.next : list2;

  while (list1 || list2) {
    if (!list1 || !list2) {
      current.next = list1 ? list1 : list2;
      break;
    }

    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  return result;
};
