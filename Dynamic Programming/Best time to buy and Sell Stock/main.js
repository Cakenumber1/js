/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min_price = Infinity
    var inc = 0
    for (var i =0; i <prices.length;i++){
    if(prices[i]<min_price)
        min_price = prices[i]
    else if (prices[i] - min_price > inc)
        inc = prices[i] - min_price
    }
    return inc
};