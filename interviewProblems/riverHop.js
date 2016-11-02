
//given array A and number D
//A is an array of numbers corresponding to how long it will take for the stone at that index to be uncovered
//D is the max number of hops that the (monkey) can take
//return the time at which the monkey can cross the river
// if does not need to used the stones then retun 0
// if the stones will not become uncovered and the monkey can never cross then return -1

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

console.log(solution([22, 1, 66, 25, 343, 6], 2));


