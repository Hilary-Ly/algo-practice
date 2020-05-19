class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }



// all solutions are recursive - sol using insert method (non optimal)
function minHeightBst(array, bst = null, start = 0, end = array.length - 1) {
	if (start > end) return
	
	const mid = Math.floor((start + end) / 2) 
	const toAdd = array[mid] // adding mid (sorted array) first each time maintains min height
	if (!bst) bst = new BST(toAdd)
	else bst.insert(toAdd)
	
	minHeightBst(array, bst, start, mid - 1)
	minHeightBst(array, bst, mid + 1, end)
	return bst
} // O(n log n) time- bc it uses insert method which is O(logn), O(n) space due to recursion





// recursive, with some iterative elements rather than using insert method
function minHeightBst(array, bst = null, start = 0, end = array.length - 1) {
    if (start > end) return
      const mid = Math.floor((start + end) / 2) 
      const newNode = new BST(array[mid])
      if (!bst) bst = newNode
      else {
          if (array[mid] < bst.value) { // this part is more iterative
              bst.left = newNode
              bst = bst.left
          } else {
              bst.right = newNode
              bst = bst.right
          }
      }
      minHeightBst(array, bst, start, mid - 1)
      minHeightBst(array, bst, mid + 1, end)
      return bst
  } // O(n) time, O(n) space




  // recursive, no bst parameter
function minHeightBst(array, start = 0, end = array.length - 1) {
    if (start > end) return null
      const mid = Math.floor((start + end) / 2)
      const bst = new BST(array[mid])
      bst.left = minHeightBst(array, start, mid - 1)
      bst.right = minHeightBst(array, mid + 1, end)
      return bst
  } // O(n) time, O(n) space