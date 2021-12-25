/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let _stack = [s[0]];

    for (let i = 1 ; i < s.length; ++i) {
      let j = _stack.push(s[i]) - 1;
      while(_stack[j] == _stack[j-1] && _stack.length > 0) {
          _stack.pop();
          _stack.pop();
          j--;
      }
    }
    
    return _stack.join('');
};