
/*Using the JavaScript language, have the function OffLineMinimum(strArr) 
take the strArr parameter being passed which will be an array of integers 
ranging from 1...n and the letter "E" and return the correct subset based 
on the following rules. The input will be in the following 
format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers 
and the E means take out the smallest integer currently in the whole set. 
When finished, your program should return that new set with integers 
separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] 
then your program should return 4,1,5. 

Input = "1","2","E","E","3"Output = "1,2"
Input = "4","E","1","E","2","E","3","E"Output = "4,1,2,3"
*/

var OffLineMinimum = function (arr) {
  var result = [];
  var seen = [];
  for(var i=0; i<arr.length; i++) {
    if (arr[i] !== "E") {
      seen.push(parseInt(arr[i],10));
    }
    if (arr[i] === "E") {
      var min = Math.min.apply(null,seen);
      //remove  min from seen
      var index = seen.indexOf(min);
      seen.splice(index,1);
      result.push(min);
    }
  }
  console.log(seen);
  return result;
};

console.log(OffLineMinimum(["10","3","5","8","E","6","7","E","E","15","E"]));