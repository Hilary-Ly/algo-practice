// recursive sol
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value && this.left) this.left.insert(value)
          else if (value < this.value) this.left = new BST(value)
          if (value >= this.value && this.right) this.right.insert(value)
          else if (value >= this.value) this.right = new BST(value)
          // note edge case - inserting a number that already exists
          
      // Do not edit the return statement of this method.
      return this;
    } // O(log n) time, O(log n) space on avg
      // worst: O(n) time and space - linear tree
  
    contains(value) {
          if (value === this.value) return true
          if (value < this.value && this.left) return this.left.contains(value)
          if (value > this.value && this.right) return this.right.contains(value)
          else return false
    } // O(log n) time, O(log n) space on avg
      // worst: O(n) time and space - linear tree
  
      findSmallest() {
          if (this.left) return this.left.findSmallest()
          return this.value
      }
      
    remove(value, parent = null) {
          if (value === this.value) {
              if (this.left && this.right) { // has two children
                  // if value has both children, we replace it with the min of the right subtree 
                  // and then remove that min of the right subtree so its not duplicated
                  const replacement = this.right.findSmallest()
                  this.value = replacement
                  this.right.remove(this.value, this) // remove the original right subtree min
              } else if (!parent) { // less than two children, and no parent
                  if (this.left) { // only has left child
                      this.value = this.left.value
                      this.left = this.left.left
                  } else if (this.right) { // only has right child
                      this.value = this.right.value
                      this.right = this.right.right
                  } else { // no children, no parent (edge case)
                      return this
                  }
              } else if (parent.left === this) {
                  if (this.left) parent.left = this.left
                  else parent.left = this.right
              } else if (parent.right === this) {
                  if (this.left) parent.right = this.left
                  else parent.right = this.right
              }
          }
          if (value < this.value && this.left) this.left.remove(value, this)
          if (value > this.value && this.right) this.right.remove(value, this)
      // Do not edit the return statement of this method.
      return this;
    } // O(log n) time, O(log n) space on avg
      // worst: O(n) time and space - linear tree
  } 







  // iterative sol
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
          let node = this
          while (node) {
              if (value < node.value && node.left) node = node.left
              else if (value < node.value) {
                  node.left = new BST(value)
                  break
              }
              if (value >= node.value && node.right) node = node.right
              else if (value >= node.value) {
                  node.right = new BST(value)
                  break
              }
          }
      // Do not edit the return statement of this method.
      return this;
    } // O(log n) time, O(1) space on average
      // worst case O(n) time, O(1) space - a linear tree
  
    contains(value) {
      let node = this 
          while (node) {
              if (value < node.value) node = node.left
              else if (value > node.value) node = node.right
              else return true // value === node.value
          }
          return false
    } // O(log n) time, O(1) space on avg
      // worst case O(n) time, O(1) space - linear tree
      
      findSmallest() {
          let node = this
          while (node) {
              if (!node.left) return node.value
              node = node.left
          }
      }
  
    remove(value, parent = null) {
          let node = this
          while (node) {
              if (value === node.value) {
                  if (node.left && node.right) { // has two children
                      // if value has both children, we replace it with the min of the right subtree 
                      // and then remove that min of the right subtree so its not duplicated
                      const replacement = node.right.findSmallest()
                      node.value = replacement
                      return node.right.remove(node.value, node) // remove the original right subtree min
                  } else if (!parent) { // less than two children, and no parent
                      if (node.left) { // only has left child
                          node.value = node.left.value
                          node.left = node.left.left
                          node.right = node.left.right
                      } else if (node.right) { // only has right child
                          node.value = node.right.value
                          node.right = node.right.right
                          node.left = node.right.left
                      } else { // no children, no parent (edge case)
                          return this
                      }
                  } else if (parent.left === node) {
                      if (node.left) parent.left = node.left
                      else parent.left = node.right
                  } else if (parent.right === node) {
                      if (node.left) parent.right = node.left
                      else parent.right = node.right
                  }
                  break // note recursive sol doesn't use this, we need to break out 
                  // of the loop once we've addressed all cases within val = node.val
              }
              if (value < node.value) {
                  parent = node
                  node = node.left
              }
              if (value > node.value) {
                  parent = node
                  node = node.right
              }
          }
      // Do not edit the return statement of this method.
      return this;
    }
  } // O(log n) time, O(1) space on avg
  // worst: O(n) time, O(1) space - linear tree