// sol 1 - more intuitive (and poss more thorough) but less space optimal
/*
use another array to track that each index visited only once
starting at i = 0 and using for loop to limit jump times to array.length
traverse using helper function and record num times seen in the elemSeen array
return by checking:
1st condition: once loop exits, check that we landed at i = 0
2nd condition: single cycle - all elems visited just once using max and min of elemSeen

write helper function to determine next index, which handles wrapping around the array:
- use modulo to wrap forwards or backwards, but if nextIdx is negative, add neg idx to 
array.length to find elem that is i from the end (rather than beginning)
*/
function hasSingleCycle(array) {
    const elemSeen = new Array(array.length).fill(0)
      let idx = 0
      for (let i = 0; i < array.length; i++) {
          elemSeen[idx]++
          idx = getNextIdx(idx, array)
      }
      return Math.max(...elemSeen) === 1 && Math.min(...elemSeen) === 1 && idx === 0
  }
  
  function getNextIdx (currentIdx, array) {
      const jump = array[currentIdx]
      const nextIdx = (currentIdx + jump) % array.length
      if (nextIdx >= 0) return nextIdx
      else return nextIdx + array.length
  } // O(n) time, O(n) space, where n = length of input array




  // sol 2 - optimal solution
  /*
  clarify: can we have neg integers, deicmals, nums greather than array length?
  starting at i = 0, move as the value suggests
  recording how many elems have been visited using a counter and while loop
  1st condition: once while loop exits, check that we landed at i = 0
  2nd condition: single cycle: 
  - starting element cannot be jumped through >1x
  - (n+1)th element should land at i = 0
  
  write helper function to determine next index, which handles wrapping around the array:
  - use modulo to wrap forwards or backwards, but if nextIdx is negative, add neg idx to 
  array.length to find elem that is i from the end (rather than beginning)
  */
function hasSingleCycle(array) {
    let numElemSeen = 0
      let idx = 0
      while (numElemSeen < array.length) {
          if (numElemSeen > 0 && idx === 0) return false
          numElemSeen++
          idx = getNextIdx(idx, array)
      }
      return idx === 0
  }
      
  function getNextIdx (currentIdx, array) {
      const jump = array[currentIdx]
      const nextIdx = (currentIdx + jump) % array.length
      if (nextIdx >= 0) return nextIdx
      else return nextIdx + array.length
  } // O(n) time, O(1) space, where n = length of input array