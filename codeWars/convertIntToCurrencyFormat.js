// Write a function that takes an integer in input and outputs a string with currency format.

// Integer in currency format is expressed by a string of number where every three characters are separated by comma.

// Ex. 123456 -> "123,456"

// Input will always be an positive integer, so don't worry about type checking or negative/float values.

var toCurrency = function (price) {

  var priceArr = price.toString().split('').reverse();

  var formattedPrice = [];
  for (var i = 0; i < priceArr.length; i++) {
    if (i%3 === 0 && i !== 0) formattedPrice.push(",");
    formattedPrice.push(priceArr[i]);
  }

  return formattedPrice.reverse().join('');
};

console.log(toCurrency(1234));

//-------- shorter

var toCurrency2 = function (price) {

  return price.toString().split('').reverse()
  .map(function (num, i) {
    return i%3 === 0 && i > 0 ? num + "," : num;
  })
  .reverse().join('');

};

console.log(toCurrency2(1234));