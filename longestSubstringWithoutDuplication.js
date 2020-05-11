function longestSubstringWithoutDuplication(string) {
	const lastSeen = {}
	let longest = [0, 1]
	let start = 0
	for (let i = 0; i < string.length; i++) {
		const char = string[i]
		if (char in lastSeen) { // starts a new chain when char repeats, *starting right after we saw that char* (not where we are now)
			start = Math.max(start, lastSeen[char] + 1)
		} 
		if (longest[1] - longest[0] < i + 1 - start) { // compares current length with longest
			longest = [start, i+1]
		}
		lastSeen[char] = i
		console.log(start, longest[1] - longest[0], i + 1 - start, lastSeen)
	}
	return string.slice(longest[0], longest[1])
} // O(n) time, O(min(m, a)) space
