  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

  (function () {

    var colors = ["#93a6ed","#2cb8ff","#ffdada","#0e6182","#fa9a1c","#1bc1a4","#2b9f84","#dfa63b","#ffab66","#ffdd73"];

    $('p').html(function (i, html) {
        return html.replace(/(\w+|\W+)/g, '<span>$1</span>');
    });

    var timer = setInterval(function () {
      
      $('span').each(function(element,b,c){
        var random = Math.floor(Math.random()*10);
        this.style.color = colors[random];
      });

    },1000);

    // $('div#expander').css({"width": "100px","height": "100px","background-color": "turquoise"});

    // $('div#expander').animate({
    //   "width":"200px","height":"200px"
    // },3000);
    


  })();