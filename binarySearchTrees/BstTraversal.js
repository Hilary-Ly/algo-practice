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