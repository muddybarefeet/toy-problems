/*
 * Design and implement an LRU, or Least Recently Used, cache.
 *
 * An LRU cache gives O(1) get(key) and set(key, val) operations,
 * much like a hashtable, but once it reaches its limit for stored
 * number of items, removes the least recently used (i.e. the oldest
 * by get-date) item from the cache in O(1) time.
 *
 * For instance:
 *
 * var cache = new LRUCache(3); // limit of 3 items
 * cache.set("item1", 1);
 * cache.set("item2", 2);
 * cache.set("item3", 3);
 * cache.set("item4", 4);
 * // item1 was removed because it was the oldest item by insertion/usage
 * cache.get("item1") //=> null
 *
 * cache.get("item3") //=> 3
 * cache.get("item2") //=> 2
 *
 * cache.set("item5", 5);
 * // item4 is removed to make room, because it is the oldest by usage,
 * // which takes priority.
 *
 * cache.set("item6", 6);
 * // item3 is also removed, because it was retrieved before item2 was
 * // last retrieved.
 *
 * You will need a doubly-linked list (provided).
 */

var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToHead = function(node) {

  if(this.head === null){
    this.head = node;
    this.tail = node;
  }else{
    this.head.prev = node;
    node.next = this.head;
    node.prev = null;
    this.head = node;
  }

  return this.head;

};

LinkedList.prototype.removeTail = function() {
  var temp = this.tail;
  this.tail.prev.next = null;
  this.tail = this.tail.prev;
  return temp;
};

LinkedList.prototype.moveToHeadAndUpdateValue = function(node, newValue) {

  if(node === this.head){
    node.value = newValue === undefined ? node.value : newValue;
    return node;
  }
  
  //will not have a next value if it is at the tail
  if (node.next) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  } else {
    node.prev.next = null;
    this.tail = node.prev;
    node.prev = null;
  }
  node.value = newValue === undefined ? node.value : newValue;
  return this.addToHead(node);

};

var makeNode = function(value) {
  var node = {
    value: value,
    prev: null,
    next: null
  };
  return node;
};

var LRUCache = function(size){

  this.size = size || 3;
  this.currentSize = 0;
  this.queue = new LinkedList();
  this.store = {};

};

LRUCache.prototype.set = function(key, value) {

  if(this.size <= this.currentSize && !this.store.hasOwnProperty(key)){
    var removed = this.queue.removeTail();
    //delete the removed value from the store hash!
    delete this.store[removed.value[0]];
    this.currentSize--;
  }
  
  if(!this.store.hasOwnProperty(key)){
    this.store[key] = this.queue.addToHead(makeNode([key,value]));
    this.currentSize++;
    return this.store[key].value[1];
  }else{
    this.store[key] = this.queue.moveToHeadAndUpdateValue(this.store[key], value);
    return this.store[key].value[1];
  }

};

LRUCache.prototype.get = function(key){

  if (! this.store.hasOwnProperty(key)) return null;
  this.store[key] = this.queue.moveToHeadAndUpdateValue(this.store[key]);
  return this.store[key].value[1];

};

var cache = new LRUCache(3); // limit of 3 items
cache.set("item1", 1);
cache.set("item2", 2);
cache.set("item3", 3);
cache.set("item4", 4);
// item1 was removed because it was the oldest item by insertion/usage
 //=> null
console.log(cache.get("item1"));

console.log(cache.get("item3")); //=> 3
console.log(cache.get("item2")); //=> 2

console.log(cache.set("item5", 5));
// console.log(cache.store);
// // item4 is removed to make room, because it is the oldest by usage,
// // which takes priority.

console.log(cache.set("item6", 6));

// item3 is also removed, because it was retrieved before item2 was
// last retrieved.



