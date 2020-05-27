function minNumberOfCoinsForChange(n, denoms) {
    const numOfCoins = new Array(n + 1).fill(Infinity)
      numOfCoins[0] = 0
      
      for (let coin of denoms) {
          for (let amt = 1; amt <= n; amt++) {
              if (coin <= amt) numOfCoins[amt] = Math.min(numOfCoins[amt], numOfCoins[amt - coin] + 1)
          }
      }
      if (numOfCoins[n] === Infinity) return -1
      return numOfCoins[n]
  } // O(n*d) time, O(n) space, where d = length of denoms

  /*
  above is the only solution that would return a falsy value if the coins did not perfectly add up to the target amount with no remainder. 

  note that not all denomination arrays are sorted, so we cannot write a function that starts with the highest denomination and greedily attempts to fill the target amount (unless we were to sort, which would cost O(nlogn) time).

  ex: {"denoms": [2, 4], "n": 7} should return -1, not 2 (giving us 6)
  */