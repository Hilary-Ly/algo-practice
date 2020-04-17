// verbose solution, more explicit
function moveElementToEnd(array, toMove) {
   let left = 0;
   let right = array.length - 1;
   let temp;
   while (left < right) {
      if (array[right] === toMove) {
         right--;
      } else if (array[left] != toMove && array[right] != toMove) {
         left++;
      } else if (array[left] === toMove && array[right] != toMove) {
         temp = array[left];
         array[left] = array[right];
         array[right] = temp;
         left++;
         right--;
      }
   }
   return array;
}
// O(n) time, n = length of array | O(1) space


// more modularized solution, and cases expressed differently
function moveElementToEnd(array, toMove) {
   let left = 0;
   let right = array.length - 1;
   while (left < right) {
      while (left < right && array[right] === toMove) right--;
      // move right pointer until we get to one that can be swapped
      if (array[left] === toMove) swap(left, right, array);
      left++; // after everything (completed swap or no swap needed)
   }
   return array;
}
function swap(left, right, array) {
   const temp = array[left];
   array[left] = array[right];
   array[right] = temp;
}