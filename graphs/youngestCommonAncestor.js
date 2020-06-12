class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }
  
  /*
  - find the depths of both descendants (write a helper function) by traversing tree to root
  - compare depths, lower (larger depth) descendant traverse until same depth as the other
  - at same depth, traverse both descendants until a common ancestor is found (while loop)
  */
  
  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
      const depthOne = getDepth(descendantOne) 
      const depthTwo = getDepth(descendantTwo)
      if (depthOne > depthTwo) return findCommonAncestor(descendantOne, descendantTwo, depthOne - depthTwo)
      else return findCommonAncestor(descendantTwo, descendantOne, depthTwo - depthOne)
  }
  
  function getDepth(descendant) {
      let depth = 0
      let node = descendant
      while (node.ancestor) {
          node = node.ancestor
          depth++
      }
      return depth
  }
  
  function findCommonAncestor(lowerDescendant, higherDescendant, diff) {
      for (let i = 0; i < diff; i++) {
          lowerDescendant = lowerDescendant.ancestor
      }
      while (lowerDescendant !== higherDescendant) {
          lowerDescendant = lowerDescendant.ancestor
          higherDescendant = higherDescendant.ancestor
      }
      return lowerDescendant
  } // O(depth) time, O(1) space