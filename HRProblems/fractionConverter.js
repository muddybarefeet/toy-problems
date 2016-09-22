/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var gcd = function (a,b) {
  if (!b) return a;
  return gcd(b, a%b);
};

var decimalConvert = function (dec) {
  //make sure not negative
  dec = Math.abs(dec);
  //if not decimal return
  if (dec%1 === 0) return dec;
  var dividor = 1;
  while (dec%1 !== 0) {
    dec*=10;
    dividor*=10;
  }
  if ((parseInt(dividor,10)/dec)%1 === 0) {
    return "1/" + parseInt(dividor,10)/dec;
  } else {
    //the top number does not go into the bottom number need to find the highest common divisor
    var greatestDivisor = gcd(parseInt(dividor,10),dec);
    console.log(greatestDivisor);
    return (dec/greatestDivisor).toString() +"/"+ (parseInt(dividor,10)/greatestDivisor).toString();
  }
};

console.log(decimalConvert(6));