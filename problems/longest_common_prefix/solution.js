/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let largestPrefix = strs[0];
    
    for(let i = 1; i < strs.length; i++) {
        let j = 0;
        let newPrefix = '';
        let currentString = strs[i];
        
        while( j < currentString.length) {
            if(currentString[j] == largestPrefix[j]) {
                newPrefix += currentString[j]; 
            }else {
                break;
            }
            j++;
        }
        
        largestPrefix = newPrefix;
        
        if(largestPrefix.length === 0) return '';
    };
    
    return largestPrefix;
};