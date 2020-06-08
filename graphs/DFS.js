class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  /*
    sol 1 - iterative
    DFS -> use a stack (pop/push, shift/unshift) if iterative, or use recursion
    initialize a stack with the root as first element, shift it off and then perform cb
    add its children by unshifting (using shift/unshift bc working left to right here)
    keep going via while loop until stack length is no longer truthy
    */

  depthFirstSearch(array) {
    const stack = [this];
    while (stack.length) {
      const node = stack.shift();
      array.push(node.name);
      if (node.children) stack.unshift(...node.children);
    }
    return array;
  }

  /*
    first, perform cb function on the root node
    use a forward loop to address children from left to right, recurse through children
    to perform cb on its children before unwinding to get back to the more senior levels
    */

  depthFirstSearch(array) {
    array.push(this.name);
    for (let child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
