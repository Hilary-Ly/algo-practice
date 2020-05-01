// assume both nonincreasing and nondecreasing, invalidate 1 or both
// O(n) time, O(1) space
function isMonotonic(array) {
	let isNonIncreasing = true // decreasing O(1) space
	let isNonDecreasing = true // increasing
	
	for (let i = 0; i < array.length; i++) {
		if (array[i+1] - array[i] > 0) isNonIncreasing = false // O(n) time
		else if (array[i+1] - array[i] < 0) isNonDecreasing = false
	}
	return isNonIncreasing || isNonDecreasing
}



/// find direction and confirm in loop (with helper func)
// O(n) time, O(1) space
function isMonotonic(array) {
	let direction = array[1] - array[0]
	for (let i = 2; i < array.length; i++) {
		if (direction === 0) {
			direction = array[i] - array[i-1] // only if direction is 0
			continue
		} 
		if (breaksDirection(direction, array[i-1], array[i])) { // O(n) time
			return false
		}
	}
	return true
}
	
function breaksDirection(direction, prevInt, currInt) {
	if (direction > 0 && currInt < prevInt) return true // O(1)
	if (direction < 0 && currInt > prevInt) return true // O(1)
}