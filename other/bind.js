// var Button = function(content) { 
//   this.content = content;
// };
// Button.prototype.click = function() {
//   console.log(this.content + ' clicked');
// }

// var myButton = new Button('OK');
// myButton.click();

// var looseClick = myButton.click;
// looseClick(); // not bound, 'this' is not myButton - it is the global object

// var boundClick = myButton.click.bind(myButton);
// boundClick(); // bound, 'this' is myButton

Function.prototype.bind = function (context) {
  //set this value
  var that = this;
  //return function to access arguments
  return function () {
    //get any arguments to the context and appy to the function that called bind
    return that.apply(that,arguments);
  };
};