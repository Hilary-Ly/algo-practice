// w = number of words, n = length of longest word
function groupAnagrams(words) {
      const map = {}
      // const listAnagrams = []
      for (let word of words) { // 
          const sortedWord = word.split('').sort() // O(n log n) time
          if (map[sortedWord]) map[sortedWord].push(word) // O(w) time
          // can also be written: if (sortedWord in map)
          else map[sortedWord] = [word] // O(w) time
      }
      // for (let key in map) {
      // 	listAnagrams.push(map[key])
      // }
      // return listAnagrams
      return Object.values(map)
  }
  // O(w*n*logn) time, why is space O(wn) ?