// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.

var checkRemainder = function (num,num2) {
  var total = num2;
  while (total < num) {
    total += num2;
  }
  if (total !== num) {
    return num - (total - num2);
  }
  return 0;
};

//return how many times one number goes into the other
var divide = function (num, num2) {
  // var smaller;
  // var larger;
  // smaller = num <= num2 ? num : num2;
  // larger = num > num2 ? num : num2;
  var count = 1;
  var sum = num2;

  while (sum < num) {
    sum+=num2;
    count++;
  }
  return sum === num ? count : count-1;
};

var multiply = function (num, num2) {
  var count = 1;
  var sum = num;
  while (count<num2) {
    sum+=num;
    count++;
  }
  return sum;
};


var divideTwoNumbers = function (num,num2) {
  var wholeResult = "";
  var decimals = "";

  //1.divide and then check remainder
  var result = divide(num,num2);
  var remainder = checkRemainder(num,num2);
  if (remainder === 0) {
    return result;
  } else {
    wholeResult += result;
  }

  //only recurse if need to dabble in decimal numbers
  var inner = function (remainder,divisor) {
    var newSum = divide(multiply(remainder,10),divisor);
    var newRemainder = checkRemainder(multiply(remainder,10),divisor);
    //if the remainder is 0 RETURN
    if (newRemainder === 0 || decimals.length === 2) {
      decimals += newSum;
      return;
    }
    //if remainder is not 0 then add current sum to result and pass to next REPEAT
    if (newRemainder !== 0 && newSum > 0) {
      decimals += newSum;
      inner(newRemainder,divisor);
    }
    //if newSum === 0 and emainder !== 0 THEN NEED TO DO SOMETHING ELSE
    if (newRemainder !== 0 && newSum === 0) {
      decimals += 0;
      inner(newRemainder,divisor);
    }
  };

  inner(remainder,num2);
  return wholeResult + "." + decimals;
};

console.log(divideTwoNumbers(3,110));




//-------------------

var makeWhole = function (num) {
  var result = num;
  var count = 0;
  while (result%1 !== 0) {
    count++;
    result = multiply(result,10);
  }
  //return the whole number and number of times timesed by 10
  return [result,count];
};

var multiplyTwoNumbers = function (num,num2) {
  if (num === 0 || num2 === 0) return 0;
  //if decimals
  if (num%1 !== 0 || num2%1 !== 0) {
    //make both whole and then multiply and then divide by num 10's
    var numWhole = makeWhole(num);
    var num2Whole = makeWhole(num2);

    var total = multiply(numWhole[0], num2Whole[0]);
    //add back in decimal
    var totalPosMoved = numWhole[1] + num2Whole[1];
    //need to add totalPosMoved number of zeros to the ttotalPosMoved
    var whole = total.toString().split('').slice(0,-(totalPosMoved)).join('');
    var decimals = total.toString().split('').slice(-(totalPosMoved)).join('');

    return (whole + "." + decimals);
  }
  return multiply(num, num2);
};

// console.log(multiplyTwoNumbers(5.9,196));



