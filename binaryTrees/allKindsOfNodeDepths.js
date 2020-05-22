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




  // recursive, runs through all nodes just once and saves info along the way - most optimal but also most difficult
function allKindsOfNodeDepths(root) {
    return getTreeInfo(root).sumOfAllDepths
  }
  
  function getTreeInfo(tree) {
      if (!tree) return {
          numNodesInTree: 0,
          sumOfDepths: 0,
          sumOfAllDepths: 0
      }
      const leftTreeInfo = getTreeInfo(tree.left)
      const rightTreeInfo = getTreeInfo(tree.right)
      
      const sumOfLeftDepths = leftTreeInfo.sumOfDepths + leftTreeInfo.numNodesInTree
      const sumOfRightDepths = rightTreeInfo.sumOfDepths + rightTreeInfo.numNodesInTree
      
      const numNodesInTree = 1 + leftTreeInfo.numNodesInTree + rightTreeInfo.numNodesInTree
      const sumOfDepths = sumOfLeftDepths + sumOfRightDepths
      const sumOfAllDepths = sumOfDepths + leftTreeInfo.sumOfAllDepths + rightTreeInfo.sumOfAllDepths
      
      return {
          numNodesInTree,
          sumOfDepths,
          sumOfAllDepths
      }
  } // O(n) time, O(h) space since we process one level at a time