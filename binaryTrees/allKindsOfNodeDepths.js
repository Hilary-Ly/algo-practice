// iterative, but using nodeDepths helper function
function allKindsOfNodeDepths(root) {
    let sumAllDepths = 0
      const stack = [root]
      while (stack.length) {
          const node = stack.pop()
          sumAllDepths += nodeDepths(node)
          if (node.left) stack.push(node.left)
          if (node.right) stack.push(node.right)
      }
      return sumAllDepths
  }
  
  function nodeDepths(root, depth = 0) {
      if (!root) return 0 // base case, where we add 0 to total depth
      return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  } // O(nlogn) time, O(h) space




  // recursive, using nodeDepths helper function
function allKindsOfNodeDepths(root) {
    if (!root) return 0
      return nodeDepths(root) + allKindsOfNodeDepths(root.left) + allKindsOfNodeDepths(root.right)
  }
  
  function nodeDepths(root, depth = 0) {
      if (!root) return 0
      return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  }
  // O(nlogn) time, O(h) space




  // note: more optimized solutions do exist O(n) time, O(h) space