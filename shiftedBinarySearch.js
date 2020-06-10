// iterative sol - should memorize this!
function shiftedBinarySearch(array, target) {
    let left = 0
      let right = array.length - 1
      while (left <= right) {
          let mid = Math.floor((left + right) / 2)
          if (target === array[mid]) return mid
          
          else if (array[left] <= array[mid]) { // everything betwn left and mid are increasing, so left half is not the broken half (pivot isnt here)
              if (target < array[mid] && target >= array[left]) right = mid - 1 // target is inside unbroken half - do binary search
              else left = mid + 1 // target is in the broken half - do bnary search
              
          } else { // array[left] > array[mid], or right half is the unbroken half
              if (target > array[mid] && target <= array[right]) left = mid + 1 // target inside unbroken half - do binary search
              else right = mid - 1 // target is in the broken half - do binary search
          }
      }
      return -1
  } // O(log n) time, O(1) space, n = length of input array

  

// recursive sol, using helper to initialize left/right
function shiftedBinarySearch(array, target) {
    return shiftedBSHelper(array, target, 0, array.length - 1)
  }
  
  function shiftedBSHelper(array, target, left, right) {
      if (left > right) return -1
      const mid = Math.floor((left + right) / 2)
      if (target === array[mid]) return mid
      else if (array[left] <= array[mid]) {
          if (target < array[mid] && target >= array[left]) {
              return shiftedBSHelper(array, target, left, mid - 1)
          } else {
              return shiftedBSHelper(array, target, mid + 1, right)
          }
      } else {
          if (target > array[mid] && target <= array[right]) {
              return shiftedBSHelper(array, target, mid + 1, right)
          } else {
              return shiftedBSHelper(array, target, left, mid - 1)
          }
      }
  } // O(log n) time, O(log n) space, where n = length input array



  
 // recursive sol, using memoization instead of helper
function shiftedBinarySearch(array, target, left = 0, right = array.length - 1) {
	if (left > right) return -1
	const mid = Math.floor((left + right) / 2)
	if (target === array[mid]) return mid
	else if (array[left] <= array[mid]) {
		if (target < array[mid] && target >= array[left]) {
			return shiftedBinarySearch(array, target, left, mid - 1)
		} else {
			return shiftedBinarySearch(array, target, mid + 1, right)
		}
	} else {
		if (target > array[mid] && target <= array[right]) {
			return shiftedBinarySearch(array, target, mid + 1, right)
		} else {
			return shiftedBinarySearch(array, target, left, mid - 1)
		}
	}
} // O(log n) time, O(log n) space, where n = length input array (same as prev)