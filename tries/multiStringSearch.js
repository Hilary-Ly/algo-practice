// sol 1 - create a suffix trie with the big string
// leverage existing suffix trie implementation, but modify to exclude the end symbol
function multiStringSearch(bigString, smallStrings) {
  const modSuffixTrie = new SuffixTrie(bigString);
  return smallStrings.map((string) => modSuffixTrie.contains(string));
} // O(b^2 + ns) time, O(b^2 + n) space - due to building the suffix trie (b^2) and output array (n)
// b = length big string, n = num small strings, s = length small string

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.populateSuffixTrieFrom(string);
  }
  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }
  insertSubstringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
  }
  contains(string) {
    let node = this.root;
    for (let letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return true;
  }
}



// sol 2 - create prefix trie with the small strings
function multiStringSearch(bigString, smallStrings) {
    const trie = new Trie()
      for (let string of smallStrings) {
          trie.insert(string)
      }
      const containedStrings = {}
      for (let i = 0; i < bigString.length; i++) {
          findSmallStringsIn(bigString, i, trie, containedStrings)
      }
      return smallStrings.map(string => string in containedStrings)
  } // O(ns + bs) time, O(ns) space
  // create an object literal that contains all the words in the big string
  // using the logic that the endSymbol = string itself from the trie class
  function findSmallStringsIn(string, startIdx, trie, containedStrings) {
      let node = trie.root
      for (let i = startIdx; i < string.length; i++) {
          const letter = string[i]
          if (!(letter in node)) break
          node = node[letter]
          if (trie.endSymbol in node) containedStrings[node[trie.endSymbol]] = true
      }
  }
  
  class Trie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
    }
      
      insert(string) {
          let node = this.root
          for (let i = 0; i < string.length; i++) {
              const letter = string[i]
              if (!(letter in node)) node[letter] = {}
              node = node[letter]
          }
          node[this.endSymbol] = string
      }
  }
