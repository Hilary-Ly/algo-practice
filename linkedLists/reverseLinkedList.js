// node, prev and next written as p1/p2/p3 which might be more intuitive
// our current node is always p2
function reverseLinkedList(head) {
  let p2 = head;
  let p1 = null;
  while (p2) {
    let p3 = p2.next;
    p2.next = p1;

    p1 = p2;
    p2 = p3;
  }
  return p1;
} // O(n) time, O(1) space

// same algorithm, with node/prev/temp as var names
function reverseLinkedList(head) {
  let node = head;
  let prev = null;
  while (node) {
    let temp = node.next;
    node.next = prev;

    prev = node;
    node = temp;
  }
  return prev;
}

/*
  - create a two pointers, one for current node and one for the previous node to it
  - in a while loop (node is truthy):
          - update the next pointer of each node to point to the node previous to it
          - iterate forward to the next node to do the same thing
          - because we are breaking connections here, don't forget to save the original next 
          node to a variable so we can use it to iterate forward without connection
  - after loop ends, we are left with the current node pointed to null (past end of LL)
  and prev pointed to the last item in the linked list, which is the new head. return prev.
  */
