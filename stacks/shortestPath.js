function shortenPath(path) {
   const tokens = path.split('/').filter(cleanToken);
   const stack = []; // pop / push to retain the order
   if (path[0] === '/') stack.push('');
   for (let token of tokens) {
      if (token === '..') {
         if (!stack.length || stack[stack.length - 1] === '..')
            stack.push(token);
         else if (stack[stack.length - 1] !== '') stack.pop();
      } else stack.push(token);
   }
   if (stack.length === 1 && stack[0] === '') return '/';
   return stack.join('/');
}

function cleanToken(token) {
   return token !== '.' && token !== '';
}
// O(n) time, O(n) space
