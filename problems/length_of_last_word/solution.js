/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let _temp = '';
    if(s.length === 0)
         return 0;
    
    for (let i = s.length - 1; i >= 0; --i) {
    if (s[i] != " ") _temp += s[i];
    else if (_temp.length) break;
    }
    
    return _temp.length;
    
};