// sol 1 - new array storing number of ways to make change for amounts from 0 to n
function numberOfWaysToMakeChange(n, denoms) {
    const ways = new Array(n + 1).fill(0) // n+1 because inclusive
      ways[0] = 1 // base case
      
      for (let coin of denoms) {
          for (let amount = 1; amount <= n; amount++) { 
            // start at 1 because we already know 0 (greedy algo)
              if (coin <= amount) ways[amount] += ways[amount - coin]
              // make rounds for the entire array at each amount
          }
      }
      // update the same ways array for each coin by adding in with prev results
      // if you can use the coin twice, eg. 5cent (no 10c coin) - use it once at ways[5] giving you 2 total ways (other five 1s) 
      // ways[10] += ways[5], which means ways[10] = ways[0] + ways[5]
      return ways[n]
  } // O(n*m) time, O(n) space
  



// sol 2 - from interview cake, more greedy approach but mostly the same
function numberOfWaysToMakeChange(n, denoms) {
    const ways = new Array(n + 1).fill(0)
    ways[0] = 1 // base case
    
    for (let coin of denoms) {
      for (let amt = coin; amt <= n; amt++) { 
        // like a greedy algo, we can start amt at coin since that would be our first iterative step anyway
        ways[amt] += ways[amt - coin]
      }
    }
    return ways[n];
  } // O(n*m) time, O(n) space