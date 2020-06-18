class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function findLoop(head) {
      let fast = head
      let slow = head
      while (fast.next && fast.next.next) {
          fast = fast.next.next
          slow = slow.next
          if (fast === slow) break
      }
      
      fast = head
      while (fast !== slow) {
          fast = fast.next
          slow = slow.next
      }
      return fast
  } // O(n) time, O(1) space
  
  /*
  - fast and slow pointers starting at head
  - while we are in a loop (check that fast.next and fast.next.next both exist)
          - move fast pointer 2x speed of slow pointer
          - break when fast and slow collide
  - distance from head to beginning of loop = distance at collision to beginning of loop
  total linked list T = 2D + P
  R = T - P - D
  so R = (2D + P) - P - D
  R = P
  - reposition one pointer to the head
  - while pointers are not equal, move both pointers in tandem
      - when pointers collide again, they are at the beginning of the loop. return this node.
  */