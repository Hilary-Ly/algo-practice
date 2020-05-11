function underscorifySubstring(string, substring) {
	const locations = getLocations(string, substring)
	if (!locations.length) return string
	const collapsed = collapsedLocs(locations)
	const underscorified = addUnderscores(string, collapsed)
	return underscorified
}

function addUnderscores (string, locations) {
	let locationIdx = 0
	let stringIdx = 0
	let betweenU = false
	const finalChars = []
	
	while (locationIdx < locations.length && stringIdx < string.length) {
		if (stringIdx === locations[locationIdx][0]) {
			finalChars.push('_')
			betweenU = true
		}	
		if (stringIdx === locations[locationIdx][1] && betweenU) {
			finalChars.push('_')
			betweenU = false
			if (!betweenU) locationIdx++
		}
		finalChars.push(string[stringIdx])		
		stringIdx++
	}
	if (locationIdx < locations.length) {
		finalChars.push('_')
	} else if (stringIdx < string.length) {
		finalChars.push(string.slice(stringIdx))
	}
	return finalChars.join('')
}

function collapsedLocs (locationsArr) { // see interview cake for another ex of this
	const collapsed = [locationsArr[0]]
	for (let i = 1; i < locationsArr.length; i++) {
		const currentLoc = locationsArr[i]
		const lastCollapsed = collapsed[collapsed.length - 1]
		if (lastCollapsed[1] >= currentLoc[0]) {
			lastCollapsed[1] = Math.max(lastCollapsed[1], currentLoc[1])
		} else collapsed.push(currentLoc)
	}
	return collapsed
}

function getLocations (string, substring) {
	const locations = []
	let start = 0
  while (start < string.length) {
		const next = string.indexOf(substring, start)
		if (next !== -1) {
			locations.push([next, next + substring.length])
			start = next + 1
		} else start++
	}
	return locations
}

// O(n*m) time, O(n) space