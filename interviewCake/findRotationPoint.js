//find the rotation point in the array and return its index

var words = [ 'a','g','m','p'];

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

//--------------second solution --------

var rotationPoint = function (arr) {

    if (arr.length === 1) return 0;
    var first = arr[0];
    var leftIndex = 0;
    var rightIndex = arr.length-1;
    if (first < arr[rightIndex]) return leftIndex;
    
    while (leftIndex < rightIndex) {
        var mid = Math.floor( ((rightIndex-leftIndex)/2) + leftIndex);

        if (arr[mid] > first) {
            leftIndex = mid;
        }

        if (arr[mid] < first) {
            rightIndex = mid;
        }
        if(leftIndex+1 === rightIndex) {
          break;
        }
    }
    return (leftIndex === rightIndex || arr[leftIndex] > arr[rightIndex])? rightIndex : leftIndex;
};

console.log('ans', rotationPoint(words));