
function solvePuzzle(num) {
    
    var numsWithHoles = {
        0:1,
        4:1,
        6:1,
        8:2,
        9:1
    };
    
    var arrayNums = num.toString().split('');

    return arrayNums.map(function (num) {
        if (numsWithHoles[num]) {
            return numsWithHoles[num];
        }
        return 0;
    })
    .reduce(function (prev, curr) {
        return prev+curr;
    },0);

}

console.log(solvePuzzle(00000));