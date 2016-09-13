/*Using the JavaScript language, have the function MeanMode(arr) take the array 
of numbers stored in arr and return 1 if the mode equals the mean, 
0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 
because the mode (3) equals the mean (3)). The array will not be empty, 
will only contain positive integers, and will not contain more than one mode. 
*/

var meanMode = function (arr) {
  //return 1 if mean === mode else return -1
  var mode = {};

  var mean = (arr.reduce(function (prev,curr) {
    if (mode[curr]) {
      mode[curr]++;
    } else {
      mode[curr] = 1;
    }
    return prev + curr;
  },0))/arr.length;

  console.log(mode);
  

};

meanMode([1,2,3,1]);