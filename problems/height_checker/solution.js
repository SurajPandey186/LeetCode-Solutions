/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let diff = 0;
    const _arr = Array.from(heights);
    _arr.sort((a, b) => a - b);
    
    for(let i = 0; i < heights.length; i++) {
        if(heights[i] != _arr[i]) {
            diff++;
        }
    }
    
    return diff;
};