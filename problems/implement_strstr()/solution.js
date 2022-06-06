/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if(needle.length === 0) return 0;
    
    if(needle.length > haystack.length) return -1;
    
    let i = 0;
    let index = 0;
    
    while(i < haystack.length) {
       
        if(needle[0] == haystack[i]) {
            let j = 0; 
            index = i;
    
            let stringMatch = true;
            
            while(j < needle.length) {
                if(needle[j] != haystack[i + j]) {
                    stringMatch = false;
                }
                j++;
            }
            
            if(stringMatch) {
                return index;
            }
              
        }
        
        i++;
    }
    
    return -1;
};