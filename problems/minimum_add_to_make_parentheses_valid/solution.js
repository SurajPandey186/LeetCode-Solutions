/**
 * @param {string} s
 * @return {number}
 */

const minAddToMakeValid = function(s) {
    const _stack = [];

    for (let i = 0; i < s.length; i++) {
        let j = _stack.push(s[i]) - 1;
        while(j >= 0) {
            if (_stack[j] === ')' && _stack[j-1] === '(') {
                _stack.pop();
                _stack.pop();
            }
            j--;
        } 
    }

    return _stack.length;
};