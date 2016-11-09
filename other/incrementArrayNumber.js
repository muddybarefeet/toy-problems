
// Given a non-negative number represented as an array of digits, plus one to the number.
// The digits are stored such that the most significant digit is at the head of the list.

//assume you cannot join and add and split! :)

var incrementArrayNuber = function (arr) {
  
  //reverse our array //021
  var reversedArray = arr.reverse();
  
  //loop through the array
  for(var i=0; i<reversedArray.length; i++) {
    // if the current number is less than 9 increment and return 
    if (reversedArray[i] < 9) {
       reversedArray[i]+=1;
      return reversedArray.reverse();
    }
    // if the current number is 9 chnage 9 to 0
    if (reversedArray[i] === 9) {
      reversedArray[i] = 0;
      if ( (i+1) === reversedArray.length) {
      //if we are on the last number push in a one
        reversedArray.push(1);
        reversedArray.reverse();
      }
    }
  
  }
  
  
};

incrementArrayNuber([1,1,9]);
incrementArrayNuber([9,9,9]);