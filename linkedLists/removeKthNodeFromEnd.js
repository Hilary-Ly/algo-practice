// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let fast = head;
  let slow = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  if (fast === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (fast.next) { // traverse until fast reaches the LAST element (1 before the END)
    fast = fast.next;
    slow = slow.next;
  }
  const newNext = slow.next.next;
  slow.next = newNext;
} // O(n) time, O(1) space
/*
  - create fast and slow pointers, create distance of k between the two pointers using a loop
  - if k is the length of the linked list, then fast is pointing to null:
    - then no need for slow pointer, replace head with head's next node and return
  - otherwise, traverse both fast and slow until fast reaches the last item, so fast is 1 item before the end and slow is 1 before the kth element from the end
 - skip over slow.next by setting slow's next pointer to slow.next.next
*/






// solution to return Kth item from the *LAST* (not END)! for comparison purposes
function fromLast(list, n) {
  let pointer = list.head; // n spaces away from B
  let pointerN = list.head; // move toward last
  for (let i = 0; i < n; i++) {
    pointerN = pointerN.next;
  }
  while (pointerN.next) { // takes us to the LAST, not the END
    pointer = pointer.next;
    pointerN = pointerN.next;
  }
  return pointer;
}
