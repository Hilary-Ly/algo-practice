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
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
} // O(n) time, O(1) space
/*
  - create fast and slow pointers, create distance of k between the two pointers using a loop
  - if k is the length of the linked list, then fast is pointing to null:
          - then no need for slow pointer, remove replace head with head's next node and return
  - otherwise, traverse both fast and slow until fast reaches the end
  - set slow's next pointer to the item after slow's next to remove the item after slow
  */





// solution to return Kth item from the *LAST* (not END)!
function fromLast(list, n) {
    let pointer = list.head // n spaces away from B
    let pointerN = list.head // move toward last
    for (let i = 0; i < n; i++) {
        pointerN = pointerN.next
    }
    while (pointerN.next) {
        pointer = pointer.next
        pointerN = pointerN.next
    }
    return pointer
}
