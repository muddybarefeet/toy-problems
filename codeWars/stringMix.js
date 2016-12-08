/*
Examples:

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
 
*/

var makeObj = function (arr1, arr2) {
  var obj = {};
  var result = [];
  arr1.forEach(function (letter) {
    if (obj[letter]) {
      obj[letter][0]++;
    } else {
      obj[letter] = [1];
    }
  });

  arr2.forEach(function (letter) {
    if (obj[letter] && !obj[letter][1]) {
      obj[letter].push(1);
    } else if (obj[letter] && obj[letter][1]) {
      obj[letter][1]++;
    } else if (!obj[letter]) {
      obj[letter] = [0, 1];
    }
  });

  return obj;

};

var makeStr = function (tuple, letter) {
  if (tuple[0] > tuple[1] && tuple[0] > 1) {
    return "1:" + letter.repeat(tuple[0]) + "/";
  }
  if (tuple[1] && tuple[1] > tuple[0] && tuple[1] > 1) {
    return "2:" + letter.repeat(tuple[1]) + "/";
  }
  if (tuple[1] === tuple[0] && tuple[0] > 1) {
    return "=:" + letter.repeat(tuple[0]) + "/";
  }
};


var mix = function (s1,s2) {
  //get arrays of just the lower case letters
  var arr1 = s1.match(/[a-z]+/g).join("").split("");
  var arr2 = s2.match(/[a-z]+/g).join("").split("");

  //make these strings into objects
  var obj1 = makeObj(arr1, arr2);

  //find out the max values between each
  // console.log(obj1);

  var strs = [];
  //now we loop through the obj and make an array of strings for each letter if there is a ount greater than one for it
  for (var key in obj1) {
    var formatStr = makeStr(obj1[key], key);
    if (formatStr) strs.push(formatStr);
  }

  return strs.sort(function(a, b){
    //when tied, alphabetically
    return a[a.length-2] < b[b.length-2] ? -1 : 1;
  })
  .sort(function(a, b){
    //when tied, 1s before 2s before =
    if(a[0] < b[0]) return -1;
    if(a[0] > b[0]) return 1;
    return 0;
  })
  .sort(function(a, b){
    //first largest number of letters
    return b.length - a.length;
  })
  .join("")
  .replace(/.$/,"");

};

var s1="Are the kids at home? aaaaa x fffff";
var s2="Yes they are here! aaaaa xx fffff";
console.log(mix(s1, s2));// --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"