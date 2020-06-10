/*
	BFS queues work for graphs too!
	create a queue (FIFO) to keep track of children - shift/push to retain order of children
	while the queue is not empty:
	remove one item from the queue at a time, perform cb function with node's *name*
	and then add each of the node's children (as elements)
	queue = [B, C, D] shift
	queue = [C, D] push children
	queue = [C, D, E, F]
    */
    
    breadthFirstSearch(array) {
		let queue = [this]
		while (queue.length) {
			const node = queue.shift() 
			array.push(node.name) // O(v) time
			if (node.children) queue.push(...node.children) // O(e) time
		}
		return array
	} // O(v + e) time, O(v) space
	// O(e) due to ...node.children is implicity a loop, O(v) as we run through all nodes