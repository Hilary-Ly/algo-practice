function balancedBrackets(string) {
   const stack = [];
   const hash = { ')': '(', ']': '[', '}': '{' };
   const openers = new Set(['(', '[', '{']);
   const closers = new Set([')', ']', '}']);
   for (let char of string) {
      if (openers.has(char)) stack.unshift(char);
      else if (hash[char] === stack[0]) stack.shift();
      else if (closers.has(char)) return false;
   }
   return stack.length === 0;
}



// from interview cake
function isValid(code) {

  // Determine if the input code is valid
  const stack = []
  const hash = {')':'(', '}':'{', ']':'['}
  const opener = new Set(['(', '{', '['])
  for (let i = 0; i < code.length; i++) {
    const char = code[i]
    if (opener.has(char)) stack.unshift(char)
    else if (hash[char] === stack[0]) stack.shift()
    else return false
  }

  return stack.length === 0;
}
// O(n) time, O(n) space worst case if all chars are openers


// similar question: parens matching
function getClosingParen(sentence, openingParenIndex) {
   let currLevel = 0;

   for (let i = openingParenIndex + 1; i < sentence.length; i++) {
      if (sentence[i] === '(') {
         currLevel++;
      }
      if (sentence[i] === ')') {
         if (currLevel === 0) return i;
         currLevel--;
      }
   }
   throw new Error();
}