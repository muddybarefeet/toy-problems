// Input: an array of integers. Every integer in the array has one duplicate of itself, except one integer.
// Find the one solo integer efficiently.

// [5, 3, 7, 4, 3, 7, 5]
// => 4

/*
  {
    5:2,
    3:2,
    4:1,
    7:2
  }
  
  3,3,4,5,5,7,7

  1 & 1 = 1
  0 | 1 = 1
  0 ^ 1 = 1
  
  5 ^ 0 = 5
  0101 ^ 0000 = 0101
  0101 ^ 0101 = 0
  
  
  [5, 3, 7, 4, 3, 7, 5]
  x: 0
  0 ^ 0101 = 0101
  0101 ^ 0011 = 0110
  0110 ^ 0111 = 0001
  0001 ^ 0100 = 0101
  0101 ^ 0011 = 0110
  0110 ^ 0111 = 0001
  0001 ^ 0101 = 0100
  
Time: linear
Space: linear

Time: n log n
Space: constant

Time: linear
Space: constant


Toolbox:
- Sorting the array
- Hash for counting frequency
*/


