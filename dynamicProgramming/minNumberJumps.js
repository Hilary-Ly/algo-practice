// sol 1 - brute force, nested loops
function minNumberOfJumps(array) {
    const jumps = new Array(array.length)
      jumps[0] = 0
      for (let i = 1; i < array.length; i++) {
          for (let j = 0; j < i; j++) {
              if (array[j] >= i - j && !jumps[i]) jumps[i] = jumps[j] + 1
          }
      }
      console.log(jumps)
      return jumps[jumps.length-1]
  } // O(n^2) time, O(n) space
  
  // create a new array that holds the min num of jumps needed to get to each index i
  // fill it using 2 nested for loops, with the inner j loop terminating at i
  // if the value of array[i] is greater/equal to the spaces needed to get from j to i,
  // update jumps[i] with the lesser of existing jumps[i] and jumps[j] + 1
  
  
  
  
  
  // sol 2 - same but uses Math.min
  function minNumberOfJumps(array) {
    const jumps = new Array(array.length).fill(Infinity)
  	jumps[0] = 0
  	for (let i = 1; i < array.length; i++) {
  		for (let j = 0; j < i; j++) {
  			if (array[j] >= i - j) jumps[i] = Math.min(jumps[j] + 1, jumps[i])
  		}
  	}
  	return jumps[jumps.length-1]
  } // O(n^2) time, O(n) space



  

  // sol 3 - optimized but rather difficult
function minNumberOfJumps(array) {
    if (array.length === 1) return 0
      let jumps = 0
      let maxReach = array[0]
      let steps = array[0]
      
      for (let i = 1; i < array.length - 1; i++) {
          maxReach = Math.max(maxReach, i + array[i])
          steps--
          if (!steps) {
              jumps++
              steps = maxReach - i
          }
      }
      return jumps + 1
  } // O(n) time, O(1) space