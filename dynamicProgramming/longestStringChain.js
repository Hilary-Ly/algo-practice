function longestStringChain(strings) {
    let ret = []
      const map = {}
      
      for (let string of strings.sort((a, b) => a.length - b.length)) { // O(nlogn) bc sort, O(n)
          let toAdd = []
          for (let i = 0; i < string.length; i++) { //O(m) time
              const smallerString = string.slice(0, i) + string.slice(i+1) // O(m) time
              if (smallerString in map && map[smallerString].length > toAdd.length) {
                  toAdd = map[smallerString]
              }
          }
          if (toAdd) {
              map[string] = [string, ...toAdd]
              if (map[string].length > ret.length && map[string].length > 1) ret = map[string]
          }
      }
      return ret
  } // O(n * m^2 + nlogn) time, O(n^2) space due to hash map with arrays as values

  // see algo expert for alternate solution