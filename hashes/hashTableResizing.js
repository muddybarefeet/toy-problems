/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var HashTable = function () {
  var result = {};
  result.hash = [];
  var max = 10;

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

    if (!inBucket) result.hash[index].push([key,value]);
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
        delete bucket[i];
      }
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

var hash = HashTable();
hash.insert("anna",4);
console.log(hash.remove("anna"))