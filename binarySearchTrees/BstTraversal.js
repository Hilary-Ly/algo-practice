// solutions 1 - recursive
function inOrderTraverse(tree, array) {
    if (tree) {
          inOrderTraverse(tree.left, array)
          array.push(tree.value)
          inOrderTraverse(tree.right, array)
      }
      return array
  } // O(n) time, O(n) space, n = num nodes
  
  function preOrderTraverse(tree, array) {
    if (tree) {
          array.push(tree.value)
          preOrderTraverse(tree.left, array)
          preOrderTraverse(tree.right, array)
      }
      return array	
  } // O(n) time, O(n) space, n = num nodes
  
  function postOrderTraverse(tree, array) {
    if (tree) {
          postOrderTraverse(tree.left, array)
          postOrderTraverse(tree.right, array)
          array.push(tree.value)
      }
      return array
  } // O(n) time, O(n) space, n = num nodes








  // solutions 2 - iterative
  function inOrderTraverse(tree, array) { // left, then root, then right
    const stack = []
      let node = tree
      while (stack.length || node) {
          if (node) {
              stack.push(node)
              node = node.left
          } else {
              node = stack.pop()
              array.push(node.value)
              node = node.right
          }
      }
      return array
  } // O(n) time, O(d) space where d = depth (n || log n
  /*
  - initialize a stack AND a variable node, which is set to the root
  - while stack.length > 0 *OR* node is still truthy:
          - if node is not null, push each node into the stack and iterate down the left side
          - if node is null:
                  - begin popping nodes off the stack and performing cb function
                  - now iterate down the right side
  - return array
  */
  
  function preOrderTraverse(tree, array) { // standard DFS
    const stack = [tree]
      while (stack.length) {
          const node = stack.pop()
          array.push(node.value)
          if (node.right) stack.push(node.right)
          if (node.left) stack.push(node.left)
      }
      return array
  } // O(n) time, O(d) space where d = depth (n || log n
  
  function postOrderTraverse(tree, array) { // left, right, root. simply do root, right, left and reverse it
    const stack = [tree]
      while (stack.length) {
          const node = stack.pop()
          array.push(node.value)
          if (node.left) stack.push(node.left)
          if (node.right) stack.push(node.right)
      }
      return array.reverse()
  } // O(n) time, O(d) space where d = depth (n || log n)