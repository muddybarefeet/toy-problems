//given an array of integers find the greatest product of three that can be made from the array


//if the array is only length 3 then times all thing together OR if less return prodcut of what is there

//1. find the top 3 and lowest 2 

// check that the highest three are all positive - if not maybe the largest will inc the negative?
//2. check if the lowest two are both negative (if there are negatives in the array)

//make two variables for the sums and then compare and return the largest


var greatestNumbers = function (num, obj) {

  var temp1;
  var temp2;

  if (obj.first === null) {
    obj.first = num;
    return obj;
  }

  if (obj.first <= num) {
    temp1 = obj.first;
    obj.first = num;
    temp2 = obj.second;
    obj.second = temp1;
    obj.third = temp2;
  } else if (obj.second === null || obj.second <= num) {
    temp2 = obj.second;
    obj.second = num;
    obj.third = temp2;
  } else if (obj.third === null || obj.third <= num) {
    obj.third = num;
  }

  return obj;

};

var lowestNumbers = function (num, obj) {

  var temp;

  if (obj.first === null) {
    obj.first = num;
    return obj;
  }

  if (obj.first >= num) {
    temp = obj.first;
    obj.first = num;
    if (obj.second >= temp || obj.second === null) {
      obj.second = temp;
    }
  } else if (obj.second === null || obj.second >= num) {
    console.log('add second');
    obj.second = num;
  }

  return obj;

};


var greatestProductOfThree = function (numArr) {

  if (numArr.length <= 3) {
    return numArr.reduce(function (prev, current) {
      return prev * current;
    }, 1);
  }

  var lowest = {
    first: null,
    second: null
  };

  var highest = {
    first:null,
    second: null
  };

  for (var i = 0; i < numArr.length; i++) {
    highest = greatestNumbers(numArr[i], highest);
    lowest = lowestNumbers(numArr[i], lowest);
  }

  //dont actually need to check if negative numbers in lowest as the answer of the product will not matter
  //also dont need to check greatest's numbers to be positive or negative either

  //all the values in the object will be filled if the array is atleast three in length REMEMBER DUPLICATES
  console.log(lowest, highest);
  var highs = highest.first * highest.second * highest.third;
  var lowHigh = lowest.first * lowest.second * highest.first;

  return highs > lowHigh ? highs : lowHigh;

};

console.log(greatestProductOfThree([300,300,300,300,300]));

