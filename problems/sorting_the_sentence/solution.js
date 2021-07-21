/**
 * @param {string} s
 * @return {string}
 */
let sortSentence = function(s) {
    let _tempStr = '';
    let _tempArr = []; 
    
    for(let i = 0; i < s.length; ++i) {
      

        if(s[i] !== ' ' && !Number.isInteger(+s[i])) {
             _tempStr+= s[i];
        }
       
        if(Number.isInteger(+s[i])) {
            _tempArr[+s[i]] = _tempStr;
            _tempStr = '';
        }
    }

    return _tempArr.join(' ').trim(); 
};