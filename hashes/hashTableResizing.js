/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  result.hash = [];
  var max = 10;
  var size = 0;

  var rehash = function (newMax) {
    //resize the hash
    //update max value
    //take all out of the hash and then rehash using methods already made
    max = newMax;
    var oldStorage = result.hash;
    result.hash = [];
    size = 0;
    oldStorage.forEach(function (bucket) {
      if (bucket) {
        bucket.forEach(function (tuple) {
          result.insert(tuple[0],tuple[1]);
        });
      }
    });
  };

  result.insert = function (key,value) {
    var inBucket = false;
    var index = getIndexBelowMaxForKey(key,10);
    if (result.hash[index] === undefined) {
      //check that the key is not already here
      result.hash[index] = [];
    } else {
      //if nothing here then make new bucket
      for (var i=0; i<result.hash[index].length; i++) {
        if (result.hash[index][i][0] === key) {
          //update the value if alrady found
          inBucket = true;
          result.hash[index][i][1] = value;
        }
      }
    }
    if (!inBucket) {
      size++;
      result.hash[index].push([key,value]);
    }
    if (size >= 0.75*max) {
      rehash(max*2);
    }
    return [key,value];
  };

  result.retrieve = function (key) {
    var index = getIndexBelowMaxForKey(key,max);
    var bucket = result.hash[index];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  };

  result.remove = function (key) {
    var value;
    var index = getIndexBelowMaxForKey(key,max);
    var bucket = result.hash[index];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        value = bucket[i][1];
        size--;
        delete bucket[i];
      }
    }
    //check not need to shrink the hash table
    if (size <= 0.24*max) {
      rehash(max/2);
    }
    return [key,value];
  };

  return result;

};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


var hashTable = makeHashTable();
hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
hashTable.insert('Hi', 'woof');
console.log('dasas',hashTable.remove("Hi"));


