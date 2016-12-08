//www.codewars.com?a=1&b=2&a=1&b=3 --> www.codewars.com?a=1&b=2
//stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
//remove duplicate perams or the given second arg.

function stripUrlParams(url, paramsToStrip){

  var arr = url.split("?");


  if (arr[1]) {
    var params = arr[1].split("&");

    if (paramsToStrip) {

      var paramsToStripObj = {};
      paramsToStrip.forEach(function (item) {
        paramsToStripObj[item] = true;
      });

      var filteredParamsOnce = params.filter(function (item) {
        if (!paramsToStripObj[item[0]]) {
          return item;
        }
      });

      params = filteredParamsOnce;
    }

    //now loop through and remove the duplicates
    var seen = {};
    var remDups = params.filter(function (item,i) {
      if (!seen[item[0]]) {
        seen[item[0]] = true;
        return item;
      }
    }).join("&");
    return arr[0] + "?" + remDups;
  }
  return url;
}

console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']));