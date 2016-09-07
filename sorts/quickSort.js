// take the right most number as a pivot
//put everything less than the pivot to the right and everthing greater t the left (in place)
//keep doing this with each sub array until everything is in its own in an array - then join


//in place
var swap = function (index1,index2,array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

var quickSort = function(input) {

  //

};

//take and array and return the pivoted array
//should I pass this 2 indexes I think?!
var splitAndShuffle = function (input) {
  var wallIndex = 0;
  //get a pivot
  var pivot = input[input.length-1];
  //loop through the array
  for (var i = 0; i < input.length-1; i++) {
    if (input[i]>pivot) {
      //leave there nothing to move
    } else {
      // take the element at the walIndex and swap it with current element
      // increase wall element by one
      input = swap(wallIndex,i,input);
      console.log("swapped as lower than pivot",input);
      wallIndex++;
    }
  }
  console.log("last",input);
  //add back in the pivot
  return swap(wallIndex,input.length-1,input);
};






//return a new array
var quickSort2 = function (array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[array.length-1];
  var left = [];
  var right = [];

  for (var i=0; i<array.length-1; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort2(left).concat(pivot,quickSort2(right));
};

console.log(quickSort2([5,7,9,2,1,6]));
