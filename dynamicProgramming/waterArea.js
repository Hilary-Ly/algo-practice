// sol 1 - level by level using wall indices at each level
function waterArea(heights) {
    const peak = Math.max(...heights)
      let area = 0
      for (let height = peak; height > 0; height--) {
          const wallsAtHeight = wallIndicesMaker(heights, height)
          area += areaAtLevel(wallsAtHeight)
      }
      return area
  }
  
  function wallIndicesMaker(heights, level) {
      const wallIndices = []
      for (let i = 0; i < heights.length; i++) {
          if (level <= heights[i]) wallIndices.push(i)
      }
      return wallIndices
  }
  
  function areaAtLevel(walls) {
      let areaLevel = 0
      if (walls.length === 1) return 0
      for (let i = 0; i < walls.length - 1; i++) {
          areaLevel += (walls[i+1] - walls[i] - 1)
      }
      return areaLevel
  } // O(n*a) time where n = array size, a = max height
  
  /*
  find max height - this is where we start
  go layer by layer to find area and add to an area variable
  to find area: 1) find the indices of walls in the level so we can work around them
  2) find area given the walls info
  if there is only one wall at any level, no water can collect there so return 0
  add water area between pairs of walls i and i + 1
  but also subtract 1 for width of the wall itself - draw it out to see!
  loop needs to terminate at walls.length-1 so we can allow i + 1 to reach the end
  */
  
  // sol 1.5 - similar to sol 1 but uses recursion
  function waterArea(heights, level = Math.max(...heights)) {
    if (level < 1) return 0
      
      let prevWall
      const atThisLevel = heights.reduce((collected, wallHeight, idx) => {
          // calculate diffs between wall indices if level is inside two walls
          if (wallHeight < level) return collected // no water collected
          if (prevWall) collected += idx - prevWall - 1
          prevWall = idx
          return collected
      }, 0)
      return atThisLevel + waterArea(heights, level - 1)
  } // O(n*a) time




  /*
sol 2 - vertical / by index approach (optimal)
build two arrays that contain the walls to the right and left of a given index
(would need to loop backwards for the right walls)
then loop through the wall heights, water collected at that index is the min of the maxes,
minus the wall itself
*/

function waterArea(heights) {
    const rightMaxes = new Array(heights.length).fill(0)
      let rightMax = 0 
      for (let i = heights.length - 1; i >= 0; i--) {
          rightMax = Math.max(rightMax, heights[i])
          rightMaxes[i] = rightMax
      }
      
      const leftMaxes = new Array(heights.length).fill(0)
      let leftMax = 0
      for (let i = 0; i < heights.length; i++) {
          leftMax = Math.max(leftMax, heights[i])
          leftMaxes[i] = leftMax
      }
  
      let collected = 0
      for (let i = 0; i < heights.length; i++) {
          collected += Math.min(leftMaxes[i], rightMaxes[i]) - heights[i]
      }
      return collected
  } // O(n) time, O(n) space - optimal!
  
  
  // sol 2.5 - simplify above solution since two loops cover same ground
  function waterArea(heights) {
  	const rightMaxes = []
  	let rightMax = 0 
  	for (let i = heights.length - 1; i >= 0; i--) {
  		rightMax = Math.max(rightMax, heights[i])
  		rightMaxes[i] = rightMax
  	}
      
  	let collected = 0
  	let leftMax = 0
  	for (let i = 0; i < heights.length; i++) {
  		leftMax = Math.max(leftMax, heights[i])
  		const rightMax = rightMaxes[i]
  		collected += Math.min(leftMax, rightMax) - heights[i]
  	}
  	return collected
  }




  // sol 3 - similar approach to sol 2, only uses one additional array
function waterArea(heights) {
	const maxes = new Array(heights.length).fill(0)
	let leftMax = 0
	for (let i = 0; i < heights.length; i++) {
		maxes[i] = leftMax
		leftMax = Math.max(leftMax, heights[i])
	}

	let rightMax = 0
	for (let i = heights.length - 1; i >= 0; i--) {
		const minHeight = Math.min(rightMax, maxes[i])
		// update maxes array with water stored
		if (heights[i] < minHeight) maxes[i] = minHeight - heights[i] 
		else maxes[i] = 0
		rightMax = Math.max(rightMax, heights[i]) // same as with left
	}
	return maxes.reduce((a,b) => a + b, 0) // sum up the array
} // O(n) time, O(n) space due to new array(s) built