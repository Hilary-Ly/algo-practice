function diskStacking(disks) {
    disks.sort((a, b) => a[2] - b[2])
      const heights = disks.map(disk => disk[2])
      const sequences = new Array(disks.length)
      let maxHeightIdx = 0
      
      for (let i = 1; i < disks.length; i++) {
          const curr = disks[i]
          for (let j = 0; j < i; j++) {
              const comp = disks[j]
              if (curr[0] > comp[0] && curr[1] > comp[1] && curr[2] > comp[2]) {
                  const heightWithJ = curr[2] + heights[j]
                  if (heightWithJ >= heights[i]) { 
                      // can't use Math.max because we have to update sequences too
                      heights[i] = heightWithJ
                      sequences[i] = j
                  }
              }
          }
          if (heights[i] >= heights[maxHeightIdx]) maxHeightIdx = i
      }
      return buildSequence(disks, sequences, maxHeightIdx)
  }
  
  function buildSequence(disks, sequences, idx) {
      const sequence = []
      while (idx !== undefined) {
          sequence.unshift(disks[idx])
          idx = sequences[idx]
      }
      return sequence
  } // O(n^2) time, O(n) space from the arrays created
  
  /*
  sort the array by ascending height
  create new arrays for accumulated max height at given i and for prev item in that seq
  also create variable to keep track of the max height index
  nested loop where i moves through all items and j iterates from 0 to i:
  check for a valid stack on all 3 dimensions (all 3 must be strictly greater):
  if so, compare the height[i] and would-be height with height[j]:
  if would-be height is greater, update height[i] with new height and update sequences to j
  in the main loop, if the new height[i] > what height was with maxHeightIdx, update maxHeightIdx
  build a helper function to backtrack for the sequence, filling a new array with values
  and iterating through the prev item indices until we run out of indices
  */