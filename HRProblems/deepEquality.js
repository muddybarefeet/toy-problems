/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

var deepEquals = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  //now know they have the same number of keys so looping through one wont miss anything on the other
  
  for (var key in obj1) {

    if (Object.prototype.toString.call(obj1[key]) === '[object Object]' && Object.prototype.toString.call(obj2[key]) === '[object Object]') {
      var a = deepEquals(obj1[key],obj2[key]);
      if (!a) return false;
    } else if (typeof obj1[key] !== typeof obj2[key] || obj1[key] !== obj2[key]) {
      return false;
    }

  }

  return true;
};

// console.log(deepEquals({a:1,b:{l:6,o:{w:9}}},{a:1,b:{l:6,o:{w:8}}}));
// console.log(deepEquals({a:1,b:{l:6,o:4}},{a:1,b:{l:6,o:5}}));
// console.log(deepEquals({a:1,b:{l:6,o:{w:9}}},{a:1,b:{l:6,o:{w:9}}}));