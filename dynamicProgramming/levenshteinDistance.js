// sol 1 - using a new matrix / nested array DS
function levenshteinDistance(str1, str2) {
  // create the matrix with r=0 and c=0 prefilled
  const edits = [];
  for (let r = 0; r < str1.length + 1; r++) {
    const row = [];
    for (let c = 0; c < str2.length + 1; c++) {
      row.push(c);
    }
    row[0] = r;
    edits.push(row);
  }

  // add the rest of the matrix data in based on change information needed
  // we don't need to look for insert/delete/sub operations bc it's implicit in the if/else
  for (let r = 1; r < str1.length + 1; r++) {
    for (let c = 1; c < str2.length + 1; c++) {
      // check r-1 and c-1 in strings because we had to shift to include the empty strings at r=0, c=0
      if (str1[r - 1] === str2[c - 1]) edits[r][c] = edits[r - 1][c - 1];
      else
        edits[r][c] =
          1 + Math.min(edits[r - 1][c - 1], edits[r - 1][c], edits[r][c - 1]);
    }
  }
  return edits[str1.length][str2.length];
} // O(n*m) time, O(n*m) space, where n = str1 length, m = str2 length





// sol 2 - optimized space but also wtffff
function levenshteinDistance(str1, str2) {
  let small, big;
  if (str1.length < str2.length) {
    small = str1;
    big = str2;
  } else {
    small = str2;
    big = str1;
  }

  const oddEdits = new Array(small.length + 1);
  const evenEdits = [];
  for (let j = 0; j < small.length + 1; j++) {
    evenEdits.push(j);
  }

  for (let i = 1; i < big.length + 1; i++) {
    let currEdits, prevEdits;
    if (i % 2 === 0) {
      currEdits = evenEdits;
      prevEdits = oddEdits;
    } else {
      currEdits = oddEdits;
      prevEdits = evenEdits;
    }
    currEdits[0] = i;

    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) currEdits[j] = prevEdits[j - 1];
      // similar logic to sol 1
      else
        currEdits[j] =
          1 + Math.min(prevEdits[j - 1], prevEdits[j], currEdits[j - 1]);
    }
  }
  if (big.length % 2 === 0) return evenEdits[small.length];
  else return oddEdits[small.length];
} // O(n*m) time, O(min(n, m)) space
