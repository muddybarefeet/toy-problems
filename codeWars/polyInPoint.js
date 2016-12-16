function pointInPoly(poly,point) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    var x = point[0];
    var y = point[1];
    var isInside = false;

    var j = poly.length - 1;

    for (var i = 0; i < poly.length; j = i++) {
      console.log('i, j', i,j);

      //point ahead x and y
      var xi = poly[i][0];
      var yi = poly[i][1];

      //point behind x and y
      var xj = poly[j][0];
      var yj = poly[j][1];

      // (point ahead y GREATER THAN then the point y) NOT EQUAL to (behind y GREATER THAN point y) AND (point x LESS THAN 
            //(point behind x MINUS point ahead x) 
            //TIMES (point y - ahead y) 
            //DIVIDED BY (point behind y MINUS point ahead y) 
            //PLUS point ahead x)
      var intersect = ((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      //toggle the inside value is intersect is true
      if (intersect) isInside = !isInside;
    }

    return isInside;
}


var poly = [ [ -5, -5 ], [ 5, -5 ], [ 0, 5 ] ];
console.log(pointInPoly(poly, [ 0, -4 ]));
