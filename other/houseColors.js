/*
Built a row of n houses on a street
Each house can be painted either red, blue, or green
The cost of painting each house with those colors is different
Two adjacent houses may not have the same color

The cost of painting each house with a certain color is represented by a n x 3 cost matrix.

For example, costs[0][0] is the cost of painting house 0 with color red;
costs[1][2] is the cost of painting house 1 with color green, and so on...

Find the minimum cost to paint all the houses

[h1,h2,h3,.................] length n
[red, blue, green]

costs = [
  [3, 2, 4],   --> 2
  [10, 20, 30],   --> 2
  [1, 200, 40000],  ==> 2
  [5, 3, 3],  --> 3  --> 9
];
          [3,2,4]
          
          3   2   4
     3 3 
   [20,30]
   
   13,23,33
  [1,200,40000]
  
  //make three copies of the current num in array
  //sum to each option of the next array
  
  fn(costs, currentIndexCostsRow, currentSum)
  fn(costs, 0,0)
    [3,2,4]
    loop through
  //check that currentIndexCostsRow 

costs = [
  [1, 3, 4],
  [3, 2, 4],
];

costs length = 2
results = [3, 5, 6,7,7, 6];
currentRow = [1, 3, 4]
nextRow = 1

inner(1, 1+2= 3 )
  return sum 3
inner(1, 1+4=5)
  return sum 5
  

Time: O(2^n)
  
*/

var houseColorCost = function (costs) {
  
  var resultsMin = costs[0][0] + costs[0][1];
  
  var inner = function (currentIndexCostsRow, currentSum) {
    
    //check the currentIndexCostsRow index is equal to length of costs
    if (costs.length-1 === currentIndexCostsRow) {
      if (currentSum < resultsMin) resultsMin = currentSum;
      return;
    }
    
    var currentRow = costs[currentIndexCostsRow];
    var nextRow = currentIndexCostsRow+1;
    
    inner(nextRow, currentRow[0] + costs[currentIndexCostsRow + 1][1]);
    inner(nextRow, currentRow[0] + costs[currentIndexCostsRow + 1][2]);
    
    inner(nextRow, currentRow[1] + costs[currentIndexCostsRow + 1][0])
    inner(nextRow, currentRow[1] + costs[currentIndexCostsRow + 1][2])
    
    inner(nextRow, currentRow[2] + costs[currentIndexCostsRow + 1][0])
    inner(nextRow, currentRow[2] + costs[currentIndexCostsRow + 1][1])

  };
  
  inner(0,0);
  return resultsMin;
  
};
