/*
Longest Absolute File Path

Suppose we abstract our file system by a string in the following manner:

"dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"

counter = 3;
currntTabCount = 1;
[[dir],[subdir1,subdir2],[file.ext]]



[dir,\tsubdir1,\tsubdir2,\t\tfile.ext]

//check if just letters
    //increase count by letter number
    //count tabs
    //if > current tabs increase tabCount to current
        //add to counter letters
    

dir
    subdir1
    subdir2
        file.ext
        
input: "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"

[[dir],[subdir1,subdir2],[file1,subsubdir1,subsubdir2],[file2.ext]]


Return the length of the longest path to a file in the filesystem
"dir/subdir2/subsubdir2/file2.ext"
=> 32


//3+7+9
//3+7+10
//3+7+10+9

var greatest = 19;

{
  0: 3,
  1: 11,
  2: 22,
  3: 0
}

dir
    subdir1
        file1.ext
        subsubdir1
    subdir23
        subsubdir2
            file2.ext
*/

//helper function take string and return row and letter count and if a file

var checkStringForLevel = function (text) {
  var count = 0;
  var index = 0;
  while (text.charAt(index++) === "\t") {
    count++;
  }
  return count;
};

var checkLetterCount = function (str,tabCount,isFile) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
  }
  return isFile === true ? count-tabCount-1 : count - tabCount;
};

var checkIfFile = function (str) {
  if (str.match(/\./)) {
    return true;
  }
  return false;
};

var sumCurrentNewPosition = function (rowObj, currentRow, newVal) {
  //return true if new value better
  if (Object.keys(rowObj).length > 0) {
    return rowObj[currentRow-1]+ parseInt(newVal,10);
  }
  return newVal;
};

var absFilePath = function (fileStr) {

    // split array by newline
    var strArr = fileStr.split("\n");
    //variable for greatest length so far
    var greatestLengthSoFar = 0;
    //variable for previous row
    var prevDepth = -1;
    //variable for rows and counts at that row
    var rows = {};

    //loop through array
    for (var i = 0; i < strArr.length; i++) {
      //get row and letter count
      var currentDepth =  checkStringForLevel(strArr[i]);
      var isFile = checkIfFile(strArr[i]);
      var letterCount = checkLetterCount(strArr[i],currentDepth,isFile);
      var newTotal = sumCurrentNewPosition(rows, currentDepth, letterCount);
      //get if file
      //if file then get the prev row counts plus current and then see if greater than current greates
      if (currentDepth === prevDepth) {
        //see if it needs updating in the row object(if letter count > current at that row) and replace
        if (newTotal > rows[currentDepth]) {
          rows[currentDepth] = newTotal;
        }
      } else if (currentDepth > prevDepth || currentDepth < prevDepth) {
        //if not already see before then sum new total and add key val pair
        //if already seen then update to the new value as we have gone down a new layer in different place so old value invalid
        rows[currentDepth] = newTotal;
      }

      if (isFile) {
        greatestLengthSoFar = greatestLengthSoFar < newTotal ? newTotal : greatestLengthSoFar;
      }

    }
    //retunr longest string count
    return greatestLengthSoFar;
};

absFilePath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext");
