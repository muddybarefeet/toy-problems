
//given array A and number D
//A is an array of numbers corresponding to how long it will take for the stone at that index to be uncovered
//D is the max number of hops that the (monkey) can take
//return the time at which the monkey can cross the river
// if does not need to used the stones then retun 0
// if the stones will not become uncovered and the monkey can never cross then return -1


//--------------- take two ---------

//given a river, time and step see if the river is passable
var checkCurrentRiver = function (arr,step, currentTime) {
    var currentPos = -1;
    for (var i = 0; i < arr.length; i++) {
        //loop through the river array if the current thing is less than the time AND the difference is less than or the same as the step then move current Index to here
        if (arr[i] <= currentTime && (i-currentPos) <= step) {
            currentPos = i;
        }
    }
    if (currentPos === arr.length-1) return true;
    return false;
};

var riverHop = function (rockArr, stepMax) {
    var currentTime = 0;
    if (stepMax >= rockArr.length) return 0;

    //better way might be to loop and find largest
    var maxTime = Math.max.apply(null,rockArr);

    for (var i = 0; i <= maxTime; i++) {
        //for each time we are going to see if it is possible to cross yet
        if (checkCurrentRiver(rockArr,stepMax, currentTime)) return currentTime;
        currentTime++;
    }
    return -1;
};

console.log(riverHop([2, 1, 66, 25, 40, 6], 2));
console.log(riverHop([-1,-1,-1,-1], 2));
console.log(riverHop([1,1,1,1,1,1,1,2], 1));


//---------------------------------------------

var solution = function (A, D) {
    //if monkey can cross the river in one leap return 0
    if (D >= A.length+1) return 0;
    
    var currentIndexReached = -1;
    var currentTime = 0;
    var maxTime = Math.max.apply(null, A);
    
    while (currentIndexReached < A.length && (currentIndexReached + D) < A.length && currentTime <= maxTime) {
        var updatedPosition = false;
        for(var i=0; i<A.length; i++) {
            if (A[i] === currentTime) {
                //see if the monkey can reach this stone within D hops
                var difference = i - currentIndexReached;
                if (difference > 0 && difference <= D) {
                    currentIndexReached = i;
                    updatedPosition = true;
                }
            } else if (updatedPosition === true && A[i] < currentTime) {
                //make sure nothing later in the array is less than the current time and so now needs to be concidered
                currentIndexReached = i;
            }
        }
        currentTime++;
    }

    if ( (currentIndexReached + D) >= A.length ) {
    //return earliest time monkey can cross (minus 1 as incremented time at end of each loop)
        return currentTime-1;
    } else {
        return -1;
    }

};

// console.log(solution([22, 1, 66, 25, 343, 6], 2));

