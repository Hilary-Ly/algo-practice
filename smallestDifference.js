// brute force - 2 nested loops O(N^2) time
function smallestDifference(arrayOne, arrayTwo) {
	let smallestDiff = Infinity
	let smallestDiffPair = []
  for (let i = 0; i < arrayOne.length; i++) {
		let numOne = arrayOne[i]
		for (let j = 0; j < arrayTwo.length; j++) {
			let numTwo = arrayTwo[j]
			const localDiff = Math.abs(numOne - numTwo)
			if (localDiff < smallestDiff) {
				smallestDiff = localDiff
				smallestDiffPair = [+numOne, +numTwo]
			}
		}
	}
	return smallestDiffPair
}

// using pointers, O(nlog(n) + mlog(m)) time, O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a,b) => a-b)
	arrayTwo.sort((a,b) => a-b)
	let pointerOne = 0
	let pointerTwo = 0
	let smallestDiff = Infinity
	let smallestPair = []
	while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
        let numOne = arrayOne[pointerOne];
        let numTwo = arrayTwo[pointerTwo];
		let localDiff = Math.abs(numOne - numTwo)
		if (localDiff < smallestDiff) {
			smallestDiff = localDiff
			smallestPair = [numOne, numTwo]
		} 
		if (smallestDiff === 0) {
			return smallestPair
		} else if (numOne < numTwo) { 
			pointerOne++ // increment smaller one to potentially match up
		} else if (numOne > numTwo) {
			pointerTwo++ // increment smaller one to potentially match up
		}
	}
	return smallestPair
}

// tried pointers solution in a diff order
function smallestDifference(arrayOne, arrayTwo) {
   arrayOne.sort((a, b) => a - b);
   arrayTwo.sort((a, b) => a - b);
   let pointerOne = 0;
   let pointerTwo = 0;
   let smallestDiff = Infinity;
   let currentDiff = Infinity;
   let smallestPair = [];
   while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
      let numOne = arrayOne[pointerOne];
      let numTwo = arrayTwo[pointerTwo];
      if (numOne < numTwo) {
         currentDiff = numTwo - numOne;
         pointerOne++;
      } else if (numOne > numTwo) {
         currentDiff = numOne - numTwo;
         pointerTwo++;
      } else {
         // diff is 0
         return [numOne, numTwo];
      }
      if (currentDiff < smallestDiff) {
         smallestDiff = currentDiff;
         smallestPair = [numOne, numTwo];
      }
   }
   return smallestPair;
}