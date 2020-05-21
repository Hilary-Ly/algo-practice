// iterative sol, using queue/BFS
function invertBinaryTree(tree) {
    const nodes = [tree]
      while (nodes.length) {
          const node = nodes.shift()
          
          let temp = node.left
          node.left = node.right
          node.right = temp
          
          if (node.left) nodes.push(node.left)
          if (node.right) nodes.push(node.right)
      }
      return tree
  } // O(n) time, O(n) space due to the queue
  



// iterative sol, using stack/DFS - guess it doesn't matter since we need to visit all nodes anyway. BFS is probably the better solution though
function invertBinaryTree(tree) {
    const nodes = [tree]
      while (nodes.length) {
          const node = nodes.pop()
          
          let temp = node.left
          node.left = node.right
          node.right = temp
          
          if (node.left) nodes.push(node.left)
          if (node.right) nodes.push(node.right)
      }
      return tree
  } // O(n) time, O(n) space due to the nodes stack




  function invertBinaryTree(tree) {
    if (!tree) return tree
      swapChildren(tree)
      invertBinaryTree(tree.left)
      invertBinaryTree(tree.right)
  }
  
  function swapChildren(node) {
      let temp = node.left
      node.left = node.right
      node.right = temp
  }
  // O(n) time - exploring every single node
  // O(d) space - longest recursive call is the depth,
  // we would need to unravel the leaf before we can add more calls to the stack 
  // can also be written O(log n) time since d = log(n)