// sol 1 - create subarrays
function sameBsts(arrayOne, arrayTwo) { // same vals doesnt mean same tree!
    // roots/first values must equal
      // lengths must be the same
      if (arrayOne[0] !== arrayTwo[0] || arrayOne.length !== arrayTwo.length) return false
      if (arrayOne.length === 0 && arrayTwo.length === 0) return true // necc for recursion (end of subtree)
      
      let oneLeft = [] // bc all items to left must be smaller than root
      let oneRight = []
      let twoLeft = []
      let twoRight = []
      for (let i = 1; i < arrayOne.length; i++) {
          if (arrayOne[i] < arrayOne[0]) oneLeft.push(arrayOne[i])
          else oneRight.push(arrayOne[i] )
      }
      for (let i = 1; i < arrayTwo.length; i++) {
          if (arrayTwo[i] < arrayTwo[0]) twoLeft.push(arrayTwo[i])
          else twoRight.push(arrayTwo[i])
      }
      
      return sameBsts(oneLeft, twoLeft) && sameBsts(oneRight, twoRight) // need the &&
  } // O(n^2) time, O(n^2) space, n = num nodes in each array




  // sol 1.5 - create subarrays, but use helper function
function sameBsts(arrayOne, arrayTwo) {
    // roots/first values must equal
      // lengths must be the same
      if (arrayOne[0] !== arrayTwo[0] || arrayOne.length !== arrayTwo.length) return false
      if (arrayOne.length === 0 && arrayTwo.length === 0) return true // necc for recursion
      
      const [oneLeft, oneRight] = divideInTwo(arrayOne)
      const [twoLeft, twoRight] = divideInTwo(arrayTwo)
  
      return sameBsts(oneLeft, twoLeft) && sameBsts(oneRight, twoRight) // need the &&
  }
  
  function divideInTwo(arr) {
      let left = [], right = []
      for (let i = 1; i < arr.length; i++) { 
          if (arr[i] < arr[0]) left.push(arr[i])
          else right.push(arr[i] )
      }
      return [left, right]
  } // O(n^2) time, O(n^2) space, n = num nodes in each array




  // sol 2 - optimized (probably won't be expected to know this for interview)
function sameBsts(arrayOne, arrayTwo, rootOne = 0, rootTwo = 0, min = -Infinity, max = Infinity) {
    if (arrayOne[rootOne] !== arrayTwo[rootTwo]) return false
      if (rootOne === -1 || rootTwo === -1) return rootOne === rootTwo // no root / nothing left in subarray
      
      const leftRootOne = getLeft(arrayOne, rootOne, min) // equivalent to the 4 arrays in sol 1
      const rightRootOne = getRight(arrayOne, rootOne, max)
      const leftRootTwo = getLeft(arrayTwo, rootTwo, min)
      const rightRootTwo = getRight(arrayTwo, rootTwo, max)
      
      const currVal = arrayOne[rootOne]
      const leftAreSame = sameBsts(arrayOne, arrayTwo, leftRootOne, leftRootTwo, min, currVal)
      const rightAreSame = sameBsts(arrayOne, arrayTwo, rightRootOne, rightRootTwo, currVal, max)
      
      return leftAreSame && rightAreSame
  }
  
  function getLeft(arr, start, min) { 
      // use min as a boundary for our left subtree instead of explicitly creating subarrays
      for (let i = start + 1; i < arr.length; i++) {
          if (arr[i] < arr[start] && arr[i] >= min) return i
      }
      return -1 // nothing is less than the start
  }
  
  function getRight(arr, start, max) {
      for (let i = start + 1; i < arr.length; i++) {
          if (arr[i] >= arr[start] && arr[i] < max) return i
      }
      return -1
  }
  // O(n^2) time, O(d) space