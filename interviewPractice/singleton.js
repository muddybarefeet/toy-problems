//In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. 
//This is useful when exactly one object is needed to coordinate actions across the system.


//1. singleton using closure
var singleton = function (val) {

  var called = false;
  var storedValue;

  function storeTheValue (data) {
    storedValue = data;
  }

  return function () {
    if (!called) {
      called = true;
      storeTheValue(val);
    }
    return storedValue;
  };


}("anna");

// var a = singleton("anna");
// var b = singleton("rohan");

// console.log(a,b);


