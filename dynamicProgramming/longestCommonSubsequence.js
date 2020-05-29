// sol 1 - storing a new matrix but complex operations within the matrix
function longestCommonSubsequence(str1, str2) {
	const subs = []
	for (let r = 0; r < str1.length + 1; r++) {
		const row = []
		for (let c = 0; c < str2.length + 1; c++) {
			row.push([])
		}
		subs.push(row)
	}
	for (let r = 1; r < str1.length + 1; r++) {
		for (let c = 1; c < str2.length + 1; c++) {
			if (str1[r-1] === str2[c-1]) subs[r][c] = subs[r-1][c-1].concat(str1[r-1])
			else {
				if (subs[r-1][c].length > subs[r][c-1].length) subs[r][c] = subs[r-1][c]
				else subs[r][c] = subs[r][c-1]
			}
		}
	}
	return subs[str1.length][str2.length]
} // O(n*m*min(n,m)) time, bc we must concat (linear time) within the nested loops
// O(n*m*min(n,m)) space

/*
build matrix representing str1 on the cols and str2 on the rows, inclusively
but r=0 and c=0 are '' empty strings (similar to levenshtein distance problem)
will need nested for loops

another set of nested for loops to run through newly created matrix row-by-row
comparing subsequences up to str1(r-1) and str2(c-1), where 1 is due to offset of ''
if equal, build the result by placing the latest subsequence array into the cell
latest subsequence is the item diagonally before it, the items above and left draw from that
if not equal, take either the longer of subsequences directly above or directly left
	
return the last cell because it compares both entire strings
*/





// sol 2 - optimized by doing more efficient operations at each cell in the matrix
function longestCommonSubsequence(str1, str2) {
    const lcs = []
      for (let r = 0; r < str1.length + 1; r++) {
          const row = []
          for (let c = 0; c < str2.length + 1; c++) {
              const cell = new Array(4)
              cell[1] = 0
              row.push(cell)
          }
          lcs.push(row)
      }
      
      for (let r = 1; r < str1.length + 1; r++) {
          for (let c = 1; c < str2.length + 1; c++) {
              if (str1[r-1] === str2[c-1]) {
                  lcs[r][c] = [str1[r-1], lcs[r-1][c-1][1] + 1, r-1, c-1]
              } else {
                  if (lcs[r-1][c][1] > lcs[r][c-1][1]) lcs[r][c] = [null, lcs[r-1][c][1], r-1, c]
                  else lcs[r][c] = [null, lcs[r][c-1][1], r, c-1]
              }
          }
      }
      return buildSequence(lcs)
  }
  
  function buildSequence(lcs) {
      const seq = []
      let r = lcs.length - 1
      let c = lcs[0].length - 1
      while (r !== 0 && c !== 0) {
          let cell = lcs[r][c]
          if (cell[0]) seq.unshift(cell[0])
          r = cell[2]
          c = cell[3]
      }	
      return seq
  } // O(n*m) time due to loops but the ops inside are constant time
  // O(n*m) space created
  
  /*
  create matrix representing str1 on rows and str2 on cols inclusively
  r=0 and c=0 are '' so you'll need lengths + 1 of each
  each cell is represented as [current letter used in lcs, length of lcs so far, 
  pointer to prev r, pointer prev c]
  
  another set of nested loops to fill in newly created matrix row-by-row
  but this time, operations in each cell are constant time
  compare subsequences up to r-1 and c-1 (1 offset due to '')
  if equal, populate cell: [curr letter used in lcs, length of lcs from diag prev cell + 1,
  index diag r, index diag c]
  if unequal, take the longer of the lengths of the cells directly above and directly left
  for the length, so cell = [null, longer length, pointers related to longer length]
  
  create a helper function to build the subsequence using info found for matrix:
  working from the last cell and backward, use the pointers to find each letter and
  fill a new matrix with it, adding letters from the front
  
  return the result of helper function
  */




