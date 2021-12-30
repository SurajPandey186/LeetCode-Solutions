/**
 * @param {number} n
 * @return {boolean}
 */


var isPowerOfTwo = function(n) {
    if (n===0) return false;
    
    let log = Math.log2(n);
    return Number.isInteger(log);
};