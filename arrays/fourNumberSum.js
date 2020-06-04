function fourNumberSum(array, targetSum) {
    const doubles = {}
    const results = []
    for (let i = 1; i < array.length - 1; i++) { 
        for (let j = i + 1; j < array.length; j++) { // to find quads using existing hash table
            let sum = array[i] + array[j]
            let diff = targetSum - sum
            if (diff in doubles) {
                for (let pair of doubles[diff]) {
                    results.push([...pair, array[i], array[j]])
                }
            } 
        }
        for (let k = 0; k < i; k++) { // add to hash table
            let sum = array[i] + array[k]
            if (sum in doubles) {
                // console.log(doubles[sum])
                doubles[sum].push([array[i], array[k]])
            } else {
                doubles[sum] = [[array[i], array[k]]]
                
            }
        }
    }
    // console.log(results)
    return results
}

const array = [7, 6, 4, -1, 1, 2]
const targetSum = 16

console.log(fourNumberSum(array, targetSum))