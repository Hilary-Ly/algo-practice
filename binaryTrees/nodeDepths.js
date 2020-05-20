// iterative sol 1 BFS (using stopper)
function nodeDepths(root) {
    if (!root) return 0
      const nodes = [root, 'stop'] // BFS, so use queue - shift/push
      let localDepth = 0
      let totalDepth = 0
      
      while (nodes.length > 1) {
          const node = nodes.shift()
          if (node === 'stop') {
              localDepth++
              nodes.push('stop')
          }
          else {
              totalDepth += localDepth
              if (node.left) nodes.push(node.left)
              if (node.right) nodes.push(node.right)
          }
      }
      return totalDepth
  } // average/worst case (like a linked list): O(n) time
  // average/worst: O(h) space




  // iterative sol 2 DFS (stack of objs), lends well into recursion
// stack builds up until leaf, then unravels until we can push more children on another branch
function nodeDepths(root) {
	if (!root) return 0
	let totalDepths = 0
	const nodes = [{node: root, depth: 0}]
	
	while(nodes.length) {
		const { node, depth } = nodes.pop()
		if (node === null) continue
		totalDepths += depth
		nodes.push({node: node.left, depth: depth + 1})
		nodes.push({node: node.right, depth: depth + 1})
	}
	return totalDepths
} // O(n) time, O(h) space where h = height




// recursive sol
// return depth plus the depths of children - cleanest
function nodeDepths(root, depth = 0) {
	if (!root) return 0 // base case, where we add 0 to total depth
	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
} // O(n) time, O(h) space where h = height
// max num calls on the call stack is h bc stack will unravel at the leaf

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}