/**
 * @param {string} s
 * @return {string}
 */


const compareValues = (index1, index2, str) => {
   return str[index1].toLowerCase() == str[index2].toLowerCase();
}


const makeGood = function(s) {
   let _stack = [];
   let last, secondlast;
   
   for(let i = 0; i < s.length; ++i) {
       _stack.push(s[i]);
       
       last = _stack.length - 1;
       secondlast = _stack.length - 2;
       
       if(_stack.length > 1 && !(_stack[last] == _stack[secondlast]) && compareValues(last, secondlast, _stack)) {
       _stack.pop();
       _stack.pop();
       }
   }
   
   return _stack.join('');
};