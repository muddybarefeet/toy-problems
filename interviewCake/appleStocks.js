//Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// questions:

//    assuming no negative prices
//    all prices are from yesterday
//    can there be stocks that are free? yes

var getMaxProfit = function (arr) {
    
    var currentLow = arr[0];
    var maxProfit = 0;
    
    for (var i=1; i<arr.length; i++) {
        if (arr[i] && arr[i] < currentLow) {
            currentLow = arr[i];
        } else if (arr[i] && (arr[i]- currentLow)>maxProfit) {
            maxProfit = arr[i]- currentLow;
        }
    }
    return maxProfit;
};



var stockPricesYesterday = [10, 7, 5, 8, 11,9, 0,2];

getMaxProfit(stockPricesYesterday);