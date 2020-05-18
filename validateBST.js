// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

// recursive sol, more intuitive one
function validateBst(tree, min = -Infinity, max = Infinity) {
	if (!tree) return true
  if (tree.value < min || tree.value >= max) return false
	return validateBst(tree.left, min, tree.value) && validateBst(tree.right, tree.value, max)
	return true
} // O(n) time, O(d) space where n = number of nodes, d = depth/height
// O(d) because function is called recursively once per level for both left and right



// recursive sol, less intuitive
function validateBst(tree, min = null, max = null) {
    if (max && tree.value >= max) return false
      if (min && tree.value < min) return false
      if (tree.left && !validateBst(tree.left, min, tree.value)) return false
      if (tree.right && !validateBst(tree.right, tree.value, max)) return false
      return true
  } // O(n) time, O(2d) space ? = O(d) space ?
  // where n = number of nodes, d = depth



  // iterative sol using a stack/DFS
function validateBst(tree) {
    const stack = []
      stack.push({
          node: tree,
          min: -Infinity,
          max: Infinity
      })
      
      while (stack.length) {
          const { node, min, max } = stack.pop()
          if (node.value < min || node.value >= max) return false
          
          if (node.left) {
              stack.push({
                  node: node.left,
                  min: min,
                  max: node.value
              })
          }
          if (node.right) {
              stack.push({
                  node: node.right,
                  min: node.value,
                  max: max
              })
          }
      }
      return true
  } // O(n) time, O(n) space due to stack ?