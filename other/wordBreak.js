// take a string and see if it can be split into separate words

var dic = {
  "apple":1,
  "pie":1,
  "fondu":1,
  "melon":1,
  "javascript":1,
  "dolphin":1
};

var wordBreak = function (str) {
  if (dic[str]) return str;
  var currentWord = "";
  output = [];
  //loop through the string and on each letter check the dic for the letters up to the current letter
  //if found then start check string at current index and add from there
  for (var i = 0; i < str.length; i++) {
    currentWord += str[i];
    if (dic[currentWord]) {
      output.push(currentWord);
      currentWord = "";
    }
  }
  return output.join(" ");
};

// console.log(wordBreak("applepiefondumelonjavascriptdolphin"));

//--------- change in place

var wordBreak2 = function (str) {
  if (dic[str]) return str;
  if (str.length === 0) return null;
  //loop through the string and on each letter check the dic for the letters up to the current letter
  //if found then start check string at current index and add from there
  for (var i = 0; i < str.length; i++) {
    //if up to the current point the word mactches then save and recurse
    var prefix = str.substring(0,i);
    if (dic[prefix]) {
      //recurse
      return prefix + " " + wordBreak2(str.substring(i,str.length));
    }
  }
  return null;

};

//console.log(wordBreak2("applepiefondumelonjavascriptdolphin"));

//----------memoise

var finalAnswer = function(){

  var dic = {
    "apple":1,
    "pie":1,
    "fondu":1,
    "melon":1,
    "javascript":1,
    "dolphin":1
  };

  var memoised = {};

  return function wordBreak (str) {
    if (dic[str]) return str;
    //check if been cached already and return if has
    if (memoised[str]) return memoised[str];

    if (str.length === 0) return null;
    //loop through the string and on each letter check the dic for the letters up to the current letter
    //if found then start check string at current index and add from there
    for (var i = 0; i < str.length; i++) {
      //if up to the current point the word mactches then save and recurse
      var prefix = str.substring(0,i);
      if (dic[prefix]) {
        //recurse
        memoised[str] = prefix + " " + wordBreak(str.substring(i,str.length));
        return memoised[str];
      }
    }

    memoised[str] = null;
    return null;

  };

}();

console.log(finalAnswer('applepiefondumelonjavascriptdolphin'));






