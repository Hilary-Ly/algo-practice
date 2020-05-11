// sol 1 - iterating after each side
function spiralTraverse(array) {
    let result = []
    let leftBound = 0 // starting col
    let rightBound = array[0].length - 1 // ending col
    let topBound = 0 // starting row
    let bottomBound = array.length - 1 // starting row
      
    while (leftBound <= rightBound && topBound <= bottomBound) {
        // remember that while doesn't check above criteria continuously, only when reaching the end of the loop
        
        // top side
        for (let i = leftBound; i <= rightBound; i++) result.push(array[topBound][i])
        topBound++
        if (topBound > bottomBound) break; // bc while loop hasn't checked yet
        
        // right side
        for (let i = topBound; i <= bottomBound; i++) result.push(array[i][rightBound])
        rightBound--
        if (leftBound > rightBound) break; // bc while loop hasn't checked yet
        
        // bottom side
        for (let i = rightBound; i >= leftBound; i--) result.push(array[bottomBound][i])
        bottomBound--
        
        // left side
        for (let i = bottomBound; i >= topBound; i--) result.push(array[i][leftBound])
        leftBound++
    }
    return result
  } // O(n) time, O(n) space
  
  /*
  [[1, 2, 3], 
  [12, 13, 4], 
  [11, 14, 5], 
  [10, 15, 6], 
  [9, 8, 7]]
  */


// sol 2 - using a helper function but very similar to sol 1
function spiralTraverse(array) {
	let result = []
	spiralFill(array, top = 0, bottom = array.length - 1, left = 0, right = array[0].length - 1, result)
	return result
}
function spiralFill(array, top, bottom, left, right, result) {
	if (top > bottom || left > right) return result
	
	// top
	for (let col = left; col <= right; col++) result.push(array[top][col])
	top++
	if (top > bottom) return result 
	
	// right
	for (let row = top; row <= bottom; row++) result.push(array[row][right])
	right--
	if (left > right) return result
	
	// bottom
	for (let col = right; col >= left; col--) result.push(array[bottom][col])
	bottom--
	
	// left
	for (let row = bottom; row >= top; row--) result.push(array[row][left])
	left++
	
	spiralFill(array, top, bottom, left, right, result)
}


// sol 3 - iterating at the end of loop
function spiralTraverse(array) {
	let result = []
	let leftBound = 0 // starting col
	let rightBound = array[0].length - 1 // ending col
	let topBound = 0 // starting row
	let bottomBound = array.length - 1 // starting row
	while (leftBound <= rightBound && topBound <= bottomBound) {
		for (let col = leftBound; col <= rightBound; col++) {
			result.push(array[topBound][col])
		}
	
		for (let row = topBound + 1; row <= bottomBound; row++) {
			result.push(array[row][rightBound])
		}
	
		for (let col = rightBound - 1; col >= leftBound; col--) {
			if (topBound === bottomBound) break
			result.push(array[bottomBound][col])
		}

		for (let row = bottomBound - 1; row >= topBound + 1; row--) {
			if (leftBound === rightBound) break
			result.push(array[row][leftBound])
		}

		topBound++
		rightBound--
		bottomBound--
		leftBound++
	}
	return result
}