/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
        let j = null;
    const _stack = [];
    let _innerData = '';
    let _responseData = '';

    for (let i = 0; i < s.length; i++) {
        
        if (s[i] == '(' || s[i] == ')') {
            _innerData += s[i]; 
            j = _stack.push(s[i]);
        
           while(j >= 0) {
            if(_stack[j] == '(' && _stack[j + 1] == ')') {   
                _stack.pop();
                _stack.pop(); 
            }
            j--;
           }
        
           if (_stack.length === 0) {
               if (_innerData.length == 2) {
                   _responseData += "";
               }else {
                   let strMap = [..._innerData];
                   strMap.pop();
                   strMap.shift();
                   str = strMap.join('');
                   _responseData += str;
               }
               _innerData = '';
           }
        }
    }
   
    return _responseData;
};