// In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

// Create an Singleton pattern, so there is one object in system.

//---- however these do not work with pseudo classical pattern

var singleton = function(){
  
  var that = {};

  return function(){
    return that;
  };
  
}();



var getTheTimeThisStarted = function(name){
  
  var called = false;
  var storedValue;

  function makeStoredValue(){
    called = true;
    storedValue = {
      name: name,
      time: Date.now()
    };
  }

  return function(){
    if(called){
      return storedValue;
    }else{
      makeStoredValue();
      return storedValue;
    }
  };
  
}();

var s1 = getTheTimeThisStarted();
console.log(s1)
// var s2;

// setTimeout(function(){
//   s2 = getTheTimeThisStarted();
//   console.log(s1, s2);
// }, 100);










