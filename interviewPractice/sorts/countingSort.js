
var countingSort = function (input) {

  var sorted = [];

  //fill the index
  var max = Math.max.apply(this,input);
  for (var i = 0; i <= max; i++) {
    sorted.push(0);
  }

  //put numbers in
  for (var i = 0; i < input.length; i++) {
    var index = input[i];
    //add the item to the new array at the index of the number the value is the number of times this number occurs
    sorted[index]+=1;
  }

  var result = [];

  //read numbers out
  for (var i = 0; i < sorted.length; i++) {
    var qty = sorted[i];
    while (qty > 0) {
      result.push(i);
      qty--;
    }
  }

  return result;

};

console.log(countingSort([6,2,8,3,1]));