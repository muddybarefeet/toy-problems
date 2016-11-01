//find the rotation point in the array and return its index

var words = [ 'a','b','c','d','e','g','i' ];

var rotationPoint = function (arr) {

  if (arr.length === 1) return 0;

  var leftI = 0;
  var rightI = arr.length-1;
  var firstWord = arr[0];

  while (leftI < rightI) {
    console.log(leftI, rightI);
    var midIndex = Math.floor( leftI + ((rightI-leftI)/2) );

    if (arr[midIndex] < firstWord) { //point must be on the left (between mid and first)
      rightI = midIndex;
    } else { //point to the left
      leftI = midIndex;
    }

    //WHY THIS BLOCK??!
    if ( (leftI + 1) === rightI) {
      break;
    }

  }
  return rightI;
};

console.log('ans', rotationPoint(words));