// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
  constructor(maxSize) {
    this.cache = {};
    this.maxSize = maxSize || 1;
    this.currentSize = 0;
    this.linkedList = new DoublyLinkedList();
  }

  insertKeyValuePair(key, value) {
    if (!(key in this.cache)) {
      if (this.currentSize === this.maxSize) this.evict();
      else this.currentSize++; // size < maxSize
      this.cache[key] = new Node(key, value);
    } else this.replaceKey(key, value); // key in cache
    this.linkedList.setHead(this.cache[key]);
  } // O(1) time, O(1) space

  replaceKey(key, value) {
    this.cache[key].value = value; // updates the LL node itself
  } // O(1) time, O(1) space

  evict() {
    const keyToRemove = this.linkedList.tail.key;
    this.linkedList.removeTail();
    delete this.cache[keyToRemove];
  } // O(1) time, O(1) space

  getValueFromKey(key) {
    if (!(key in this.cache)) return null;
    const node = this.cache[key];
    this.linkedList.setHead(node);
    return node.value;
  } // O(1) time, O(1) space

  getMostRecentKey() {
    return this.linkedList.head.key;
  } // O(1) time, O(1) space
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === node) return;
    // case: node is already head - do nothing
    else if (!this.head) {
      // case: no head - set both tail and head to node
      this.head = node;
      this.tail = node;
    } else if (this.head === this.tail) {
      // head = tail - node becomes new head
      this.head = node;
      node.next = this.tail;
      this.tail.prev = node;
    } else {
      // node is not head, but there is a head - removeBindings if node exists, current
      // head's prev points to node (and vice versa), which becomes new head
      if (node === this.tail) this.removeTail(); // if node is tail, remove tail first
      node.removeBindings();

      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  } // O(1) time, O(1) space

  removeTail() {
    // deletes the last node in the LL, sets 2nd-to-last next pointer to null
    if (!this.tail) return;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  } // O(1) time, O(1) space
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  removeBindings() {
    if (this.prev) this.prev.next = this.next;
    if (this.next) this.next.prev = this.prev;
    this.prev = null;
    this.next = null;
  } // O(1) time, O(1) space
}





// same sol - worked out without looking at solution

// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
    constructor(maxSize) {
      this.maxSize = maxSize || 1;
          this.size = 0
          this.cache = {}
          this.order = new DoublyLinkedList
    }
  
    insertKeyValuePair(key, value) {
      // if key already in cache - replace the value in keyvalue pair
          if (key in this.cache) {
              this.replace(key, value)
          } else {
              // if key not in cache - add to cache
              // and size = maxSize - evict tail
              if (this.size === this.maxSize) this.evict()
              // and size < maxSize - increase size
              else this.size++
              this.cache[key] = new Node(key, value)
          }
          // set this.cache[key] as new head in linkedlist
          this.order.setHead(this.cache[key])
    }
      
      replace(key, value) {
          this.cache[key].value = value
      }
      
      evict() {
          const oldTail = this.order.tail.key
          this.order.removeTail()
          delete this.cache[oldTail]
      }
  
    getValueFromKey(key) {
      if (!(key in this.cache)) return null
          this.order.setHead(this.cache[key]) // set new head
          return this.cache[key].value
    }
  
    getMostRecentKey() {
      return this.order.head.key
    }
  }
  
  class DoublyLinkedList {
      constructor() {
          this.head = null
          this.tail = null
      }
      
      setHead(node) {
          if (node === this.head) return
          else if (!this.head) {
              this.head = node
              this.tail = node
          } else {
              if (node === this.tail) this.removeTail()
              
              node.removeBindings()
              const oldHead = this.head
              this.head = node
              this.head.next = oldHead
              oldHead.prev = node
          }
      }
      
      removeTail() {
          if (!this.tail) return
          if (this.head === this.tail) {
              this.head = null
              this.tail = null
          } else {
              const newTail = this.tail.prev
              newTail.next = null
              this.tail = newTail
          }
      }
  }
  
  class Node {
      constructor(key, value) {
          this.key = key
          this.value = value
          this.next = null
          this.prev = null
      }
      
      removeBindings() {
          if (this.prev) this.prev.next = this.next
          if (this.next) this.next.prev = this.prev
          this.prev = null
          this.next = null
      }
  }