// iterative sol
function searchForRange(array, target) {
    const range = [-1, -1]
      helper(array, target, range, goLeft = true)
      helper(array, target, range, goLeft = false)
      return range
  }
  
  function helper(array, target, range, goLeft) {
      let left = 0
      let right = array.length - 1
      while (left <= right) {
          const mid = Math.floor((left + right) / 2)
          if (target < array[mid]) right = mid - 1
          else if (target > array[mid]) left = mid + 1
          else { // target === array[mid]
              if (goLeft) { // need this parameter to go both back and forward to find the range
                  if (mid === 0 || array[mid - 1] !== target) {
                      range[0] = mid
                      return // ends the helper
                  } else {
                      right = mid - 1
                  }
              } else { // now we goRight
                  if (mid === array.length - 1 || array[mid + 1] !== target) {
                      range[1] = mid
                      return
                  } else {
                      left = mid + 1
                  }
              }
          }
      }
  } // O(log n) time, O(1) space




  // recursive sol
function searchForRange(array, target) {
    const range = [-1, -1]
      let left = 0
      let right = array.length - 1
      helper(array, target, left, right, range, goLeft = true)
      helper(array, target, left, right, range, goLeft = false)
      return range
  }
  
  function helper(array, target, left, right, range, goLeft) {
      if (left > right) return 
      const mid = Math.floor((left + right) / 2)
      if (target < array[mid]) helper(array, target, left, mid - 1, range, goLeft)
      else if (target > array[mid]) helper(array, target, mid + 1, right, range, goLeft)
      else { // target === array[mid]
          if (goLeft) { // need this parameter to go both back and forward to find the range
              if (mid === 0 || array[mid - 1] !== target) {
                  range[0] = mid
                  return // ends the helper
              } else {
                  helper(array, target, left, mid - 1, range, goLeft)
              }
          } else { // now we goRight
              if (mid === array.length - 1 || array[mid + 1] !== target) {
                  range[1] = mid
                  return
              } else {
                  helper(array, target, mid + 1, right, range, goLeft)
              }
          }
      }
  } // O(log n) time, O(log n) space