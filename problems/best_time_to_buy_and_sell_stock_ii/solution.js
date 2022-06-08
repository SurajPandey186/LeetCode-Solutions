/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(n) {
    let profit = 0;
    
    for(let i = 1; i < n.length; i++) {
       if(n[i] > n[i-1]) {
          profit +=  n[i] - n[i-1];
       }    
    }
    
    return profit;
};