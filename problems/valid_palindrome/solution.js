/**
 * @param {string} s
 * @return {boolean}
 */

var isNumber = (c) => {
    let code = c.toLowerCase().charCodeAt();
    return code >= 48 && code <= 57;
};

var isCharacter = (c) => {
    let code = c.toLowerCase().charCodeAt();
    return code >= 97 && code <= 122;
}

var isPalindrome = function(s) {
    let tempStr = '';
    let tempStrRev = '';
    
    for(let i = 0; i < s.length; ++i) {
        if(isNumber(s[i]) || isCharacter(s[i])) {
            tempStr += s[i].toLowerCase();
        }
    }
    
    for(let i = tempStr.length - 1; i >= 0; --i) {
        tempStrRev += tempStr[i];
    }
 
    return tempStrRev === tempStr;
    
};