// sol 1 - not optimal time
function longestPalindromicSubstring(string) {
	let longest = ''
	for (let i = 0; i < string.length; i++) {
		for (let j = i; j < string.length; j++) {
			const substring = string.slice(i, j+1) // +1 because slice is exclusive at endpoint
			if (isPalindrome(substring) && substring.length > longest.length) {
				longest = substring
			} 
		}
	}
	return longest
}

function isPalindrome(string) {
	let left = 0
	let right = string.length - 1
	while (left < right) { // O(n) time
		if (string[left] !== string[right]) return false
		left++
		right--
	}
	return true
} // O(n^3) time, O(1) space



// sol 2 - optimized for time
function longestPalindromicSubstring(string) {
    let longest = [0,1]
      for (let i = 1; i < string.length; i++) {
          // get the longest the even and odd palindromes where midpoint is i
          const odd = getLongestPalindromeFrom(string, i - 1, i + 1)
          const even = getLongestPalindromeFrom(string, i - 1, i)
          
          // determine which between the two (even/odd) is longer
          let localLongest
          if (odd[1] - odd[0] > even[1] - even[0]) localLongest = odd
          else localLongest = even
          
          // change global if it the local is longer
          if (longest[1] - longest[0] < localLongest[1] - localLongest[0]) {
              longest = localLongest
          }
      }
      return string.slice(longest[0], longest[1])
  }

  function getLongestPalindromeFrom(string, start, end) {
      while (start >= 0 && end < string.length) {
          if (string[start] !== string[end]) break
          start--
          end++
      }
      return [start + 1, end] // +1 because of how slice is used
  } // O(n^2) time, O(1) space