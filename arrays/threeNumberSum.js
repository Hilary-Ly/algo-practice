// triple loops - O(n^3) time
function threeNumberSum(array, targetSum) {
   array.sort((a, b) => a - b);
   let returnArr = [];
   for (let i = 0; i < array.length; i++) {
      const firstNum = array[i];
      for (let j = i + 1; j < array.length; j++) {
         const secNum = array[j];
         for (let k = j + 1; k < array.length; k++) {
            const thirdNum = array[k];
            if (firstNum + secNum + thirdNum === targetSum) {
               returnArr.push([firstNum, secNum, thirdNum]);
            }
         }
      }
   }
   return returnArr.sort((a, b) => a[0] - b[0]);
}

// double loop with 2 pointers - O(n^2) time
function threeNumberSum(array, targetSum) {
   array.sort((a, b) => a - b);
   let triples = [];
   for (let i = 0; i < array.length - 2; i++) {
      // minus 2 to account for pointers
      let left = i + 1;
      let right = array.length - 1;
      while (left < right) {
         const currentSum = array[i] + array[left] + array[right];
         if (currentSum === targetSum) {
            triples.push([array[i], array[left], array[right]]);
            left++; // make sure to increment here to avoid inf loop
            right--;
         } else if (currentSum < targetSum) left++;
         else if (currentSum > targetSum) right--;
      }
   }
   return triples;
}
