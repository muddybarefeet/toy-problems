// isNaN doesn't work very well. We want us to tell us whether the value or object we're dealing with is a number or not. Instead, it tells us if the value is equal to the NaN value it has on-record.

// So let's make a proper function, called isAN, for is A Number. If you pass it a value, it will return true if a value is a valid primitive number or Number object, and false if not.

var isAN = function (value) {
  if(typeof(value) === 'number' && value !== null) {
    return true;
  } else if(Object.prototype.toString.call(value) === "[object Number]") {
    if (value.toPrecision() === "NaN") return false;
    return true;
  } else {
    return false;
  }
};



// -- shorter ----

var isAN2 = function (value) {
  return (value instanceof Number||typeof value === 'number') && !isNaN(value);
};

console.log(isAN2(new Number("a")));