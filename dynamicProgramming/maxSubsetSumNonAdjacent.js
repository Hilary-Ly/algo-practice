// sol 1 - using a new array
function maxSubsetSumNoAdjacent(array) {
    if (!array.length) return 0
      if (array.length === 1) return array[0]
      
      const maxSums = array.slice() // array of same length, but dummy values
      maxSums[1] = Math.max(array[0], array[1]) // like greedy algo
      for (let i = 2; i < array.length; i++) {
          maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i])
          // this is where the non-adjacent part comes in
      }
      return maxSums[maxSums.length - 1]
  } // O(n) time, O(n) space bc of new arra




// sol 2 - no new DS
function maxSubsetSumNoAdjacent(array) {
    if (!array.length) return 0
      if (array.length === 1) return array[0]
      
      let second = array[0]
      let first = Math.max(array[0], array[1]) // like an in array except you dont track the whole array
      for (let i = 2; i < array.length; i++) {
          const current = Math.max(first, second + array[i]) // this is where the non-adjacent part comes in
          second = first // move forward one step each time
          first = current
      }
      return first
  } // O(n) time, O(1) space