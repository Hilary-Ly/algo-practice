function patternMatcher(pattern, string) {
	if (string.length < pattern.length) return []
	const newPattern = getNewPattern(pattern)
	const didSwitch = newPattern[0] !== pattern[0]
	const counts = {x:0, y:0}
	const firstY = getCountsAndFirstYpos(newPattern, counts) 
	// counts is changed and doesn't have to be returned
	console.log(counts)
	if (counts['y']) {
		for (let lenX = 1; lenX < string.length; lenX++) {
			const lenY = (string.length - lenX * counts['x']) / counts['y'] 
			// ^ v important - figure out x and y based on number of total chars and occurrences
			if (lenY <= 0 || lenY % 1 !== 0) continue
			const yIdx = firstY * lenX 
			const x = string.slice(0, lenX)
			const y = string.slice(yIdx, yIdx + lenY)
			const potentialMatch = newPattern.map(char => {
				if (char === 'x') return x // the var x, not the string 'x'!
				else return y
			}) // also important - recreate the string with pattern
			// console.log(pattern, string, potentialMatch.join(''), x, y)
			if (string === potentialMatch.join('')) {
				if (!didSwitch) return [x,y]
				else return [y,x]
			}
		} 
	} else {
			let lenX = string.length / counts ['x']
			const lenY = (string.length - lenX * counts['x']) / counts['y'] 
			if (lenX % 1 === 0) {
				const yIdx = firstY * lenX 
				const x = string.slice(0, lenX)
				const y = string.slice(yIdx, yIdx + lenY)
				const potentialMatch = newPattern.map(char => {
					if (char === 'x') return x
					else return y
				})
				console.log(pattern, string, potentialMatch.join(''), x, y)
				if (string === potentialMatch.join('')) {
					if (!didSwitch) return [x, '']
					else return ['', x]
				}
					
			}
		}
	return [] // no match
	}
	
function getNewPattern(pattern) {
	const patternLetters = pattern.split('')
	if (pattern[0] === 'x') return patternLetters
	else return patternLetters.map(char => {
		if (char === 'x') return 'y'
		else return 'x'
	})
}
	
function getCountsAndFirstYpos(pattern, counts) {
	let firstY = null
	for (let i = 0; i < pattern.length; i++) {
		const char = pattern[i]
		if (char === 'y' && firstY === null) firstY = i
		counts[char]++
	}
	return firstY
}
// O(n^2 + m) time, O(n + m) space, where n = length of main ttring and m = length of pattern