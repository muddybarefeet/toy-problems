/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {

  var previousClickedCol;
  var data;

  data = $('tbody>tr');

  //sort the table
  $('th').on('click', function (element) {
    
    var headerIndex = $('th').index(this);
    var rows = $('tbody').children();

    if (previousClickedCol === headerIndex) {
      previousClickedCol = undefined;

      rows.sort(function (a, b) {

        var first = a.children[headerIndex].innerHTML;
        var second = b.children[headerIndex].innerHTML;

        if (parseInt(first,10) && first.match("-")) {
          return Date.parse(second) - Date.parse(first);
        } else if (parseFloat(first) && !(first.match("-"))) {
          return parseFloat(second) - parseFloat(first);
        } else {
          if (first === second) return 0;
          if (first < second) return 1;
          if (first > second) return -1;
        }

      });

    } else if (previousClickedCol === undefined || previousClickedCol !== headerIndex) {

      previousClickedCol = headerIndex;
      
      rows.sort(function (a, b) {

        var first = a.children[headerIndex].innerHTML;
        var second = b.children[headerIndex].innerHTML;

        if (parseInt(first,10) && first.match("-")) {
          return Date.parse(first) - Date.parse(second);
        } else if (parseFloat(first) && !(first.match("-"))) {
          return parseFloat(first) - parseFloat(second);
        } else {
          if (first === second) return 0;
          if (first > second) return 1;
          if (first < second) return -1;
        }

      });

    }
    $('tbody').html(rows);
  });

  //filter the table
  $(".filter-text").on('keyup', function (e) {
    //filter the table by the input text
    var rows = $('tbody').children().filter(function (index, row) {
      var rowMatch = false;
      for (var i = 0; i < row.children.length; i++) {
        if (JSON.stringify(row.children[i].innerHTML).toLowerCase().match(e.target.value)) {
          rowMatch = true;
        }
      }
      if (rowMatch) return row;
    });
    $('tbody').html(rows);
  });

  $('html').keyup(function(e){
    if(e.keyCode == 8) {
      $('tbody').html(data);
    }
  });


});



