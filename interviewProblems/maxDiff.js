//----- second attempt
var greatestDiff = function (arr) {
    var currLow = arr[0];
    var biggestDiff = -1;
    for (var i = 1; i < arr.length; i++) {
        //if current less than low then reset
        if (arr[i]<currLow) {
            currLow = arr[i];
        } else if (arr[i] - currLow  > biggestDiff) {
            biggestDiff = arr[i] - currLow;
        }
    }
    return biggestDiff;
};

console.log(greatestDiff([5,3,12,50,1]));
