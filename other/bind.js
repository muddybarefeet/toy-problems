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

//implement bind

Function.prototype.binding = function (thisContext) {
  var self = this;
  var context = thisContext;
  var args = Array.prototype.slice.call(arguments,1);
  return function () {
    return self.apply(context,args);
  };
};