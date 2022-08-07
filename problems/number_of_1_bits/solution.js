/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let op = 0;
    const binaryNo = Number(n).toString(2);
    
    for(let i = 0; i < binaryNo.length; i++) {
        if(binaryNo[i] === '1') {
            op++;
        }
    };
    
    return op;
};