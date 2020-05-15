function bubbleSort(array) {
	let isSorted = false
	let counter = 0
  for (while !isSorted) {
		isSorted = true
		for (let i = 0; i < array.length - 1 - counter; i++) {
			if (array[i] > array[i+1]) {
				swap(array, i, i+1)
				isSorted = false
			}
		}
		counter++
	}
	return array
}

function swap(arr, a, b) {
	let temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}

// best: O(n) time, O(1) space
// average: O(n^2) time, O(1) space
// worst: O(n^2) time, O(1) space
