//given an arry find the rotation point
//return its index

//do it in 0(log n) time


//QUESTIONS: 
    //assume there are no duplicate words



//return if only one thing in the array
var rotationPoint = function (arr) {

    var result;

    if (arr.length === 1) return 0;

    // inner function (leftIndex, rightIndex, array)
    var inner = function (leftIndex, rightIndex, arr) {

        //find the midIndex
        var midIndex = Math.ceil((rightIndex-leftIndex)/2) + leftIndex;
        var currentVal = arr[midIndex];

        //BASE CASE - if the thing to the left is greater then you are at the rotation point
        if (currentVal < arr[midIndex-1]) {
            result = midIndex;
            return;
        }

        //if we only have a range of three or less numbers check all
        if (rightIndex-leftIndex < 2) {
          result = arr[rightIndex] < arr[leftIndex] ? rightIndex : leftIndex;
          return;
        }

        //if the current letter is greater than previous and less than next AND the current is less than last
        if (currentVal > arr[midIndex-1] && currentVal < arr[arr.length-1]) {
            //recurse left
            inner(leftIndex, midIndex, arr);
        } else if (currentVal > arr[midIndex-1] && currentVal > arr[arr.length-1]) {
        //if the current is greater than prev and less than next BUT greater than last
            //recurse right          
            inner(midIndex,rightIndex, arr);
        }
        
    };
    inner(0,arr.length-1,arr);

    return result;

};

console.log(rotationPoint(["a","b","c"])); //1

// mid: 1
// current: c
// recurse(1, 4)
// mid: 3/2 -> 1.5 -> 1 -> 2
// current d
// recurse (2,4)
// mid 4-2 = 2 +2 = 4
// current a

