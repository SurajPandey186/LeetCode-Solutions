/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */


var myPow = function(x, n) {
    if (n === 1) return x;
    if (n === 0) return 1;
    if (n === -1) return 1 / x;
    
    const _mid = Math.floor(n / 2);
    
    if (n % 2 === 0) {
     let temp  = myPow(x, _mid);
     return temp * temp;   
    }else {
     let temp  = myPow(x, _mid);
     return temp * temp * x;      
    }   
};