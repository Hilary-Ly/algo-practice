// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
// only one sol - uses recursion
function branchSums(root, array = [], sum = 0) {
	if (!root) return array // base case for the whole tree
	if (!root.left && !root.right) array.push(sum + root.value) // base case for a single branch
	branchSums(root.left, array, sum + root.value) // recurse until we're at a leaf - within a branch, only change is sum
	branchSums(root.right, array, sum + root.value) // within the tree, change is in the array
	return array
} // O(n) time, O(n) space due to recursion