// single loop using arithmetic
function twoNumberSum(array, targetSum) {
   let addToSum = [];
   for (let i = 0; i < array.length; i++) {
      const neededForSum = targetSum - array[i];
      const arrayWithoutI = [...array.slice(0, i), ...array.slice(i + 1)];
      if (
         arrayWithoutI.includes(neededForSum) &&
         !addToSum.includes(neededForSum)
      ) {
         addToSum.push(array[i]);
         addToSum.push(neededForSum);
         break;
      }
   }
   return addToSum;
}

// refactored single loop - using 'for of' and 'if in'
function twoNumberSum(array, targetSum) {
   const nums = {};
   for (const num of array) {
      const neededForSum = targetSum - num;
      if (neededForSum in nums) {
         return [neededForSum, num];
      } else {
         nums[num] = true;
      }
   }
   return [];
}

// pointers method
function twoNumberSum(array, targetSum) {
   array.sort((a, b) => a - b); // compare function for sorting
   let left = 0; // first pointer
   let right = array.length - 1; // second pointer
   while (left < right) {
      const currentSum = array[left] + array[right];
      if (currentSum === targetSum) return [array[left], array[right]];
      else if (currentSum < targetSum) left++;
      else if (currentSum > targetSum) right--;
   }
   return [];
}
