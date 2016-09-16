//implement parseInt

var manualParseInt = function (numStr) {

  var numDictionary = {
    "0":0,
    "1":1,
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9
  };

  var nums = numStr.split("").reverse();
  var factor = 1;
  return nums.reduce(function (prev, cur) {
    var sum = prev + (cur * factor);
    factor *= 10;
    return sum;
  },0);

};

console.log(manualParseInt("432"));