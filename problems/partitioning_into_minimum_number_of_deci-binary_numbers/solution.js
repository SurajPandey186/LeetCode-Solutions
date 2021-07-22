/**
 * @param {string} n
 * @return {number}
 */

let minPartitions = function(n) {
    
    let max = n[0];
    
    for(let i = 1; i < n.length; ++i) {
        if(+n[i] > max) 
            max = +n[i];
    }
    
    return max;
};