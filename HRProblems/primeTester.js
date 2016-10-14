/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not. Prime number: only divide by one and itself
 */


var isPrime = function (num) {

  if (num < 2 || !isNaN(num)) {
    return false;
  }

  //two is an exception to the divisible by two rule
  if (num === 2) {
    return true;
  }

  //if divisible by two then not a prime
  if ((num/2)%1 === 0) {
    return false;
  }

  //loop from three to half point to see if any of these numbers divide into the number in question
  for (var i = 3; i < Math.floor(num/2); i++) {
    if (num%i === 0) {
      return false;
    }
  }

  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

//-----Sieve of Eratosthenes

var primeSieve = function (start,end) {

  //make array of true
  var numbers = {};
  for (var i = start; i <= end; i++) {
    numbers[i] = {key: i, notPrime: true};
  }

  for (var j = start; j <= end; j++) {
    if (numbers[j].notPrime === true) {
      //loop through and make all multiples false
      for (var p = j*j; p <= end; p+=j) {
        //if the number p is divisible by number on (j) and the result === a whole number then change in numbers to false
        var sum = p/j;
        if (sum%1 === 0) {
          numbers[p].notPrime = false;
        }
      }
    }
  }

  var results = [];
  for (var key in numbers) {
    if (numbers[key].notPrime === true) {
      results.push(key);
    }
  }

  return results;

};

console.log(primeSieve(2,10));