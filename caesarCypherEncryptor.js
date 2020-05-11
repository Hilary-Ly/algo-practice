function caesarCipherEncryptor(string, key) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz' 
	// ^ O(26) or constant time BUT if alphabet is m size then its O(m)!
	let encrypted = ''
	for (let char of string) {
		const oldID = alphabet.indexOf(char)
		const newID = (oldID + key) % alphabet.length
		encrypted += alphabet[newID]
	}
	return encrypted
}

// O(n) time, O(n) space