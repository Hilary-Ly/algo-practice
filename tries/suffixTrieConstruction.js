class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  
    populateSuffixTrieFrom(string) {
      for (let i = 0; i < string.length; i++) {
              this.insertSubstringStartingAt(i, string)
          }
    } // O(n^2) time, O(n^2) space since we have nested for loop
      
      insertSubstringStartingAt(i, string) {
          let node = this.root
          for (let j = i; j < string.length; j++) {
              const letter = string[j]
              if (!(letter in node)) node[letter] = {}
              node = node[letter]
          }
          node[this.endSymbol] = true
      }
  
    contains(string) {
      let node = this.root
          for (let letter of string) {
              if (!(letter in node)) return false
              node = node[letter]
          }
          return this.endSymbol in node
          // if (node[this.endSymbol] === true) return true
          // else return false
    } // O(m) time, O(1) space, where m = length of search string
  }