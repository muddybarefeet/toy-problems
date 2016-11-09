//Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

//Write a function condenseMeetingTimes() that takes an array of meeting time ranges and returns an array of condensed ranges.

// edge cases:
    // if times are next to each other treak as separate
    // not necessarily in order

var mergeMeetings = function (arr) {

    if (arr.length < 2) return arr;
    
    //sort the arr of tuples by the 0th item
    var sortedInput = arr.sort(function (a,b) {
        return a.startIndex - b.endTime;
    });
       
    var result = [sortedInput[0]];
    
    //loop through the array from index 1
    for(var i=1; i<sortedInput.length; i++) {
        //if the current start is less than prev end OR current end is less than max end  
        if (sortedInput[i].startTime < result[result.length-1].endTime)         {
            if (sortedInput[i].endTime > result[result.length-1].endTime) {
                result[result.length-1].endTime = sortedInput[i].endTime;
            }         
        } else {
            result.push(sortedInput[i]);
        }
    }
    
    return result;
};

console.log(mergeMeetings([
    {startTime: 0,  endTime: 1},
    {startTime: 1,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]));