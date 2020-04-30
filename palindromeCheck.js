// loop into array - O(n) time, O(n) space
function isPalindrome(string) {
	const reversed = []
	for (let i = string.length - 1; i >= 0; i--) { // O(n) time
		reversed.push(string[i]) // O(1) time
	}
	return string === reversed.join('')
}


// loop backwards O(n^2) time, O(n) space
function isPalindrome(string) {
	let reversed = ''
	for (let i = string.length - 1; i >= 0; i--) { // O(n) time
		reversed += string[i] // O(n) time also?
	}
	return string === reversed
}


// array methods, runtime depends on those methods
function isPalindrome(string) {
	const reversed = string.split('').reverse().join('')
	return string === reversed
}


// pointers sol - O(n) time, O(1) space, most optimal!
function isPalindrome(string) {
    let left = 0
    let right = string.length - 1
    while(left < right) {
        if (string[left] !== string[right]) return false
        left++
        right--
    }
    return true
}


// recursive - slice from both sides
function isPalindrome(string, left = 0) {
    if (string.length < 2) return true;
    if (string[0] === string[string.length - 1]) {
        return isPalindrome(string.slice(1, string.length - 1))
        } // slicing 1 from both sides each time
    return false;
}


// recursive - pointer method
function isPalindrome(string, left = 0) {
	const right = string.length - 1 - left // as left increases, right decreases
	while (left < right) { // recursive case: left < right until false is returned. only truthy can proceed
		return string[left] === string[right] && isPalindrome(string, left+1)
	}
	return true // base case: left >= right (midpoint) and we haven't returned false yet
}


// recursive - algoexpert sol - O(n) time, O(n) space
function isPalindrome(string, left = 0) {
	if (i >= j) {
		return true
	} else {
		return string[i] === string[j] && isPalindrome(string, i + 1)
	}
}