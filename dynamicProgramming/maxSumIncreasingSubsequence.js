function maxSumIncreasingSubsequence(array) {
    const sequences = new Array(array.length) // at i, records prev item in the subsequence
      const sums = array.map(num => num) // will record max sums for the above subsequence
      let maxIdx = 0
      
      for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < i; j++) { // j is always before i
              const isIncreasing = array[j] < array[i];
              const greaterSum = sums[j] + array[i] >= sums[i]
              if (isIncreasing && greaterSum) {
                  sums[i] = sums[j] + array[i] // update sums with new sum in bottom-up fashion
                  sequences[i] = j // record the 2nd to last item in the sequence
              }
          }
          if (sums[i] >= sums[maxIdx]) maxIdx = i
      }
      return [sums[maxIdx], buildSequence(array, sequences, maxIdx)]
  }
  
  function buildSequence(arr, seq, i) { // rebuild the subsequence backwards
      const sequence = []
      while (i !== undefined) { // cannot just check for truthiness - this is more specific
          sequence.unshift(arr[i]) // adds the item to the beginning
          i = seq[i] // jump to the prev index
      }
      return sequence
  } // O(n^2) time, O(n) space