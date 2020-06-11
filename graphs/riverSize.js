// sol 1 - DFS
 /*
  - create a matrix to track whether a node has already been visited using 2 maps nested
  - double nested for loops to loop through entire matrix:
          - check if node has been visited, if not:
                  - if node === 1, perform DFS for the rest of the connected 1s
                  - if node === 0, flip visited flag on that node to true
  - create a modified DFS (shift/unshift) function as a helper function that returns size:
          - using a stack, store each node's row/col in an obj
          - loop while the stack's length is > 0:
                  - shift off a node, add it to the size variable, unshift each of its neighbors if 
                  the neighbor is a 1, has not been visited, and is within bounds
                  - can also use pop/push
  */
function riverSizes(matrix) {
    const sizes = []
      const visited = matrix.map(row => row.map(value => false)) // nested map
      for (let row = 0; row < matrix.length; row++) {
          for (let col = 0; col < matrix[0].length; col++) {
              if (!visited[row][col]) {
                  if (matrix[row][col] === 1) {
                      sizes.push(depthFirstSearch(matrix, row, col, visited))
                  } else visited[row][col] = true
              }
          }
      }
      return sizes
  }
  
  function depthFirstSearch(matrix, row, col, visited) {
      let size = 0
      const stack = [{row, col}]
      while (stack.length) {
          const node = stack.shift()
          if (!visited[node.row][node.col]) size++
          visited[node.row][node.col] = true
          if (node.col+1 < matrix[0].length && matrix[node.row][node.col+1] === 1) {
              stack.unshift({row: node.row, col: node.col + 1})
          }
          if (node.row+1 < matrix.length && matrix[node.row+1][node.col] === 1) {
              stack.unshift({row: node.row + 1, col: node.col})
          }
          if (node.col-1 >= 0 && matrix[node.row][node.col-1] === 1 && !visited[node.row][node.col-1]) {
              stack.unshift({row: node.row, col: node.col - 1})
          }
          if (node.row-1 >= 0 && matrix[node.row-1][node.col] === 1 && !visited[node.row-1][node.col]) {
              stack.unshift({row: node.row - 1, col: node.col})
          }
      }
      return size
  } // O(width * height) time, O(width * height) space or O(N) time/space where N = total nodes




  // sol 2 - BFS returns the same result but in a different order
function riverSizes(matrix) {
    const sizes = []
      const visited = matrix.map(row => row.map(value => false)) // nested map
      for (let row = 0; row < matrix.length; row++) {
          for (let col = 0; col < matrix[0].length; col++) {
              if (!visited[row][col]) {
                  if (matrix[row][col] === 1) {
                      sizes.push(breadthFirstSearch(matrix, row, col, visited))
                  } else visited[row][col] = true
              }
          }
      }
      return sizes
  }
  
  function breadthFirstSearch(matrix, row, col, visited) {
      let size = 0
      const stack = [{row, col}]
      while (stack.length) {
          const node = stack.pop()
          if (!visited[node.row][node.col]) size++
          visited[node.row][node.col] = true
          if (node.col+1 < matrix[0].length && matrix[node.row][node.col+1] === 1) {
              stack.unshift({row: node.row, col: node.col + 1})
          }
          if (node.row+1 < matrix.length && matrix[node.row+1][node.col] === 1) {
              stack.unshift({row: node.row + 1, col: node.col})
          }
          if (node.col-1 >= 0 && matrix[node.row][node.col-1] === 1 && !visited[node.row][node.col-1]) {
              stack.unshift({row: node.row, col: node.col - 1})
          }
          if (node.row-1 >= 0 && matrix[node.row-1][node.col] === 1 && !visited[node.row-1][node.col]) {
              stack.unshift({row: node.row - 1, col: node.col})
          }
      }
      return size
  } // O(width * height) time, O(width * height) space or O(N) time/space where N = total nodes
  