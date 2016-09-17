//loop through a binary tree and return boolean to indeicat if a binary tree



var isValid = function (tree) {

  if (tree.leftSide && tree.leftSide.value < tree.value) {
    isValid(tree.leftSide);
  } else if (tree.leftSide && tree.leftSide.value > tree.value) {
    return false;
  } else if (tree.rightSide && tree.rightSide.value > tree.value) {
    isValid(tree.rightSide);
  } else if (tree.rightSide && tree.rightSide.value < tree.value) {
    return false;
  }
  return true;
  
};
