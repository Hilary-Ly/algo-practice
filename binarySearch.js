// recursive
function binarySearch(array, target) {
	let left = 0
	let right = array.length - 1
	return BSHelper(array, target, left, right)
}

function BSHelper (array, target, left, right) {
	if (left > right) return -1
	let mid = Math.floor((left + right) / 2)

	if (target === array[mid]) { 
		return mid
	} else if (target < array[mid]) {
		return BSHelper(array, target, left, mid - 1)
	} else {
		return BSHelper(array, target, mid + 1, right)
	} 
}
// O(log n) time === O(log n) space



// iterative
function binarySearch(array, target) {
	let left = 0
	let right = array.length - 1
	return BSHelper(array, target, left, right)
}

function BSHelper(array, target, left, right) {
	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		if (target === array[mid]) return mid
		else if (target < array[mid]) right = mid - 1
		else left = mid + 1
	}
	return -1
}
// O(log n) time, O(1) space