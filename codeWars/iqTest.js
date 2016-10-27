// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of 
//the given numbers differs from the others. Bob observed that one number usually differs from the others in 
//evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one 
//that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of 
//the elements start from 1 (not 0)

function iqTest(numbers){
  numbers = numbers.split(" ");
  var evens = [];
  var odds = [];
  for (var i = 0; i< numbers.length; i++) {
    if (numbers[i]%2 === 0) {
      evens.push(i+1);
    } else {
      odds.push(i+1);
    }
  }
  return odds.length === 1 ? odds[0] : evens[0];
}

console.log(iqTest("1 2 2"));