// 0-1 knapsack problem solution - quantity of items can only be 0 or 1 (solution was altered to accept array of obj for items instead of array of arrays)
/*
  note that you cannot use an item more than once! matrix helps for that
  build 2D array where rows = items, cols = capacities, but starting at 0
  so you'll need to stop at r < items.length + 1 and capacity + 1 and account for offset when switching back
  fill the capacities: if item weighs more than capacity, don't use it
  else see if you can use it - only if val using it > val not using it (prev row)
  return last cell's val
  create a helper function to backtrack on the indices of the items used:
  check to see if value changed between two items (at same capacity) - if not, item wasn't used
  else item was used, so add item index to the sequence, decrement currCapc
  decrement item regardless
  (note -1 offset due to first row/col of matrix being 0, so matrix/items not the same i)
  */

function knapsackProblem(items, capacity) {
    const knapsack = []
      for (let r = 0; r < items.length + 1; r++) {
          const row = new Array(capacity + 1).fill(0)
          knapsack.push(row)
      }
      
      for (let i = 1; i < items.length + 1; i++) {
          const [itemV, itemW] = items[i - 1]
          for (let currCapc = 0; currCapc < capacity + 1; currCapc++) {
              const currMaxVal = knapsack[i - 1][currCapc]
              const maxValUsingItem = itemV + knapsack[i - 1][currCapc - itemW]
              if (itemW <= currCapc) knapsack[i][currCapc] = Math.max(currMaxVal, maxValUsingItem)
              else knapsack[i][currCapc] = currMaxVal // don't use item 
          }
      }
    return [knapsack[items.length][capacity], getKnapsackItems(knapsack, items)];
  }
  
  function getKnapsackItems(knapsackValues, items) {
      const sequence = []
      let i = knapsackValues.length - 1
      let currCapc = knapsackValues[0].length - 1
      while (i > 0) {
          if (knapsackValues[i][currCapc] !== knapsackValues[i-1][currCapc]) { // item not used
              sequence.unshift(i - 1) // -1 offset due to first row being 0 in matrix, items start at 1
              currCapc -= items[i-1][1] // -1 offset
          }
          if (currCapc === 0) return sequence
          i--
      }
      return sequence
  } // O(n*c) time, O(n*c) space, where n = num items, c = capacity





  // 0-1 knapsack problem solution (solution was altered to accept array of obj for items instead of array of arrays)
function knapsackProblem(items, capacity) {
    const knapsack = []
      for (let r = 0; r < items.length + 1; r++) {
          const row = new Array(capacity + 1).fill(0)
          knapsack.push(row)
      }
      
      for (let i = 1; i < items.length + 1; i++) {
          for (let currCapc = 0; currCapc < capacity + 1; currCapc++) {
              const currMaxVal = knapsack[i - 1][currCapc]
              const maxValUsingItem = item.value + knapsack[i - 1][currCapc - item.weight]
              if (item.weight <= currCapc) knapsack[i][currCapc] = Math.max(currMaxVal, maxValUsingItem)
              else knapsack[i][currCapc] = currMaxVal // don't use item 
          }
      }
    return [knapsack[items.length][capacity], getKnapsackItems(knapsack, items)];
  }
  
  function getKnapsackItems(knapsackValues, items) {
      const sequence = []
      let i = knapsackValues.length - 1
      let currCapc = knapsackValues[0].length - 1
      while (i > 0) {
          if (knapsackValues[i][currCapc] !== knapsackValues[i-1][currCapc]) { // item not used
              sequence.unshift(i - 1) // -1 offset due to first row being 0 in matrix, items start at 1
              currCapc -= items[i-1][1] // -1 offset
          }
          if (currCapc === 0) return sequence
          i--
      }
      return sequence
  } // O(n*c) time, O(n*c) space, where n = num items, c = capacity




  // unbounded knapsack solution - unlimited quantity of items can be used
  function knapsackProblem(items, capacity) {
    const knapsack = new Array(capacity + 1).fill(0)
    
    for (let currCapc = 0; currCapc <= capacity; currCapc++) {
      let currMaxVal = 0
      for (let item of items) {
        if (item.weight <= 0 && item.value > 0) return Infinity
        if (item.weight <= currCapc) {
          const maxValUsingItem = item.value + knapsack[currCapc - item.weight]
          currMaxVal = Math.max(currMaxVal, maxValUsingItem) // most important
        }
      }
      knapsack[currCapc] = currMaxVal
    }
    return knapsack[capacity]
  } // O(n*k) time, O(k) space, where n = num types of cake, k = capacity of bag