/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/


var simpleCoinSum = function (targetVal) {
  var counter = 0;
  var options = [1,2,5,10,20,50,100,200];
  var seen = {};

  var inner = function (numSoFar, sum) {
    sum = sum || "";
    //check still less than the target
    if (numSoFar > targetVal) {
      return;
    }
    if (numSoFar === targetVal) {
      //this sort makes the time complexity bad
      sum = sum.split('').sort().join('');
      if (!seen[sum]) {
      // console.log('seen in if', sum);
        seen[sum] = true;
        counter++;
      }
      return;
    }
    //loop through the options
    for (var i = 0; i < options.length; i++) {
      if (options[i] <= targetVal) {
        inner(numSoFar + options[i], sum + options[i]);
      }
    }
    return;
  };
  inner(0);
  return counter;
};

// console.log(simpleCoinSum(5));


//--fancy

var coinSum = function (amount,i) {

  var coins = [1,2,5,10,20,50,100,200];
  if (amount === 0 || amount === 1) return 1;
  if (i < 0) return 0;

  if (typeof i ==='undefined') i = coins.length-1;
  //no point doing anything if the value to minus is greater
  if (coins[i] > amount) return coinSum(amount, i-1);
  return coinSum(amount-coins[i], i) + coinSum(amount, i-1);

};

console.log(coinSum(5));


