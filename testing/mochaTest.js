// Make the following work WITHOUT using external libraries or frameworks
// Add whatever code you need in here to make the assertions below work.
// ::::::::::::::::::: Your code within this section :::::::::::::::::::

var it = function (string, callback) {
  var answer;
  try {
    answer = callback();
  } catch (err) {
    console.log("It: ",string, ":: FAIL");
  }

  if (answer || answer === undefined) {
    console.log("It: ",string, ":: PASS");
  } else if (!answer) {
    console.log("It: ",string, ":: FAIL");
  }
};

var describe = function (string,callback) {
  //runs all of the functions inside the callback
  console.log("DESCRIBE: ",string);
  callback();
};


// ::::::::::::::::::: :::::::::::::::::::::::::::: :::::::::::::::::::

describe('It lets you describe stuff', function(){

  it('makes an assertion that passes', function(){

    return 5 + 5 === 10;

  });

  it('makes another assertion that passes', function(){

    return 5 + 10 === 15;

  });

  it('makes an assertion that fails', function(){
    throw new Error("It didn't like it!");
  });

  // it('this is an empty function that returns undefined but it still makes an assertion that passes', function(){

  //   'Some text. Nothing to see here';

  // });

});

/*
The task is completed when running this code correctly console.logs:

'makes an assertion that passes' :: PASS
'makes another assertion that passes' :: PASS
'makes an assertion that fails' :: FAIL :: It didn't like that
'but still makes an assertion that passes' :: PASS

*/
