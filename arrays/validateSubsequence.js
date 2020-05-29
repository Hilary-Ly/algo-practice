// sol 1 - first attempt
function isValidSubsequence(array, sequence) {
    let s = 0
      for (let item of array) {
          if (item === sequence[s]) s++
          if (s === sequence.length) return true
      }
      return false
  } // O(n) time, O(1) space




  // sol 2 - two pointers and a single while loop
function isValidSubsequence(array, sequence) {
    let a = 0
      let s = 0
      while (a < array.length && s < sequence.length) {
          if (array[a] === sequence[s]) s++
          a++
      }
      return s === sequence.length
  } // O(n) time, O(1) space

  



  // sol 3 - similar to first attempt but return comparison instead
function isValidSubsequence(array, sequence) {
    let s = 0
      for (let item of array) {
          if (s === sequence.length) break
          if (sequence[s] === item) s++
      }
      return s === sequence.length
  } // O(n) time, O(1) space