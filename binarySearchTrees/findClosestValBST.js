// iterative sol
function findClosestValueInBst(tree, target) {
    let closest = tree.value
      let curr = tree
      
      while (curr) {
          let closestDiff = Math.abs(target - closest)
          let localDiff = Math.abs(target - curr.value)
          
          if (localDiff < closestDiff) closest = curr.value
          
          if (target < curr.value) curr = curr.left
          else if (target > curr.value) curr = curr.right
          else break
      }
      return closest
  } // O(log n) time on avg, O(n) time worst case, O(1) space




  // recursive sol
function findClosestValueInBst(tree, target, closest = Infinity) {
    if (!tree) return closest
      const closestDiff = Math.abs(target - closest)
      const localDiff = Math.abs(target - tree.value)
      if (localDiff < closestDiff) closest = tree.value
      
      if (target < tree.value) return findClosestValueInBst(tree.left, target, closest)
      if (target > tree.value) return findClosestValueInBst(tree.right, target, closest)
      else return closest
  } // O(log n) time + O(log n) space on avg
  // O(n) time + O(n) space at worst