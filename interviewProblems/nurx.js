// //5 test cases failing

// function maxDifference(a) {
//     var currentLow = a[0];
//     var currentHigh = a[0];
//     var largestDiff = 0;

//     //maybe include case if only one thing then no difference

//     for (var i=0; i<a.length; i++) {
//         //if current low more than current then reset high to current and set low to current
//         if (a[i] < currentLow) {
//             if (currentHigh - currentLow > largestDiff) largestDiff = currentHigh - currentLow;
//             currentLow = a[i];
//             currentHigh = a[i];
//         } else if (currentHigh < a[i]) {
//             changesMade = true;
//             currentHigh = a[i];
//         }
//     }

//     //should return 0 on being 0 diff?
//     return largestDiff ? largestDiff : -1;
// }
function maxDiff(a){

 var lowWaterMark = a[0];
 var maxDiffSoFar = -1; //assuming this is the desired output if input is something like [5, 4, 3, 2, 1]
 var newLowWaterMark;

 a.forEach(function(value, index){

   if(value < lowWaterMark) newLowWaterMark = value;

   if((value - newLowWaterMark) > maxDiffSoFar){
     maxDiffSoFar = value - newLowWaterMark;
     lowWaterMark = newLowWaterMark;
   }

 });

 return maxDiffSoFar;

}

console.log(maxDiff([1,3,5]));
// console.log(maxDifference([7]));