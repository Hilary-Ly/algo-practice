// brute force - doesn't need sorted matrix
function searchInSortedMatrix(matrix, target) {
    for (let row = 0; row < matrix.length; row++) {
          for (let col = 0; col < matrix[0].length; col++) {
              if (matrix[row][col] === target) return [row, col]
          }
      }
      return [-1, -1]
  }
  // O(n^2) time, O(1) space


// binary search sol
function searchInSortedMatrix(matrix, target) {
    let row = 0
      let col = matrix[0].length - 1
      while (row < matrix.length && col >= 0) {
          if (target === matrix[row][col]) return [row, col]
          else if (target < matrix[row][col]) {
              col--
          } else {
              row++
          }
      }
      return [-1, -1]
  } // O(n+m) time, O(1) space, where n = rows, m = cols