/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

 var characterFrequency = function (string) {
  //1. make hash of counts
  //2. make array of arrays
  //3. sort
  var hash = {};
  var arr = [];
  for (var i=0; i<string.length; i++) {
    if (hash[string[i]]) {
      hash[string[i]]++;
    } else {
      hash[string[i]] = 1;
    }
  }
  
  for (var key in hash) {
    arr.push([key, hash[key]]);
  }

  arr.sort(function (a,b) {
    if(a[1] > b[1]) return -1;
    if(a[1] < b[1]) return 1;
    if(a[0] < b[0]) return -1;
    if(a[0] > b[0]) return 1;
  });
  return arr;
 };

 console.log(characterFrequency('miaaiaaippi'));




