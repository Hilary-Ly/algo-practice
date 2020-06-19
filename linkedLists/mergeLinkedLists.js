// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeLinkedLists(headOne, headTwo) {
    let p1 = headOne
      let p2 = headTwo
      let prev = null
      while (p1 && p2) {
          if (p1.value <= p2.value) {
              prev = p1
              p1 = p1.next
          } else { // p2 < p1
              if (prev) prev.next = p2
              const temp = p2.next
              p2.next = p1
              
              prev = p2
              p2 = temp
          }
      }
      if (p2) prev.next = p2
      return headOne.value <= headTwo.value ? headOne : headTwo
  } // O(n+m) time, O(1) space
  /*
  - merging will be done at linkedListOne
  - start with pointers at each of the heads, a previous pointer to the pointer at LL1
  - while we have truthy values at both pointers, compare values at pointers:
      - if p1 has smaller value, it doesn't move, so iterate forward in LL1
      - if p2 has smaller value, insert into LL1 between prev and p1 (change next on prev
      to point at p2's node, change p2's next to point to p1)
          - remember to save the original p2's next so we can iterate forward in LL2, restart
      - loop exits when we reach the end of either LL
  - if we reached the end of LL2, then we are done because everything is merged into LL1
  - if we reached the end of LL1, then there are still outstanding items in LL2 to merge
      - set prev's next pointer to p2 to finish up
  - return the smallest of the two heads (or headOne if both are equal)
  */